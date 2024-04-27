import { GrpcClientEnum } from '@libs/grpc/modules/grpc/enums/grpc.client.enum';
import { GrpcModuleOptions } from '@libs/grpc/modules/grpc/grpc.types';
import { GrpcStrategy } from '@libs/grpc/modules/grpc/strategies/grpc.strategy';
import { DynamicModule, Module, Provider } from '@nestjs/common';
import { ClientGrpc, ClientsModule, ClientsProviderAsyncOptions } from '@nestjs/microservices';

@Module({})
export class GrpcModule {
  static register(options: GrpcModuleOptions): DynamicModule {
    const serviceTokens: (string | symbol)[] = [];
    const services: Provider[] = [];
    const clients: ClientsProviderAsyncOptions[] = [];
    const clientAccumulator: Map<GrpcClientEnum, symbol> = new Map();

    options.clients.forEach(({ service, name }) => {
      const client = GrpcStrategy.getClient(service);
      let clientSymbol: symbol;

      if (clientAccumulator.has(client)) {
        clientSymbol = clientAccumulator.get(client);
      } else {
        clientSymbol = Symbol(`${client.toUpperCase()}_GRPC_CLIENT`);
        clientAccumulator.set(client, clientSymbol);

        clients.push({
          name: clientSymbol,
          useFactory: () => {
            return GrpcStrategy.getClientOptions(client);
          },
        });
      }

      services.push({
        provide: name,
        useFactory: (client: ClientGrpc, grpcStrategy: GrpcStrategy) => {
          return client.getService(grpcStrategy.getServiceName(service));
        },
        inject: [clientSymbol, GrpcStrategy],
      });

      serviceTokens.push(name);
    });

    return {
      imports: [
        ClientsModule.registerAsync({
          clients: [...clients],
        }),
      ],
      providers: [GrpcStrategy, ...services],
      exports: [...serviceTokens],
      module: GrpcModule,
    };
  }
}
