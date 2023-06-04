import config from '../../../config'
import { User } from './user.model'
import { generateUserId } from './user.utils'
import { IUser } from './users.interface'

const createUser = async (user: IUser): Promise<IUser | null> => {
  //auto generated incremental id
  const id = await generateUserId()
  user.id = id

  //default password set
  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createdUser = await User.create(user)

  if (!createUser) {
    throw new Error('Failed to create User')
  }
  return createdUser
}

export default {
  createUser,
}