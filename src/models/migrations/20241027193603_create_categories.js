/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) => {
  return knex.schema.createTable("categories", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.text("description");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at");
    table.timestamp("deleted_at");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => {
  return knex.schema.dropTable("categories");
};
