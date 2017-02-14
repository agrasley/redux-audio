'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var PREFIX = '@@redux-audio/';

var AUDIO_PLAYING = exports.AUDIO_PLAYING = PREFIX + 'PLAYING';
var AUDIO_PAUSED = exports.AUDIO_PAUSED = PREFIX + 'PAUSED';
var AUDIO_ENDED = exports.AUDIO_ENDED = PREFIX + 'ENDED';
var AUDIO_REGISTER = exports.AUDIO_REGISTER = PREFIX + 'REGISTER';
var AUDIO_UNREGISTER = exports.AUDIO_UNREGISTER = PREFIX + 'UNREGISTER';
var AUDIO_SRC = exports.AUDIO_SRC = PREFIX + 'SRC';
var AUDIO_COMMAND = exports.AUDIO_COMMAND = PREFIX + 'COMMAND';
var AUDIO_COMMAND_COMPLETE = exports.AUDIO_COMMAND_COMPLETE = PREFIX + 'COMMAND_COMPLETE';