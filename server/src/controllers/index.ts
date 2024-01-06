import { FastifyReply, FastifyRequest } from "fastify";

export const registration = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    reply.send("Hello");
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
    reply.send("Hello");
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
