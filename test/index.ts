import t from 'tap'
import {greet, farewell} from '../src'

t.test("greet returns 'Hello, ${name}!'", async t => {
  const message = greet('test')
  t.equal(message, 'Hello, test!', 'message')
})

t.test("farewell returns 'Goodbye, ${name}!'", async t => {
  const message = farewell('test')
  t.equal(message, 'Goodbye, test!', 'message')
})
