///    <reference types="cypress" /> 

//To add Data into Correspondence event
describe('Add_Data_Correspondence_Event', () => {

//Test to check that the Correspondence Event page loaded successfully
it('Check_Add_Correspondence_Page_Loaded_Successfully', () => { 
      
    //Check that the Correspondence Event page is loaded successfully, by verifying the page-header
    cy.fixture("correspondence.json").then((correspondence) => {
      cy.get('.event-title').should('contain',correspondence.Correspondence_page_header)
    })
  })

//Test to check and select Letter Type
it('Add_Letter_Type', () => { 
      
    //Check and select letter-type value from correspondence.json for Letter_type
    cy.fixture("correspondence.json").then((correspondence) => {
      cy.get("#ElementLetter_letter_type_id").should('be.visible').select(correspondence.Letter_type)
    })
  })

  //Test to check and provide the value for letter-body
  it('Add_Letter_Body', () => { 
      
    //Check if iFrame is visible first
    cy.get('iframe#ElementLetter_body_ifr').should('be.visible')
    
    //Get the letter-type value from correspondence.json for Letter_body
    cy.fixture("correspondence.json").then((correspondence) => {
      
      //Type into the body of iFrame
      cy.get('iframe#ElementLetter_body_ifr').then($iframe => {
        const $body = $iframe.contents().find('body')
        cy.wrap($body)
          .type(correspondence.Letter_body) //Type the letter-body from the correspondence.json for Letter_body
      })
    })
})

})