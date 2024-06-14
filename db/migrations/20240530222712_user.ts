import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('user', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.text('avatar').notNullable();
        table.enum('role', ['member', 'admin', 'superadmin']).notNullable();
        table.string("created_by").notNullable().defaultTo('system');
        table.string("updated_by").notNullable().defaultTo('system');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('user');
}

