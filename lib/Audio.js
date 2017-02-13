'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Audio = _react2.default.createClass({
  displayName: 'Audio',
  play: function play() {
    _reactDom2.default.findDOMNode(this).play();
  },
  pause: function pause() {
    _reactDom2.default.findDOMNode(this).pause();
  },
  getDefaultProps: function getDefaultProps() {
    return {
      autoPlay: false,
      controls: false,
      loop: false,
      preload: 'metadata'
    };
  },
  componentWillMount: function componentWillMount() {
    this.props.onMount();
  },
  componentDidMount: function componentDidMount() {
    var audio = _reactDom2.default.findDOMNode(this);
    var _props = this.props,
        onEnded = _props.onEnded,
        onPause = _props.onPause,
        onPlaying = _props.onPlaying;

    audio.addEventListener('ended', onEnded);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('playing', onPlaying);
  },
  componentWillUnmount: function componentWillUnmount() {
    var audio = _reactDom2.default.findDOMNode(this);
    var _props2 = this.props,
        onEnded = _props2.onEnded,
        onPause = _props2.onPause,
        onPlaying = _props2.onPlaying,
        onUnmount = _props2.onUnmount;

    audio.removeEventListener('ended', onEnded);
    audio.removeEventListener('pause', onPause);
    audio.removeEventListener('playing', onPlaying);
    onUnmount();
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    if (this.props.command !== 'none' && this.props.command !== prevProps.command) {
      this[this.props.command]();
      this.props.onCommand(this.props.command);
    }
  },
  render: function render() {
    var _props3 = this.props,
        autoPlay = _props3.autoPlay,
        controls = _props3.controls,
        loop = _props3.loop,
        preload = _props3.preload,
        src = _props3.src;


    return _react2.default.createElement('audio', {
      autoPlay: autoPlay,
      controls: controls,
      loop: loop,
      preload: preload,
      src: src
    });
  },


  propTypes: {
    autoPlay: _react.PropTypes.bool,
    command: _react.PropTypes.oneOf(['play', 'pause', 'none']).isRequired,
    controls: _react.PropTypes.bool,
    loop: _react.PropTypes.bool,
    onEnded: _react.PropTypes.func.isRequired,
    onMount: _react.PropTypes.func.isRequired,
    onPause: _react.PropTypes.func.isRequired,
    onPlaying: _react.PropTypes.func.isRequired,
    onUnmount: _react.PropTypes.func.isRequired,
    onCommand: _react.PropTypes.func.isRequired,
    preload: _react.PropTypes.oneOf(['none', 'metadata', 'auto']),
    src: _react.PropTypes.string.isRequired,
    uniqueId: _react.PropTypes.string.isRequired
  }
});

exports.default = Audio;