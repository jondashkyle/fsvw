var test = require('tape')
var fsvw = require('.')

test('output', function (t) {
  t.ok(typeof fsvw() === 'string', 'outputs string')
  t.end()
})
