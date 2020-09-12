const sinon = require('sinon')
const t = require('tap')
const {name} = require('../lib/config')
const App = require('../lib/app')

t.test('App', async t => {
  await t.test('run', async t => {
    await t.test(`logs 'Hello, $NAME!'`, async () => {
      const message = `Hello, ${name}!`

      const mock = sinon.mock(console)
      mock.expects('log').once().withExactArgs(message)

      const app = new App()
      await app.run()

      mock.verify()
      mock.restore()
    })
  })
})
