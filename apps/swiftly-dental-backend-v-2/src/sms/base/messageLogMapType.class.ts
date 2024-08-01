import { Prisma } from "@prisma/client";
import { CrudMapType } from "src/common/interfaces/crud-map-type.interface";

export class MessageLogMapType implements CrudMapType {
  aggregate!: Prisma.MessageLogAggregateArgs;
  count!: Prisma.MessageLogCountArgs;
  create!: Prisma.MessageLogCreateArgs;
  delete!: Prisma.MessageLogDeleteArgs;
  deleteMany!: Prisma.MessageLogDeleteManyArgs;
  findFirst!: Prisma.MessageLogFindFirstArgs;
  findMany!: Prisma.MessageLogFindManyArgs;
  findUnique!: Prisma.MessageLogFindUniqueArgs;
  update!: Prisma.MessageLogUpdateArgs;
  updateMany!: Prisma.MessageLogUpdateManyArgs;
  upsert!: Prisma.MessageLogUpsertArgs;
}
