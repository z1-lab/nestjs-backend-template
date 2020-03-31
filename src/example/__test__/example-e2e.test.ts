import { INestApplication } from '@nestjs/common';
import {
  GraphQLTestClient,
  createGraphQLTestClient,
  createTestingApp,
} from '@/test.utils';
import { PrismaService } from '@/prisma/prisma.service';
import faker from 'faker';

faker.seed(1000);

describe('Example E2E', () => {
  let app: INestApplication;
  let client: GraphQLTestClient;
  let prisma: PrismaService;

  beforeAll(async () => {
    app = await createTestingApp();
    client = createGraphQLTestClient(app);
    prisma = app.get(PrismaService);

    await prisma.example.create({
      data: {
        name: 'test',
        body: 'test',
      },
    });
  });

  afterAll(async () => {
    await prisma.example.deleteMany({ where: {} });
    await app.close();
  });

  test('should create Examples', async () => {
    const { mutation } = client;

    const result = await mutation(`
    mutation {
      createExample(dto: {
        name: "${faker.name.firstName()}",
        body: """${faker.random.words(10)}"""
      }) {
        id
        name
        body
      }
    }
    `);

    expect(result.body?.data?.createExample?.id).toBeTruthy();
    expect(result.body?.data?.createExample?.name).toBeTruthy();
    expect(result.body?.data?.createExample?.body).toBeTruthy();
  });

  test('should get Examples', async () => {
    const { query } = client;

    const result = await query(`
    query {
      examples {
        id
        name
        body
      }
    }
    `);

    expect(result.body?.data?.examples).toBeTruthy();
    expect(result.body?.data?.examples.length).toBeGreaterThanOrEqual(0);
  });

  test.todo('should delete Examples');
  test.todo('should update Examples');
});
