class HomePage
{
    getEditBox()
    {
        return cy.get('div[class="form-group"] [name="name"]')
    }

    getTwoWayDataBinding()
    {
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getGender()
    {
        return cy.get('select')
    }

    getEnteroreneaurBtn()
    {
        return cy.get('#inlineRadio3')
    }

    getShopTab()
    {
        return cy.contains('Shop')
    }

}
//JS will make sure that this class is available for all other files
export default HomePage