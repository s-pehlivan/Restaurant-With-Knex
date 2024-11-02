import knex from "./knex.js";

const Ingredients = {
  getAll: () => {
    return knex("ingredients").whereNull("deleted_at");
  },
  getById: (id) => {
    return knex("ingredients").where({ id: id, deleted_at: null }).first();
  },
  create: (ingredient) => {
    return knex("ingredients").insert(ingredient).returning("*");
  },
  update: (id, ingredient) => {
    return knex("ingredients").where({ id }).update(ingredient).returning("*");
  },
  delete: (id) => {
    return knex("ingredients")
      .where({ id })
      .update({ deleted_at: new Date() })
      .returning("*");
  },
};

export default Ingredients;
