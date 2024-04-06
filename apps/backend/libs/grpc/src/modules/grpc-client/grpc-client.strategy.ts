import { AUTH_PACKAGE_NAME } from '@app/grpc';
import { PROTO_ROOT } from '@app/grpc/constants/paths';
import { GrpcServiceEnum } from '@app/grpc/enums/grpc-service.enum';
import { Injectable } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { GrpcOptions } from '@nestjs/microservices/interfaces/microservice-configuration.interface';
import { join } from 'node:path';

@Injectable()
export class GrpcClientStrategy {
  private static getPackage(service: GrpcServiceEnum): string {
    switch (service) {
      case GrpcServiceEnum.AUTH:
        return AUTH_PACKAGE_NAME;
      default:
        throw new Error();
    }
  }

  private static getProtoPath(service: GrpcServiceEnum): string {
    switch (service) {
      case GrpcServiceEnum.AUTH:
        return join(PROTO_ROOT, 'auth.proto');
      default:
        throw new Error();
    }
  }

  static getOptions(service: GrpcServiceEnum | GrpcServiceEnum[]): GrpcOptions {
    if (Array.isArray(service)) {
      return {
        transport: Transport.GRPC,
        options: {
          package: service.map((serviceName) => this.getPackage(serviceName)),
          protoPath: service.map((serviceName) => this.getProtoPath(serviceName)),
        },
      };
    }

    return {
      transport: Transport.GRPC,
      options: {
        package: this.getPackage(service),
        protoPath: this.getProtoPath(service),
      },
    };
  }
}
