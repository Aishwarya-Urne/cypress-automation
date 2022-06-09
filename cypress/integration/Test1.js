/// <reference types="Cypress" />

describe('My First Test Suite', function(){

it('My 1st test case', function(){

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.product').should('have.length', 5)

    //only visible items are taken
    cy.get('.product:visible').should('have.length', 4)

    //store the locator that is used multiple times with a alias command 
    cy.get('.products').as('ParentProduct')

    //fetch parent class 1st then find child classes in it
    cy.get('@ParentProduct').find('.product').should('have.length', 4)

    //find index and click
    cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
    
    //with each iterate over the array
    cy.get('.products').find('.product').each(($el, index, $list) => {

        const vegtext = $el.find('h4.product-name').text()

        if(vegtext.includes('Cashews')){

            //$el.find('button').click()

            cy.wrap($el).contains('ADD TO CART').click()

        }
    })
    //resolving promise by adding a 'then' method manully 
   cy.get('.brand.greenLogo').then(function(logoele){

    cy.log(logoele.text())    //will print on browser's run log (related to cypress)

   })
    //text() is not a cypress comannd it is jquery method so below command will not work
    //hence it does not resolve promise by itself we have to manully handle it
   //cy.get('.brand.greenLogo').text() 

   //this will print on a dev tools console (not related to cypress)
   console.log('My test case is running')

   //assert if the logo text is correctly displayed
   cy.get('.brand.greenLogo').should('have.text', 'GREENKART').then(function(){
       console.log('The actual matches the expected value') //console log in Dom's console
   })

})

it('My 2nd test case', function(){



})




})