import { GrpcServiceEnum } from '@libs/grpc/modules/grpc/enums/grpc.service.enum';

export type GrpcClientOptions = {
  name: string | symbol;
  service: GrpcServiceEnum;
};

export type GrpcModuleOptions = {
  clients: GrpcClientOptions[];
};
