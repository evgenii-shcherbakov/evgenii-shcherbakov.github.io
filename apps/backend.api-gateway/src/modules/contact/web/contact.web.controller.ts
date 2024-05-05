import { Controller, Get, Inject, Query } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { ContactDto, Method } from '@packages/backend.common';
import { ContactServiceClient } from '@packages/backend.transport/generated/identity';
import { plainToInstance } from 'class-transformer';
import { CONTACT_SERVICE_CLIENT } from 'modules/contact/contact.constants';
import { ContactQueryDto } from 'modules/contact/dto/contact.query.dto';
import { catchError, map, Observable, throwError } from 'rxjs';

@ApiTags('identity contact')
@Controller('identity/contacts')
export class ContactWebController {
  constructor(
    @Inject(CONTACT_SERVICE_CLIENT) private readonly contactServiceClient: ContactServiceClient,
  ) {}

  @Get()
  @Method({ type: [ContactDto] })
  getMany(@Query() query: ContactQueryDto): Observable<ContactDto[]> {
    return this.contactServiceClient.getMany({ query }).pipe(
      map((response) => response.items.map((item) => plainToInstance(ContactDto, item))),
      catchError((exception) => throwError(() => new RpcException(exception))),
    );
  }
}
