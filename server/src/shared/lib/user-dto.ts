import { TUserDto } from "../types/index.js";

class UserDto {
  id: number;
  email: string;
  isActivated: boolean;

  constructor(model: TUserDto) {
    this.id = model._id;
    this.email = model.email;
    this.isActivated = model.isActivated;
  }
}

export default UserDto;
