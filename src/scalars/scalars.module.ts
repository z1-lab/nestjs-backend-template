import { Module } from '@nestjs/common';
import { DateScalar } from './date.scalar';
import { PaginationAmountScalar } from './pagination-amount.scalar';

@Module({
  providers: [DateScalar, PaginationAmountScalar],
  exports: [DateScalar, PaginationAmountScalar],
})
export class ScalarsModule {}
