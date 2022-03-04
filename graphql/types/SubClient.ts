import { objectType } from "nexus";

export const SubClient = objectType({
    name: "Subclient",
    definition(t) {
      t.string("id");
      t.string("name");
    },
  });