import { extendType, objectType } from "nexus";

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
