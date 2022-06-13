//to add the auto suggestions on cy method
/// <reference types="Cypress" />  
//'./' will go to parent dir then main dir and the select the page
import HomePage from './pageObjects/HomePage'

describe('Use Fixture file data', () => {

    //Before wil run before all it methods
    //ideally all setup related code is written in before block
    //All fixtures loading should be defined in before hook
    before('Load fixture file', () =>
    {
        //.fuxture method will help you to load the fixture data
        //give the name of the '.josn' file present under fixtures folder as we can have
        //multiple .json files written for each test under the fixtures folder
        //Resolve the promise and store all info it in variable whose scope will be for that block only
        cy.fixture('example').then(function(data)
        {
            //now the scope of data variable is now for entire class
            globalThis.data1 = data
        })
    })

it('Pulling data from fixture file', function(){

    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    cy.get('div[class="form-group"] [name="name"]').type(globalThis.data1.name)
    cy.get('select').select("Female")
    cy.get(':nth-child(4) > .ng-untouched').should('have.value', globalThis.data1.name)
    //validate the elements attribute which takes attr name and its value we can also use props() 
    //method like used in Test7 if we want to use the value in further step
    cy.get('div[class="form-group"] [name="name"]').should('have.attr', 'minlength', '2')
    cy.get('#inlineRadio3').should('be.disabled')
    //cy.pause()  //for debug use puse or debug() method
    
})

it('Go to shopping page and add items to the cart', function()
{
    cy.contains('Shop').click()
    cy.selectProduct('Nokia Edge')       //selectProduct is a custom command written in commands.js
    cy.selectProduct('Blackberry')

})

it('Select the product names from an array in fixtures', function()
{
    globalThis.data1.productName.forEach(function(element)  //JS code for iterate on array
    {
        cy.selectProduct(element)
    })
})

})