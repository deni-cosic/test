import { Prisma } from "@prisma/client";
import { CrudMapType } from "src/common/interfaces/crud-map-type.interface";

export class MessageMapType implements CrudMapType {
  aggregate!: Prisma.MessageAggregateArgs;
  count!: Prisma.MessageCountArgs;
  create!: Prisma.MessageCreateArgs;
  delete!: Prisma.MessageDeleteArgs;
  deleteMany!: Prisma.MessageDeleteManyArgs;
  findFirst!: Prisma.MessageFindFirstArgs;
  findMany!: Prisma.MessageFindManyArgs;
  findUnique!: Prisma.MessageFindUniqueArgs;
  update!: Prisma.MessageUpdateArgs;
  updateMany!: Prisma.MessageUpdateManyArgs;
  upsert!: Prisma.MessageUpsertArgs;
}
