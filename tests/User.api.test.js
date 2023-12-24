require('dotenv').config();
const request = require('supertest');
const { app } = require('../app');


// Testing Read All Users Data
describe('Test Get All Users', () => {
	it('success get all users data', async () => {
		const response = await request(app).get('/api/v1/users');
		console.log('Response Body:', response.body);
		expect(response.statusCode).toBe(200);
	});
});

// Testing Register User
describe('Test Register User', () => {
	it('success register', async () => {
		const user = {
			name: 'membertest',
			username: 'membertest',
			email: 'membertest@gmail.com',
			password: '1234567',
			confPassword: '1234567',
			role: 'member'
		};
		const response = await request(app).post('/api/v1/register').send(user);
		console.log('Response Body:', response.body);
		expect(response.statusCode).toBe(201);
	});
});
// Testing Login User
describe('Test Login User', () => {
	it('success login', async () => {
		const user = {
			email:'admin@gmail.com',
			password:'admin123',
		};
		const response = await request(app).post('/api/v1/login').send(user);
		console.log('Response Body:', response.body);
		expect(response.statusCode).toBe(201);
	});
  
	it('failed login : wrong password', async () => {
		const failedUser = {
			email: 'admin@gmail.com',
			password: '123456',
		};
		const response = await request(app).post('/api/v1/login').send(failedUser);
		console.log('Response Body:', response.body);
		expect(response.statusCode).toBe(401);
	});
});

