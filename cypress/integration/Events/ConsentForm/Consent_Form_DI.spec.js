///    <reference types="cypress" /> 

//To add Data into Consent Form event
describe('Add_Data_Consent_Form_Event', () => {

    it('Select_Consent_Form_Book_Procedures' , () => {
        //Validate Book Procedure element
        cy.get(".element-title").should('contain.text', 'Create Consent Form')
    
        //Check and click Book procedures for Consent Form
        cy.get(":nth-child(8) > tbody > tr > td > .booking-select").should('be.visible').click()
    
    })

    it('Select_Consent_Form_Type' , () => {
        //Validate Type element
        cy.get(".Element_OphTrConsent_Type > .element-header > .element-title").should('contain.text', 'Type')
    
        //Select Consent Form Type from drop down
        cy.get("#Element_OphTrConsent_Type_type_id").select('1. Patient agreement to investigation or treatment')
    
    })

    it('Select_Consent_Form_Procedure' , () => {
        //Validate Procedure element
        cy.get(".Element_OphTrConsent_Procedure > .element-header > .element-title").should('contain.text', 'Procedure')
    
        //Select Consent Form Procedure Local Anaesthetic
        cy.get("#Element_OphTrConsent_Procedure_AnaestheticType_LA").click()

        //Click Add Procedure button
        cy.get("#js-add-proc-btn").click()
        
        //Select Laterality as Right Eye
        cy.get('[data-id="2"]').click()

        //Select Procedure as Capsulectomy
        cy.get('[data-label="Capsulectomy"]').click()

        //Select Click to add Procedure button
        cy.get(".flex-t > .add-data-actions > .oe-add-select-search > .add-icon-btn").click()

    })

    it('Select_Consent_Form_Copies' , () => {
        //Validate Copies element
        cy.get(".Element_OphTrConsent_Copies > .element-header > .element-title").should('contain.text', 'Copies')
        cy.get(".Element_OphTrConsent_Copies > .element-fields > .cols-10 > .cols-full > tbody > tr > :nth-child(1)").should('contain.text', 'Paper copy accepted by patient?')
    
        //Select Paper copy accepted by patient as No
        cy.get("#Element_OphTrConsent_Copies_copies_id_2").click()
    
    })
    
})