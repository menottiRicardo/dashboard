import {
  extendType,
  inputObjectType,
  list,
  nonNull,
  objectType,
  stringArg,
} from "nexus";
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
            clientId: parent.id,
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

export const createSubInput = inputObjectType({
  name: "createSubInput",
  definition(t) {
    t.string("name");
  },
});

export const createClientInput = inputObjectType({
  name: "createClientInput",
  definition(t) {
    t.string("name");
    t.string("location");
    t.string("image");
    t.field("subClients", { type: list(createSubInput) });
  },
});

export const CreateClient = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createClient", {
      type: "Client",
      args: {
        createClientInput: createClientInput.asArg(),
      },
      async resolve(_root, args, ctx) {
        const newClient: any = {
          name: args.createClientInput.name,
          location: args.createClientInput.location,
          image: args.createClientInput.image,
          subclients: {
            create: args.createClientInput.subClients,
          },
        };

        return await ctx.prisma.client.create({
          data: newClient,
        });
      },
    });
  },
});

export const ClientByIDQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("client", {
      type: "Client",
      args: { id: nonNull(stringArg()) },
      resolve(_parent, args, ctx) {
        const link = ctx.prisma.client.findUnique({
          where: {
            id: args.id,
          },
        });
        return link;
      },
    });
  },
});

export const DeleteClient = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("deleteClient", {
      type: "Client",
      args: {
        id: nonNull(stringArg()),
      },
      async resolve(_parent, args, ctx) {
        const deletecl = await ctx.prisma.subClient.deleteMany({
          where: {
            clientId: args.id,
          },
        });
        return await ctx.prisma.client.delete({
          where: {
            id: args.id,
          },
        });
      },
    });
  },
});

export const UpdateClient = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("updateClient", {
      type: "Client",
      args: {
        id: nonNull(stringArg()),
      },
      async resolve(_parent, args, ctx) {
        return await ctx.prisma.client.delete({
          where: {
            id: args.id,
          },
        });
      },
    });
  },
});
