'use strict'

import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'

const Audio = React.createClass({
  play () {
    ReactDOM.findDOMNode(this).play()
  },

  pause () {
    ReactDOM.findDOMNode(this).pause()
  },

  getDefaultProps () {
    return {
      autoPlay: false,
      controls: false,
      loop: false,
      preload: 'metadata'
    }
  },

  componentWillMount () {
    this.props.onMount()
  },

  componentDidMount () {
    const audio = ReactDOM.findDOMNode(this)
    const { onEnded, onPause, onPlaying } = this.props
    audio.addEventListener('ended', onEnded)
    audio.addEventListener('pause', onPause)
    audio.addEventListener('playing', onPlaying)
  },

  componentWillUnmount () {
    const audio = ReactDOM.findDOMNode(this)
    const { onEnded, onPause, onPlaying, onUnmount } = this.props
    audio.removeEventListener('ended', onEnded)
    audio.removeEventListener('pause', onPause)
    audio.removeEventListener('playing', onPlaying)
    onUnmount()
  },

  componentDidUpdate (prevProps) {
    if (this.props.command !== 'none' && this.props.command !== prevProps.command) this[this.props.command]()
  },

  render () {
    const { autoPlay, controls, loop, preload, src } = this.props

    return (
      <audio
        autoPlay={autoPlay}
        controls={controls}
        loop={loop}
        preload={preload}
        src={src}
      />
    )
  },

  propTypes: {
    autoPlay: PropTypes.bool,
    command: PropTypes.oneOf(['play', 'pause', 'none']).isRequired,
    controls: PropTypes.bool,
    loop: PropTypes.bool,
    onEnded: PropTypes.func.isRequired,
    onMount: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired,
    onPlaying: PropTypes.func.isRequired,
    onUnmount: PropTypes.func.isRequired,
    preload: PropTypes.oneOf(['none', 'metadata', 'auto']),
    src: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }
})

export default Audio
