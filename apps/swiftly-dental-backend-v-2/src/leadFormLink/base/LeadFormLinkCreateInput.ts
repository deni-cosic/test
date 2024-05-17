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
import { IsString, ValidateNested, IsOptional, IsEnum } from "class-validator";
import { PracticeWhereUniqueInput } from "../../practice/base/PracticeWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumLeadFormLinkSector } from "./EnumLeadFormLinkSector";

@InputType()
class LeadFormLinkCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

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
    required: true,
    enum: EnumLeadFormLinkSector,
  })
  @IsEnum(EnumLeadFormLinkSector)
  @Field(() => EnumLeadFormLinkSector)
  sector!: "Dental" | "GP";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  url!: string;
}

export { LeadFormLinkCreateInput as LeadFormLinkCreateInput };
