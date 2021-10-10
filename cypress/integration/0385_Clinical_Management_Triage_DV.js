//Test script for Triage
describe('0385_Triage_DV', () => {

  it('0385.5_Validate_Triage_Element_Header' , () => {
    
    cy.get('[data-element-type-name="Triage"] > header > h3').scrollIntoView().should('be.visible')
    cy.get('[data-element-type-name="Triage"] > header > h3').should('be.visible').should('contain', 'Triage')
  
  })

  it('0385.6_Validate_Chief_Complaint' , () => {
            
    cy.fixture("AddExaminationEvents_Clinical_Management.json").then((clinicalmanagement) => {
      
      cy.get('[data-element-type-name="Triage"]>div>div>table>tbody>tr>td>div')
      .should('be.visible')
      .should('contain', clinicalmanagement.Triage_Chief_Complaint)
    
    })
   
  })

  it('0385.7_Validate_Time' , () => {

    cy.fixture("AddExaminationEvents_Clinical_Management.json").then((clinicalmanagement) => {
              
      cy.get('[data-element-type-name="Triage"]>div>div>table>tbody>tr+tr>td').eq(0)
     .should('be.visible')
     .should('contain',clinicalmanagement.Triage_Time)
    })
  })

 it('0385.8_Validate_TreatAs', () => {
              
    cy.fixture("AddExaminationEvents_Clinical_Management.json").then((clinicalmanagement) => {
      cy.get('[data-element-type-name="Triage"]>div>div>table>tbody>tr+tr>td').eq(1)
    .should('be.visible')
    .should('contain', "Adult")
    // Adult is a non-editable field, so verifying if its present post the save in the correct section

    })


  })

  it('0385.9_Validate_Priority', () => {
              
    cy.fixture("AddExaminationEvents_Clinical_Management.json").then((clinicalmanagement) => {
      cy.get('[data-element-type-name="Triage"]>div>div>table>tbody>tr+tr>td').eq(2)
    .should('be.visible')
    .should('contain', clinicalmanagement.Triage_Set_Priority)
    
    })
    

  })

  it('0385.10_Validate_Under_Care_of_Different_Eye_Unit', () => {
              
    cy.fixture("AddExaminationEvents_Clinical_Management.json").then((clinicalmanagement) => {
      cy.get('[data-element-type-name="Triage"]>div>div>table>tbody>tr+tr+tr+tr+tr>td>span').scrollIntoView()
    .should('be.visible')
    .should('contain', "N/A")
    
    })
    
  })
   
  
})