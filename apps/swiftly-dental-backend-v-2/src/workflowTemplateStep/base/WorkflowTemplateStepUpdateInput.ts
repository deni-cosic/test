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
import { IsString, IsOptional, IsInt, ValidateNested } from "class-validator";
import { WorkflowTemplateWhereUniqueInput } from "../../workflowTemplate/base/WorkflowTemplateWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class WorkflowTemplateStepUpdateInput {
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
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  timeOffsetInSeconds?: number;

  @ApiProperty({
    required: false,
    type: () => WorkflowTemplateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WorkflowTemplateWhereUniqueInput)
  @IsOptional()
  @Field(() => WorkflowTemplateWhereUniqueInput, {
    nullable: true,
  })
  workflowTemplate?: WorkflowTemplateWhereUniqueInput;
}

export { WorkflowTemplateStepUpdateInput as WorkflowTemplateStepUpdateInput };
