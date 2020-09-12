const sinon = require('sinon')
const t = require('tap')

const {name} = require('../lib/config')
const {main} = require('../lib/main')

t.test('main', async t => {
  await t.test(`logs 'Hello, $NAME!'`, async () => {
    const message = `Hello, ${name}!`

    const mock = sinon.mock(console)
    mock.expects('log').once().withExactArgs(message)

    await main()

    mock.verify()
    mock.restore()
  })
})
