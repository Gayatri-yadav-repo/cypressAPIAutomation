/// <reference types ="cypress"/>

describe('POST API User', () => {
   let accessToken = 'Bearer b3c91b6e148fddf2ca1e99f184b11eae853c7b388bb9621e062f1c3de0e285ea';

    it('create user', () => {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'Authorization': accessToken,
                'Content-Type': 'application/json'
              

            },
            body: {
                "name": "Automation",
                "gender": "female",
                "email": "Aut8aa123aw12q12@gmail.com", // Corrected email here
                "status": "active"
            }
        }).then((response) => {
            // Assertions using Cypress
            cy.log(response);
           // expect(response.status).to.eq(201); // Assuming successful creation returns status code 201
            expect(response.status).to.eq(201); // Assuming successful creation returns status code 201
            expect(response.body).to.have.property('email'); // Assuming response body contains a 'data' property
            expect(response.body.email).to.equal('Aut8aa123aw12q12@gmail.com');
            // Assuming 'name' is nested within 'data' array in the response
            // expect(response.body.data[0].name).to.eq('Automation');
        });
    });
});