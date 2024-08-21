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
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { PracticeWhereUniqueInput } from "../../practice/base/PracticeWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumWorkflowTemplateSector } from "./EnumWorkflowTemplateSector";
import { WorkflowTemplateStepUpdateManyWithoutWorkflowTemplatesInput } from "./WorkflowTemplateStepUpdateManyWithoutWorkflowTemplatesInput";

@InputType()
class WorkflowTemplateUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: () => PracticeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PracticeWhereUniqueInput)
  @IsOptional()
  @Field(() => PracticeWhereUniqueInput, {
    nullable: true,
  })
  practice?: PracticeWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumWorkflowTemplateSector,
  })
  @IsEnum(EnumWorkflowTemplateSector)
  @IsOptional()
  @Field(() => EnumWorkflowTemplateSector, {
    nullable: true,
  })
  sector?: "Dental" | "GP";

  @ApiProperty({
    required: false,
    type: () => WorkflowTemplateStepUpdateManyWithoutWorkflowTemplatesInput,
  })
  @ValidateNested()
  @Type(() => WorkflowTemplateStepUpdateManyWithoutWorkflowTemplatesInput)
  @IsOptional()
  @Field(() => WorkflowTemplateStepUpdateManyWithoutWorkflowTemplatesInput, {
    nullable: true,
  })
  steps?: WorkflowTemplateStepUpdateManyWithoutWorkflowTemplatesInput;
}

export { WorkflowTemplateUpdateInput as WorkflowTemplateUpdateInput };
