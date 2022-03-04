import { objectType } from "nexus";
import { resolve } from "path/posix";
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
