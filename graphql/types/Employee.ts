import {
  booleanArg,
  extendType,
  idArg,
  intArg,
  nonNull,
  objectType,
  stringArg,
} from "nexus";
import { resolve } from "path/posix";

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
    t.boolean("casco");
    t.field("createdAt", { type: "Date" });
  },
});

export const EmployeeQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("allEmployees", {
      type: "Employee",
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.employee.findMany();
      },
    });
  },
});

export const EmployeeByIDQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("employee", {
      type: "Employee",
      args: { id: nonNull(stringArg()) },
      resolve(_parent, args, ctx) {
        const link = ctx.prisma.employee.findUnique({
          where: {
            id: args.id,
          },
        });
        return link;
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
        casco: booleanArg(),
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
        if (args.casco) {
          newEmployee.paid = args.casco;
        }
        return await ctx.prisma.employee.create({
          data: newEmployee,
        });
      },
    });
  },
});

export const UpdateEmployee = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("updateEmployee", {
      type: "Employee",
      args: {
        id: stringArg(),
        name: nonNull(stringArg()),
        lastname: nonNull(stringArg()),
        cedula: nonNull(stringArg()),
        phone: stringArg(),
        location: stringArg(),
        shirts: intArg(),
        boots: booleanArg(),
        paid: booleanArg(),
        casco: booleanArg(),
      },
      async resolve(_parent, args, ctx) {
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
        if (args.casco) {
          newEmployee.casco = args.casco;
        }
        return await ctx.prisma.employee.update({
          where: {
            id: args.id,
          },
          data: newEmployee,
        });
      },
    });
  },
});

export const DeleteEmployee = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("deleteEmployee", {
      type: "Employee",
      args: {
        id: nonNull(stringArg()),
      },
      async resolve(_parent, args, ctx) {
        return await ctx.prisma.employee.delete({
          where: {
            id: args.id,
          },
        });
      },
    });
  },
});
