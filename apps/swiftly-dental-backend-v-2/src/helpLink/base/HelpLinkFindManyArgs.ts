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
import { HelpLinkWhereInput } from "./HelpLinkWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { HelpLinkOrderByInput } from "./HelpLinkOrderByInput";

@ArgsType()
class HelpLinkFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => HelpLinkWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => HelpLinkWhereInput, { nullable: true })
  @Type(() => HelpLinkWhereInput)
  where?: HelpLinkWhereInput;

  @ApiProperty({
    required: false,
    type: [HelpLinkOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [HelpLinkOrderByInput], { nullable: true })
  @Type(() => HelpLinkOrderByInput)
  orderBy?: Array<HelpLinkOrderByInput>;

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

export { HelpLinkFindManyArgs as HelpLinkFindManyArgs };
