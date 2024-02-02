const { app } = import('../apps/frontend/dist/frontend/server/server.mjs');

try {
  console.log(app, typeof app);
} catch (e) {
  console.log(`Shit`);
}

export default app;
