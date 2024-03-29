/// <reference types ="cypress"/>
describe('GET API User', () => {
  it('get user', () => {
      cy.request({
          method: 'GET',
          url: 'https://gorest.co.in/public/v2/users',

      }).then((response) => {
          // Assertions using Cypress
          expect(response.status).to.eq(200)
          // Assuming 'name' is nested within 'data' array in the response
         // expect(response.body.data[0].name).to.eq('Garuda Adiga')
      })
 })
})
