//In Commands.js we can create our own custom commands that can be reused throught the tests
//We do not have to explicitly import this file in any test file
//Cypress will automatically fetch the commands written here

Cypress.Commands.add("selectProduct", (productName)=> 
{
    cy.get('.card-title').each(($e1, index, $list) =>
    {
       if($e1.text().includes(productName)) 
       {
            cy.get('.btn.btn-info').eq(index).click()    //index will always have index for blackbeery item even if it is changed in future
       }
    })
})

Cypress.Commands.add("LoginAPI", () =>
{
    cy.request('POST', 'https://rahulshettyacademy.com/api/ecom/auth/login', 
    {
        userEmail: "aishurne@gmail.com", 
        userPassword: "Test@123"
    }).then(function(response)
    {
        expect(response.status).to.eq(200)
        Cypress.env('token', response.body.token)
    })
})