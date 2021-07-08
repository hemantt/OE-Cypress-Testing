///    <reference types="cypress" /> 

// Before starting the test, get to a required state
before(function() {  
        
    cy.login()

})

// Test starts now -->

// Checks Message Details on the OE Homepage
describe('003_LandingPage MessageDetails are available', () => {
    
    // Message Details Header - ID
    it('3.1_Is ID Available', () => { 
       
        cy.get(".standard>thead>tr>th#hos_num").should('be.visible').should('have.text','ID')
    })

    // Message Details Header - Gender
    it('3.2_Is Gender Available', () => { 
       
        cy.get(".standard>thead>tr>th#gender").should('be.visible').should('have.text','Gender')
    })

    // Message Details Header - Age
    it('3.3_Is Age Available', () => { 
       
        cy.get(".standard>thead>tr>th#age").should('be.visible').should('have.text','Age')
    })

    // Message Details Header - Patient Name
    it('3.4_Is Patient Name Available', () => { 
       
        cy.get(".standard>thead>tr>th#patient_name").should('be.visible').should('have.text','Patient')
    })

    // Message Details Header - Type
    it('3.5_Is Message Type Available', () => { 
       
        cy.get(".standard>thead>tr>th#message_type").should('be.visible').should('have.text','Type')
    })

    // Message Details Header - Date
    it('3.6_Is Message Date Available', () => { 
       
        cy.get(".standard>thead>tr>th#event_date").should('be.visible').should('have.text','Date')
    })

    // Message Details Header - Sender
    it('3.7_Is Message Sender Available', () => { 
       
        cy.get(".standard>thead>tr>th#user").should('be.visible').should('have.text','Sender')
    })

    // Message Details Header - Pagination
    it('3.8_Is Message Pagination Available', () => { 
       
        cy.get(".pagination").should('be.visible').should('contain','of')
    })

})
