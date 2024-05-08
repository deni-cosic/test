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
import { IsDate, IsString, ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { FormSubmissionCreateNestedManyWithoutPatientsInput } from "./FormSubmissionCreateNestedManyWithoutPatientsInput";
import { PracticeWhereUniqueInput } from "../../practice/base/PracticeWhereUniqueInput";
import { WorkflowCreateNestedManyWithoutPatientsInput } from "./WorkflowCreateNestedManyWithoutPatientsInput";

@InputType()
class PatientCreateInput {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  dateOfBirth!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  firstName!: string;

  @ApiProperty({
    required: false,
    type: () => FormSubmissionCreateNestedManyWithoutPatientsInput,
  })
  @ValidateNested()
  @Type(() => FormSubmissionCreateNestedManyWithoutPatientsInput)
  @IsOptional()
  @Field(() => FormSubmissionCreateNestedManyWithoutPatientsInput, {
    nullable: true,
  })
  formSubmissions?: FormSubmissionCreateNestedManyWithoutPatientsInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  lastName!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  mobileNumber!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  nhsNumber?: string | null;

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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  stripeCustomerId?: string | null;

  @ApiProperty({
    required: false,
    type: () => WorkflowCreateNestedManyWithoutPatientsInput,
  })
  @ValidateNested()
  @Type(() => WorkflowCreateNestedManyWithoutPatientsInput)
  @IsOptional()
  @Field(() => WorkflowCreateNestedManyWithoutPatientsInput, {
    nullable: true,
  })
  workflows?: WorkflowCreateNestedManyWithoutPatientsInput;
}

export { PatientCreateInput as PatientCreateInput };
