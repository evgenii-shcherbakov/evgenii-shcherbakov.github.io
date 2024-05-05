import { DynamicModule, Module, Provider } from '@nestjs/common';
import { ClientGrpc, ClientsModule, ClientsProviderAsyncOptions } from '@nestjs/microservices';
import { GrpcClientEnum, GrpcServiceEnum } from 'modules/grpc/grpc.enums';
import { GrpcStrategy } from 'modules/grpc/strategies/grpc.strategy';

export type GrpcClientOptions = {
  name: string | symbol;
  service: GrpcServiceEnum;
};

export type GrpcModuleOptions = {
  clients: GrpcClientOptions[];
};

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
          useFactory: () => GrpcStrategy.getClientOptions(client),
        });
      }

      services.push({
        provide: name,
        useFactory: (client: ClientGrpc) => client.getService(GrpcStrategy.getServiceName(service)),
        inject: [clientSymbol],
      });

      serviceTokens.push(name);
    });

    return {
      imports: [
        ClientsModule.registerAsync({
          clients: [...clients],
        }),
      ],
      providers: [...services],
      exports: [...serviceTokens],
      module: GrpcModule,
    };
  }
}
