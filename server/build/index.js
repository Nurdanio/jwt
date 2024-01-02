import { buildApp } from './app.js';
const options = {
    logger: true,
};
const start = async () => {
    const app = await buildApp(options);
    try {
        await app.listen({
            port: 3000,
            host: 'localhost',
        });
    }
    catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};
start();
//# sourceMappingURL=index.js.map