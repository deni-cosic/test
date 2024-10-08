/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FormLinkWhereInput } from "./FormLinkWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FormLinkOrderByInput } from "./FormLinkOrderByInput";

@ArgsType()
class FormLinkFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FormLinkWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FormLinkWhereInput, { nullable: true })
  @Type(() => FormLinkWhereInput)
  where?: FormLinkWhereInput;

  @ApiProperty({
    required: false,
    type: [FormLinkOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FormLinkOrderByInput], { nullable: true })
  @Type(() => FormLinkOrderByInput)
  orderBy?: Array<FormLinkOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FormLinkFindManyArgs as FormLinkFindManyArgs };
