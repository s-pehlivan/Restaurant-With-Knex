/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("product_ingredients", (table) => {
    table.increments("id").primary();
    table.integer("product_id").references("id").inTable("products");
    table.integer("ingredient_id").references("id").inTable("ingredients");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at");
    table.timestamp("deleted_at");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("product_ingredients");
}
