import { v4 } from "uuid";
import { hash } from "bcrypt";

import UserModel from "../models/user-model.js";
import UserDto from "../shared/lib/user-dto.js";

import { sendActivationMail } from "./mail-service.js";
import { generateToken, saveToken } from "./token-service.js";
import { TTokens, TUser, TUserDto } from "../shared/types/index.js";

const checkUserAvailability = (email: string) => {
  return !!UserModel.findOne({ email });
};

const registration = async (
  email: string,
  password: string,
): Promise<TTokens & TUser> => {
  if (!checkUserAvailability(email)) {
    throw new Error("email busy");
  }

  const passwordHash = await hash(password, 3);
  const linkForActivation = v4();

  const user = await UserModel.create({
    email,
    password: passwordHash,
    activationLink: linkForActivation,
  });
  await sendActivationMail(email, linkForActivation);

  const userDto = new UserDto({
    _id: user.id,
    email: user.email,
    isActivated: user.isActivated,
  });

  const tokens = generateToken({ ...userDto });
  await saveToken(userDto.id, tokens.refreshToken);

  return { ...tokens, user: userDto };
};

const login = () => {};

const logout = () => {};

const refresh = () => {};

const getAllUsers = () => {};

export const UserService = {
  registration,
  login,
  logout,
  refresh,
  getAllUsers,
};
