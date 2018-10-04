import Debug = require('debug')

const debug = Debug('ts-init')

class App {
	public async run () {
		const message = await Promise.resolve(`Hello, ${process.env.NAME}!`)
		debug('message: %s', message)
		console.log(message)
	}
}

export = App
