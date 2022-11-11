
describe('My API testing suite', function()
{
    it('my 1st API test', function()
    {
        //hitting the api call by cypress 
        //request object accepts (mothod, url, body)
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php' , {
            "name" : "Learn Appium Automation with Java",
            "isbn":" bacd",
            "aisle" : "2457",
            "author": "John foe"
        }).then(function(response)
        {
            expect(response.body).to.have.property("Msg", "successfully added")
            expect(response.status).to.eq(200)
        })
    })
   
})