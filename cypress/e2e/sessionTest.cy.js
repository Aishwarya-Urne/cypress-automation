/// <reference types="Cypress" />
const neatCSV = require('neat-csv')

let productName   //create a globel variable with let keyword

describe('JWT test Suite', function(){

    it('handle jwt toke and push it in browsers local storage', async() =>
    {
        //here the loginAPI is a custom command hence we have to resolve the promise
        cy.LoginAPI().then(function()
        {
            //the visit method accepts 2 parameters here url and options which we given in {}
            cy.visit('https://rahulshettyacademy.com/client', 
            {
                //onboreforeload is and event which will be executed before it hits the url
                //we will write a JS function on window opened by cypress
                onBeforeLoad : function(window)
                {   
                    //it will set the token taken from commands.js file and storted in env variable token 
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            })
        })
        cy.get('.card-body b').eq(1).then(function(ele)
        {
            productName = ele.text()
        })
        cy.get('.card-body button:last-of-type').eq(1).click()
        cy.get("[routerlink='/dashboard/cart']").click()
        cy.contains('Checkout').click()
        cy.get("[placeholder='Select Country']").type('India')
        cy.get(".ta-results button").each(($e1, index, $list) =>
        {
            if($e1.text() == "India")
            {
                cy.wrap($e1).click()
            }
        })
        cy.wait(2000)
        cy.get('.btnn').click()
        cy.wait(3000)
        cy.get('.order-summary button').click()

        //neatCSv to read the csv contents 
        //Here the neatCSV accepts the csv file contents in text format
        //which we can access via javascript object but before that we need to
        //covert the csv file content in to a text format
        //Cypress.config("fileServerFolder") will get the dynamic project path for the file from the location
    
        cy.readFile(Cypress.config("fileServerFolder") + "/path of the csv file from download folder")
        .then(async function(text)
        {
            //await also resolves the promise but we have to use async befor the function
            const csv = await neatCSV(text)
            console.log(csv)
            const actualProductName = csv[0]["Product Name"]  //when you have space in property user [] insted of csv[0].product name
            expect(productName).to.equal(actualProductName)
        })
        

    })

})