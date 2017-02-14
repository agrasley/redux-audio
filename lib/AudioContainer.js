'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _Audio = require('./Audio');

var _Audio2 = _interopRequireDefault(_Audio);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var stateObj = state.audio.get(ownProps.uniqueId);
  if (ownProps.src && stateObj && !stateObj.get('src')) {
    return {
      command: stateObj ? stateObj.get('command') : 'none'
    };
  } else {
    return {
      command: stateObj ? stateObj.get('command') : 'none',
      src: stateObj ? stateObj.get('src') : ''
    };
  }
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    onEnded: function onEnded() {
      dispatch((0, _actions.audioEnded)(ownProps.uniqueId));
    },
    onMount: function onMount() {
      dispatch((0, _actions.audioRegister)(ownProps.uniqueId));
    },
    onPause: function onPause() {
      dispatch((0, _actions.audioPaused)(ownProps.uniqueId));
    },
    onPlaying: function onPlaying() {
      dispatch((0, _actions.audioPlaying)(ownProps.uniqueId));
    },
    onUnmount: function onUnmount() {
      dispatch((0, _actions.audioUnregister)(ownProps.uniqueId));
    },
    onCommand: function onCommand() {
      dispatch((0, _actions.audioCommand)(ownProps.uniqueId));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Audio2.default);