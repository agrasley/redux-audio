'use strict'

import { Map } from 'immutable'
import { AUDIO_ENDED, AUDIO_PLAY, AUDIO_PAUSE, AUDIO_PLAYING, AUDIO_PAUSED,
         AUDIO_REGISTER, AUDIO_UNREGISTER, AUDIO_SRC } from './actions/TYPES'

const getNewMap = () => {
  return Map({command: 'none', state: 'none', src: ''})
}

const singleReducer = (state, action) => {
  switch (action.type) {
    case AUDIO_PLAY:
      return state.set('command', 'play')
    case AUDIO_PLAYING:
      return state.set('state', 'playing')
    case AUDIO_PAUSE:
      return state.set('command', 'pause')
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
    case AUDIO_PLAY:
    case AUDIO_PLAYING:
    case AUDIO_PAUSE:
    case AUDIO_PAUSED:
    case AUDIO_ENDED:
    case AUDIO_SRC:
      return state.set(action.id, singleReducer(state.get(action.id), action))
    default:
      return state
  }
}
