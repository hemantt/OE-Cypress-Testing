//const { it } = require("mocha")

//const { it } = require("mocha")

describe('0370_Strabismus_Management_Element_DV', () => {
  //Verify that Strabismus_Management  element is loaded successfully
    it('0370.5_To_Validate_Strabismus_Management_Section_IsAvailable' , () => {
        cy.get('[data-element-type-name="Strabismus Management"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Strabismus Management"] > header > h3').should('contain', 'Strabismus Management')
    })
  
  //Validate Saved Data is loaded Successfully
    it('0370.6_To_Validate_Saved_Data' , () => {
    cy.fixture("AddExaminationEvents_Clinical_Management.json").then((clinicalmanagement) => {  
      if(clinicalmanagement.Strabismus_ManagementTreatment == "Fresnel prism")
      {
        cy.get('[data-element-type-name="Strabismus Management"] > div > div > table > tbody > tr  > td').eq(0).should('be.visible').should('contain' ,clinicalmanagement.Strabismus_Management_Treatment )
        cy.get('[data-element-type-name="Strabismus Management"] > div > div > table > tbody > tr  > td + td').eq(0).should('be.visible').should('contain' , clinicalmanagement.Strabismus_Management_Fresnel_Prism_Value1 + " " + clinicalmanagement.Strabismus_ManagementFresnel_Prism_Value2)
        cy.get('[data-element-type-name="Strabismus Management"] > div > div > table > tbody > tr  > td + td + td').eq(0).should('be.visible').should('contain' ,clinicalmanagement.Strabismus_Management_Treatment_Reason)
        cy.get('[data-element-type-name="Strabismus Management"] > div > div > table > tbody > tr  > td + td + td + td > span > i.oe-i.laterality.L.small.pad').should('be.visible')
        cy.get('[data-element-type-name="Strabismus Management"] > div > div > table > tbody > tr  > td + td + td + td > span > i.oe-i.laterality.L.small.pad').should('be.visible')
        
      }
      
      if(clinicalmanagement.Strabismus_ManagementTreatment == "Glasses: issued")
      {
        cy.get('[data-element-type-name="Strabismus Management"] > div > div > table > tbody > tr  > td').eq(0).should('be.visible').should('contain' ,clinicalmanagement.Strabismus_Management_Treatment )
        cy.get('[data-element-type-name="Strabismus Management"] > div > div > table > tbody > tr  > td + td').eq(0).should('be.visible').should('contain' , clinicalmanagement.Strabismus_Management_Treatment_Data)
        cy.get('[data-element-type-name="Strabismus Management"] > div > div > table > tbody > tr  > td + td + td').eq(0).should('be.visible').should('contain' ,clinicalmanagement.Strabismus_Management_Treatment_Reason)
        cy.get('[data-element-type-name="Strabismus Management"] > div > div > table > tbody > tr  > td + td + td + td > span > i.oe-i.laterality.L.small.pad').should('be.visible')
        cy.get('[data-element-type-name="Strabismus Management"] > div > div > table > tbody > tr  > td + td + td + td > span > i.oe-i.laterality.L.small.pad').should('be.visible')
       
      }
      
      if(clinicalmanagement.Strabismus_ManagementTreatment == "Bifocals: issued")
      {
        cy.get('[data-element-type-name="Strabismus Management"] > div > div > table > tbody > tr  > td').eq(0).should('be.visible').should('contain' ,clinicalmanagement.Strabismus_Management_Treatment )
        cy.get('[data-element-type-name="Strabismus Management"] > div > div > table > tbody > tr  > td + td + td').eq(0).should('be.visible').should('contain' ,clinicalmanagement.Strabismus_Management_Treatment_Reason)
        cy.get('[data-element-type-name="Strabismus Management"] > div > div > table > tbody > tr  > td + td + td + td > span > i.oe-i.laterality.L.small.pad').should('be.visible')
        cy.get('[data-element-type-name="Strabismus Management"] > div > div > table > tbody > tr  > td + td + td + td > span > i.oe-i.laterality.L.small.pad').should('be.visible')
        
      }
     
      if(clinicalmanagement.Strabismus_ManagementTreatment == "Atropine")
      {
        cy.get('[data-element-type-name="Strabismus Management"] > div > div > table > tbody > tr  > td').eq(0).should('be.visible').should('contain' ,clinicalmanagement.Strabismus_Management_Treatment )
        cy.get('[data-element-type-name="Strabismus Management"] > div > div > table > tbody > tr  > td + td').eq(0).should('be.visible').should('contain' ,clinicalmanagement.Strabismus_Management_Atropine_Days + " " + clinicalmanagement.Strabismus_ManagementAtropine_Penaliasation)
        cy.get('[data-element-type-name="Strabismus Management"] > div > div > table > tbody > tr  > td + td + td').eq(0).should('be.visible').should('contain' ,clinicalmanagement.Strabismus_Management_Treatment_Reason)
        cy.get('[data-element-type-name="Strabismus Management"] > div > div > table > tbody > tr  > td + td + td + td > span > i.oe-i.laterality.L.small.pad').should('be.visible')
        cy.get('[data-element-type-name="Strabismus Management"] > div > div > table > tbody > tr  > td + td + td + td > span > i.oe-i.laterality.L.small.pad').should('be.visible')
        
      }
      
      if(clinicalmanagement.Strabismus_ManagementTreatment == "Surgery")
      {
         cy.get('[data-element-type-name="Strabismus Management"] > div > div > table > tbody > tr  > td').eq(0).should('be.visible').should('contain' ,clinicalmanagement.Strabismus_Management_Treatment )
         cy.get('[data-element-type-name="Strabismus Management"] > div > div > table > tbody > tr  > td + td').eq(0).should('be.visible').should('contain' ,clinicalmanagement.Strabismus_Management_Surgery_Data1)
         cy.get('[data-element-type-name="Strabismus Management"] > div > div > table > tbody > tr  > td + td + td').eq(0).should('be.visible').should('contain' ,clinicalmanagement.Strabismus_Management_Treatment_Reason)
         cy.get('[data-element-type-name="Strabismus Management"] > div > div > table > tbody > tr  > td + td + td + td > span > i.oe-i.laterality.L.small.pad').should('be.visible')
         cy.get('[data-element-type-name="Strabismus Management"] > div > div > table > tbody > tr  > td + td + td + td > span > i.oe-i.laterality.L.small.pad').should('be.visible')
        
      }
      
      if(clinicalmanagement.Strabismus_ManagementTreatment == "exercise test")
      {
         cy.get('[data-element-type-name="Strabismus Management"] > div > div > table > tbody > tr  > td').eq(0).should('be.visible').should('contain' ,clinicalmanagement.Strabismus_Management_Treatment )
         cy.get('[data-element-type-name="Strabismus Management"] > div > div > table > tbody > tr  > td + td').eq(0).should('be.visible').should('contain' ,clinicalmanagement.Strabismus_Management_exercise_test_Data)
         cy.get('[data-element-type-name="Strabismus Management"] > div > div > table > tbody > tr  > td + td + td').eq(0).should('be.visible').should('contain' ,clinicalmanagement.Strabismus_Management_Treatment_Reason)
         cy.get('[data-element-type-name="Strabismus Management"] > div > div > table > tbody > tr  > td + td + td + td > span > i.oe-i.laterality.L.small.pad').should('be.visible')
         cy.get('[data-element-type-name="Strabismus Management"] > div > div > table > tbody > tr  > td + td + td + td > span > i.oe-i.laterality.L.small.pad').should('be.visible')
         
   
     
      } 
   })
  }) 
    
  //Validate Comments 
    it('0370.7_To_Validate_Strabismus_Comments' , () => {
      cy.fixture("AddExaminationEvents_Clinical_Management.json").then((clinicalmanagement) => { 
       cy.get('[data-element-type-name="Strabismus Management"] > div > div > hr + span').should('be.visible').should('contain' ,clinicalmanagement.Strabismus_Management_Comments)
      })
   })
    
    

    
    
    
   



})
