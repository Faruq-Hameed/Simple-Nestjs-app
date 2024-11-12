import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * Bootstraps the NestJS application and starts listening for incoming HTTP requests.
 *
 * @remarks
 * This function initializes the NestJS application using the `NestFactory.create` method,
 * which creates an instance of the application based on the provided `AppModule`.
 * It then starts listening for incoming HTTP requests on the specified port.
 *
 * @returns {Promise<void>} A promise that resolves when the application has started listening for requests.
 *
 * @example
 * ```typescript
 * async function main() {
 *   await bootstrap();
 * }
 * main();
 * ```
 */
async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
