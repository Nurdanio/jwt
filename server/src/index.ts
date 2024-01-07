import mongoose from "mongoose";
import { FastifyInstance } from "fastify";

import { buildApp, AppOptions } from "./app/app.js";
import { MongoBD } from "./shared/lib/index.js";
import { router } from "./router/index.js";

const options: AppOptions = {
  logger: true,
};

const start = async () => {
  const app: FastifyInstance = await buildApp(options);

  router(app);

  try {
    await app.listen({
      port: 3000,
      host: "localhost",
    });

    mongoose
      .connect(MongoBD)
      .then(() => console.log("Success"))
      .catch((error) => {
        throw new Error(error);
      });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
