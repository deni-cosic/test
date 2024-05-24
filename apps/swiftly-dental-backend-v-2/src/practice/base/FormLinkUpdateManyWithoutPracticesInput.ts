/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { FormLinkWhereUniqueInput } from "../../formLink/base/FormLinkWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class FormLinkUpdateManyWithoutPracticesInput {
  @Field(() => [FormLinkWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FormLinkWhereUniqueInput],
  })
  connect?: Array<FormLinkWhereUniqueInput>;

  @Field(() => [FormLinkWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FormLinkWhereUniqueInput],
  })
  disconnect?: Array<FormLinkWhereUniqueInput>;

  @Field(() => [FormLinkWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FormLinkWhereUniqueInput],
  })
  set?: Array<FormLinkWhereUniqueInput>;
}

export { FormLinkUpdateManyWithoutPracticesInput as FormLinkUpdateManyWithoutPracticesInput };
