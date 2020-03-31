import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PrismaService } from '@/prisma/prisma.service';
import { Example } from '@prisma/client';
import { CreateExampleDto } from '@/graphql.types';

export const ExampleType = Symbol('Example');

@Resolver('Example')
export class ExampleResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => [ExampleType], { name: 'examples' })
  public async examples(): Promise<Example[]> {
    return this.prisma.example.findMany();
  }

  @Mutation(() => ExampleType, { name: 'createExample' })
  public async createExample(
    @Args('dto') dto: CreateExampleDto,
  ): Promise<Example> {
    return this.prisma.example.create({ data: dto });
  }
}
