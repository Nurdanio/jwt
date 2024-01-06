import { FastifyInstance } from "fastify";
import {
  activate,
  getUsers,
  login,
  logout,
  refresh,
  registration,
} from "../controllers/index.js";

export const router = (app: FastifyInstance) => {
  app.post("/registration", registration);
  app.post("/login", login);
  app.post("/logout", logout);

  app.get("/refresh", refresh);
  app.get("/users", getUsers);
  app.get("/activate/:link", activate);
};
