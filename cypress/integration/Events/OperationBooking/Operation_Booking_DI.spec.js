/// <reference types="cypress" /> 

//To add Data to Operation Booking event
describe('Add_Data_Operation_Booking_Event', () => {

 //Validate Operation Booking Event page loaded successfully
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


})