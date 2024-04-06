import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class ApiRequestInterceptor implements NestInterceptor {
  private readonly logger = new Logger(ApiRequestInterceptor.name, { timestamp: true });

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const request: Request = context.switchToHttp().getRequest();
    this.logger.log(`${request.method} ${request.url}`);
    return next.handle();
  }
}
