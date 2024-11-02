import knex from "./knex";

const Products = {
  getAll: () => {
    return knex("products").whereNull("deleted_at");
  },
  getById: () => {
    return knex("products").where({ id: id, deleted_at: null }).first();
  },
  create: (product) => {
    console.log("product", product);
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
