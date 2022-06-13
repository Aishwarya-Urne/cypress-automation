//to add the auto suggestions on cy method
/// <reference types="Cypress" />  

describe('My forth Test Suite', function(){

it('My 4th test case', function(){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    //Handle Alert/popups (Auto accepted by cypress)
    cy.get('#alertbtn').click()
    //'confirm' alert
    cy.get('input[value="Confirm"]').click()

    //When any alert or pop up opens a 'window:alert' event is triggred on browser
    //trigger a event from cypress to capture that alert
    //'on' method helps us to trigger any event
    cy.on('window:alert', (str) => {

        //check the alert text with expected text got from the alert event and stored in str
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })
   
    cy.on('window:confirm', (str) => {

        //check the alert text with expected text got from the alert event and stored in str
        expect(str).to.equals('Hello , Are you sure you want to confirm?')
    })


    //Handeling the child window/tab
    //cypress has ability to manupulate the DOM so we will remove the target attribute
    //so that the link will open in same tab.
    //cypress supports jquery functions and to remove the attribute we need to use invoke function 
    //remove target and click the link in same tab
    cy.get('#opentab').invoke('removeAttr', 'target').click() 

    //substrig assertion
    cy.url().should('include', 'rahulshettyacademy')

    //'go' command to move back or forward pages
    cy.go('back')


})

})