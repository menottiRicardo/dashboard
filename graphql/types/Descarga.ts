import { arg, extendType, list, objectType, stringArg } from "nexus";
import { Employee } from "./Employee";

export const Descarga = objectType({
  name: "Descarga",
  definition(t) {
    t.string('id');
    t.string("clientId");
    t.string("subClientId");
    t.string("day");
    t.field("createdAt", { type: "Date" });
    t.list.string("employees", {
      type: Employee,
      async resolve(parent, _args, ctx){
        return await ctx.prisma.employee.findMany({
          where: {
            descargas: {
              some: {
                id: parent.id
              }
            }
          }
        })
      }
    });
  },
});

export const CreateDescarga = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createDescarga", {
      type: "Descarga",
      args: {
        subClientId: stringArg(),
        employees: list(stringArg()),
        clientId: stringArg(),
        day: stringArg(),
      },
      async resolve(_parent, args, ctx) {
        
        const data = {
          subClientId: args.subClientId,
          clientId: args.clientId,
          employees: {
            connect: args.employees.map((emp) => ({ id: emp })),
          },
          day: args.day,
        };
        console.log('test', data.employees.connect)
        return await ctx.prisma.descarga.create({
          data: {
            subClientId: args.subClientId,
            clientId: args.clientId,
            employees: {
              connect: args.employees.map((emp) => ({ id: emp })),
            },
            day: args.day,
          },
        });
      },
    });
  },
});

// export const UpdateDescarga = extendType({
//   type: "Mutation",
//   definition(t) {
//     t.nonNull.field("updateDescarga", {
//       type: "Descarga",
//       args: {
//         subClient: stringArg(),
//         subId: stringArg(),
//         employess: list(stringArg()),
//         client: stringArg(),
//       },
//       async resolve(_parent, args, ctx) {
//         return await ctx.prisma.descarga.create({
//           data: {
//             subClient: args.subClient,
//             client: args.client,
//             employee: args.employess,
//             subId: args.subId,
//           },
//         });
//       },
//     });
//   },
// });

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
