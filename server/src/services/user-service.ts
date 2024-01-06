const uuid = require("uuid");
const bcrypt = require("bcrypt");

const UserModel = require("../models/user-model");
import { sendActivationMail } from "./mail-service.js";

const checkUserAvailability = (email: string) => {
  return !!UserModel.findOne({ email });
};

const registration = async (email: string, password: string) => {
  if (!checkUserAvailability(email)) {
    throw new Error("email busy");
  }

  const passwordHash = await bcrypt.hash(password, 3);
  const linkForActivation = uuid.v4();

  UserModel.create({
    email,
    password: passwordHash,
    activationLink: linkForActivation,
  }).then(async () => {
    await sendActivationMail("", linkForActivation);
  });
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
