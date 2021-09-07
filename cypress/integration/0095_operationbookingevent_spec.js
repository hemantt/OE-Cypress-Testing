///    <reference types="cypress" /> 
// Triple Slash Directive for cypress auto suggestions

//Test suite for Operation Booking Event
describe('070_Operation Booking Event', () => {

  // Before running the test, first perform login, then change-context and then search operations
  before(() => {  
          
    //Calling login operation, from command
    cy.login()

    //Calling change-context operation, from command
    cy.changecontext()

    //Calling search operation, from command
    cy.search()
    
  })

  //Test to check and click the Add Event button
  it('070.1_Check_Add_Event_Button_And_Click', () => { 
      
    //Check and click the Add Event button
    cy.get("#add-event").should('be.visible').click()
  })
  
  //Test to check and click the Add Operation Booking Event link
  it('070.2_Check_Operation_Booking_Link_And_Click', () => { 
        
    //Check and click the Add Operation Booking Event link
    cy.get("#OphTrOperationbooking-link").should('be.visible').click()
    })

  //Test to check that the Operation Booking Event page loaded successfully
  it('070.3_Check_Add_Operation_Booking_Page_Loaded_Successfully', () => { 
      
    //Check that the Operation Booking Event page is loaded successfully, by verifying the page-headers
    cy.fixture("operationbooking.json").then((operationbooking) => {
      cy.get('.event-title').should('contain',operationbooking.Operation_booking_header)
    })
  })

  //Test to verify that the Diagnosis options is pre-populated as Both
  it('070.4_Check_Diagnosis_Options', () => { 
      
    //To verify that Both is selected
    cy.get("#Element_OphTrOperationbooking_Diagnosis_eye_id_3").should('be.visible').should('be.checked')
  })

  //Test to verify that the Diagnosis is pre-populated with the value provided in the operationbooking json file
  it('070.5_Check_Diagnosis', () => { 

    //to verify that the Diagnosis is pre-populated with the value provided as "Diagnosis", in the operationbooking json file
    cy.fixture("operationbooking.json").then((operationbooking) => {
      cy.get("#enteredDiagnosisText").should('be.visible').contains(operationbooking.Diagnosis)
    })
  })

  //Test to ensure that the Procedure is selected successfully
  it('070.6_Check_And_Select_Procedure', () => { 

    //Click the (+) button for procedure
    cy.get("#add-procedure-list-btn-procs").should('be.visible').click()

    //Select the Procedure value as specified in the operationbooking json for Operation
    cy.fixture("operationbooking.json").then((operationbooking) => {
      cy.get(".add-options").eq(2).contains(operationbooking.Operation).parent().click()
    })

    //Click the (+Click to add) button
    cy.get(".add-icon-btn").eq(1).should('be.visible').click()
  })

  //Test to ensure that Operation (for which side of the eye) gets selected successfully
  it('070.7_Check_And_Select_Eye_For_Operation', () => { 
    cy.fixture("operationbooking.json").then((operationbooking) => {

    //Get the value of Operation_eye, as mentioned in the operationbooking json file
    const cntOperation_eye = operationbooking.Operation_eye

    //For the right eye, select accordingly
    if(cntOperation_eye == "Right"){
      
      //click the Right radio-button
      cy.get("#Element_OphTrOperationbooking_Operation_eye_id_2").should('be.visible').click()
    }

    //For the left eye, select accordingly
    if(cntOperation_eye == "Left"){

      //click the Left radio-button
      cy.get("#Element_OphTrOperationbooking_Operation_eye_id_1").should('be.visible').click()
    }
    })
  })

  //Test to ensure that the Complexity gets selected successfully
  it('070.8_Check_And_Select_Complexity', () => { 
    cy.fixture("operationbooking.json").then((operationbooking) => {

    //Get the value of Complexity, as mentioned in the operationbooking json file
    const cntComplexity = operationbooking.Complexity

    //For the Complexity low, select accordingly
    if(cntComplexity == "Low"){
      
      //click the Low radio-button
      cy.get("#Element_OphTrOperationbooking_Operation_complexity_0").should('be.visible').click()
    }

    //For the Complexity medium, select accordingly
    if(cntComplexity == "Medium"){

      //click the Medium radio-button
      cy.get("#Element_OphTrOperationbooking_Operation_complexity_5").should('be.visible').click()
    }

    //For the Complexity high, select accordingly
    if(cntComplexity == "High"){

      //click the High radio-button
      cy.get("#Element_OphTrOperationbooking_Operation_complexity_10").should('be.visible').click()
    }
    })
  })

    //-----Code for Anaesthetic Type starts here-----

  //Test to ensure that the Anaesthetic Type gets selected successfully
  it('070.9_Check_And_Select_Anaesthetic_Type', () => { 
      cy.fixture("operationbooking.json").then((operationbooking) => {

      //Get the value of Anaesthetic_Type, as mentioned in the operationbooking json file
      const cntAnaesthetic_Type = operationbooking.Anaesthetic_type

      //For the Anaesthetic Type as LA
      if (cntAnaesthetic_Type == "LA")
      {
        //Get the current state of the LA checkbox
        cy.get("input#Element_OphTrOperationbooking_Operation_AnaestheticType_LA").then(($checkbox) => {
          const isChecked = Boolean($checkbox.prop('checked'))
          //console.log(`Initial checkbox: **${initial}**`) //to print the state of the checkbox

          //If the checkbox is already check, then do nothing. Otherwise, check the checkbox
          if(isChecked){}
          else
          {
            cy.get("#Element_OphTrOperationbooking_Operation_AnaestheticType_LA").should('be.visible').click()
          }
        })
      }

      //For the Anaesthetic Type as Sedation
      if (cntAnaesthetic_Type == "Sedation")
      {
        //Get the current state of the Sedation checkbox
        cy.get("input#Element_OphTrOperationbooking_Operation_AnaestheticType_Sedation").then(($checkbox) => {
          const isChecked = Boolean($checkbox.prop('checked'))
          //console.log(`Initial checkbox: **${initial}**`) //to print the state of the checkbox

          //If the checkbox is already check, then do nothing. Otherwise, check the checkbox
          if(isChecked){}
          else
          {
            cy.get("#Element_OphTrOperationbooking_Operation_AnaestheticType_Sedation").should('be.visible').click()
          }
        })
      }

      //For the Anaesthetic Type as GA
      if (cntAnaesthetic_Type == "GA")
      {
        //Get the current state of the GA checkbox
        cy.get("input#Element_OphTrOperationbooking_Operation_AnaestheticType_GA").then(($checkbox) => {
          const isChecked = Boolean($checkbox.prop('checked'))
          //console.log(`Initial checkbox: **${initial}**`) //to print the state of the checkbox

          //If the checkbox is already check, then do nothing. Otherwise, check the checkbox
          if(isChecked){}
          else
          {
            cy.get("#Element_OphTrOperationbooking_Operation_AnaestheticType_GA").should('be.visible').click()
          }
        })
      }

      //For the Anaesthetic Type as No Anaesthetic
      if (cntAnaesthetic_Type == "No Anaesthetic")
      {
        //Get the current state of the No Anaesthetic checkbox
        cy.get("input#Element_OphTrOperationbooking_Operation_AnaestheticType_No Anaesthetic").then(($checkbox) => {
          const isChecked = Boolean($checkbox.prop('checked'))
          //console.log(`Initial checkbox: **${initial}**`) //to print the state of the checkbox

          //If the checkbox is already check, then do nothing. Otherwise, check the checkbox
          if(isChecked){}
          else
          {
            cy.get("#Element_OphTrOperationbooking_Operation_AnaestheticType_No Anaesthetic").should('be.visible').click()
          }
        })
      }
    })
  })
    //-----Code for Anaesthetic Type ends here-----

  //Test to ensure that the Anaesthetic Choice gets selected successfully
  it('070.10_Check_And_Select_Anaesthetic_Choice', () => { 
    cy.fixture("operationbooking.json").then((operationbooking) => {

    //Get the value of Anaesthetic_choice, as mentioned in the operationbooking json file
    const cntAnaesthetic_choice = operationbooking.Anaesthetic_choice

    //For the Anaesthetic_choice Patient preference, select accordingly
    if(cntAnaesthetic_choice == "Patient preference"){
      
      //click the Patient preference radio-button
      cy.get("#Element_OphTrOperationbooking_Operation_anaesthetic_choice_id_1").should('be.visible').click()
    }

    //For the Anaesthetic_choice Surgical requirement, select accordingly
    if(cntAnaesthetic_choice == "Surgical requirement"){

      //click the Surgical requirement radio-button
      cy.get("#Element_OphTrOperationbooking_Operation_anaesthetic_choice_id_2").should('be.visible').click()
    }

    })
  })

  //Test to ensure that the option of Patient Needs To Stop Medication gets selected successfully
  it('070.11_Check_And_Choose_Patient_Needs_To_Stop_Medication', () => { 
    cy.fixture("operationbooking.json").then((operationbooking) => {

    //Get the value of Patient_needs_to_stop_medication, as mentioned in the operationbooking json file
    const cntPatient_needs_to_stop_medication = operationbooking.Patient_needs_to_stop_medication

    //For the option as Yes, select accordingly
    if(cntPatient_needs_to_stop_medication == "Yes"){
      
      //click the Yes radio-button
      cy.get("#Element_OphTrOperationbooking_Operation_stop_medication_1").should('be.visible').click()
    }

    //For the option No, select accordingly
    if(cntPatient_needs_to_stop_medication == "No"){

      //click the No radio-button
      cy.get("#Element_OphTrOperationbooking_Operation_stop_medication_0").should('be.visible').click()
    }

    })
  })

  //Test to ensure that the Schedule option gets selected successfully
  it('070.12_Check_And_Choose_Schedule_Option', () => { 
    cy.fixture("operationbooking.json").then((operationbooking) => {

    //Get the value of Schedule_option, as mentioned in the operationbooking json file
    const cntSchedule_option = operationbooking.Schedule_option

    //For the option as AM, select accordingly
    if(cntSchedule_option == "AM"){
      
      //click the AM radio-button
      cy.get("#Element_OphTrOperationbooking_ScheduleOperation_schedule_options_id_2").should('be.visible').click()
    }

    //For the option PM, select accordingly
    if(cntSchedule_option == "PM"){

      //click the PM radio-button
      cy.get("#Element_OphTrOperationbooking_ScheduleOperation_schedule_options_id_3").should('be.visible').click()
    }

    //For the option No preference, select accordingly
    if(cntSchedule_option == "No preference"){

      //click the No preference radio-button
      cy.get("#Element_OphTrOperationbooking_ScheduleOperation_schedule_options_id_4").should('be.visible').click()
    }

  })
  })

//Test to ensure that doctor organising admission, gets the value from the operationbooking json file
  it('070.13_Check_And_Input_Doctor_Organising_Admission', () => { 

    cy.fixture("operationbooking.json").then((operationbooking) => {
      
      //Pick the value of doctor organising admission as Doctor_Organising_Admission from operationbooking json file, and provide here
      cy.get("#oe-autocompletesearch").should('be.visible').type(operationbooking.Doctor_Organising_Admission)
    })

    //Wait for 3 secondss
    cy.wait(3000)

    //Select the value as searched above
    cy.get(".autocomplete-match").should('be.visible').click()
  })

  //Test to ensure that the above seleced value of Doctor_Organising_Admission, gets populated here successfully
  it('070.14_Verify_Doctor_Organising_Admission_Populated_Correctly', () => { 

    cy.fixture("operationbooking.json").then((operationbooking) => {

      //Check the value that gets populated in the read-only field
      cy.get(".organising_admission_user").should('be.visible').contains(operationbooking.Doctor_Organising_Admission)
    })

  })

  //Test to save the operation booking, by clicking the Save and Schedule now button, and ensuring that
  //the operation booking gets created and the next page load successfully
  it('070.15_Click_Save_And_Schedule_Now_And_Verify_The_Successful_Save', () => { 
    
    //Click at the Save and Schedule now button
    cy.get("#et_save_and_schedule_footer").should('be.visible').click()

    //Verifying the headers of the next page, on successful save above
    //Check that the save actually happens and next page is loaded successfully, by verifying the page-headers
    cy.fixture("operationbooking.json").then((operationbooking) => {
      cy.get(".event-title").should('be.visible').should('contain',operationbooking.Schedule_Operation_Header)
      cy.get("#flash-success").should('be.visible').should('contain',operationbooking.Operation_booking_created_Header)
    })


  })

  //Test to verify the Context_Change and select a value from the operationbooking json file, for Context_Change
  it('070.16_Check_And_Select_Context_Change', () => { 
    cy.fixture("operationbooking.json").then((operationbooking) => {

      //Select the value from Context_Change
      cy.get("#firm_id").should('be.visible').select(operationbooking.Context_Change)
    })
    
  })

  //Test to verify and select a session date
  it('070.17_Verify_Session_Date_And_Click_At_A_Session', () => { 
    
    //Wait for 3 seconds
    cy.wait(3000)

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
  it('070.16_Check_And_Select_Theatre_Time', () => { 
    
    //Click at the Select time button
    cy.get(":nth-child(2) > a > .large").should('be.visible').click()
  })

  //Test to check and verify operation comments
  it('070.17_Check_And_Verify_Operation_Comments', () => { 

    //Scroll to the Confirm slot button
    cy.get("#confirm_slot").scrollIntoView().should('be.visible')

    cy.fixture("operationbooking.json").then((operationbooking) => {

      //Pick the Operation Comments from operationbooking json file, as Operation_Comments
      cy.get(":nth-child(1) > :nth-child(2) > #operation_comments").should('be.visible').clear().type(operationbooking.Operation_Comments)
    })
  })

  //Test to check and verify session comments
  it('070.18_Check_And_Verify_Session_Comments', () => { 

    cy.fixture("operationbooking.json").then((operationbooking) => {

      //Pick the Session Comments from operationbooking json file, as Session_Comments
      cy.get("#Session_comments").should('be.visible').clear().type(operationbooking.Session_Comments)
    })
  })

  //Test to check and verify RTT comments
  it('070.19_Check_And_Verify_RTT_Comments', () => { 

    cy.fixture("operationbooking.json").then((operationbooking) => {

      //Pick the RTT Comments from operationbooking json file, as RTT_Comments
      cy.get(":nth-child(2) > :nth-child(2) > #operation_comments").should('be.visible').clear().type(operationbooking.RTT_Comments)
    })
  })

  //Test to check and click the Confirm slot button, and verify that the next page get loaded successfully
  it('070.20_OperationBookingEvent', () => { 
    
    //Check and click the Confirm slot button
    cy.get("#confirm_slot").should('be.visible').click()

    //Verify that the next page get loaded successfully by reading the header
    cy.fixture("operationbooking.json").then((operationbooking) => {

      //Verify the header value from operationbooking, for Operation_Booking_Scheduled_Header
      cy.get(".event-title").should('be.visible').should('contain',operationbooking.Operation_Booking_Scheduled_Header)
    })
  })

  //Test to check and click the Confirm slot button, and verify that the next page get loaded successfully
  it('070.21_OperationBookingEvent', () => { 

      //Verify the value of Anaesthetic Given by
        cy.fixture("operationbooking.json").then((operationbooking) => {
          cy.get(".priority-text").eq(0).should('be.visible').should('contain',operationbooking.Diagnosis)
        })

  })

  //Verify the value of Procedure
  it('070.22_Verify_Procedure', () => { 
        cy.fixture("operationbooking.json").then((operationbooking) => {
      cy.get(".priority-text").eq(2).should('be.visible').should('contain',operationbooking.Operation)
    })

  })

  //Verify the value of Operation Eye
  it('070.23_Verify_Operation_Eye', () => { 
      cy.fixture("operationbooking.json").then((operationbooking) => {
      cy.get(".priority-text").eq(2).should('be.visible').should('contain',operationbooking.Operation_eye)
      })

  })

  //Verify the value of Complexity
  it('070.24_Verify_Complexity', () => { 
            cy.fixture("operationbooking.json").then((operationbooking) => {
          cy.get(".data-value").eq(1).should('be.visible').should('contain',operationbooking.Complexity)
        })
  })

  //Verify the value of Anaesthetic Type
  it('070.25_Verify_Anaesthetic_Type', () => { 
    
        cy.fixture("operationbooking.json").then((operationbooking) => {
          cy.get(".data-value").eq(3).should('be.visible').should('contain',operationbooking.Anaesthetic_type)
        })

  })

  //Verify the value of Anaesthetic Choice
  it('070.26_Verify_Anaesthetic_Choice', () => { 
            cy.fixture("operationbooking.json").then((operationbooking) => {
          cy.get(".data-value").eq(4).should('be.visible').should('contain',operationbooking.Anaesthetic_choice)
        })

  })

  //Verify the value of Patient Needs To Stop Medication
  it('070.27_Verify_Patient_Needs_To_Stop_Medication', () => { 
            cy.fixture("operationbooking.json").then((operationbooking) => {
          cy.get(".data-value").eq(5).should('be.visible').should('contain',operationbooking.Patient_needs_to_stop_medication)
        })

  })

  //Verify the value of Doctor Organising Admission
  it('070.28_Verify_Doctor_Organising_Admission', () => { 

    //Scroll to Doctor Organising Admission element
    cy.get(".data-value").eq(13).scrollIntoView().should('be.visible')

      cy.fixture("operationbooking.json").then((operationbooking) => {
      cy.get(".data-value").eq(13).should('be.visible').should('contain',operationbooking.Doctor_Organising_Admission)
    })

  })

  //Verify the value of Schedule Option
  it('070.29_Verify_Schedule_Option', () => { 
            cy.fixture("operationbooking.json").then((operationbooking) => {
          cy.get(".priority-text").eq(4).should('be.visible').should('contain',operationbooking.Schedule_option)
        })
  })

})
