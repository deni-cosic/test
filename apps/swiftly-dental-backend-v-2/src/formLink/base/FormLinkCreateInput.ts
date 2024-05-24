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
  IsBoolean,
  ValidateNested,
  IsOptional,
  IsEnum,
} from "class-validator";
import { PracticeWhereUniqueInput } from "../../practice/base/PracticeWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumFormLinkSector } from "./EnumFormLinkSector";

@InputType()
class FormLinkCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  displayName!: string;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  enabled!: boolean;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  message!: string;

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
    enum: EnumFormLinkSector,
  })
  @IsEnum(EnumFormLinkSector)
  @Field(() => EnumFormLinkSector)
  sector!: "Dental" | "GP";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  url!: string;
}

export { FormLinkCreateInput as FormLinkCreateInput };
