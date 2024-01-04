import Fastify, {FastifyServerOptions} from 'fastify'

export type AppOptions = Partial<FastifyServerOptions>;

async function buildApp(options: AppOptions = {}) {
    return Fastify(options);
}

export { buildApp }