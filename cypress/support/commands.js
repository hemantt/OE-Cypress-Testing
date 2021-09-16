// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
   
// Command - login
Cypress.Commands.add('login',()=> {

    cy.visit('/site/login')
    
    cy.get('body').then(($body) => {
    
        // synchronously query from body
        // to find if logout element was created - This is to make sure the user logs in before
        // starting the test (In case he was logged in earlier)
        
          if ($body.find('#js-logout-btn').length) {
            // logout element was present, so logout
            
            cy.get("#js-logout-btn").should('be.visible').click()
          }
  
     
        })

         cy.title().should('eq','OpenEyes - Login - OE')
    
    // Read Credentials from "credentials.json"
    cy.fixture("credentials.json").then((credentials) => {
        cy.get("#LoginForm_username").should('be.visible').clear().type(credentials.Username)
        cy.get("#LoginForm_password").should('be.visible').clear().type(credentials.Password)
        
        cy.get("#login_button").should('be.visible').click()
        cy.title().should('eq','Home - OE') 
        })
       
    } 
    ) 

  // Command - search  
  Cypress.Commands.add('search',()=>{
      
    cy.fixture("search.json").then((search) => {
      
      cy.get("#query").clear().type(search.Patient_ID)
      
    })
      
    cy.get("#js-find-patient").should('be.visible').click()
    
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })

  })
  
  // Command - changecontext
  Cypress.Commands.add('changecontext',()=>{
    
    // User clicks on Change Link on the OE Homepage
    cy.get("#change-firm").should('be.visible').click()

    // A pop up should be displayed to change context
    cy.get(".oe-popup>.title").should('be.visible')
    .should('have.text','Select a new Site and/or Context')

    // Choose a Context from the "context.json" 
    cy.fixture("context.json").then((context) => {
                  
      cy.get('select').then($Other => {$Other.val(context.OptionValue)})

      // Click on "Confirm" button to save the context change
      cy.get(".align-right > .green").click()
                  
    })  
    
  })
  
  // Command - addexamination_clear_elements
Cypress.Commands.add('addexamination_clear_elements',()=>{
    
    cy.wait(2000)
    cy.get("#add-event").should('be.visible').click()
    cy.wait(2000)

    //Check and click the Add Correspondence Event link
    cy.get("#OphCiExamination-link").should('be.visible').click()

    cy.wait(2000)

    cy.get('body').then(($body) => {
      const cnt = $body.find('.oe-i.trash-blue').length

      var i;
      for(i = 0; i <= cnt-1; i++)
      {
        cy.get(".oe-i.trash-blue").eq(0).should('be.visible').click()
        cy.wait(1000)

        cy.get('body').then(($body) => {
          if($body.find('.secondary.small.confirm.ok').length > 0)
          {
            cy.get(".secondary.small.confirm.ok").should('be.visible').click()
            cy.wait(1000)
          }
        })
      }
    })
})