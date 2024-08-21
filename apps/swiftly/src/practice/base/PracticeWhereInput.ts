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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { FeaturePermissionWhereUniqueInput } from "../../featurePermission/base/FeaturePermissionWhereUniqueInput";
import { FormLinkListRelationFilter } from "../../formLink/base/FormLinkListRelationFilter";
import { FormSubmissionListRelationFilter } from "../../formSubmission/base/FormSubmissionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LeadFormLinkListRelationFilter } from "../../leadFormLink/base/LeadFormLinkListRelationFilter";
import { LeadListRelationFilter } from "../../lead/base/LeadListRelationFilter";
import { MessageListRelationFilter } from "../../message/base/MessageListRelationFilter";
import { PatientListRelationFilter } from "../../patient/base/PatientListRelationFilter";
import { PracticeInfoLinkListRelationFilter } from "../../practiceInfoLink/base/PracticeInfoLinkListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EnumPracticeSector } from "./EnumPracticeSector";
import { WorkflowTemplateListRelationFilter } from "../../workflowTemplate/base/WorkflowTemplateListRelationFilter";

@InputType()
class PracticeWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  addressLine1?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  addressLine2?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  addressLine3?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter;

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
  featurePermission?: FeaturePermissionWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => FormLinkListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FormLinkListRelationFilter)
  @IsOptional()
  @Field(() => FormLinkListRelationFilter, {
    nullable: true,
  })
  formLinks?: FormLinkListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => FormSubmissionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FormSubmissionListRelationFilter)
  @IsOptional()
  @Field(() => FormSubmissionListRelationFilter, {
    nullable: true,
  })
  formSubmissions?: FormSubmissionListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  googlePlaceId?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => LeadFormLinkListRelationFilter,
  })
  @ValidateNested()
  @Type(() => LeadFormLinkListRelationFilter)
  @IsOptional()
  @Field(() => LeadFormLinkListRelationFilter, {
    nullable: true,
  })
  leadFormLinks?: LeadFormLinkListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => LeadListRelationFilter,
  })
  @ValidateNested()
  @Type(() => LeadListRelationFilter)
  @IsOptional()
  @Field(() => LeadListRelationFilter, {
    nullable: true,
  })
  leads?: LeadListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => MessageListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MessageListRelationFilter)
  @IsOptional()
  @Field(() => MessageListRelationFilter, {
    nullable: true,
  })
  message?: MessageListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  nhsReviewUrl?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  odsCode?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => PatientListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PatientListRelationFilter)
  @IsOptional()
  @Field(() => PatientListRelationFilter, {
    nullable: true,
  })
  patients?: PatientListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  phoneNumber?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  postcode?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => PracticeInfoLinkListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PracticeInfoLinkListRelationFilter)
  @IsOptional()
  @Field(() => PracticeInfoLinkListRelationFilter, {
    nullable: true,
  })
  practiceInfoLinks?: PracticeInfoLinkListRelationFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  remindAfter?: IntFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  remindEvery?: IntFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  remindedAt?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumPracticeSector,
  })
  @IsEnum(EnumPracticeSector)
  @IsOptional()
  @Field(() => EnumPracticeSector, {
    nullable: true,
  })
  sector?: "Dental" | "GP";

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  senderId?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  stripeConnectedAccountId?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  website?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => WorkflowTemplateListRelationFilter,
  })
  @ValidateNested()
  @Type(() => WorkflowTemplateListRelationFilter)
  @IsOptional()
  @Field(() => WorkflowTemplateListRelationFilter, {
    nullable: true,
  })
  workflowTemplates?: WorkflowTemplateListRelationFilter;
}

export { PracticeWhereInput as PracticeWhereInput };
