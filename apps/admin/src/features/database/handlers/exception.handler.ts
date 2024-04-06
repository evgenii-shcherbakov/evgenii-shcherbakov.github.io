import { DatabaseException } from '@features/database/exceptions/database.exception';
import { HttpStatusCodeEnum } from '@features/database/enums/http-status-code.enum';

export const exceptionHandler = (exception: unknown): Response => {
  console.error(exception);

  if (exception instanceof DatabaseException) {
    return new Response(JSON.stringify({ message: exception.message }), {
      status: exception.getStatusCode(),
    });
  }

  if (exception instanceof Error) {
    return new Response(JSON.stringify({ message: exception.message }), {
      status: HttpStatusCodeEnum.INTERNAL_SERVER_ERROR,
    });
  }

  return new Response(JSON.stringify({ message: 'Unknown exception' }), {
    status: HttpStatusCodeEnum.INTERNAL_SERVER_ERROR,
  });
};
