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
    this.props.onMountHandler()
  },

  componentDidMount () {
    const audio = ReactDOM.findDOMNode(this)
    const { onEndedHandler, onPauseHandler, onPlayingHandler } = this.props
    audio.addEventListener('ended', onEndedHandler)
    audio.addEventListener('pause', onPauseHandler)
    audio.addEventListener('playing', onPlayingHandler)
  },

  componentWillUnmount () {
    const audio = ReactDOM.findDOMNode(this)
    const { onEndedHandler, onPauseHandler, onPlayingHandler, onUnmountHandler } = this.props
    audio.removeEventListener('ended', onEndedHandler)
    audio.removeEventListener('pause', onPauseHandler)
    audio.removeEventListener('playing', onPlayingHandler)
    onUnmountHandler()
  },

  componentDidUpdate (prevProps) {
    if (this.props.command !== 'none' && this.props.command !== prevProps.command) this[this.props.command]()
  },

  render () {
      const { autoPlay, controls, loop, preload, src, onEnded, onPause, onPlaying } = this.props

    return (
      <audio
        autoPlay={autoPlay}
        controls={controls}
        loop={loop}
        preload={preload}
        src={src}
        onEnded={onEnded}
        onPause={onPause}
        onPlaying={onPlaying}
      />
    )
  },

  propTypes: {
    autoPlay: PropTypes.bool,
    command: PropTypes.oneOf(['play', 'pause', 'none']).isRequired,
    controls: PropTypes.bool,
    loop: PropTypes.bool,
    onEndedHandler: PropTypes.func.isRequired,
    onMountHandler: PropTypes.func.isRequired,
    onPauseHandler: PropTypes.func.isRequired,
    onPlayingHandler: PropTypes.func.isRequired,
    onUnmountHandler: PropTypes.func.isRequired,
    preload: PropTypes.oneOf(['none', 'metadata', 'auto']),
    src: PropTypes.string.isRequired,
    uniqueId: PropTypes.string.isRequired
  }
})

export default Audio
