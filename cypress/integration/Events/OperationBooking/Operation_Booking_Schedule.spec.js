//Test script for Scheduling Operation Booking event
describe('Schedule_Operation_Booking', () => {

//Test to verify the Context_Change and select a value from the operationbooking json file, for Context_Change
it('Check_And_Select_Context_Change', () => { 
    cy.fixture("operationbooking.json").then((operationbooking) => {

      //Select the value from Context_Change
      cy.get("#firm_id").should('be.visible').select(operationbooking.Context_Change)
    })
    
  })

  //Test to verify and select a session date
  it('Verify_Session_Date_And_Click_At_A_Session', () => { 

    //Get a handle to the entire body of the page
    cy.get('body').then(($body) => {
    
      //TODO: Post POC, this has to be put inside a loop to make the session-selection more dynamic and smart
      //Find if any session is available for the current month
      if ($body.find('.available').length <= 1) {
        
        //Since no session is available in the current month, click a the Next month link
        cy.get(".large").eq(5).click()

        //Click at the first session of the next month
        cy.get("#calendar > tbody > tr > :nth-child(2)").should('be.visible').click()
      
      }
      else {
        //Means that sessions are available for this month

        //if 5 sessions are available, then select the fifth one
        if ($body.find('.available').length == 6) {
          cy.get("#calendar > tbody > tr > :nth-child(6)").should('be.visible').click()
        }

        //if 4 sessions are available, then select the fourth one
        if ($body.find('.available').length == 5) {
          cy.get("#calendar > tbody > tr > :nth-child(5)").should('be.visible').click()
        }

        //if 3 sessions are available, then select the third one
        if ($body.find('.available').length == 4) {
          cy.get("#calendar > tbody > tr > :nth-child(4)").should('be.visible').click()
        }
      
        //if 2 sessions are available, then select the second one
        if ($body.find('.available').length == 3) {
          cy.get("#calendar > tbody > tr > :nth-child(3)").should('be.visible').click()
        }
      
        //if 1 session is available, then select the first one
        if ($body.find('.available').length == 2) {
          cy.get("#calendar > tbody > tr > :nth-child(2)").should('be.visible').click()
        }
      }
    
    })

  })

 //Test to check and select theatre time
 it('Check_And_Select_Theatre_Time', () => { 
    
    //Click at the Select time button
    cy.get(":nth-child(2) > a > .large").should('be.visible').click()
  })

  //Test to check and verify operation comments
  it('Check_And_Verify_Operation_Comments', () => { 

    //Scroll to the Confirm slot button
    cy.get("#confirm_slot").scrollIntoView().should('be.visible')

    cy.fixture("operationbooking.json").then((operationbooking) => {

      //Pick the Operation Comments from operationbooking json file, as Operation_Comments
      cy.get(":nth-child(1) > :nth-child(2) > #operation_comments").should('be.visible').clear().type(operationbooking.Operation_Comments)
    })
  })

  //Test to check and verify session comments
  it('Check_And_Verify_Session_Comments', () => { 

    cy.fixture("operationbooking.json").then((operationbooking) => {

      //Pick the Session Comments from operationbooking json file, as Session_Comments
      cy.get("#Session_comments").should('be.visible').clear().type(operationbooking.Session_Comments)
    })
  })

  //Test to check and verify RTT comments
  it('Check_And_Verify_RTT_Comments', () => { 

    cy.fixture("operationbooking.json").then((operationbooking) => {

      //Pick the RTT Comments from operationbooking json file, as RTT_Comments
      cy.get(":nth-child(2) > :nth-child(2) > #operation_comments").should('be.visible').clear().type(operationbooking.RTT_Comments)
    })
  })

  //Test to check and click the Confirm slot button, and verify that the next page get loaded successfully
  it('Schedule_Slot_OperationBookingEvent', () => { 
    
    //Check and click the Confirm slot button
    cy.get("#confirm_slot").should('be.visible').click()

})

})