import { CONTACT_SERVICE_CLIENT } from '@apps/api-gateway/modules/contact/contact.constants';
import { ContactDto, Method } from '@libs/common';
import { Controller, Get, Inject } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { ContactServiceClient } from '@proto/identity';
import { plainToInstance } from 'class-transformer';
import { catchError, map, Observable, throwError } from 'rxjs';

@ApiTags('identity contact')
@Controller(`contacts`)
export class ContactWebController {
  constructor(
    @Inject(CONTACT_SERVICE_CLIENT)
    private readonly contactServiceClient: ContactServiceClient,
  ) {}

  @Get('primary')
  @Method({ type: [ContactDto] })
  getPrimary(): Observable<ContactDto[]> {
    return this.contactServiceClient.getAll({}).pipe(
      map((response) => response.items.map((item) => plainToInstance(ContactDto, item))),
      catchError((exception) => throwError(() => new RpcException(exception))),
    );
  }
}
