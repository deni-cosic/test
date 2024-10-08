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
import { HelpLinkWhereUniqueInput } from "./HelpLinkWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { HelpLinkUpdateInput } from "./HelpLinkUpdateInput";

@ArgsType()
class UpdateHelpLinkArgs {
  @ApiProperty({
    required: true,
    type: () => HelpLinkWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HelpLinkWhereUniqueInput)
  @Field(() => HelpLinkWhereUniqueInput, { nullable: false })
  where!: HelpLinkWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => HelpLinkUpdateInput,
  })
  @ValidateNested()
  @Type(() => HelpLinkUpdateInput)
  @Field(() => HelpLinkUpdateInput, { nullable: false })
  data!: HelpLinkUpdateInput;
}

export { UpdateHelpLinkArgs as UpdateHelpLinkArgs };
