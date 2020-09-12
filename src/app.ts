import {name} from './config'

class App {
  public async run(): Promise<void> {
    const message = await Promise.resolve(`Hello, ${name}!`)
    console.log(message)
  }
}

export = App
