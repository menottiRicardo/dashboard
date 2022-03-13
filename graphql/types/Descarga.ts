import dynamic from "next/dynamic";
import { arg, extendType, list, objectType, stringArg } from "nexus";
import { Employee } from ".";

export const Descarga = objectType({
  name: "Descarga",
  definition(t) {
    t.string("client");
    t.string("subClient");
    t.string("subId");
    t.field("createdAt", { type: "Date" });
    t.list.string("employee");
  },
});

export const CreateDescarga = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createDescarga", {
      type: "Descarga",
      args: {
        subClient: stringArg(),
        subId: stringArg(),
        employess: list(stringArg()),
        client: stringArg(),
        day: stringArg(),
      },
      async resolve(_parent, args, ctx) {
        return await ctx.prisma.descarga.create({
          data: {
            subClient: args.subClient,
            client: args.client,
            employee: args.employess,
            subId: args.subId,
            day: args.day,
          },
        });
      },
    });
  },
});

export const UpdateDescarga = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("updateDescarga", {
      type: "Descarga",
      args: {
        subClient: stringArg(),
        subId: stringArg(),
        employess: list(stringArg()),
        client: stringArg(),
      },
      async resolve(_parent, args, ctx) {
        return await ctx.prisma.descarga.create({
          data: {
            subClient: args.subClient,
            client: args.client,
            employee: args.employess,
            subId: args.subId,
          },
        });
      },
    });
  },
});

export const QueryAllDescargas = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("descargas", {
      type: "Descarga",
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.descarga.findMany();
      },
    });
  },
});
