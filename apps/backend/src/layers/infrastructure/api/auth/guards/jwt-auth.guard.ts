import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
// import { Reflector } from '@nestjs/core';
// import { Observable } from 'rxjs';
// import { MetadataKeyEnum } from '@/enums/metadata-key.enum';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  // constructor(private readonly reflector: Reflector) {
  //   super();
  // }
  //
  // canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
  //   const targets = [context.getHandler(), context.getClass()];
  //
  //   const isPublicEndpoint = this.reflector.getAllAndOverride<boolean>(
  //     MetadataKeyEnum.PUBLIC_ENDPOINT,
  //     targets,
  //   );
  //
  //   const isAuthDisabled = this.reflector.getAllAndOverride<boolean>(
  //     MetadataKeyEnum.AUTH_DISABLED,
  //     targets,
  //   );
  //
  //   if (isPublicEndpoint || isAuthDisabled) {
  //     return true;
  //   }
  //
  //   return super.canActivate(context);
  // }
}
