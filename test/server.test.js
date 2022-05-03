const supertest = require('supertest');
const {app, finish} = require('../libs/server');

describe("Test for server", () =>{
      test('1) Welcome message', async () => { 
            const response = await supertest(app).get('/')
            expect(response.body.message).toBe("FizzBuzz API welcome 🖖!")
            expect(response.statusCode).toBe(200)
            finish()
      })
      test('2) Endpoint 1: explorers by mision', async () => {
            const response = await supertest(app).get('/v1/explorers/node')
            expect(response.body.length).toBe(10)
            expect(response.statusCode).toBe(200)
            finish()
      })
      test('3) Endpoint 2: Amount explorer by mission', async () => {
            const response = await supertest(app).get('/v1/explorers/amount/node')
            expect(response.body.quantity).toBe(10)
            expect(response.statusCode).toBe(200)
            finish()
      })
      test('4) Endpoint 3: usernames of explorer by mission', async () => {
            const response = await supertest(app).get('/v1/explorers/usernames/node')
            expect(response.body.explorers.length).toBe(10)
            expect(response.statusCode).toBe(200)
            finish()
      })
})
