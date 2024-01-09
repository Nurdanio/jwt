import ApiError from "../exceptions/api-error.js";
import { FastifyRequest, FastifyReply } from "fastify";

export const ErrorMiddleware = (
  error: any,
  reply: FastifyReply,
  request: FastifyRequest,
) => {
  if (error instanceof ApiError) {
    return reply
      .status(error.status)
      .send({ message: error.message, errors: error.errors });
  }

  return reply.status(500).send({ message: "Непредвиденная ошибка" });
};
