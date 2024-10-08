/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { WorkflowWhereUniqueInput } from "../../workflow/base/WorkflowWhereUniqueInput";

@InputType()
class WorkflowStepUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  executedOn?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  executionDate?: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  message?: string;

  @ApiProperty({
    required: false,
    type: () => WorkflowWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WorkflowWhereUniqueInput)
  @IsOptional()
  @Field(() => WorkflowWhereUniqueInput, {
    nullable: true,
  })
  workflow?: WorkflowWhereUniqueInput;
}

export { WorkflowStepUpdateInput as WorkflowStepUpdateInput };
