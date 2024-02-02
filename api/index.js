const { app } = import('frontend/dist/frontend/server/server.mjs');

try {
  console.log(app, typeof app);
} catch (e) {
  console.log(`Shit`);
}

module.exports = app;
