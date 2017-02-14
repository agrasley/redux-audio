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

  skip (time) {
    const el = ReactDOM.findDOMNode(this)
    el.currentTime = el.currentTime + time
  },

  seek (time) {
    ReactDOM.findDOMNode(this).currentTime = time
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
    const command = this.props.command

    if (command !== 'none' && command !== prevProps.command) {
      this[command.command](...command.args || [])
      this.props.onCommandComplete(command.command)
    }
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
    command: PropTypes.oneOfType([
      PropTypes.oneOf(['none']),
      PropTypes.shape({
        command: PropTypes.oneOf(['play', 'pause', 'skip', 'seek']).isRequired,
        args: PropTypes.array
      })
    ]).isRequired,
    controls: PropTypes.bool,
    loop: PropTypes.bool,
    onEnded: PropTypes.func.isRequired,
    onMount: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired,
    onPlaying: PropTypes.func.isRequired,
    onUnmount: PropTypes.func.isRequired,
    onCommandComplete: PropTypes.func.isRequired,
    preload: PropTypes.oneOf(['none', 'metadata', 'auto']),
    src: PropTypes.string.isRequired,
    uniqueId: PropTypes.string.isRequired
  }
})

export default Audio
