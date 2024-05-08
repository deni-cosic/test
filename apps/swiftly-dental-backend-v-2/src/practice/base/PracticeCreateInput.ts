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
  IsOptional,
  ValidateNested,
  IsInt,
  IsDate,
  IsEnum,
} from "class-validator";
import { FeaturePermissionWhereUniqueInput } from "../../featurePermission/base/FeaturePermissionWhereUniqueInput";
import { Type } from "class-transformer";
import { FormSubmissionCreateNestedManyWithoutPracticesInput } from "./FormSubmissionCreateNestedManyWithoutPracticesInput";
import { LeadCreateNestedManyWithoutPracticesInput } from "./LeadCreateNestedManyWithoutPracticesInput";
import { PatientCreateNestedManyWithoutPracticesInput } from "./PatientCreateNestedManyWithoutPracticesInput";
import { PracticeInfoLinkCreateNestedManyWithoutPracticesInput } from "./PracticeInfoLinkCreateNestedManyWithoutPracticesInput";
import { EnumPracticeSector } from "./EnumPracticeSector";
import { UserCreateNestedManyWithoutPracticesInput } from "./UserCreateNestedManyWithoutPracticesInput";
import { WorkflowTemplateCreateNestedManyWithoutPracticesInput } from "./WorkflowTemplateCreateNestedManyWithoutPracticesInput";

@InputType()
class PracticeCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  addressLine1?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  addressLine2?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  addressLine3?: string | null;

  @ApiProperty({
    required: false,
    type: () => FeaturePermissionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FeaturePermissionWhereUniqueInput)
  @IsOptional()
  @Field(() => FeaturePermissionWhereUniqueInput, {
    nullable: true,
  })
  featurePermission?: FeaturePermissionWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => FormSubmissionCreateNestedManyWithoutPracticesInput,
  })
  @ValidateNested()
  @Type(() => FormSubmissionCreateNestedManyWithoutPracticesInput)
  @IsOptional()
  @Field(() => FormSubmissionCreateNestedManyWithoutPracticesInput, {
    nullable: true,
  })
  formSubmissions?: FormSubmissionCreateNestedManyWithoutPracticesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  googlePlaceId?: string | null;

  @ApiProperty({
    required: false,
    type: () => LeadCreateNestedManyWithoutPracticesInput,
  })
  @ValidateNested()
  @Type(() => LeadCreateNestedManyWithoutPracticesInput)
  @IsOptional()
  @Field(() => LeadCreateNestedManyWithoutPracticesInput, {
    nullable: true,
  })
  leads?: LeadCreateNestedManyWithoutPracticesInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  nhsReviewUrl?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  odsCode!: string;

  @ApiProperty({
    required: false,
    type: () => PatientCreateNestedManyWithoutPracticesInput,
  })
  @ValidateNested()
  @Type(() => PatientCreateNestedManyWithoutPracticesInput)
  @IsOptional()
  @Field(() => PatientCreateNestedManyWithoutPracticesInput, {
    nullable: true,
  })
  patients?: PatientCreateNestedManyWithoutPracticesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phoneNumber?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  postcode?: string | null;

  @ApiProperty({
    required: false,
    type: () => PracticeInfoLinkCreateNestedManyWithoutPracticesInput,
  })
  @ValidateNested()
  @Type(() => PracticeInfoLinkCreateNestedManyWithoutPracticesInput)
  @IsOptional()
  @Field(() => PracticeInfoLinkCreateNestedManyWithoutPracticesInput, {
    nullable: true,
  })
  practiceInfoLinks?: PracticeInfoLinkCreateNestedManyWithoutPracticesInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  remindAfter!: number;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  remindedAt?: Date | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  remindEvery!: number;

  @ApiProperty({
    required: true,
    enum: EnumPracticeSector,
  })
  @IsEnum(EnumPracticeSector)
  @Field(() => EnumPracticeSector)
  sector!: "Dental" | "GP";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  senderId?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  stripeConnectedAccountId?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutPracticesInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutPracticesInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutPracticesInput, {
    nullable: true,
  })
  users?: UserCreateNestedManyWithoutPracticesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  website?: string | null;

  @ApiProperty({
    required: false,
    type: () => WorkflowTemplateCreateNestedManyWithoutPracticesInput,
  })
  @ValidateNested()
  @Type(() => WorkflowTemplateCreateNestedManyWithoutPracticesInput)
  @IsOptional()
  @Field(() => WorkflowTemplateCreateNestedManyWithoutPracticesInput, {
    nullable: true,
  })
  workflowTemplates?: WorkflowTemplateCreateNestedManyWithoutPracticesInput;
}

export { PracticeCreateInput as PracticeCreateInput };
