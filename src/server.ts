import mongoose from 'mongoose'

import config from './config'
import app from './app'
import { errorlogger } from './shared/logger'
import { Server } from 'https'
let server: Server

process.on('uncaughtException', error => {
  errorlogger.error(error)
  process.exit(1)
})

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log(`🛢 Database is connected successfully`)
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
  } catch (err) {
    errorlogger.error('Failed to connect database', err)
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorlogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

main().catch(err => console.log(err))
