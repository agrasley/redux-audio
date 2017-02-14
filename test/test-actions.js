'use strict'

require('babel-core/register')
require('babel-polyfill')
const describe = require('mocha-sugar-free').describe
const it = require('mocha-sugar-free').it
const expect = require('chai').expect
const { audioPlay, audioPlaying, audioPause, audioPaused, audioEnded,
        audioRegister, audioUnregister, audioSrc, audioCommand,
        audioCommandComplete, audioSeek, audioSkip } = require('../src/actions')

describe('actions', () => {
  describe('audioPlay', () => {
    it('returns an object with id and type', () => {
      expect(audioPlay('id')).to.eql({type: '@@redux-audio/COMMAND', id: 'id', command: 'play' ,args: []})
    })
  })

  describe('audioPause', () => {
    it('returns an object with id and type', () => {
      expect(audioPause('id')).to.eql({type: '@@redux-audio/COMMAND', id: 'id', command: 'pause', args: []})
    })
  })

  describe('audioSeek', () => {
    it('returns an object with id, type and args', () => {
      expect(audioSeek('id', 3500)).to.eql({type: '@@redux-audio/COMMAND', id: 'id', command: 'seek', args: [3500]})
    })
  })

  describe('audioSkip', () => {
    it('returns an object with id, type and args', () => {
      expect(audioSkip('id', 3500)).to.eql({type: '@@redux-audio/COMMAND', id: 'id', command: 'skip', args: [3500]})
    })
  })

  describe('audioPlaying', () => {
    it('returns an object with id and type', () => {
      expect(audioPlaying('id')).to.eql({type: '@@redux-audio/PLAYING', id: 'id'})
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

  describe('audioCommandComplete', () => {
    it('returns an object with id and type', () => {
      expect(audioCommandComplete('id')).to.eql({type: '@@redux-audio/COMMAND_COMPLETE', id: 'id'})
    })
  })
})
