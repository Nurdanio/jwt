import { FastifyReply, FastifyRequest } from "fastify";
import { UserService } from "../services/user-service.js";

export const registration = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    // @ts-ignore
    const { email, password } = request.body;
    const userData = await UserService.registration(email, password);

    // Второй этап
    reply.header("refresh-token", userData.refreshToken);
    return reply.send(JSON.stringify(userData));
  } catch (e) {
    console.log(e);
  }
};

export const login = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    reply.send("Hello");
  } catch (e) {
    console.log(e);
  }
};

export const logout = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    reply.send("Hello");
  } catch (e) {
    console.log(e);
  }
};

export const getUsers = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    reply.send("Many users");
  } catch (e) {
    console.log(e);
  }
};

export const activate = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    reply.send("Hello");
  } catch (e) {
    console.log(e);
  }
};

export const refresh = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    reply.send("Hello");
  } catch (e) {
    console.log(e);
  }
};
