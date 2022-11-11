import { Given, When, Then} from  '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../../../support/pageObjects/HomePage.cy.js'
import ProductsPage from '../../../support/pageObjects/ProductsPage.cy.js'


Given('I open a ecommerce page', function()
{
    cy.visit(Cypress.env('url'))

})

When('I add items to Cart', () =>
{
    const homepage = new HomePage()
    const productspage = new ProductsPage()

    homepage.getShopTab().click()
    globalThis.data1.productName.forEach(function(element)  //JS code for iterate on array
    {
        cy.selectProduct(element)
    })
    productspage.clickCheckoutBtn().click()

})

And('Validating the total prices', () =>
{
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

Then('Select the country Submit and Very Success message', () =>
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
