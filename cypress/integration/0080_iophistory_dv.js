//Test script for IOP History element
describe('0080_IOP_History_Element_DV', () => {

    //Verify that IOP History element is loaded successfully
    it('0080.9_To_Validate_IOP_History_Element_Header' , () => {
      cy.get('[data-element-type-name="IOP History"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="IOP History"] > header > h3').should('be.visible').should('contain', 'IOP History')
    })

})
