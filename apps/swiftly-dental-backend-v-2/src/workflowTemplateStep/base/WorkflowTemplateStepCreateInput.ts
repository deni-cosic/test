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
import { IsString, ValidateNested } from "class-validator";
import { WorkflowTemplateWhereUniqueInput } from "../../workflowTemplate/base/WorkflowTemplateWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class WorkflowTemplateStepCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  message!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  timeOffsetInSeconds!: string;

  @ApiProperty({
    required: true,
    type: () => WorkflowTemplateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WorkflowTemplateWhereUniqueInput)
  @Field(() => WorkflowTemplateWhereUniqueInput)
  workflowTemplate!: WorkflowTemplateWhereUniqueInput;
}

export { WorkflowTemplateStepCreateInput as WorkflowTemplateStepCreateInput };
