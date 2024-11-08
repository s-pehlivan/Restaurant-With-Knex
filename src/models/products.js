import knex from "./knex.js";

const Products = {
  getAll: () => {
    return knex("products").whereNull("deleted_at");
  },
  getById: (id) => {
    return knex("products").where({ id: id, deleted_at: null }).first();
  },
  create: (product) => {
    return knex("products").insert(product).returning("*");
  },
  update: (id, product) => {
    return knex("products").where({ id }).update(product).returning("*");
  },
  delete: (id) => {
    return knex("products")
      .where({ id })
      .update({ deleted_at: new Date() })
      .returning("*");
  },
};

export default Products;
