//to add the auto suggestions on cy method
/// <reference types="Cypress" />  
//to get all cypress iframe command suggestion
/// <reference types = "cypress-iframe"/>
import 'cypress-iframe'

describe('Frame Test', function(){

it('Test the iframe', function(){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    
    //frameloaded is a command which will load the iframe in cypress object
    cy.frameLoaded('#courses-iframe')

    //switch to ifreame which is loaded in cypress opject in previous command
    cy.iframe().find('a[href*="mentorship"]').eq(0).click()
    cy.wait(4000)
    cy.iframe().contains('BRONZE')
})

})