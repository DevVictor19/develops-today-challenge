import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpExceptionBody,
} from '@nestjs/common';
import { Response } from 'express';
import { AxiosError } from 'axios';

@Catch(AxiosError)
export class AxiosHttpExceptionFilter implements ExceptionFilter {
  catch(exception: AxiosError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const error: HttpExceptionBody = {
      message: exception.message,
      statusCode: exception.status ?? 500,
      error: exception.cause?.message,
    };

    response.status(error.statusCode).json(error);
  }
}
