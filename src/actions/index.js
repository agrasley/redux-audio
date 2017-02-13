'use strict'

import { AUDIO_PLAY, AUDIO_PLAYING, AUDIO_PAUSE, AUDIO_PAUSED, AUDIO_ENDED,
         AUDIO_REGISTER, AUDIO_UNREGISTER, AUDIO_SRC, AUDIO_COMMAND } from './TYPES'

export const audioPlay = (id) => {
  return {type: AUDIO_PLAY, id}
}

export const audioPlaying = (id) => {
  return {type: AUDIO_PLAYING, id}
}

export const audioPause = (id) => {
  return {type: AUDIO_PAUSE, id}
}

export const audioPaused = (id) => {
  return {type: AUDIO_PAUSED, id}
}

export const audioEnded = (id) => {
  return {type: AUDIO_ENDED, id}
}

export const audioRegister = (id) => {
  return {type: AUDIO_REGISTER, id}
}

export const audioUnregister = (id) => {
  return {type: AUDIO_UNREGISTER, id}
}

export const audioSrc = (id, src) => {
  return {type: AUDIO_SRC, id, src}
}

export const audioCommand = (id) => {
  return {type: AUDIO_COMMAND, id}
}
