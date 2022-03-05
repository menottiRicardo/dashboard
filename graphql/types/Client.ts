import { extendType, nonNull, objectType, stringArg } from "nexus";
import { SubClient } from "./SubClient";

export const Client = objectType({
  name: "Client",
  definition(t) {
    t.string("id");
    t.string("name");
    t.string("location");
    t.string("image");
    t.list.field("subClients", {
      type: SubClient,
      async resolve(parent, _args, ctx) {
        return await ctx.prisma.subClient.findMany({
          where: {
            id: parent.id,
          },
        });
      },
    });
  },
});

export const QueryAllClients = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("allClients", {
      type: "Client",
      resolve(__parent, _args, ctx) {
        return ctx.prisma.client.findMany();
      },
    });
  },
});

export const CreateClient = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createClient", {
      type: "Client",
      args: {
        name: nonNull(stringArg()),
        location: nonNull(stringArg()),
        image: nonNull(stringArg()),
        subclient: stringArg(),
      },
      async resolve(_root, args, ctx) {
        const newClient: any = {
          name: args.name,
          location: args.location,
          image: args.image,
        };

        return await ctx.prisma.client.create({
          data: {
            name: "test",
            location: "test",
            image: "test",
          },
        });
      },
    });
  },
});
