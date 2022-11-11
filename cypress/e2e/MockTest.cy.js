/// <reference types="Cypress" />

describe('My API testing suite', function()
{
    it('my 1st API test', function()
    {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        //with intercept method we can modify the request or response of an API 
        //cypress will 1st listen the call then modify it
        cy.intercept({
            method : 'GET',
            url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
        {
            statusCode : 200,
            body : [
                {
                    "book_name":"RestAssured with Java",
                    "isbn":"RSU",
                    "aisle":"2301"
                }
            ]

        }).as('bookRetrieval')   //resolved promise and saved it in a variable

        cy.get('.btn.btn-primary').click()  //upper code will be executed when this btn is clicked
        cy.wait('@bookRetrieval').should(({request, response}) =>
        {
            // compare the api response length with the data displayed on UI table
            cy.get('tr').should('have.length', response.body.length+2)
        })

        cy.get('p').should('have.text', 'Oops only 1 Book available')
    })
})

