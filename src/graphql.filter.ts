import { Catch } from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';

@Catch()
export class ExceptionFilter implements GqlExceptionFilter {
  catch(exception: Error): Error {
    return exception;
  }
}
