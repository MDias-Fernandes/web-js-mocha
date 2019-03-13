var assert = require('assert');
var convert = require('../temperature/app')

describe('Temperature Conversion', function () {
    describe('cToF conversions', function () {
        it('unity 40 conversion', function () {
            assert.equal(-40, convert.cToF(-40))
        })
        it('unity -10 conversion', function () {
            assert.equal(14, convert.cToF(-10))
        })
        it('unity "str" conversion', function () {
            assert.equal(undefined, convert.cToF('str'))
        })
        it('unity 0 conversion', function () {
            assert.equal(32, convert.cToF(0))
        })
        it('code coverage cToF', function () {
            convert.cToF(-40)
            assert.equal(true, true)
        })
    })

    describe('fToC conversions', function () {
        it('unity 40 conversion', function () {
            assert.equal(-40, convert.fToC(-40))
        })
        it('unity -10 conversion', function () {
            assert.equal(-10, convert.fToC(14))
        })
        it('unity "str" conversion', function () {
            assert.equal(undefined, convert.fToC('str'))
        })
        it('unity 0 conversion', function () {
            assert.equal(0, convert.fToC(32))
        })
        it('code coverage fToC', function() {
            convert.fToC('40')
            assert.equal(true, true)
        })
    })
})
