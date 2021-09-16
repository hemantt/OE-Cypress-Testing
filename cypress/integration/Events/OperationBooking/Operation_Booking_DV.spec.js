/// <reference types="cypress" /> 

//To add Data to Operation Booking event
describe('Add_Data_Operation_Booking_Event', () => {

    //Verify the value of Procedure
  it('Verify_Procedure', () => { 
    cy.fixture("operationbooking.json").then((operationbooking) => {
  cy.get(".priority-text").eq(2).should('be.visible').should('contain',operationbooking.Operation)
})

})

//Verify the value of Operation Eye
it('Verify_Operation_Eye', () => { 
  cy.fixture("operationbooking.json").then((operationbooking) => {
  cy.get(".priority-text").eq(2).should('be.visible').should('contain',operationbooking.Operation_eye)
  })

})

//Verify the value of Complexity
it('Verify_Complexity', () => { 
        cy.fixture("operationbooking.json").then((operationbooking) => {
      cy.get(".data-value").eq(1).should('be.visible').should('contain',operationbooking.Complexity)
    })
})

//Verify the value of Anaesthetic Type
it('Verify_Anaesthetic_Type', () => { 

    cy.fixture("operationbooking.json").then((operationbooking) => {
      cy.get(".data-value").eq(3).should('be.visible').should('contain',operationbooking.Anaesthetic_type)
    })

})

//Verify the value of Anaesthetic Choice
it('Verify_Anaesthetic_Choice', () => { 
        cy.fixture("operationbooking.json").then((operationbooking) => {
      cy.get(".data-value").eq(4).should('be.visible').should('contain',operationbooking.Anaesthetic_choice)
    })

})

//Verify the value of Patient Needs To Stop Medication
it('Verify_Patient_Needs_To_Stop_Medication', () => { 
        cy.fixture("operationbooking.json").then((operationbooking) => {
      cy.get(".data-value").eq(5).should('be.visible').should('contain',operationbooking.Patient_needs_to_stop_medication)
    })

})

//Verify the value of Doctor Organising Admission
it('Verify_Doctor_Organising_Admission', () => { 

//Scroll to Doctor Organising Admission element
cy.get(".data-value").eq(13).scrollIntoView().should('be.visible')

  cy.fixture("operationbooking.json").then((operationbooking) => {
  cy.get(".data-value").eq(13).should('be.visible').should('contain',operationbooking.Doctor_Organising_Admission)
})

})

//Verify the value of Schedule Option
it('Verify_Schedule_Option', () => { 
        cy.fixture("operationbooking.json").then((operationbooking) => {
      cy.get(".priority-text").eq(4).should('be.visible').should('contain',operationbooking.Schedule_option)
    })
})

})
