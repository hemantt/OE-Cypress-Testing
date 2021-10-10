///    <reference types="cypress" /> 
// Triple Slash Directive for cypress auto suggestions

//Test suite for Add Correspondence Event
describe('0515_Add Correspondence Event', () => {

//Test to check and click the Add Event button
  it('0515.1_Check_Add_Event_Button_And_Click', () => { 
    
    //Check and click the Add Event button
    cy.get("#add-event").should('be.visible').click()
  })
  
  //Test to check and click the Add Correspondence Event link
  it('0515.2_Check_Add_Correspondence_Link_And_Click', () => { 
      
      //Check and click the Add Correspondence Event link
      cy.get("#OphCoCorrespondence-link").should('be.visible').click()
  })

  //Test to check that the Correspondence Event page loaded successfully
  it('0515.3_Check_Add_Correspondence_Page_Loaded_Successfully', () => { 
      
    //Check that the Correspondence Event page is loaded successfully, by verifying the page-header
    cy.fixture("correspondence.json").then((correspondence) => {
      cy.get('.event-title').should('contain',correspondence.Correspondence_page_header)
    })
  })

//Test to check and select Letter Type
  it('0515.4_Add_Letter_Type', () => { 
      
    //Check and select letter-type value from correspondence.json for Letter_type
    cy.fixture("correspondence.json").then((correspondence) => {
      cy.get("#ElementLetter_letter_type_id").should('be.visible').select(correspondence.Letter_type)
    })
  })

  //Test to check and provide the value for letter-body
  it('0515.5_Add_Letter_Body', () => { 
      
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

  //Test to check and provide the value for letter-body
  it('0515.6_Add_E_Sign', () => { 
      
    cy.fixture("correspondence.json").then((correspondence) => {

      cy.get('#signatory_name_Element_OphCoCorrespondence_Esign_EsignUsernamePINField_0').scrollIntoView().should('be.visible')

      cy.get('#signatory_name_Element_OphCoCorrespondence_Esign_EsignUsernamePINField_0').should('be.visible').clear().type(correspondence.E_Sign_Signatory)
      cy.wait(3000)

      cy.get('.autocomplete-match').should('be.visible').click()

      cy.get('#pin_Element_OphCoCorrespondence_Esign_EsignUsernamePINField_0').should('be.visible').clear().type(correspondence.E_Sign_PIN)

      cy.get('.try-pin.js-sign-button').eq(0).should('be.visible').click()
    
    })
})

//Test to check and click the Save button
  it('0515.7_Click_Save_And_Print', () => { 
      
      //Check and click the Save button
      cy.get("#et_saveprint").should('be.visible').click()
  
  })
  
  //Test to verify that the Save happened successfully, and all the values provided earlier, are retrieved
  it('0515.8_Check_Correspondence_Event_Created_Succesfully', () => { 
      
    //Check the header message, for the successful save
    cy.fixture("correspondence.json").then((correspondence) => {
      cy.get('#flash-success').should('contain',correspondence.Successful_save_message)
    })

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
