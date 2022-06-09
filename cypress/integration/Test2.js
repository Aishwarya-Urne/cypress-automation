//to add the auto suggestions on cy method
/// <reference types="Cypress" />  

describe('My second Test Suite', function(){

it('My 2nd test case', function(){

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)

    //store the locator that is used multiple times with a alias command 
    cy.get('.products').as('ParentProduct')
    
    //with each iterate over the array
    cy.get('@ParentProduct').find('.product').each(($e1, index, $list) => {

        const vegtext = $e1.find('h4.product-name').text()

        if(vegtext.includes('Cashews')){

            //$el.find('button').click()

            cy.wrap($e1).contains('ADD TO CART').click()

        }
    })

    cy.get('.cart-icon').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()
   
})

})