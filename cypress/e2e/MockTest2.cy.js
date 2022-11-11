/// <reference types="Cypress" />

describe('My API testing suite', function()
{
    it('my 1st API test', function()
    {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        //moc the request object

        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (req) => 
        {
            //here the promise is resolved and stored in a req object
            req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=aishwarya"
            req.continue((res) => 
            {
                expect(res.statusCode).to.equal(403)
            })
        }).as("dummyUser")

        cy.get('.btn.btn-primary').click()
        cy.wait('@dummyUser')
    })
})

