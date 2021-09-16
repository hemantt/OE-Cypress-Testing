//Test script for Glucoma Overall Plan
describe('0205_Glaucoma_Current_Plan_DV', () => {

  it('0205.6_Validate_Glaucoma_Current_Plan_Element_Header' , () => {
    
    
    cy.get('[data-element-type-name="Glaucoma Current Plan"] > header > h3').should('be.visible').should('contain', 'Glaucoma Current Plan')
  
  })

  it('0205.7_Validate_IOP_Right_Eye' , () => {
            
    cy.fixture("clinicalmanagement.json").then((clinicalmanagement) => {
      
      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_CurrentManagementPlan_right_iop')
      .should('be.visible')
//      .should('contain', "N/A")
    
    })
   
  })

  it('0205.8_Validate_Glaucoma_Status_Right_Eye' , () => {

    cy.fixture("clinicalmanagement.json").then((clinicalmanagement) => {
              
     cy.get('#div_OEModule_OphCiExamination_models_Element_OphCiExamination_CurrentManagementPlan_right_iop_id+tr>td+td>div')
     .should('be.visible')
     .should('contain',clinicalmanagement.Glaucoma_Status_Right_Eye)
    })
  })

 it('0205.9_Validate_Drop_related_Problems_Right_Eye' , () => {
              
    cy.fixture("clinicalmanagement.json").then((clinicalmanagement) => {
    cy.get('#div_OEModule_OphCiExamination_models_Element_OphCiExamination_CurrentManagementPlan_right_iop_id+tr+tr>td+td>div')
    .should('be.visible')
    .should('contain', clinicalmanagement.Drop_Related_Problems_Right_Eye)
    
    })

  })

    it('0205.10_Validate_Drops_Right_Eye' , () => {
              
      cy.fixture("clinicalmanagement.json").then((clinicalmanagement) => {
      cy.get('#div_OEModule_OphCiExamination_models_Element_OphCiExamination_CurrentManagementPlan_right_iop_id+tr+tr+tr>td+td>div')
      .should('be.visible')
      .should('contain', clinicalmanagement.Drops_Right_Eye)
      
      })
    
  })

  it('0205.11_Validate_Surgery_Right_Eye' , () => {
              
    cy.fixture("clinicalmanagement.json").then((clinicalmanagement) => {
    cy.get('#div_OEModule_OphCiExamination_models_Element_OphCiExamination_CurrentManagementPlan_right_iop_id+tr+tr+tr+tr>td+td>div')
    .should('be.visible')
    .should('contain', clinicalmanagement.Surgery_Right_Eye)
    
    })
  
})

it('0205.12_Validate_IOP_Left_Eye' , () => {
            
  cy.fixture("clinicalmanagement.json").then((clinicalmanagement) => {
    
    cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_CurrentManagementPlan_left_iop')
    .should('be.visible')
//    .should('contain', "N/A")
  
  })
 
})

it('0205.13_Validate_Glaucoma_Status_Left_Eye' , () => {

  cy.fixture("clinicalmanagement.json").then((clinicalmanagement) => {
            
   cy.get('#div_OEModule_OphCiExamination_models_Element_OphCiExamination_CurrentManagementPlan_left_iop_id+tr>td+td>div')
   .should('be.visible')
   .should('contain',clinicalmanagement.Glaucoma_Status_Left_Eye)
  })
})

it('0205.14_Validate_Drop_related_Problems_Left_Eye' , () => {
            
  cy.fixture("clinicalmanagement.json").then((clinicalmanagement) => {
  cy.get('#div_OEModule_OphCiExamination_models_Element_OphCiExamination_CurrentManagementPlan_left_iop_id+tr+tr>td+td>div')
  .should('be.visible')
  .should('contain', clinicalmanagement.Drop_Related_Problems_Left_Eye)
  
  })

})

  it('0205.15_Validate_Drops_Left_Eye' , () => {
            
    cy.fixture("clinicalmanagement.json").then((clinicalmanagement) => {
    cy.get('#div_OEModule_OphCiExamination_models_Element_OphCiExamination_CurrentManagementPlan_left_iop_id+tr+tr+tr>td+td>div')
    .should('be.visible')
    .should('contain', clinicalmanagement.Drops_Left_Eye)
    
    })
  
})

it('0205.16_Validate_Surgery_Left_Eye' , () => {
            
  cy.fixture("clinicalmanagement.json").then((clinicalmanagement) => {
  cy.get('#div_OEModule_OphCiExamination_models_Element_OphCiExamination_CurrentManagementPlan_left_iop_id+tr+tr+tr+tr>td+td>div')
  .should('be.visible')
  .should('contain', clinicalmanagement.Surgery_Left_Eye)
  
  })

})


 
 
})
