const server = import('../apps/frontend/dist/frontend/server/server.mjs');

try {
  console.log(server);
  console.log(server.app);
} catch (e) {
  console.log(`Can't check`);
}

module.exports = server.app;
