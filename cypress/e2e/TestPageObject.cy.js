//to add the auto suggestions on cy method
/// <reference types="Cypress" />  
//'./' will go to parent dir then main dir and the select the page
import HomePage from '../support/pageObjects/HomePage.cy.js'
import ProductsPage from '../support/pageObjects/ProductsPage.cy.js'

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
    //take the url from env variable given in cypress.config.js
    cy.visit(Cypress.env('url'))
    //cy.visit(Cypress.env('url)+"angularpractice/")  //concatenate sub url 

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

it('Select the product names from an array in fixtures and get the sum of all product price', function()
{
    globalThis.data1.productName.forEach(function(element)  //JS code for iterate on array
    {
        cy.selectProduct(element)
    })

    const productspage = new ProductsPage()
    productspage.clickCheckoutBtn().click()
    
    //Sum of all product price in cart
    var sum = 0
    cy.get('tr td:nth-child(4) strong').each(($e1, index, $list) =>
    {
        const actualText = $e1.text()
        var result = actualText.split(" ")  //split by white space (ex. 'Rs.' and '150000')
        result = result[1].trim()
        cy.log(result)
        //sum = sum + result  //adding string with number hence result will be  0 only
        sum = Number(sum) + Number(result)
    }).then(function()  //resolve promise as the JS will asynchronous and will log '0' even before the sum loop is completed 
    {
        cy.log(sum)   //as all sum, split, trim commands are not cypress commands we have to resolve promise manually
    })

    cy.get('h3 strong').then(function(ele)
    {
        const actualText = ele.text()
        var total = actualText.split(" ")  
        total = total[1].trim()
        expect(Number(total)).to.equal(Number(sum))  //compare string with number not possible so convert the strings to numbers.
    })

})

it('Go to checkout page and click on checkout button', function()
{
    cy.get('.btn.btn-success').click()
    cy.get('#country').type('India')
    cy.wait(5000)
    cy.get('.suggestions ul li a').click()
    cy.get('#checkbox2').click({force: true})
    cy.get("input[type='submit']").click()
    //cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks')
    cy.get('.alert').then(function(element)
    {
        const actualText = element.text()
        expect(actualText.includes("Success")).to.be.true   //expect is a chai assertion which accepts a boolean value 
    })
})

})