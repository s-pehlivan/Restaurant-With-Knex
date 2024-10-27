/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("products", (table) => {
    table.increments("id").primary();
    table
      .integer("category_id")
      .references("id")
      .inTable("categories")
      .onDelete("CASCADE");
    table.string("name").notNullable;
    table.text("description");
    table.integer("price");
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
  return knex.schema.dropTable("products");
}
