const sinon = require('sinon')
const {default: test} = require('ava')

const {name} = require('../lib/config')
const {main} = require('../lib/main')

test(`logs 'Hello, $NAME!'`, async t => {
  const message = `Hello, ${name}!`

  const mock = sinon.mock(console)
  mock.expects('log').once().withExactArgs(message)

  await main()

  mock.verify()
  mock.restore()
  t.pass()
})
