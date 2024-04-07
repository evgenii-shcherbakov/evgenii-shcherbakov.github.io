import { GrpcServiceEnum } from '@app/grpc/modules/grpc/enums/grpc.service.enum';
import { GrpcClientStrategy } from '@app/grpc/modules/grpc/strategies/grpc.client.strategy';
import { GrpcModuleOptions } from '@app/grpc/modules/grpc/grpc.types';
import { DynamicModule, Module, Provider } from '@nestjs/common';
import { ClientGrpc, ClientsModule, ClientsProviderAsyncOptions } from '@nestjs/microservices';

@Module({
  providers: [GrpcClientStrategy],
  exports: [GrpcClientStrategy],
})
export class GrpcModule {
  static register(options: GrpcModuleOptions): DynamicModule {
    const CLIENT = Symbol(`GRPC_CLIENT_${Date.now()}`);

    const grpcServices: GrpcServiceEnum[] = [];
    const grpcClientInjectionTokens: (string | symbol)[] = [];

    const grpcClientProviders: Provider[] = options.clients.map((clientOptions) => {
      grpcServices.push(clientOptions.service);
      grpcClientInjectionTokens.push(clientOptions.name);

      return {
        provide: clientOptions.name,
        useFactory: (client: ClientGrpc, grpcStrategy: GrpcClientStrategy) => {
          return client.getService(grpcStrategy.getServiceName(clientOptions.service));
        },
        inject: [CLIENT, GrpcClientStrategy],
      };
    });

    const mainGrpcClientOptions: ClientsProviderAsyncOptions = {
      name: CLIENT,
      useFactory: (grpcStrategy: GrpcClientStrategy) => {
        return grpcStrategy.getOptions(...grpcServices);
      },
      inject: [GrpcClientStrategy],
      imports: [GrpcModule],
    };

    return {
      imports: [
        ClientsModule.registerAsync({
          clients: [mainGrpcClientOptions],
        }),
      ],
      providers: [...grpcClientProviders],
      exports: [...grpcClientInjectionTokens],
      module: GrpcModule,
    };
  }
}
