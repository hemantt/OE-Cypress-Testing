///    <reference types="cypress" /> 

//To Validate Data entered into Correspondence event
describe('Validate_Data_Correspondence_Event', () => {

    //Test to check that the entered data into Correspondence Event page saved successfully
    it('Check_Correspondence_Page_Saved_Successfully', () => { 
          
    //Check the letter_type, for the value provided earlier
    cy.fixture("correspondence.json").then((correspondence) => {
        cy.get('.data-value.text-right').eq(1).should('contain',correspondence.Letter_type)
      })
  
      // Check if  the js viewer iFrame is visible first
      cy.get('iframe#pdf-js-viewer').should('be.visible')
        
      //Check the letter-body to have the same value provided in the earlier step
      cy.fixture("correspondence.json").then((correspondence) => {
      
      //Check into the body of iFrame
      cy.get('iframe#pdf-js-viewer').then($iframe => {
        const $body = $iframe.contents().find('body')
        cy.wrap($body)
          .should('contain',correspondence.Letter_body) //Check if the info entered in letter matches 
        })
      
    })

    })
    
})