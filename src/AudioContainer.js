'use strict'

import { connect } from 'react-redux'
import Audio from './Audio'
import { audioEnded, audioRegister, audioPaused, audioPlaying, audioUnregister } from './actions'

const mapStateToProps = (state, ownProps) => {
  const stateObj = state.audio.get(ownProps.id)
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
    onEnded: () => {
      dispatch(audioEnded(ownProps.id))
    },
    onMount: () => {
      dispatch(audioRegister(ownProps.id))
    },
    onPause: () => {
      dispatch(audioPaused(ownProps.id))
    },
    onPlaying: () => {
      dispatch(audioPlaying(ownProps.id))
    },
    onUnmount: () => {
      dispatch(audioUnregister(ownProps.id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Audio)
