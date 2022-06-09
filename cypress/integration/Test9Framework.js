//to add the auto suggestions on cy method
/// <reference types="Cypress" />  


describe('Frame Test', function(){

    //Before wil run before all it methods
    //ideally all setup related code is written in before block
    //All fixtures loading should be defined in before hook
    before(function()
    {
        //.fuxture method will help you to load the fixture data
        //give the name of the '.josn' file present under fixtures folder as we can have
        //multiple .json files written for each test under the fixtures folder
        //Resolve the promise and store all info it in variable whose scope will be for that block only
        cy.fixture('example').then(function(data)
        {
            //now the scope of data variable is now for entire class
            this.data1 = data
        })
    })

it('test 1st case', function(){

    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    cy.get('div[class="form-group"] [name="name"]').type(this.data1.name)
    cy.get('select').select("Female")
    
})

})