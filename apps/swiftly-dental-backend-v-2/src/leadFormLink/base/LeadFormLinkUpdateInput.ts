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
import { IsString, IsOptional, IsEnum } from "class-validator";
import { EnumLeadFormLinkSector } from "./EnumLeadFormLinkSector";

@InputType()
class LeadFormLinkUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    enum: EnumLeadFormLinkSector,
  })
  @IsEnum(EnumLeadFormLinkSector)
  @IsOptional()
  @Field(() => EnumLeadFormLinkSector, {
    nullable: true,
  })
  sector?: "Dental" | "GP";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  url?: string;
}

export { LeadFormLinkUpdateInput as LeadFormLinkUpdateInput };
