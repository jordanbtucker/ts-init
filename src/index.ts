import 'dotenv/config'
import App = require('./app')

const app = new App()
app.run().catch(err => {
  console.error(err)
  process.exitCode = 1
})
