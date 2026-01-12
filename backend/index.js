const fastify = require('fastify')({ logger: true });
require('dotenv').config();

const { register, collectDefaultMetrics } = require('prom-client');
collectDefaultMetrics();

fastify.decorate('auth', require('./middleware/auth'));

fastify.register(require('./routes/auth'));
fastify.register(require('./routes/investments'));
fastify.register(require('./routes/recommendations'));

fastify.get('/metrics', async (request, reply) => {
  reply.type(register.contentType);
  return register.metrics();
});

const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT || 3001, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();