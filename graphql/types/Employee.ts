import {
  booleanArg,
  extendType,
  intArg,
  nonNull,
  objectType,
  stringArg,
} from "nexus";
import { type } from "os";

export const Employee = objectType({
  name: "Employee",
  definition(t) {
    t.string("id");
    t.string("name");
    t.string("lastname");
    t.string("cedula");
    t.string("phone");
    t.string("location");
    t.int("shirts");
    t.boolean("boots");
    t.boolean("paid");
    t.field('createdAt', {type: 'Date'});
  },
});

export const EmployeeQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("employees", {
      type: "Employee",
      resolve(_parent, _args, ctx) {
        return ctx.prisma.employee.findMany();
      },
    });
  },
});

export const PostMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createEmployee", {
      type: "Employee",
      args: {
        name: nonNull(stringArg()),
        lastname: nonNull(stringArg()),
        cedula: nonNull(stringArg()),
        phone: stringArg(),
        location: stringArg(),
        shirts: intArg(),
        boots: booleanArg(),
        paid: booleanArg(),
      },
      async resolve(_root, args, ctx) {
        const newEmployee: any = {
          name: args.name,
          lastname: args.lastname,
          cedula: args.cedula,
        };
        if (args.phone) {
          newEmployee.phone = args.phone;
        }
        if (args.location) {
          newEmployee.location = args.location;
        }
        if (args.shirts) {
          newEmployee.shirts = args.shirts;
        }
        if (args.boots) {
          newEmployee.boots = args.boots;
        }
        if (args.paid) {
          newEmployee.paid = args.paid;
        }
        return await ctx.prisma.employee.create({
          data: newEmployee,
        });
      },
    });
  },
});
