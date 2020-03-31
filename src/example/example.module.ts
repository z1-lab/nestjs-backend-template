import { Module } from '@nestjs/common';
import { PrismaModule } from '@/prisma/prisma.module';
import { ExampleResolver } from './example.resolver';

@Module({
  imports: [PrismaModule],
  providers: [ExampleResolver],
})
export class ExampleModule {}
