'use strict';
const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);

let obj = {
    id:1,
    foodtype :"hi fowod"
}
describe('my Server', ()=> {

    beforeEach(()=> {
        jest.spyOn(console, 'log').mockImplementation();
    })

    it('handles not found request', async () => {
        // add test
        const response = await request.get('/asd');
        expect(response.status).toEqual(404);
    });

    it('handles not found request bad method', async () => {
        // add test
        const response = await request.post('/asd');
        expect(response.status).toEqual(404);
    });

   
    
    it('Create a record using POST', async () => {
        

        const response = await request.post('/food').send(obj);
        expect(response.status).toEqual(200);
    });

    it('Read a list of records using GET', async () => {
        // add test
        const response = await request.get('/food');
        expect(response.status).toEqual(200);
    });
    it('Read a  record using GET', async () => {
        // add test
        const response = await request.get('/food/1');
        expect(response.status).toEqual(200);
    });

    it('Update a record using PUT', async () => {

        const response = await request.put('/food/1').send(obj);
        expect(response.status).toEqual(200);
    });


    it('Destroy a record using DELETE', async () => {
        // add test
        const response = await request.delete('/food/1');
        expect(response.status).toEqual(200);
    });
   
   


});