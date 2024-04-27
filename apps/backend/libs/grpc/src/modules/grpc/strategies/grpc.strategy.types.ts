import { GrpcServiceEnum } from '@libs/grpc/modules/grpc';
import { GrpcClientEnum } from '@libs/grpc/modules/grpc/enums/grpc.client.enum';

export type GrpcClientParams = {
  packageName: string;
  protoPath: string;
  services: GrpcServiceEnum[];
};

export type GrpcMappedClientParams = GrpcClientParams & {
  port: number;
};

export type GrpcServiceParams = {
  packageName: string;
  client: GrpcClientEnum;
  serviceName: string;
};

export type GrpcServiceStrategy = {
  [service in GrpcServiceEnum]: GrpcServiceParams;
};

export type GrpcClientStrategy = {
  [microservice in GrpcClientEnum]: GrpcClientParams;
};

export type GrpcMappedClientStrategy = {
  [microservice in GrpcClientEnum]: GrpcMappedClientParams;
};
