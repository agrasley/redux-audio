'use strict'

require('babel-core/register')
require('babel-polyfill')
const describe = require('mocha-sugar-free').describe
const it = require('mocha-sugar-free').it
const expect = require('chai').expect
const reducer = require('../src/reducers').default
const { audioPlay, audioPlaying, audioPause, audioPaused, audioEnded,
        audioRegister, audioUnregister } = require('../src/actions')
const Map = require('immutable').Map

describe('reducers', () => {
  describe('AUDIO_REGISTER actions', () => {
    it('registers a new id with the state', () => {
      const result = reducer(undefined, audioRegister('id'))
      expect(result.has('id')).to.be.true
      expect(result.get('id').equals(Map({command: 'none', state: 'none'})))
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
      const result = reducer(Map({id: Map({command: 'none', state: 'none'})}), audioPlay('id'))
      expect(result.get('id').equals(Map({command: 'play', state: 'none'}))).to.be.true
    })
  })

  describe('AUDIO_PLAYING actions', () => {
    it('changes the state of the Map with the corresponding id to "playing"', () => {
      const result = reducer(Map({id: Map({command: 'none', state: 'none'})}), audioPlaying('id'))
      expect(result.get('id').equals(Map({command: 'none', state: 'playing'}))).to.be.true
    })
  })

  describe('AUDIO_PAUSE actions', () => {
    it('changes the command of the Map with the corresponding id to "pause"', () => {
      const result = reducer(Map({id: Map({command: 'none', state: 'none'})}), audioPause('id'))
      expect(result.get('id').equals(Map({command: 'pause', state: 'none'}))).to.be.true
    })
  })

  describe('AUDIO_PAUSED actions', () => {
    it('changes the state of the Map with the corresponding id to "paused"', () => {
      const result = reducer(Map({id: Map({command: 'none', state: 'none'})}), audioPaused('id'))
      expect(result.get('id').equals(Map({command: 'none', state: 'paused'}))).to.be.true
    })
  })

  describe('AUDIO_ENDED actions', () => {
    it('changes the state of the Map with the corresponding id to "ended"', () => {
      const result = reducer(Map({id: Map({command: 'none', state: 'none'})}), audioEnded('id'))
      expect(result.get('id').equals(Map({command: 'none', state: 'ended'}))).to.be.true
    })
  })
})
