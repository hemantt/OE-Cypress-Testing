///    <reference types="cypress" /> 

// Test Starts now -->

// Checks all the reuired sections are available on the page
describe('005_Patient Overview Page', () => {
    
    // Before running the test, first perform login, then change-context and then search operations
    before(function() {  
            
        //Calling login operation, from command
        cy.login()
    
        //Calling change-context operation, from command
        cy.changecontext()
    
        //Calling search operation, from command
        cy.search()
        
    })

  // Eye Diagnoses
    it('5.1_EyeDiagnoses_isAvailable', () => { 
       
    cy.get("#idg-ele-view-eye-diagnoses>header>.element-title").should('have.text','Eye Diagnoses')
    
    })
    
    // Eye Procedures
    it('5.2_EyeProcedures_isAvailable', () => {
       
    
        cy.get("#idg-ele-view-eye-procedures>header>.element-title").should('have.text','Eye Procedures')
        
       
    })
    
    // Eye Medications
    it('5.3_EyeMedications_isAvailable', () => {   
       
    
        cy.get("#idg-ele-view-eye-medications>header>.element-title").should('have.text','Eye Medications')
        
       
    })
    
    // Management Summaries
    it('5.4_ManagementSummaries_isAvailable', () => {   
       
    
        cy.get("#idg-ele-view-management-summaries>header>.element-title").should('have.text','Management Summaries')
       
       
    })
    
    // Appointments
    it('5.5_ViewAppointmentSection_isAvailable', () => {   
       
    
        cy.get("#idg-ele-view-appointments>header>.element-title").should('have.text','Appointments')
    
       
    })
    
    //Problems and Plans
    it('5.6_Problems & Plans_isAvailable', () => {   
       
    
        cy.get(".element-header>.element-title").eq(5).should('have.text','Problems & Plans')
        
       
    })
    
    // Event History- Checks if recent events on patient is available
    it('5.7_EventHistory_isAvailable', () => {   
       
    
        cy.get(".fade").eq(5).should('contain','ted:')
        
    })

    // Checks if Allergies & Alerts section is available on the  mousehover pop up
    it('5.8_Allergies&Alerts_isAvailable', () => {   
       
        cy.get(".patient-allergies-risks").should('be.visible').trigger('mouseover')
        
        cy.get(".cols-left > .popup-overflow > .alert-box > strong").should('contain','Allergies') 
        cy.get(".cols-right>.popup-overflow>.alert-box>strong").should('contain','Alerts') 

    })
    
    // Checks Patient Info mousehover pop up and verifies its sections
    it('5.9_PatientInfo_isAvailable', () => {   
       
        cy.get("#js-demographics-btn").should('be.visible').trigger('mouseover')
        
        // Demographics sectuon
        cy.get(".patient-popup-demographics>.flex-layout>.cols-left>.popup-overflow>.subtitle")
        .should('contain','Demographics') 
        
        // PAS Contacts section
        cy.get(".popup-overflow>.patient-demographics>tbody").eq(1).children("tr").eq(0).children("td")
        .children("h2")
        .should('contain','PAS Contacts')

    })

    // Checks Patient Management mousehover pop up and verifies its sections
    
    // Management Summaries
    it('5.10_PatientManagement_ManagementSummaries_isAvailable', () => {   
       
        cy.get(".patient-management").should('be.visible').trigger('mouseover')
        
        cy.get(".popup-overflow").eq(2).children(".subtitle").should('contain','Management Summaries')

    })

    // Appointments
    it('5.11_PatientManagement_Appointments_isAvailable', () => {   
       
        cy.get(".patient-management").should('be.visible').trigger('mouseover')
        
        cy.get(".popup-overflow").eq(3).children(".subtitle").should('contain','Appointments')

    })
    
    // Problems & Plans
    it('5.12_PatientManagement_Problems&Plans_isAvailable', () => {   
       
        cy.get(".patient-management").should('be.visible').trigger('mouseover')
        
        cy.get(".problems-plans").eq(1).children("h3").should('contain','Problems & Plans')

    })
    
    // Event History - Past Appointments
    it('5.13_PatientManagement_EventHistory(PastAppointments)_isAvailable', () => {   
       
        cy.get(".patient-management").should('be.visible').trigger('mouseover')
        
        cy.get(".js-get-past-appointments").eq(0).children("h3").should('contain','Past Appointments')

    })

    // Checks Patient Quick Summary mousehover pop up and verifies its sections

    // Eye Diagnoses
    it('5.14_PatientQuickSummary_EyeDiagnoses_isAvailable', () => {   
       
        cy.get("#js-quicklook-btn").should('be.visible').trigger('mouseover')
        cy.get(".oe-popup-overflow").children(".group").children(".label").eq(0).should('contain','Eye Diagnoses')
        
    
    })
    
    // Systemic Diagnoses
    it('5.15_PatientQuickSummary_Systemic Diagnoses_isAvailable', () => {   
       
        cy.get("#js-quicklook-btn").should('be.visible').trigger('mouseover')
        cy.get(".oe-popup-overflow").children(".group").children(".label").eq(1).should('contain','Systemic Diagnoses')
        
    
    })

    // Eye Procedures
    it('5.16_PatientQuickSummary_EyeProcedures_isAvailable', () => {   
       
        cy.get("#js-quicklook-btn").should('be.visible').trigger('mouseover')
        cy.get(".oe-popup-overflow").children(".group").children(".label").eq(2).should('contain','Eye Procedures')
        
    })

    // Systemic Procedures
    it('5.17_PatientQuickSummary_SystemicProcedures_isAvailable', () => {   
       
        cy.get("#js-quicklook-btn").should('be.visible').trigger('mouseover')
        cy.get(".oe-popup-overflow").children(".group").children(".label").eq(3).should('contain','Systemic Procedures')
        
    
    })
    
    // Systemic Medications
    it('5.18_PatientQuickSummary_SystemicMedications_isAvailable', () => {   
       
        cy.get("#js-quicklook-btn").should('be.visible').trigger('mouseover')
        cy.get(".oe-popup-overflow").children(".group").children(".label").eq(4).should('contain','Systemic Medications')
        
    })

    // Eye Medications
    it('5.19_PatientQuickSummary_EyeMedications_isAvailable', () => {   
       
        cy.get("#js-quicklook-btn").should('be.visible').trigger('mouseover')
        cy.get(".oe-popup-overflow").children(".group").children(".label").eq(5).should('contain','Eye Medications')
        
    })

    // Family History
    it('5.20_PatientQuickSummary_FamilyHistory_isAvailable', () => {   
       
        cy.get("#js-quicklook-btn").should('be.visible').trigger('mouseover')
        cy.get(".oe-popup-overflow").children(".group").children(".label").eq(6).should('contain','Family History')
        
    })

    // Social History
    it('5.21_PatientQuickSummary_SocialHistory_isAvailable', () => {   
       
        cy.get("#js-quicklook-btn").should('be.visible').trigger('mouseover')
        cy.get(".oe-popup-overflow").children(".group").children(".label").eq(7).should('contain','Social History')
        
    })

    
})
