///    <reference types="cypress" /> 
// Triple Slash Directive for cypress auto suggestions


// Before running the test, first perform login, then change-context and then search operations
before(function() {  
        
  //Calling login operation, from command
  cy.login()

  //Calling change-context operation, from command
  cy.changecontext()

  //Calling search operation, from command
  cy.search()
  
})

//Test suite for Add Operation Note Event
describe('080_Operation Note Event', () => {

  //Test to check and click the Add Event button
  it('080.1_Check_Add_Event_Button_And_Click', () => { 
      
    //Check and click the Add Event button
    cy.get("#add-event").should('be.visible').click()
  })
  
  //Test to check and click the Add Operation Note Event link
  it('080.2_Check_Add_Operation Note_Link_And_Click', () => { 
      
    //Check and click the Add Operation Note Event link
    cy.get("#OphTrOperationnote-link").should('be.visible').click()
  })

  //Test to check that the Operation Note Event page loaded successfully
  it('080.3_Check_Add_Operation_Note_Page_Loaded_Successfully', () => { 
      
    //Check that the Operation Note Event page is loaded successfully, by verifying the page-headers
    cy.fixture("operationnote.json").then((operationnote) => {
      cy.get('.event-title').should('contain',operationnote.Select_booking_note)
      cy.get('.element-title').should('contain',operationnote.Create_operation_note_header)
    })
  })

  //Test to create an Operation Event
  it('080.4_Select An Operation Booking', () => { 

    //Read from/under the body tag
    cy.get('body').then(($body) => {

    //If there is no Opeation Booking, then do nothing
    if ($body.find('.booking-select').length <= 1) {}
    else{
      //If there is an Opeation Booking, then do the following

      //Check the first Opeation Booking in the stack, and click it
      cy.get(".booking-select").eq(0).should('be.visible').click()

      //Check that the Create Operation Note page is loaded successfully, by verifying the page-header
      cy.fixture("operationnote.json").then((operationnote) => {
        cy.get('.event-title').should('contain',operationnote.Operation_note_header)
      })
      
      cy.fixture("operationnote.json").then((operationnote) => {
        //Check for the Theatre control and supply value from operationnote json file
        cy.get("#Element_OphTrOperationnote_SiteTheatre_theatre_id").should('be.visible').select(operationnote.Theatre)
        
        //Check for the Surgeon control and supply value from operationnote json file
        cy.get("#Element_OphTrOperationnote_Surgeon_surgeon_id").should('be.visible').select(operationnote.Surgeon)
        })
  
        //Wait for 3 seconds
        cy.wait(3000)
  
        //Check for the Cataract doodles (small images) and pick one, as mentioned in the operationnote json file
        cy.fixture("operationnote.json").then((operationnote) => {
          cy.get(".ed2-toolbar-panel.ed2-main-toolbar").should('be.visible').contains(operationnote.Cataract).parent().click()
        })
  
        //Wait for 3 seconds
        cy.wait(3000)

        //Check for the IOL-type control and pick one, as mentioned in the operationnote json file
        cy.fixture("operationnote.json").then((operationnote) => {
          cy.get("#Element_OphTrOperationnote_Cataract_iol_type_id").should('be.visible').select(operationnote.IOL_type)
        })
  
        cy.fixture("operationnote.json").then((operationnote) => {
          //Check for the IOL-power control and pick one, as mentioned in the operationnote json file
          cy.get("#Element_OphTrOperationnote_Cataract_iol_power").should('be.visible').clear().type(operationnote.IOL_power)

          //Check for the predicted-refraction control and pick one, as mentioned in the operationnote json file
          cy.get("#Element_OphTrOperationnote_Cataract_predicted_refraction").should('be.visible').clear().type(operationnote.Predicted_refraction)
    
          //Check for the Complications control and pick one, as mentioned in the operationnote json file
          cy.get("#OphTrOperationnote_CataractComplications").should('be.visible').select(operationnote.Complications)
        })
  
        //Check that the PCR Risk exists and has some value
        cy.get("#right_eye_pcr > .data-group-pad-top > #pcr-risk-div").should('be.visible').should('contain',"PCR Risk")

        //-----Code for Anaesthetic Type starts here-----

        //Note - The POC is done only with the Anaesthetic Type as LA, as per the requirement
        cy.fixture("operationnote.json").then((operationnote) => {

          //Get the value of Anaesthetic_Type, as mentioned in the operationnote json file
          const cntAnaesthetic_Type = operationnote.Anaesthetic_Type

          //For the Anaesthetic Type as LA
          if (cntAnaesthetic_Type == "LA")
          {
            //Get the current state of the LA checkbox
            cy.get("input#Element_OphTrOperationnote_Anaesthetic__LA").then(($checkbox) => {
              const isChecked = Boolean($checkbox.prop('checked'))
              //console.log(`Initial checkbox: **${initial}**`) //to print the state of the checkbox
    
              //If the checkbox is already check, then do nothing. Otherwise, check the checkbox
              if(isChecked){}
              else
              {
                cy.get("#Element_OphTrOperationnote_Anaesthetic__LA").should('be.visible').click()
              }
            })
          }

          //For the Anaesthetic Type as Sedation
          if (cntAnaesthetic_Type == "Sedation")
          {
            //Get the current state of the Sedation checkbox
            cy.get("input#Element_OphTrOperationnote_Anaesthetic__Sedation").then(($checkbox) => {
              const isChecked = Boolean($checkbox.prop('checked'))
              //console.log(`Initial checkbox: **${initial}**`) //to print the state of the checkbox
    
              //If the checkbox is already check, then do nothing. Otherwise, check the checkbox
              if(isChecked){}
              else
              {
                cy.get("#Element_OphTrOperationnote_Anaesthetic__Sedation").should('be.visible').click()
              }
            })
          }

          //For the Anaesthetic Type as GA
          if (cntAnaesthetic_Type == "GA")
          {
            //Get the current state of the GA checkbox
            cy.get("input#Element_OphTrOperationnote_Anaesthetic__GA").then(($checkbox) => {
              const isChecked = Boolean($checkbox.prop('checked'))
              //console.log(`Initial checkbox: **${initial}**`) //to print the state of the checkbox
    
              //If the checkbox is already check, then do nothing. Otherwise, check the checkbox
              if(isChecked){}
              else
              {
                cy.get("#Element_OphTrOperationnote_Anaesthetic__GA").should('be.visible').click()
              }
            })
          }

          //For the Anaesthetic Type as No Anaesthetic
          if (cntAnaesthetic_Type == "No Anaesthetic")
          {
            //Get the current state of the No Anaesthetic checkbox
            cy.get("input.NoAnaesthetic").then(($checkbox) => {
              const isChecked = Boolean($checkbox.prop('checked'))
              //console.log(`Initial checkbox: **${initial}**`) //to print the state of the checkbox
    
              //If the checkbox is already check, then do nothing. Otherwise, check the checkbox
              if(isChecked){}
              else
              {
                cy.get(".NoAnaesthetic").should('be.visible').click()
              }
            })
          }
        })

        //-----Code for Anaesthetic Type ends here-----

        //-----Code for Anaesthetic LA Delivery Methods by starts here-----

        cy.fixture("operationnote.json").then((operationnote) => {

          //Get the value of Anaesthetic_LA_Delivery_Methods, as mentioned in the operationnote json file
          const cntAnaesthetic_LA_Delivery_Methods = operationnote.Anaesthetic_LA_Delivery_Methods

          //For the Anaesthetic LA Delivery Methods as Subtenons
          if (cntAnaesthetic_LA_Delivery_Methods == "Subtenons")
          {
            //Get the current state of the LA checkbox
            cy.get("input#Element_OphTrOperationnote_Anaesthetic__Subtenons").then(($checkbox) => {
              const isChecked = Boolean($checkbox.prop('checked'))
              //console.log(`Initial checkbox: **${initial}**`) //to print the state of the checkbox
    
              //If the checkbox is already check, then do nothing. Otherwise, check the checkbox
              if(isChecked){}
              else
              {
                cy.get("#Element_OphTrOperationnote_Anaesthetic__Subtenons").should('be.visible').click()
              }
            })
          }

          //For the Anaesthetic LA Delivery Methods as Peribulbar
          if (cntAnaesthetic_LA_Delivery_Methods == "Peribulbar")
          {
            //Get the current state of the Sedation checkbox
            cy.get("input#Element_OphTrOperationnote_Anaesthetic__Peribulbar").then(($checkbox) => {
              const isChecked = Boolean($checkbox.prop('checked'))
              //console.log(`Initial checkbox: **${initial}**`) //to print the state of the checkbox
    
              //If the checkbox is already check, then do nothing. Otherwise, check the checkbox
              if(isChecked){}
              else
              {
                cy.get("#Element_OphTrOperationnote_Anaesthetic__Peribulbar").should('be.visible').click()
              }
            })
          }

          //For the Anaesthetic LA Delivery Methods as Retrobulbar
          if (cntAnaesthetic_LA_Delivery_Methods == "Retrobulbar")
          {
            //Get the current state of the GA checkbox
            cy.get("input#Element_OphTrOperationnote_Anaesthetic__Retrobulbar").then(($checkbox) => {
              const isChecked = Boolean($checkbox.prop('checked'))
              //console.log(`Initial checkbox: **${initial}**`) //to print the state of the checkbox
    
              //If the checkbox is already check, then do nothing. Otherwise, check the checkbox
              if(isChecked){}
              else
              {
                cy.get("#Element_OphTrOperationnote_Anaesthetic__Retrobulbar").should('be.visible').click()
              }
            })
          }

          //For the Anaesthetic LA Delivery Methods as Subconjunctival
          if (cntAnaesthetic_LA_Delivery_Methods == "Subconjunctival")
          {
            //Get the current state of the No Anaesthetic checkbox
            cy.get("input#Element_OphTrOperationnote_Anaesthetic__Subconjunctival").then(($checkbox) => {
              const isChecked = Boolean($checkbox.prop('checked'))
              //console.log(`Initial checkbox: **${initial}**`) //to print the state of the checkbox
    
              //If the checkbox is already check, then do nothing. Otherwise, check the checkbox
              if(isChecked){}
              else
              {
                cy.get("#Element_OphTrOperationnote_Anaesthetic__Subconjunctival").should('be.visible').click()
              }
            })
          }

          //For the Anaesthetic LA Delivery Methods as Topical
          if (cntAnaesthetic_LA_Delivery_Methods == "Topical")
          {
            //Get the current state of the Sedation checkbox
            cy.get("input#Element_OphTrOperationnote_Anaesthetic__Topical").then(($checkbox) => {
              const isChecked = Boolean($checkbox.prop('checked'))
              //console.log(`Initial checkbox: **${initial}**`) //to print the state of the checkbox
    
              //If the checkbox is already check, then do nothing. Otherwise, check the checkbox
              if(isChecked){}
              else
              {
                cy.get("#Element_OphTrOperationnote_Anaesthetic__Topical").should('be.visible').click()
              }
            })
          }

          //For the Anaesthetic LA Delivery Methods as Topical and intracameral
          if (cntAnaesthetic_LA_Delivery_Methods == "Topical and intracameral")
          {
            //Get the current state of the GA checkbox
            cy.get("input#Element_OphTrOperationnote_Anaesthetic__Topical and intracameral").then(($checkbox) => {
              const isChecked = Boolean($checkbox.prop('checked'))
              //console.log(`Initial checkbox: **${initial}**`) //to print the state of the checkbox
    
              //If the checkbox is already check, then do nothing. Otherwise, check the checkbox
              if(isChecked){}
              else
              {
                cy.get("#Element_OphTrOperationnote_Anaesthetic__Topical and intracameral").should('be.visible').click()
              }
            })
          }

          //For the Anaesthetic LA Delivery Methods as No Other
          if (cntAnaesthetic_LA_Delivery_Methods == "Other")
          {
            //Get the current state of the No Anaesthetic checkbox
            cy.get("input#Element_OphTrOperationnote_Anaesthetic__Other").then(($checkbox) => {
              const isChecked = Boolean($checkbox.prop('checked'))
              //console.log(`Initial checkbox: **${initial}**`) //to print the state of the checkbox
    
              //If the checkbox is already check, then do nothing. Otherwise, check the checkbox
              if(isChecked){}
              else
              {
                cy.get("#Element_OphTrOperationnote_Anaesthetic__Other").should('be.visible').click()
              }
            })
          }

        })

        //-----Code for Anaesthetic LA Delivery Methods by ends here-----

        //-----Code for Anaesthetic Given by starts here-----
        cy.fixture("operationnote.json").then((operationnote) => {

          //Get the value of Anaesthetic_Given_by, as mentioned in the operationnote json file
          const cntAnaesthetic_Given_by = operationnote.Anaesthetic_Given_by

          if(cntAnaesthetic_Given_by == "Anaesthetist"){
            cy.get("#Element_OphTrOperationnote_Anaesthetic_anaesthetist_id_1").should('be.visible').click()
          }

          if(cntAnaesthetic_Given_by == "Surgeon"){
            cy.get("#Element_OphTrOperationnote_Anaesthetic_anaesthetist_id_2").should('be.visible').click()
          }

          if(cntAnaesthetic_Given_by == "Nurse"){
            cy.get("#Element_OphTrOperationnote_Anaesthetic_anaesthetist_id_3").should('be.visible').click()
          }

          if(cntAnaesthetic_Given_by == "Anaesthetic technician"){
            cy.get("#Element_OphTrOperationnote_Anaesthetic_anaesthetist_id_4").should('be.visible').click()
          }

          if(cntAnaesthetic_Given_by == "Other"){
            cy.get("#Element_OphTrOperationnote_Anaesthetic_anaesthetist_id_5").should('be.visible').click()
          }
        })

        //-----Code for Anaesthetic Given by ends here-----

        //Check and click the Save button
        cy.get("#et_save_footer").should('be.visible').click()

        //Check that the save actually happens and next page is loaded successfully, by verifying the page-header
        cy.fixture("operationnote.json").then((operationnote) => {
          cy.get('#flash-success').should('be.visible').should('contain',operationnote.Operation_note_created_header)
        })

        //Verify the value of Surgeon
        cy.fixture("operationnote.json").then((operationnote) => {
          cy.get('#js-listview-info-pro > .dot-list > :nth-child(1)').should('be.visible').should('contain',operationnote.Surgeon)
        })

        //Verify the value of IOL type
        cy.fixture("operationnote.json").then((operationnote) => {
          cy.get(':nth-child(6) > :nth-child(2) > .data-value').should('be.visible').should('contain',operationnote.IOL_type)
        })

        //Verify the value of IOL power
        cy.fixture("operationnote.json").then((operationnote) => {
          cy.get(':nth-child(7) > :nth-child(2) > .data-value').should('be.visible').should('contain',operationnote.IOL_power)
        })

        //Verify the value of predicted-refraction
        cy.fixture("operationnote.json").then((operationnote) => {
          cy.get(':nth-child(8) > :nth-child(2) > .data-value').should('be.visible').should('contain',operationnote.Predicted_refraction)
        })

        //Scroll to Complications element
        cy.get(".view-cataract-complications > .element-data > .data-value > .tile-data-overflow > .large > tbody > tr > td").scrollIntoView().should('be.visible')
        //Verify the value of Complications
        cy.fixture("operationnote.json").then((operationnote) => {
          cy.get(".view-cataract-complications > .element-data > .data-value > .tile-data-overflow > .large > tbody > tr > td").should('be.visible').should('contain',operationnote.Complications)
        })

        //Scroll to Anaesthetic Type element
        cy.get("#js-listview-anaesthetic-pro > .dot-list > :nth-child(1)").scrollIntoView().should('be.visible')
        //Verify the value of Anaesthetic Type
        cy.fixture("operationnote.json").then((operationnote) => {
          cy.get('#js-listview-anaesthetic-pro > .dot-list > :nth-child(1)').should('be.visible').should('contain',operationnote.Anaesthetic_Type)
        })

        //Verify the value of Anaesthetic LA Delivery Methods
        cy.fixture("operationnote.json").then((operationnote) => {
          cy.get('#js-listview-anaesthetic-pro > .dot-list > :nth-child(2)').should('be.visible').should('contain',operationnote.Anaesthetic_LA_Delivery_Methods)
        })

        //Verify the value of Anaesthetic Given by
        cy.fixture("operationnote.json").then((operationnote) => {
          cy.get('.dot-list > :nth-child(4)').should('be.visible').should('contain',operationnote.Anaesthetic_Given_by)
        })
      }
  })

  })
})