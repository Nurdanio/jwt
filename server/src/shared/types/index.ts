export type TUserDto = {
  _id: number;
  email: string;
  isActivated: boolean;
};

export type TTokens = {
  accessToken: string;
  refreshToken: string;
};

export type TUser = {
  user: { id: number } & Omit<TUserDto, "_id">;
};
