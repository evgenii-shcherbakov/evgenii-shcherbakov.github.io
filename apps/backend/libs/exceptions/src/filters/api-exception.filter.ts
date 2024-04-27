import { ApiException } from '@libs/exceptions/exceptions/base/api.exception';
import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { BaseRpcExceptionFilter, RpcException } from '@nestjs/microservices';

@Catch(ApiException)
export class ApiExceptionFilter extends BaseRpcExceptionFilter implements ExceptionFilter {
  catch(exception: ApiException, host: ArgumentsHost) {
    return super.catch(new RpcException(exception.getGrpcResponse()), host);
  }
}
