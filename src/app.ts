class App {
  public async run(): Promise<void> {
    const message = await Promise.resolve(
      `Hello, ${process.env.NAME || 'user'}!`,
    )
    console.log(message)
  }
}

export = App
