import { GrpcServiceEnum } from '@app/grpc/enums/grpc-service.enum';
import { GrpcClientStrategy } from '@app/grpc/modules/grpc-client/grpc-client.strategy';
import { DynamicModule, Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';

@Module({})
export class GrpcClientModule {
  static register(
    injectionToken: string | symbol,
    service: GrpcServiceEnum | GrpcServiceEnum[],
  ): DynamicModule {
    return {
      imports: [
        ClientsModule.register([
          {
            name: injectionToken,
            ...GrpcClientStrategy.getOptions(service),
          },
        ]),
      ],
      exports: [ClientsModule],
      module: GrpcClientModule,
    };
  }
}
