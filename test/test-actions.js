'use strict'

require('babel-core/register')
require('babel-polyfill')
const describe = require('mocha-sugar-free').describe
const it = require('mocha-sugar-free').it
const expect = require('chai').expect
const { audioPlay, audioPlaying, audioPause, audioPaused, audioEnded,
        audioRegister, audioUnregister, audioSrc, audioCommand } = require('../src/actions')

describe('actions', () => {
  describe('audioPlay', () => {
    it('returns an object with id and type', () => {
      expect(audioPlay('id')).to.eql({type: '@@redux-audio/PLAY', id: 'id'})
    })
  })

  describe('audioPlaying', () => {
    it('returns an object with id and type', () => {
      expect(audioPlaying('id')).to.eql({type: '@@redux-audio/PLAYING', id: 'id'})
    })
  })

  describe('audioPause', () => {
    it('returns an object with id and type', () => {
      expect(audioPause('id')).to.eql({type: '@@redux-audio/PAUSE', id: 'id'})
    })
  })

  describe('audioPaused', () => {
    it('returns an object with id and type', () => {
      expect(audioPaused('id')).to.eql({type: '@@redux-audio/PAUSED', id: 'id'})
    })
  })

  describe('audioEnded', () => {
    it('returns an object with id and type', () => {
      expect(audioEnded('id')).to.eql({type: '@@redux-audio/ENDED', id: 'id'})
    })
  })

  describe('audioRegister', () => {
    it('returns an object with id and type', () => {
      expect(audioRegister('id')).to.eql({type: '@@redux-audio/REGISTER', id: 'id'})
    })
  })

  describe('audioUnregister', () => {
    it('returns an object with id and type', () => {
      expect(audioUnregister('id')).to.eql({type: '@@redux-audio/UNREGISTER', id: 'id'})
    })
  })

  describe('audioSrc', () => {
    it('returns an object with id, type, and src', () => {
      expect(audioSrc('id', 'src')).to.eql({type: '@@redux-audio/SRC', id: 'id', src: 'src'})
    })
  })

  describe('audioCommand', () => {
    it('returns an object with id and type', () => {
      expect(audioCommand('id')).to.eql({type: '@@redux-audio/COMMAND', id: 'id'})
    })
  })
})
