import request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { configureApp } from './config';
import { AppModule } from './app.module';
import { TestingModule, Test } from '@nestjs/testing';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import getPort from 'get-port';

export type GraphQLTestClient = ReturnType<typeof createGraphQLTestClient>;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createGraphQLTestClient(app: INestApplication, token?: string) {
  const httpServer = app.getHttpServer();

  function query(
    query: string,
    queryToken: string | undefined = token,
  ): request.Test {
    let req = request(httpServer).post('/graphql');

    if (queryToken) {
      req = req.set('Authorization', `Bearer ${queryToken}`);
    }

    return req.send({ query });
  }

  function mutation(
    query: string,
    queryToken: string | undefined = token,
  ): request.Test {
    let req = request(httpServer).post('/graphql');

    if (queryToken) {
      req = req.set('Authorization', `Bearer ${queryToken}`);
    }

    return req.send({ query });
  }

  return {
    query,
    mutation,
  };
}

export async function createTestingApp(): Promise<INestApplication> {
  let app: INestApplication;

  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  app = moduleFixture.createNestApplication(new FastifyAdapter());
  app = configureApp(app);

  await app.listen(await getPort());

  return app;
}
