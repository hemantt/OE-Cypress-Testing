///    <reference types="cypress" /> 

//Test suite for Add Operation Note Event
describe('Add Data to OperationNote Event', () => {
  
    //Test to check that the Operation Note Event page loaded successfully
    it('Check_Add_Operation_Note_Page_Loaded_Successfully', () => { 
        
      //Check that the Operation Note Event page is loaded successfully, by verifying the page-headers
      cy.fixture("operationnote.json").then((operationnote) => {
        cy.get('.event-title').should('contain',operationnote.Select_booking_note)
        cy.get('.element-title').should('contain',operationnote.Create_operation_note_header)
      })
    })
  
    //Test to create an Operation Event
    it('Select An Operation Booking', () => { 
  
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
    
          //Check for the Cataract doodles (small images) and pick one, as mentioned in the operationnote json file
          cy.fixture("operationnote.json").then((operationnote) => {
            cy.get(".ed2-toolbar-panel.ed2-main-toolbar").should('be.visible').contains(operationnote.Cataract).parent().click()
          })
  
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
 
        }
    })
  
    })
  })