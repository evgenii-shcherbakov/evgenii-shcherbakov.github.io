import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BackendEnvironment } from '@shared/environment';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { MetadataKeyEnum } from '@app/enums/metadata-key.enum';
import { RequestOriginEnum } from '@modules/core/cors/enums/request-origin.enum';
import { Request } from 'express';

@Injectable()
export class RequestOriginGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly configService: ConfigService<BackendEnvironment>,
  ) {}

  private getOriginValue(origin: RequestOriginEnum): string {
    switch (origin) {
      case RequestOriginEnum.ADMIN:
        return this.configService.get('ADMIN_URL');
      case RequestOriginEnum.FRONTEND:
        return this.configService.get('FRONTEND_URL');
      default:
        return '';
    }
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const isProduction = this.configService.get('NODE_ENV') === 'production';

    if (!isProduction) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request>();
    const requestOrigin = request.headers.origin ?? '';

    if (requestOrigin.startsWith(this.configService.get('BACKEND_URL'))) {
      return true;
    }

    const origins = this.reflector.getAllAndOverride<RequestOriginEnum[]>(
      MetadataKeyEnum.ALLOWED_ORIGINS,
      [context.getHandler(), context.getClass()],
    );

    const originValues: string[] = origins.reduce((acc: string[], origin: RequestOriginEnum) => {
      const value = this.getOriginValue(origin);
      if (value) acc.push(value);
      return acc;
    }, []);

    if (
      originValues.length &&
      originValues.every((origin: string) => !requestOrigin.startsWith(origin))
    ) {
      throw new Error(`Request from origin '${requestOrigin}' is not allowed by CORS`);
    }

    return true;
  }
}
