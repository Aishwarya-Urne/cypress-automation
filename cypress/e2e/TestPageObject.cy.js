//to add the auto suggestions on cy method
/// <reference types="Cypress" />  
//'./' will go to parent dir then main dir and the select the page
import HomePage from './pageObjects/HomePage.cy.js'
import ProductsPage from './pageObjects/ProductsPage.cy'

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
    
    //create object of imported homepage class
    const homepage = new HomePage()

    cy.visit('https://rahulshettyacademy.com/angularpractice/')

    homepage.getEditBox().type(globalThis.data1.name)
    homepage.getGender().select("Female")
    homepage.getTwoWayDataBinding().should('have.value', globalThis.data1.name)
    //validate the elements attribute which takes attr name and its value we can also use props() 
    //method like used in Test7 if we want to use the value in further step
    homepage.getEditBox().should('have.attr', 'minlength', '2')
    homepage.getEnteroreneaurBtn().should('be.disabled')
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

    const productspage = new ProductsPage()
    productspage.clickCheckoutBtn().click()


})


})