import mongoose from 'mongoose'
import config from './config'
import app from './app'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('database connection successful')

    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`)
    })
  } catch (err) {
    console.log('database connection error', err)
  }
}
bootstrap()
