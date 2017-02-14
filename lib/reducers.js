'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _TYPES = require('./actions/TYPES');

var getNewMap = function getNewMap() {
  return (0, _immutable.Map)({ command: 'none', state: 'none', src: '' });
};

var singleReducer = function singleReducer(state, action) {
  switch (action.type) {
    case _TYPES.AUDIO_PLAY:
      return state.set('command', 'play');
    case _TYPES.AUDIO_PAUSE:
      return state.set('command', 'pause');
    case _TYPES.AUDIO_COMMAND:
      return state.set('command', 'none');
    case _TYPES.AUDIO_PLAYING:
      return state.set('state', 'playing');
    case _TYPES.AUDIO_PAUSED:
      return state.set('state', 'paused');
    case _TYPES.AUDIO_ENDED:
      return state.set('state', 'ended');
    case _TYPES.AUDIO_SRC:
      return state.set('src', action.src);
    default:
      return state;
  }
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Map)();
  var action = arguments[1];

  switch (action.type) {
    case _TYPES.AUDIO_REGISTER:
      return state.set(action.id, getNewMap());
    case _TYPES.AUDIO_UNREGISTER:
      return state.delete(action.id);
    case _TYPES.AUDIO_PLAY:
    case _TYPES.AUDIO_PLAYING:
    case _TYPES.AUDIO_PAUSE:
    case _TYPES.AUDIO_PAUSED:
    case _TYPES.AUDIO_ENDED:
    case _TYPES.AUDIO_SRC:
    case _TYPES.AUDIO_COMMAND:
      return state.set(action.id, singleReducer(state.get(action.id), action));
    default:
      return state;
  }
};