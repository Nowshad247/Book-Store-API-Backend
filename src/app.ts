import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import httpStatus from 'http-status'
import router from './app/routes'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import sendResponse from './shared/sendResponse'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', router)

app.get('/', (req: Request, res: Response) => {
  res.send('Perfect app is working ')
})

app.get('/Home', (req: Request, res: Response) => {
  res.send('Perfect app is working ')
})

app.use(globalErrorHandler)

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  sendResponse(res, {
    statusCode: httpStatus.NOT_FOUND,
    success: false,
    message: 'Not Found',
    data: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  })
  next()
})

export default app
