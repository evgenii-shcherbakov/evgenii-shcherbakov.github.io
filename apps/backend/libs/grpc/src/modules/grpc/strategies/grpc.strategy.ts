import { PROTO_ROOT } from '@libs/grpc/constants/paths';
import { GrpcServiceEnum } from '@libs/grpc/modules/grpc';
import { GrpcClientEnum } from '@libs/grpc/modules/grpc/enums/grpc.client.enum';
import {
  GrpcClientStrategy,
  GrpcMappedClientStrategy,
  GrpcServiceStrategy,
} from '@libs/grpc/modules/grpc/strategies/grpc.strategy.types';
import { Injectable } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { GrpcOptions } from '@nestjs/microservices/interfaces/microservice-configuration.interface';
import { ONE } from '@packages/common';
import { AUTH_PACKAGE_NAME, AUTH_SERVICE_NAME } from '@proto/auth';
import { CONTACT_SERVICE_NAME, IDENTITY_PACKAGE_NAME } from '@proto/identity';
import { join } from 'node:path';

@Injectable()
export class GrpcStrategy {
  private static readonly serviceStrategy: GrpcServiceStrategy = {
    [GrpcServiceEnum.AUTH]: {
      packageName: AUTH_PACKAGE_NAME,
      client: GrpcClientEnum.AUTH,
      serviceName: AUTH_SERVICE_NAME,
    },
    [GrpcServiceEnum.IDENTITY_CONTACT]: {
      packageName: IDENTITY_PACKAGE_NAME,
      client: GrpcClientEnum.IDENTITY,
      serviceName: CONTACT_SERVICE_NAME,
    },
    [GrpcServiceEnum.IDENTITY_EXPERIENCE]: {
      packageName: IDENTITY_PACKAGE_NAME,
      client: GrpcClientEnum.IDENTITY,
      serviceName: CONTACT_SERVICE_NAME,
    },
  };

  private static readonly clientStrategy: GrpcClientStrategy = {
    [GrpcClientEnum.AUTH]: {
      packageName: AUTH_PACKAGE_NAME,
      protoPath: join(PROTO_ROOT, 'auth.proto'),
      services: [GrpcServiceEnum.AUTH],
    },
    [GrpcClientEnum.IDENTITY]: {
      packageName: IDENTITY_PACKAGE_NAME,
      protoPath: join(PROTO_ROOT, 'identity.proto'),
      services: [GrpcServiceEnum.IDENTITY_EXPERIENCE, GrpcServiceEnum.IDENTITY_CONTACT],
    },
  };

  private static readonly DEFAULT_GRPC_PORT = 8000;
  private static port: number = +process.env.GRPC_PORT || GrpcStrategy.DEFAULT_GRPC_PORT;

  private static mapClientStrategy(): GrpcMappedClientStrategy {
    return Object.keys(this.clientStrategy).reduce(
      (acc: GrpcMappedClientStrategy, client: GrpcClientEnum) => {
        const port = GrpcStrategy.port;
        GrpcStrategy.port += ONE;

        acc[client] = {
          ...this.clientStrategy[client],
          port,
        };

        return acc;
      },
      {} as GrpcMappedClientStrategy,
    );
  }

  private static readonly mappedClientStrategy: GrpcMappedClientStrategy =
    GrpcStrategy.mapClientStrategy();

  getServiceName(service: GrpcServiceEnum): string {
    return GrpcStrategy.serviceStrategy[service].serviceName;
  }

  static getClient(service: GrpcServiceEnum): GrpcClientEnum {
    return GrpcStrategy.serviceStrategy[service].client;
  }

  static getClientOptions(client: GrpcClientEnum): GrpcOptions {
    const clientParams = GrpcStrategy.clientStrategy[client];
    const port = this.mappedClientStrategy[client].port;

    return {
      transport: Transport.GRPC,
      options: {
        url: `0.0.0.0:${port}`,
        package: clientParams.packageName,
        protoPath: clientParams.protoPath,
        loader: {
          objects: true,
          json: true,
          arrays: true,
          keepCase: true,
        },
      },
    };
  }
}
