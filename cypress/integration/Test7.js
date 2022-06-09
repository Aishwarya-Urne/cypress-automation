//to add the auto suggestions on cy method
/// <reference types="Cypress" />  

describe('My fifth Test Suite', function(){

it('My 5th test case', function(){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    //Handle the new child window (2nd way)
    //use jquery method '.prop()' to get the value of any attribute

    cy.get('#opentab').then(function(e1){

        const url = e1.prop('href')
        cy.log(url)
        cy.visit(url)   // This will give the error when we are clicking the url different from original domain 
    })
})

})