
export const resolvers = {
  Query: {
    employees: async (_parent, args, ctx) => await ctx.prisma.employee.findMany(),
  },
};
