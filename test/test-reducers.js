'use strict'

require('babel-core/register')
require('babel-polyfill')
const describe = require('mocha-sugar-free').describe
const it = require('mocha-sugar-free').it
const expect = require('chai').expect
const reducer = require('../src/reducers').default
const { audioPlay, audioPlaying, audioPause, audioPaused, audioEnded,
        audioRegister, audioUnregister, audioSrc, audioCommand,
        audioCommandComplete, audioSeek, audioSkip } = require('../src/actions')
const Map = require('immutable').Map

describe('reducers', () => {
  describe('AUDIO_REGISTER actions', () => {
    it('registers a new id with the state', () => {
      const result = reducer(undefined, audioRegister('id'))
      expect(result.has('id')).to.be.true
      expect(result.get('id').equals(Map({command: 'none', state: 'none', src: ''})))
    })
  })

  describe('AUDIO_UNREGISTER actions', () => {
    it('unregisters an id with the state', () => {
      const result = reducer(Map({id: 'hello'}), audioUnregister('id'))
      expect(result.has('id')).to.be.false
    })
  })

  describe('AUDIO_PLAY actions', () => {
    it('changes the command of the Map with the corresponding id to "play"', () => {
      const result = reducer(Map({id: Map({command: 'none', state: 'none', src: ''})}), audioPlay('id'))
      expect(result.get('id').toJS()).to.deep.equal(
        {command: {command: 'play', args: []}, state: 'none', src: ''}
      )
    })
  })

  describe('AUDIO_PLAYING actions', () => {
    it('changes the state of the Map with the corresponding id to "playing"', () => {
      const result = reducer(Map({id: Map({command: 'none', state: 'none', src: ''})}), audioPlaying('id'))
      expect(result.get('id').equals(Map({command: 'none', state: 'playing', src: ''}))).to.be.true
    })
  })

  describe('AUDIO_PAUSE actions', () => {
    it('changes the command of the Map with the corresponding id to "pause"', () => {
      const result = reducer(Map({id: Map({command: 'none', state: 'none', src: ''})}), audioPause('id'))
      expect(result.get('id').toJS()).to.deep.equal(
        {command: {command: 'pause', args: []}, state: 'none', src: ''}
      )
    })
  })

  describe('AUDIO_SEEK actions', () => {
    it('changes the command on the Map with the corresponding id to "seek"', () => {
      const result = reducer(Map({id: Map({command: 'none', state: 'none', src: ''})}), audioSeek('id', 2500))
      expect(result.get('id').toJS()).to.deep.equal(
        {command: {command: 'seek', args: [2500]}, state: 'none', src: ''}
      )
    })
  })

  describe('AUDIO_PAUSED actions', () => {
    it('changes the state of the Map with the corresponding id to "paused"', () => {
      const result = reducer(Map({id: Map({command: 'none', state: 'none', src: ''})}), audioPaused('id'))
      expect(result.get('id').equals(Map({command: 'none', state: 'paused', src: ''}))).to.be.true
    })
  })

  describe('AUDIO_ENDED actions', () => {
    it('changes the state of the Map with the corresponding id to "ended"', () => {
      const result = reducer(Map({id: Map({command: 'none', state: 'none', src: ''})}), audioEnded('id'))
      expect(result.get('id').equals(Map({command: 'none', state: 'ended', src: ''}))).to.be.true
    })
  })

  describe('AUDIO_SRC actions', () => {
    it('changes the state of the Map with the corresponding src', () => {
      const result = reducer(Map({id: Map({command: 'none', state: 'none', src: ''})}), audioSrc('id', 'src'))
      expect(result.get('id').equals(Map({command: 'none', state: 'none', src: 'src'}))).to.be.true
    })
  })

  describe('AUDIO_COMMAND_COMPLETE actions', () => {
    it('changes the state of the Map to set command to "none"', () => {
      const result = reducer(Map({id: Map({command: 'play', state: 'playing', src: 'src'})}), audioCommandComplete('id'))
      expect(result.get('id').toJS()).to.deep.equal({
        command: 'none',
        state: 'playing',
        src: 'src'
      })
    })
  })
})
