import { Knex } from "knex";

const tableName:string = 'cars';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable(tableName, function (table:Knex.CreateTableBuilder) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('size').notNullable();
        table.integer('rent_per_day').notNullable();
        table.string('img_id').notNullable();
        table.string('img_url').notNullable();
        table.timestamps(true, true);
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable(tableName);
}

