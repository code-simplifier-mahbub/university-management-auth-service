import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { User } from './user.model';
import { generateUserId } from './user.utils';
import { IUser } from './user.interface';

const createUser = async (user: IUser): Promise<IUser | null> => {
  //auto generated incremental id
  const id = await generateUserId();
  user.id = id;

  //default password set
  if (!user.password) {
    user.password = config.default_user_pass as string;
  }

  const createdUser = await User.create(user);

  if (!createUser) {
    throw new ApiError(400, 'Failed to create User');
  }
  return createdUser;
};

export const UserService = {
  createUser,
};
