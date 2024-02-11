export class DeploymentLogger {
  log(...args: any[]) {
    console.log(`[DEPLOY] LOG`, ...args);
  }

  info(...args: any[]) {
    console.info(`[DEPLOY] INFO`, ...args);
  }

  warn(...args: any[]) {
    console.warn(`[DEPLOY] WARNING`, ...args);
  }

  error(...args: any[]) {
    console.error(`[DEPLOY] ERROR`, ...args);
  }
}
