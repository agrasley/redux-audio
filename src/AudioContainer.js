'use strict'

import { connect } from 'react-redux'
import Audio from './Audio'
import { audioEnded, audioRegister, audioPaused, audioPlaying, audioUnregister } from './actions'

const mapStateToProps = (state, ownProps) => {
  const stateObj = state.audio.get(ownProps.uniqueId)
  return {
    command: stateObj ? stateObj.get('command') : 'none'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onEnded: () => {
      dispatch(audioEnded(ownProps.uniqueId))
    },
    onMount: () => {
      dispatch(audioRegister(ownProps.uniqueId))
    },
    onPause: () => {
      dispatch(audioPaused(ownProps.uniqueId))
    },
    onPlaying: () => {
      dispatch(audioPlaying(ownProps.uniqueId))
    },
    onUnmount: () => {
      dispatch(audioUnregister(ownProps.uniqueId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Audio)
