import { Module } from '@nestjs/common';
import { CommonModule } from '@packages/backend.common';
import { BackendApiGatewayEnvValidator } from '@packages/environment';
import { ContactModule } from 'modules/contact/contact.module';

@Module({
  imports: [CommonModule.register({ envValidator: BackendApiGatewayEnvValidator }), ContactModule],
})
export class ApiGatewayModule {}
