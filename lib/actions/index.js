'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.audioCommand = exports.audioSrc = exports.audioUnregister = exports.audioRegister = exports.audioEnded = exports.audioPaused = exports.audioPause = exports.audioPlaying = exports.audioPlay = undefined;

var _TYPES = require('./TYPES');

var audioPlay = exports.audioPlay = function audioPlay(id) {
  return { type: _TYPES.AUDIO_PLAY, id: id };
};

var audioPlaying = exports.audioPlaying = function audioPlaying(id) {
  return { type: _TYPES.AUDIO_PLAYING, id: id };
};

var audioPause = exports.audioPause = function audioPause(id) {
  return { type: _TYPES.AUDIO_PAUSE, id: id };
};

var audioPaused = exports.audioPaused = function audioPaused(id) {
  return { type: _TYPES.AUDIO_PAUSED, id: id };
};

var audioEnded = exports.audioEnded = function audioEnded(id) {
  return { type: _TYPES.AUDIO_ENDED, id: id };
};

var audioRegister = exports.audioRegister = function audioRegister(id) {
  return { type: _TYPES.AUDIO_REGISTER, id: id };
};

var audioUnregister = exports.audioUnregister = function audioUnregister(id) {
  return { type: _TYPES.AUDIO_UNREGISTER, id: id };
};

var audioSrc = exports.audioSrc = function audioSrc(id, src) {
  return { type: _TYPES.AUDIO_SRC, id: id, src: src };
};

var audioCommand = exports.audioCommand = function audioCommand(id) {
  return { type: _TYPES.AUDIO_COMMAND, id: id };
};