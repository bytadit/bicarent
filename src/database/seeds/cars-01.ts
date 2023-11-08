require('dotenv').config();
import type { Knex } from 'knex';
import { faker } from '@faker-js/faker';

enum CarSize {
    Small = "Small",
    Medium = "Medium",
    Large = "Large",
}
export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("cars").del();
    const cars = Array(10)
        .fill(null)
        .map((_, index) => ({
            id: index + 1,
            name: faker.vehicle.vehicle().toLowerCase(),
            size: faker.helpers.enumValue(CarSize),
            rent_per_day: faker.number.int({ min: 100000, max: 1000000 }),
            img_id: faker.string.uuid(),
            img_url: `./public/uploads/image${index}.jpg` ,
        }));

    // Inserts seed entries
    await knex("cars").insert(cars.map(car => ({ ...car})));
};
