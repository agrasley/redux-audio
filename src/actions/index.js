'use strict'

import { AUDIO_PLAYING, AUDIO_PAUSED, AUDIO_ENDED,
         AUDIO_REGISTER, AUDIO_UNREGISTER, AUDIO_SRC, AUDIO_COMMAND,
         AUDIO_COMMAND_COMPLETE } from './TYPES'

export const audioPlay = (id) => {
  return audioCommand(id, 'play')
}

export const audioPlaying = (id) => {
  return {type: AUDIO_PLAYING, id}
}

export const audioPause = (id) => {
  return audioCommand(id, 'pause')
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

export const audioCommandComplete = (id) => {
  return {type: AUDIO_COMMAND_COMPLETE, id}
}

export const audioCommand = (id, command, ...args) => {
  return {
    type: AUDIO_COMMAND,
    id,
    command,
    args
  }
}

export const audioSeek = (id, to) => audioCommand(id, 'seek', to)
export const audioSkip = (id, by) => audioCommand(id, 'skip', by)
