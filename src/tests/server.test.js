const app = require('../index')
const supertest = require('supertest')
const requestWithSupertest = supertest(app)
let server 

beforeAll(() => {
    server = app.listen()
})

afterAll((done) => {
    server.close()
    done()
})

describe('GET /', () => {
    it('should show status=200 and message=OK', async () => {
        const res = await requestWithSupertest.get('/')
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toHaveProperty('status')
        expect(res.body).toHaveProperty('message')
    })
})