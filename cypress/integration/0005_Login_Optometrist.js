///    <reference types="cypress" /> 

// Test starts now ---> 
describe('0005_Visit Website and Login', () => {

  it('0005.1_Verify_Login_Page_Loaded_Successfully', () => {
      
    cy.visit('/site/login')
            
    cy.get('body').then(($body) => {
      if ($body.find('#js-logout-btn').length) {
        cy.get("#js-logout-btn").should('be.visible').click()
      }
    })

    cy.title().should('eq','OpenEyes - Login - OE')
  })
    
  it('0005.2_Verify_Login_Successful', () => {

    // Read Credentials from "credentials_Optometrist.json"
    cy.fixture("credentials_Optometrist.json").then((credentials) => {
      cy.get("#LoginForm_username").should('be.visible').clear().type(credentials.Username)
      cy.get("#LoginForm_password").should('be.visible').clear().type(credentials.Password)
      
      cy.get("#login_button").should('be.visible').click()
    })

    cy.title().should('eq','Home - OE')
      
  })
})
