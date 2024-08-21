/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsString,
  MaxLength,
  ValidateNested,
  IsOptional,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Practice } from "../../practice/base/Practice";
import { EnumWorkflowTemplateSector } from "./EnumWorkflowTemplateSector";
import { WorkflowTemplateStep } from "../../workflowTemplateStep/base/WorkflowTemplateStep";

@ObjectType()
class WorkflowTemplate {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: () => Practice,
  })
  @ValidateNested()
  @Type(() => Practice)
  @IsOptional()
  practice?: Practice | null;

  @ApiProperty({
    required: true,
    enum: EnumWorkflowTemplateSector,
  })
  @IsEnum(EnumWorkflowTemplateSector)
  @Field(() => EnumWorkflowTemplateSector, {
    nullable: true,
  })
  sector?: "Dental" | "GP";

  @ApiProperty({
    required: false,
    type: () => [WorkflowTemplateStep],
  })
  @ValidateNested()
  @Type(() => WorkflowTemplateStep)
  @IsOptional()
  steps?: Array<WorkflowTemplateStep>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { WorkflowTemplate as WorkflowTemplate };
