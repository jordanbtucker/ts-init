import t from 'tap'
import {greet} from '..'

t.test("greet returns 'Hello, ${name}!'", async t => {
  const message = greet('test')
  t.equal(message, 'Hello, test!', 'message')
})
