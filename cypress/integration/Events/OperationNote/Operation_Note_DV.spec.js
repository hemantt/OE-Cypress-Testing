///    <reference types="cypress" /> 

//To Validate Data entered into Operation Note event
describe('Validate_Data_Operation_Note_Event', () => {

    //Test to check that the entered data into Operation Note Event page saved successfully
    it('Check_Operation_Note_Page_Saved_Successfully', () => { 

  
          //Verify the value of Surgeon
          cy.fixture("operationnote.json").then((operationnote) => {
            cy.get('#js-listview-info-pro > .dot-list > :nth-child(1)').should('be.visible').should('contain',operationnote.Surgeon)
          })
  
          //Verify the value of IOL type
          cy.fixture("operationnote.json").then((operationnote) => {
            cy.get(':nth-child(6) > :nth-child(2) > .data-value').should('be.visible').should('contain',operationnote.IOL_type)
          })
  
          //Verify the value of IOL power
          cy.fixture("operationnote.json").then((operationnote) => {
            cy.get(':nth-child(7) > :nth-child(2) > .data-value').should('be.visible').should('contain',operationnote.IOL_power)
          })
  
          //Verify the value of predicted-refraction
          cy.fixture("operationnote.json").then((operationnote) => {
            cy.get(':nth-child(8) > :nth-child(2) > .data-value').should('be.visible').should('contain',operationnote.Predicted_refraction)
          })
  
          //Scroll to Complications element
          cy.get(".view-cataract-complications > .element-data > .data-value > .tile-data-overflow > .large > tbody > tr > td").scrollIntoView().should('be.visible')
          //Verify the value of Complications
          cy.fixture("operationnote.json").then((operationnote) => {
            cy.get(".view-cataract-complications > .element-data > .data-value > .tile-data-overflow > .large > tbody > tr > td").should('be.visible').should('contain',operationnote.Complications)
          })
  
          //Scroll to Anaesthetic Type element
          cy.get("#js-listview-anaesthetic-pro > .dot-list > :nth-child(1)").scrollIntoView().should('be.visible')
          //Verify the value of Anaesthetic Type
          cy.fixture("operationnote.json").then((operationnote) => {
            cy.get('#js-listview-anaesthetic-pro > .dot-list > :nth-child(1)').should('be.visible').should('contain',operationnote.Anaesthetic_Type)
          })
  
          //Verify the value of Anaesthetic LA Delivery Methods
          cy.fixture("operationnote.json").then((operationnote) => {
            cy.get('#js-listview-anaesthetic-pro > .dot-list > :nth-child(2)').should('be.visible').should('contain',operationnote.Anaesthetic_LA_Delivery_Methods)
          })
  
          //Verify the value of Anaesthetic Given by
          cy.fixture("operationnote.json").then((operationnote) => {
            cy.get('.dot-list > :nth-child(4)').should('be.visible').should('contain',operationnote.Anaesthetic_Given_by)
          })

        })
    
    })
