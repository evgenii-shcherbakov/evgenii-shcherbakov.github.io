import { Injectable } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { GrpcOptions } from '@nestjs/microservices/interfaces/microservice-configuration.interface';
import { ONE } from '@packages/common';
import { CONTACT_SERVICE_NAME, IDENTITY_PACKAGE_NAME } from 'generated/identity';
import { GrpcClientEnum, GrpcServiceEnum } from 'modules/grpc/grpc.enums';
import { PROTO_ROOT } from 'modules/grpc/grpc.constants';
import {
  GrpcClientStrategy,
  GrpcMappedClientParams,
  GrpcMappedClientStrategy,
  GrpcServiceStrategy,
} from 'modules/grpc/strategies/grpc.strategy.types';
import { join } from 'node:path';

@Injectable()
export class GrpcStrategy {
  private static readonly serviceStrategy: GrpcServiceStrategy = {
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
    [GrpcClientEnum.IDENTITY]: {
      url: process.env.IDENTITY_GRPC_URL,
      packageName: IDENTITY_PACKAGE_NAME,
      protoPath: join(PROTO_ROOT, 'identity.proto'),
      services: [GrpcServiceEnum.IDENTITY_EXPERIENCE, GrpcServiceEnum.IDENTITY_CONTACT],
    },
  };

  private static port: number = +process.env.FIRST_LOCAL_GRPC_PORT || 8000;

  private static mapClientStrategy(): GrpcMappedClientStrategy {
    return Object.keys(this.clientStrategy).reduce((acc: GrpcMappedClientStrategy, client) => {
      const clientParams = this.clientStrategy[client as GrpcClientEnum];

      if (clientParams.url) {
        acc[client as GrpcClientEnum] = clientParams as GrpcMappedClientParams;
        return acc;
      }

      const port = GrpcStrategy.port;
      GrpcStrategy.port += ONE;

      acc[client as GrpcClientEnum] = {
        ...this.clientStrategy[client as GrpcClientEnum],
        url: `0.0.0.0:${port}`,
      };

      return acc;
    }, {} as GrpcMappedClientStrategy);
  }

  private static readonly mappedClientStrategy: GrpcMappedClientStrategy =
    GrpcStrategy.mapClientStrategy();

  static getServiceName(service: GrpcServiceEnum): string {
    return this.serviceStrategy[service].serviceName;
  }

  static getClient(service: GrpcServiceEnum): GrpcClientEnum {
    return this.serviceStrategy[service].client;
  }

  static getClientOptions(client: GrpcClientEnum): GrpcOptions {
    const clientParams = this.mappedClientStrategy[client];

    return {
      transport: Transport.GRPC,
      options: {
        url: clientParams.url,
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
