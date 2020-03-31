import './module-alias';
import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();

const watch = process.argv.includes('--watch');

definitionsFactory.generate({
  typePaths: [join(__dirname, './**/*.graphql')],
  path: join(__dirname, './graphql.types.ts'),
  outputAs: 'interface',
  watch,
});
