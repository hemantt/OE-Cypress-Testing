//Test script for Glucoma_Current_Plan element
describe('0355_Glaucoma_Current_Plan_DI', () => {

    //Add the Glucoma_Current_Plan element
    it('0203.1_To_Add_Glaucoma_Current_Plan' , () => {
        cy.get("#js-manage-elements-btn").should('be.visible').click()

        cy.get('body').then((body) => {
      
            if (body.find('#manage-elements-Glaucoma-Current-Plan[class="added"]').length == 0)
            {
                cy.get('#manage-elements-Glaucoma-Current-Plan').should('be.visible').click()
        }
      
        })
      
        cy.get(".blue.hint.cols-full").should('be.visible').click()

    })

    //Verify that Glucoma_Current_Plan element is loaded successfully
    it('0355.1_To_Validate_Glaucoma_Current_Plan_SectionisAvailable' , () => {
      cy.get('[data-element-type-name="Glaucoma Current Plan"] > header > h3').should('be.visible').should('contain', 'Glaucoma Current Plan')
    })

    //Verify that the labels are loaded successfully
    it('0355.2_Validate_Labels' , () => {  
    // RIGHT EYE LABELS

        
        cy.get('#div_OEModule_OphCiExamination_models_Element_OphCiExamination_CurrentManagementPlan_right_iop_id > label')
        .should('be.visible').should('contain','IOP:')

/*        
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_CurrentManagementPlan_right_iop')
        .should('be.visible').should('contain','N/A')
*/
        
        cy.get('[for ="OEModule_OphCiExamination_models_Element_OphCiExamination_CurrentManagementPlan_right_glaucoma_status_id"]')
        .should('be.visible').should('contain','Glaucoma status:')


        cy.get('#div_OEModule_OphCiExamination_models_Element_OphCiExamination_CurrentManagementPlan_right_drop-related_prob_id > :nth-child(1) > label')
        .should('be.visible').should('contain','Drop-related problems:')


        cy.get('#div_OEModule_OphCiExamination_models_Element_OphCiExamination_CurrentManagementPlan_right_drops_id > :nth-child(1) > label')
        .should('be.visible').should('contain','Drops:')


        cy.get('#div_OEModule_OphCiExamination_models_Element_OphCiExamination_CurrentManagementPlan_right_surgery_id > :nth-child(1) > label')
        .should('be.visible').should('contain','Surgery:')


        //LEFT EYE  LABELS

        cy.get('#div_OEModule_OphCiExamination_models_Element_OphCiExamination_CurrentManagementPlan_left_iop_id > label')
        .should('be.visible').should('contain','IOP:')

/*
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_CurrentManagementPlan_left_iop')
        .should('be.visible').should('contain','N/A')
*/

        cy.get('[for ="OEModule_OphCiExamination_models_Element_OphCiExamination_CurrentManagementPlan_left_glaucoma_status_id"]')
        .should('be.visible').should('contain','Glaucoma status:')


        cy.get('#div_OEModule_OphCiExamination_models_Element_OphCiExamination_CurrentManagementPlan_left_drop-related_prob_id > :nth-child(1) > label')
        .should('be.visible').should('contain','Drop-related problems:')


        cy.get('#div_OEModule_OphCiExamination_models_Element_OphCiExamination_CurrentManagementPlan_left_drops_id > :nth-child(1) > label')
        .should('be.visible').should('contain','Drops:')


        cy.get('#div_OEModule_OphCiExamination_models_Element_OphCiExamination_CurrentManagementPlan_left_surgery_id > :nth-child(1) > label')
        .should('be.visible').should('contain','Surgery:')


    })

      //Add  Glaucoma Current plan details 
    it('0355.3_To_Add_Details' , () => {
      cy.fixture("AddExaminationEvents_Clinical_Management.json").then((clinicalmanagement) => {
      
      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_CurrentManagementPlan_right_glaucoma_status_id')
      .select(clinicalmanagement.Glaucoma_Current_Plan_Glaucoma_Status_Right_Eye)

      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_CurrentManagementPlan_right_drop-related_prob_id')
      .select(clinicalmanagement.Glaucoma_Current_Plan_Drop_Related_Problems_Right_Eye)


      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_CurrentManagementPlan_right_drops_id')
      .select(clinicalmanagement.Glaucoma_Current_Plan_Drops_Right_Eye)


      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_CurrentManagementPlan_right_surgery_id')
      .select(clinicalmanagement.Glaucoma_Current_Plan_Surgery_Right_Eye)


      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_CurrentManagementPlan_left_glaucoma_status_id')
      .select(clinicalmanagement.Glaucoma_Current_Plan_Glaucoma_Status_Left_Eye)

      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_CurrentManagementPlan_left_drop-related_prob_id')
      .select(clinicalmanagement.Glaucoma_Current_Plan_Drop_Related_Problems_Left_Eye)


      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_CurrentManagementPlan_left_drops_id')
      .select(clinicalmanagement.Glaucoma_Current_Plan_Drops_Left_Eye)


      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_CurrentManagementPlan_left_surgery_id')
      .select(clinicalmanagement.Glaucoma_Current_Plan_Surgery_Left_Eye)

      })
      
     
      
    })


  

})
