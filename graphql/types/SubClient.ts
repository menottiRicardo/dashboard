import {
  arg,
  extendType,
  nonNull,
  objectType,
  stringArg,
} from "nexus";

export const SubClient = objectType({
  name: "Subclient",
  definition(t) {
    t.string("id");
    t.string("name");
    t.string("clientId");
  },
});

export const QueryAllSubClients = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("allSubclients", {
      type: "Subclient",
      resolve(__parent, _args, ctx) {
        return ctx.prisma.subClient.findMany();
      },
    });
  },
});

export const CreateSubClient = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createSubClient", {
      type: "Subclient",
      args: {
        name: nonNull(stringArg()),
        clientId: nonNull(stringArg()),
      },
      async resolve(__parent, args, ctx) {
        const data = {
          subclients: {
            create: {
              name: args.name,
              clientId: args.clientId,
            },
          },
        };
        return await ctx.prisma.client.update({
          where: {
            id: args.clientId,
          },
          data,
        });
      },
    });
  },
});

export const QuerySubClient = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("subclient", {
      type: "Subclient",
      args: { id: nonNull(stringArg()) },
      resolve(_parent, args, ctx) {
        const Subclient = ctx.prisma.subClient.findUnique({
          where: {
            id: args.id,
          },
        });
        return Subclient;
      },
    });
  },
});
