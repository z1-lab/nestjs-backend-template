import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { resolve } from 'path';
import { ExampleModule } from './example/example.module';
import depthLimit from 'graphql-depth-limit';
import { ScalarsModule } from './scalars/scalars.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot({
      playground: true,
      debug: true,
      introspection: true,
      typePaths: [resolve(__dirname, './**/*.graphql')],
      context: (req) => ({ req, __gqlContext: true }),
      fieldResolverEnhancers: ['guards'],
      // Caution: you have to change the depthLimit to a custom number
      // This number limits the maximum depth of incoming queries
      validationRules: [depthLimit(999)],
    }),
    ExampleModule,
    ScalarsModule,
  ],
})
export class AppModule {}
