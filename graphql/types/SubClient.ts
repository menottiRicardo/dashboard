import { extendType, objectType } from "nexus";

export const SubClient = objectType({
  name: "Subclient",
  definition(t) {
    t.string("id");
    t.string("name");
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
