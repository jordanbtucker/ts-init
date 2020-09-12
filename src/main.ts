import {name} from './config'

export async function main(): Promise<void> {
  const message = await Promise.resolve(`Hello, ${name}!`)
  console.log(message)
}
