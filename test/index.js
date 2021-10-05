const {default: test} = require('ava')
const {greet} = require('..')

test("greet returns 'Hello, ${name}!'", t => {
  const message = greet('test')
  t.is(message, 'Hello, test!')
})

test('named and default export are the same', t => {
  const {greet} = require('..')
  const defaultGreet = require('..').default
  t.is(greet, defaultGreet)
})
