const request = require('supertest');
const server = require('./index');

// Cierra el servidor después de las pruebas
afterAll(done => {
    server.close(done);
});

// Prueba para la ruta GET '/'
test('GET /', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, world!');
});