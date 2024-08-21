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
import { FeaturePermissionWhereUniqueInput } from "./FeaturePermissionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { FeaturePermissionUpdateInput } from "./FeaturePermissionUpdateInput";

@ArgsType()
class UpdateFeaturePermissionArgs {
  @ApiProperty({
    required: true,
    type: () => FeaturePermissionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FeaturePermissionWhereUniqueInput)
  @Field(() => FeaturePermissionWhereUniqueInput, { nullable: false })
  where!: FeaturePermissionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => FeaturePermissionUpdateInput,
  })
  @ValidateNested()
  @Type(() => FeaturePermissionUpdateInput)
  @Field(() => FeaturePermissionUpdateInput, { nullable: false })
  data!: FeaturePermissionUpdateInput;
}

export { UpdateFeaturePermissionArgs as UpdateFeaturePermissionArgs };
