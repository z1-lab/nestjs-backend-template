import { Module } from '@nestjs/common';
import { DateScalar } from './date.scalar';

@Module({
  providers: [DateScalar],
  exports: [DateScalar],
})
export class ScalarsModule {}
