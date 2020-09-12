import 'dotenv/config'

const DEFAULT_NAME = 'user'

export const name = process.env.NAME || DEFAULT_NAME
