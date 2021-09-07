//Test script for Clinical Management element
describe('0203_Glaucoma_Overall_Plan_DI', () => {

    //Add the Glaucoma Overall plan element
    it('0203.1_To_Add_Glaucoma_Overall_Plan' , () => {
        cy.get("#js-manage-elements-btn").should('be.visible').click()
        cy.get('#manage-elements-Glaucoma-Overall-Plan').should('be.visible').click()
        cy.get('.blue').should('be.visible').click()
    })

    //Verify that Glaucoma Overall plan element element is loaded successfully
    it('0203.2_To_Validate_Glaucoma Overall Plan_SectionisAvailable' , () => {
      cy.get('[data-element-type-name="Glaucoma Overall Plan"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Glaucoma Overall Plan"] > header > h3').should('be.visible').should('contain', 'Glaucoma Overall Plan')
    })

    //Verify that the labels are loaded successfully
    it('0200.3_Validate_Labels' , () => {
     

        cy.get('#div_OEModule_OphCiExamination_models_Element_OphCiExamination_OverallManagementPlan_clinic_interval_id > :nth-child(1) > label')
        .should('be.visible')
        .should('contain' , 'Clinic interval:')

        cy.get('#div_OEModule_OphCiExamination_models_Element_OphCiExamination_OverallManagementPlan_photo_id > .cols-5 > label')
        .should('be.visible')
        .should('contain' , 'Photo:')

        cy.get('#div_OEModule_OphCiExamination_models_Element_OphCiExamination_OverallManagementPlan_oct_id > .cols-5')
        .should('be.visible')
        .should('contain' , 'OCT:')

        cy.get('#div_OEModule_OphCiExamination_models_Element_OphCiExamination_OverallManagementPlan_hfa_id > .cols-5 > label')
        .should('be.visible')
        .should('contain' , 'Visual Fields:')

        cy.get('#div_OEModule_OphCiExamination_models_Element_OphCiExamination_OverallManagementPlan_gonio_id > .cols-5 > label')
        .should('be.visible')
        .should('contain' , 'Gonio:')

        cy.get('#div_OEModule_OphCiExamination_models_Element_OphCiExamination_OverallManagementPlan_hrt_id > .cols-5 > label')
        .should('be.visible')
        .should('contain' , 'HRT:')

        cy.get('[for="OEModule_OphCiExamination_models_Element_OphCiExamination_OverallManagementPlan[right_target_iop_id]"]')
        .should('be.visible')
        .should('contain' , 'Target IOP:')


        cy.get('[data-element-type-name="Glaucoma Overall Plan"] > div + div > div + div > div > div > div > div')
        .should('be.visible')
        .should('contain' , 'mmHg')


        cy.get('[for="OEModule_OphCiExamination_models_Element_OphCiExamination_OverallManagementPlan[left_target_iop_id]"]')
        .should('be.visible')
        .should('contain' , 'Target IOP:')

        cy.get('[data-element-type-name="Glaucoma Overall Plan"] > div > div + div > div + div > div > div > div')
        .should('be.visible')
        .should('contain' , 'mmHg')

    })

      //Add and verify the Glaucoma Overall plan details and values
    it('0200.4_To_Add_Details' , () => {
      cy.fixture("clinicalmanagement.json").then((clinicalmanagement) => {
      
      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_OverallManagementPlan_clinic_interval_id')
      .select(clinicalmanagement.Clinic_interval)

      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_OverallManagementPlan_photo_id')
      .select(clinicalmanagement.Photo)


      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_OverallManagementPlan_oct_id')
      .select(clinicalmanagement.OCT)


      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_OverallManagementPlan_hfa_id')
      .select(clinicalmanagement.Visual_Fields)


      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_OverallManagementPlan_gonio_id')
      .select(clinicalmanagement.Gonio)


      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_OverallManagementPlan_hrt_id')
      .select(clinicalmanagement.HRT)


      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_OverallManagementPlan_right_target_iop_id')
      .select(clinicalmanagement.Target_IOP_Right_Eye)


      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_OverallManagementPlan_left_target_iop_id')
      .select(clinicalmanagement.Target_IOP_Left_Eye)


      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_OverallManagementPlan_comment_button')
      .click({force: true})

      //OEModule_OphCiExamination_models_Element_OphCiExamination_OverallManagementPlan_comments
      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_OverallManagementPlan_comments')
      .clear().type(clinicalmanagement.Glucoma_Overall_Plan_Comments)
      })
      //Add details
     
      
    })


  

})
