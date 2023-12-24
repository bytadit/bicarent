require('dotenv').config();
const request = require('supertest');
const { app } = require('../app');

// Testing Read All Cars Data
describe('Test Get All Cars', () => {
	it('success get all data cars', async () => {
		const response = await request(app).get('/api/v1/cars');
		console.log('Response Body:', response.body);
		expect(response.statusCode).toBe(200);
	});
});
// Testing Read Car Data by Id
describe('Test Get Car By ID', () => {
	it('success get data car', async () => {
		const response = await request(app).get('/api/v1/cars/6e2bc663-5197-441a-957b-bc75e4a2da7c');
		console.log('Response Body:', response.body);
		expect(response.statusCode).toBe(200);
	});
});
// Testing Failed to Read Unavailable Car Data
describe('Test Get Unavailable Car', () => {
	it('failed get all data cars', async () => {
		const response = await request(app).get('/api/v1/cars/1');
		console.log('Response Body:', response.body);
		expect(response.statusCode).toBe(422);
	});
});
// Testing Create Car Data
describe('Test Create Car Data', () => {
	it('success create car', async () => {
		const car = {
			'plate':'DBH-1234',
			'manufacture':'Mustang GTR',
			'model':'F134',
			'image':'./images/car02.min.jpg',
			'rentPerDay':200000,
			'capacity':8,
			'description':' Brake assist. Leather-wrapped shift knob. Glove box lamp. Air conditioning w/in-cabin microfilter.',
			'availableAt':'2024-03-23T15:49:05.563Z',
			'transmission':'Automatic',
			'available':true,
			'type':'Sedan',
			'year':2023
		};
		const response = await request(app)
			.post('/api/v1/cars')
			.send(car);
		console.log('Response Body:', response.body);
		expect(response.statusCode).toBe(201);
	});
});

// Testing Failed Create Car Data (not all data exists)
describe('Test Failed Create Car Data', () => {
	it('failed create car', async () => {
		const car = {
			'plate':'DBH-999',
			'manufacture':'Audi Mayunda',
		};
		const response = await request(app)
			.post('/api/v1/cars')
			.send(car);
		console.log('Response Body:', response.body);
		expect(response.statusCode).toBe(422);
	});
});
// Testing Update Car Data
describe('Test Update Car Data', () => {
	it('success update data car', async () => {
		const car = {
			'plate':'DBH-4567',
			'manufacture':'Mustang GTR 2 updated',
			'model':'F134 updated',
			'image':'./images/car02.min.jpg',
			'rentPerDay':333333,
			'capacity':10,
		};
		const response = await request(app)
			.put('/api/v1/cars/6e2bc663-5197-441a-957b-bc75e4a2da7c')
			.send(car);
		console.log('Response Body:', response.body);
		expect(response.statusCode).toBe(200);
	});
});
// Testing Delete Car Data
describe('Test Delete Car Data', () => {
	it('success delete car', async () => {
		const response = await request(app)
			.delete('/api/v1/cars/3eead6db-c536-406b-9bc5-85d4c6e38a76');
		console.log('Response Body:', response.body);
		expect(response.statusCode).toBe(200);
	});
});

