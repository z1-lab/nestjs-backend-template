import { INestApplication } from '@nestjs/common';
import { ExceptionFilter } from './graphql.filter';

export function configureApp(app: INestApplication): INestApplication {
  return app.useGlobalFilters(new ExceptionFilter());
}
