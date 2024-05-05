import { Module } from '@nestjs/common';
import { CommonModule, PersistenceModule } from '@packages/backend.common';
import { BackendIdentityEnvValidator } from '@packages/environment';
import { ContactModule } from 'modules/contact/contact.module';

@Module({
  imports: [
    CommonModule.register({ envValidator: BackendIdentityEnvValidator }),
    PersistenceModule.forRoot(),
    ContactModule,
  ],
})
export class IdentityModule {}
