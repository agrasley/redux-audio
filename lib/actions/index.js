'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.audioSkip = exports.audioSeek = exports.audioCommand = exports.audioCommandComplete = exports.audioSrc = exports.audioUnregister = exports.audioRegister = exports.audioEnded = exports.audioPaused = exports.audioPause = exports.audioPlaying = exports.audioPlay = undefined;

var _TYPES = require('./TYPES');

var audioPlay = exports.audioPlay = function audioPlay(id) {
  return audioCommand(id, 'play');
};

var audioPlaying = exports.audioPlaying = function audioPlaying(id) {
  return { type: _TYPES.AUDIO_PLAYING, id: id };
};

var audioPause = exports.audioPause = function audioPause(id) {
  return audioCommand(id, 'pause');
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

var audioCommandComplete = exports.audioCommandComplete = function audioCommandComplete(id) {
  return { type: _TYPES.AUDIO_COMMAND_COMPLETE, id: id };
};

var audioCommand = exports.audioCommand = function audioCommand(id, command) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return {
    type: _TYPES.AUDIO_COMMAND,
    id: id,
    command: command,
    args: args
  };
};

var audioSeek = exports.audioSeek = function audioSeek(id, to) {
  return audioCommand(id, 'seek', to);
};
var audioSkip = exports.audioSkip = function audioSkip(id, by) {
  return audioCommand(id, 'skip', by);
};