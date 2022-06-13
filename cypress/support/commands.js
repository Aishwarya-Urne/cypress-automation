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
