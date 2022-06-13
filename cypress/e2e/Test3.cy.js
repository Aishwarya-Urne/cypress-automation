//to add the auto suggestions on cy method
/// <reference types="Cypress" />  

describe('My third Test Suite', function(){

it('My 3rd test case', function(){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    //Checkboxes
    //.check specially for checkboxes instead of click
    //For 'properties' use 'have' but for behavioural things use 'should.be' assert
    //If we want to have multiple assertion on sigle element use 'and' instead of should again
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')   
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    //single quotes in single quoets are not allowed so use "" either
    cy.get('input[type="checkbox"]').check(['option2', 'option3'])

    //Static Dropdown
    //The tag name will always be 'select' as per html std for static dropdowns
    //cypress has .select method and it takes value attribute or name from dropdown
    cy.get('select').select('option2').should('have.value', 'option2')

    //Dynamic dropdown
    cy.get('#autocomplete').type('ind')

    cy.get('.ui-menu-item div').each(($e1, index, $list) => {

        if($e1.text()=='India')
        {
            cy.wrap($e1).click().should('have.text', 'India')
        }
    })

    //Visible-invisisble elements
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')

    //Radio buttons
    cy.get('input[value="radio2"]').check().should('be.checked')
   
})

})