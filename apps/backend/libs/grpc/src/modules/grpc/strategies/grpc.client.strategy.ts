import { AUTH_PACKAGE_NAME, AUTH_SERVICE_NAME, GrpcServiceEnum } from '@app/grpc';
import { PROTO_ROOT } from '@app/grpc/constants/paths';
import { Injectable } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { GrpcOptions } from '@nestjs/microservices/interfaces/microservice-configuration.interface';
import { join } from 'node:path';

@Injectable()
export class GrpcClientStrategy {
  private getPackage(service: GrpcServiceEnum): string {
    switch (service) {
      case GrpcServiceEnum.AUTH:
        return AUTH_PACKAGE_NAME;
      default:
        throw new Error();
    }
  }

  private getProtoPath(service: GrpcServiceEnum): string {
    switch (service) {
      case GrpcServiceEnum.AUTH:
        return join(PROTO_ROOT, 'auth.proto');
      default:
        throw new Error();
    }
  }

  getServiceName(service: GrpcServiceEnum): string {
    switch (service) {
      case GrpcServiceEnum.AUTH:
        return AUTH_SERVICE_NAME;
      default:
        throw new Error();
    }
  }

  getOptions(...services: GrpcServiceEnum[]): GrpcOptions {
    return {
      transport: Transport.GRPC,
      options: {
        package: services.map((serviceName) => this.getPackage(serviceName)),
        protoPath: services.map((serviceName) => this.getProtoPath(serviceName)),
      },
    };
  }

  static getOptions(...services: GrpcServiceEnum[]): GrpcOptions {
    return new GrpcClientStrategy().getOptions(...services);
  }
}
