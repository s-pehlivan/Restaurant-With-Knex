import knex from "./knex.js";

const Category = {
  getAll: () => {
    return knex("categories").whereNull("deleted_at");
  },
  getById: (id) => {
    return knex("categories").where({ id: id, deleted_at: null }).first();
  },
  create: (category) => {
    return knex("categories").insert(category).and.returning("*");
  },
  update: (id, category) => {
    return knex("categories")
      .where({ id: id, deleted_at: null })
      .update(category)
      .returning("*");
  },
  delete: (id) => {
    return knex("categories")
      .where({ id })
      .update({ deleted_at: knex.fn.now() })
      .returning("*");
  },
};

export default Category;
