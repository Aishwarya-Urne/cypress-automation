//to add the auto suggestions on cy method
/// <reference types="Cypress" />  

describe('My 6th Test Suite', function(){

it('My 6th test case', function(){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    //Mouse Hover
    //No direct mouse hover support in cypress like Aictions class in selenium
    //but we can use (invoke) jquery method 'show' which will manipulate dom to show hidden element

    cy.get('.mouse-hover-content').invoke('show')  //mouse hover to show hidden elements
    cy.contains('Top').click()
   // cy.contains('Top').click({force: true})   //forcefully click the hidden/invisible element without mouse hover in this case
    cy.url().should('include', 'top')

    
})

})