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
import { IsString, ValidateNested, IsEnum, IsOptional } from "class-validator";
import { PracticeWhereUniqueInput } from "../../practice/base/PracticeWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumWorkflowTemplateSector } from "./EnumWorkflowTemplateSector";
import { WorkflowTemplateStepCreateNestedManyWithoutWorkflowTemplatesInput } from "./WorkflowTemplateStepCreateNestedManyWithoutWorkflowTemplatesInput";

@InputType()
class WorkflowTemplateCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: () => PracticeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PracticeWhereUniqueInput)
  @Field(() => PracticeWhereUniqueInput)
  practice!: PracticeWhereUniqueInput;

  @ApiProperty({
    required: true,
    enum: EnumWorkflowTemplateSector,
  })
  @IsEnum(EnumWorkflowTemplateSector)
  @Field(() => EnumWorkflowTemplateSector)
  sector!: "Dental" | "GP";

  @ApiProperty({
    required: false,
    type: () =>
      WorkflowTemplateStepCreateNestedManyWithoutWorkflowTemplatesInput,
  })
  @ValidateNested()
  @Type(() => WorkflowTemplateStepCreateNestedManyWithoutWorkflowTemplatesInput)
  @IsOptional()
  @Field(
    () => WorkflowTemplateStepCreateNestedManyWithoutWorkflowTemplatesInput,
    {
      nullable: true,
    }
  )
  workflowTemplateSteps?: WorkflowTemplateStepCreateNestedManyWithoutWorkflowTemplatesInput;
}

export { WorkflowTemplateCreateInput as WorkflowTemplateCreateInput };
