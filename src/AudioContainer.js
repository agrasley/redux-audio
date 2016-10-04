'use strict'

import { connect } from 'react-redux'
import Audio from './Audio'
import { audioEnded, audioRegister, audioPaused, audioPlaying, audioUnregister } from './actions'

const mapStateToProps = (state, ownProps) => {
  const stateObj = state.audio.get(ownProps.uniqueId)
  if (ownProps.src && stateObj && !stateObj.get('src')) {
    return {
      command: stateObj ? stateObj.get('command') : 'none'
    }
  } else {
    return {
      command: stateObj ? stateObj.get('command') : 'none',
      src: stateObj ? stateObj.get('src') : ''
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onEndedHandler: () => {
      dispatch(audioEnded(ownProps.uniqueId))
    },
    onMountHandler: () => {
      dispatch(audioRegister(ownProps.uniqueId))
    },
    onPauseHandler: () => {
      dispatch(audioPaused(ownProps.uniqueId))
    },
    onPlayingHandler: () => {
      dispatch(audioPlaying(ownProps.uniqueId))
    },
    onUnmountHandler: () => {
      dispatch(audioUnregister(ownProps.uniquId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Audio)
