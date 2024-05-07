/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SubscriptionPlansStripeProductWhereInput } from "./SubscriptionPlansStripeProductWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SubscriptionPlansStripeProductOrderByInput } from "./SubscriptionPlansStripeProductOrderByInput";

@ArgsType()
class SubscriptionPlansStripeProductFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SubscriptionPlansStripeProductWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SubscriptionPlansStripeProductWhereInput, { nullable: true })
  @Type(() => SubscriptionPlansStripeProductWhereInput)
  where?: SubscriptionPlansStripeProductWhereInput;

  @ApiProperty({
    required: false,
    type: [SubscriptionPlansStripeProductOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SubscriptionPlansStripeProductOrderByInput], { nullable: true })
  @Type(() => SubscriptionPlansStripeProductOrderByInput)
  orderBy?: Array<SubscriptionPlansStripeProductOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SubscriptionPlansStripeProductFindManyArgs as SubscriptionPlansStripeProductFindManyArgs };
