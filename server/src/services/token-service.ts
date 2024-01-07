import jwt from "jsonwebtoken";
import TokenModel from "../models/token-model.js";
import { AccessTokenKey, RefreshTokenKey } from "../shared/lib/index.js";

export const generateToken = (payload: object) => {
  const accessToken = jwt.sign(payload, AccessTokenKey, { expiresIn: "30m" });
  const refreshToken = jwt.sign(payload, RefreshTokenKey, { expiresIn: "30d" });

  return { accessToken, refreshToken };
};

export const saveToken = (id: unknown, refreshToken: string) => {
  const tokenData = TokenModel.findOne({ user: id });

  // if (tokenData) {
  //   tokenData.refreshToken = refreshToken;
  //   return tokenData.save();
  // }

  return TokenModel.create({ user: id, refreshToken });
};
