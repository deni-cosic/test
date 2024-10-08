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
import { PracticeWhereUniqueInput } from "./PracticeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PracticeUpdateInput } from "./PracticeUpdateInput";

@ArgsType()
class UpdatePracticeArgs {
  @ApiProperty({
    required: true,
    type: () => PracticeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PracticeWhereUniqueInput)
  @Field(() => PracticeWhereUniqueInput, { nullable: false })
  where!: PracticeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PracticeUpdateInput,
  })
  @ValidateNested()
  @Type(() => PracticeUpdateInput)
  @Field(() => PracticeUpdateInput, { nullable: false })
  data!: PracticeUpdateInput;
}

export { UpdatePracticeArgs as UpdatePracticeArgs };
