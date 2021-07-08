///   <reference types="cypress" /> 

// Test starts now ---> 
describe('001_Visit Website and Login', () => {

  it('1.1_Visit OE Login Page and Check Title', () => {
      
    cy.visit('/site/login')
            
    cy.get('body').then(($body) => {
          
      if ($body.find('#js-logout-btn').length) {
          
        cy.get("#js-logout-btn").should('be.visible').click()
        
      }
   
    })

    cy.title().should('eq','OpenEyes - Login - OE')
      
  })
    
    
  it ('1.2_Login with Valid Credentials and reach Landing Page',() =>{
      
    cy.login()
    
    cy.title().should('eq','Home - OE')
      
  })
    
})
