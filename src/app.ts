import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'
// import userService from './app/modules/users/user.service'

const app: Application = express()

app.use(cors())
//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application routes
app.use('/api/v1/users/', usersRouter)

//Testing
app.get('/', async (req: Request, res: Response) => {
  // await userService.createUser({
  //   id: '999',
  //   password: '3333',
  //   role: 'student'
  // })

  res.send('Working Successfully')
})

export default app
