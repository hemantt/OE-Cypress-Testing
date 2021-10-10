//const { it } = require("mocha")

//const { it } = require("mocha")

describe('0375_Follow_up_Element_DV', () => {
    //Verify that Follow_up_ element is loaded successfully
    it('0375.5_To_Validate_Follow_up_Section_IsAvailable' , () => {
        cy.get('[data-element-type-name="Follow-up"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Follow-up"] > header > h3').should('contain', 'Follow-up')
  })
    
    
 //Validate Saved Data is Loaded Successfully
 it('0375.6_To_Validate_Saved_Data' , () => {
    cy.fixture("AddExaminationEvents_Clinical_Management.json").then((clinicalmanagement) => { 
if(clinicalmanagement.Clinicalmanagement_Follow_Up_Outcome_Options == "Follow-up")  
 {
     cy.get('[data-element-type-name="Follow-up"] > div > div').should('be.visible').should('contain' , clinicalmanagement.Follow_Up_Outcome_Options + " " + clinicalmanagement.Follow_Up_Quantity_Options + " " + clinicalmanagement.Follow_Up_Period_Options + " " + "with " + clinicalmanagement.Follow_Up_Role_Options)

 
 
     if(clinicalmanagement.Follow_Up_Risk_Status_Options == "Patient Risk 1 (High) Irreversible hard from delayed appointment. Do NOT reschedule patient.") 
         {
             cy.get('[data-element-type-name="Follow-up"] > div > div > i.oe-i.triangle-red.small.pad-right.js-has-tooltip').should('be.visible')
         }
     if(clinicalmanagement.Follow_Up_Risk_Status_Options == "Patient Risk 2 (Medium) Reversible hard from delayed appointment.")
         {
             cy.get('[data-element-type-name="Follow-up"] > div > div > i.oe-i.triangle-amber.small.pad-right.js-has-tooltip').should('be.visible')
         }
         
     if(clinicalmanagement.Follow_Up_Risk_Status_Options == "Patient Risk 3 (Low) Mild consequences from delayed appointment.")
         {
             cy.get('[data-element-type-name="Follow-up"] > div > div > i.oe-i.triangle-green.small.pad-right.js-has-tooltip').should('be.visible')
         }
 }
else if(clinicalmanagement.Clinicalmanagement_Follow_Up_Outcome_Options == "Discharge")
 {
     
    cy.get('[data-element-type-name="Follow-up"] >  div > div').should('be.visible').should('contain' ,clinicalmanagement.Follow_Up_Discharge_Status + clinicalmanagement.Follow_Up_Destination_Discharge + "(" + clinicalmanagement.Follow_Up_Destination_Other + ")")
    
 }

else(clinicalmanagement.Clinicalmanagement_Follow_Up_Outcome_Options== "List for surgery")
    {
     cy.get('[data-element-type-name="Follow-up"] > div > div').should('be.visible').should('contain' ,clinicalmanagement.Follow_Up_Outcome_Options)
    }

 })
 })

 
    //Validate Comments
    it('0375.8_To_Validate_Follow_Up_Comments' ,() => {
       cy.fixture("AddExaminationEvents_Clinical_Management.json").then((clinicalmanagement) => { 
        cy.get('[data-element-type-name="Follow-up"] > table > tbody > tr > td').should('be.visible').should('contain', 'Comments')
        cy.get('[data-element-type-name="Follow-up"] > table > tbody > tr > td + td').contains(clinicalmanagement.Follow_Up_Comments)

    })

    })


})    
