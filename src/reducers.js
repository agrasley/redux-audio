'use strict'

import { Map } from 'immutable'
import { AUDIO_ENDED, AUDIO_PLAYING, AUDIO_PAUSED,
         AUDIO_REGISTER, AUDIO_UNREGISTER, AUDIO_SRC,
         AUDIO_COMMAND, AUDIO_COMMAND_COMPLETE} from './actions/TYPES'

const getNewMap = () => {
  return Map({command: 'none', state: 'none', src: ''})
}

const singleReducer = (state, action) => {
  switch (action.type) {
    case AUDIO_COMMAND:
      return state.set('command', {
        command: action.command,
        args: action.args
      })
    case AUDIO_COMMAND_COMPLETE:
      return state.set('command', 'none')
    case AUDIO_PLAYING:
      return state.set('state', 'playing')
    case AUDIO_PAUSED:
      return state.set('state', 'paused')
    case AUDIO_ENDED:
      return state.set('state', 'ended')
    case AUDIO_SRC:
      return state.set('src', action.src)
    default:
      return state
  }
}

export default (state = Map(), action) => {
  switch (action.type) {
    case AUDIO_REGISTER:
      return state.set(action.id, getNewMap())
    case AUDIO_UNREGISTER:
      return state.delete(action.id)
    case AUDIO_PLAYING:
    case AUDIO_PAUSED:
    case AUDIO_ENDED:
    case AUDIO_SRC:
    case AUDIO_COMMAND:
    case AUDIO_COMMAND_COMPLETE:
      return state.set(action.id, singleReducer(state.get(action.id), action))
    default:
      return state
  }
}
