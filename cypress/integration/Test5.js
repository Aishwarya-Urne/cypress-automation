//to add the auto suggestions on cy method
/// <reference types="Cypress" />  

describe('My fifth Test Suite', function(){

it('My 5th test case', function(){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    //Find the column in a dynamic table
    //'.next' can be applied only on '.get' 
    //'.next' will help us to move to immediate next sibling 
    //Here the loop will give us the row index and we can .next to it to move to desrired column 

    cy.get('td:nth-child(2)').each(($e1, index, $list) => {

       const text = $e1.text()

       if(text.includes("Python"))
       {
           cy.get("td:nth-child(2)").eq(index).next().then(function(price){  //resolve the promise as we can not apply .text directly here

            const pricetext = price.text()
            expect(pricetext).to.equal('25')
           })
       }

    })


})

})