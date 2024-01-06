import { AccessTokenKey, RefreshTokenKey } from "../shared/index.js";

const jwt = require("jsonwebtoken");

export const generateToken = (payload: unknown) => {
  const accessToken = jwt.sign(payload, AccessTokenKey, { expiresIn: "30m" });
  const refreshToken = jwt.sign(payload, RefreshTokenKey, { expiresIn: "30d" });

  return { accessToken, refreshToken };
};
