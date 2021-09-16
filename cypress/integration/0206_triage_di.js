//Test script for Triage Element
describe('0206_Triage_DI', () => {

    //Add the Triage element
    it('0206.1_To_Add_Triage' , () => {
        cy.get("#js-manage-elements-btn").should('be.visible').click()
        cy.get('#manage-elements-Triage').should('be.visible').click()
        cy.get('.blue').should('be.visible').click()
    })

    //Verify that Triage element is loaded successfully
    it('0206.2_To_Validate_Triage_SectionisAvailable' , () => {
      cy.get('[data-element-type-name="Triage"] > header > h3').should('be.visible').should('contain', 'Triage')
    })

    //Verify that the labels are loaded successfully
    it('0206.3_Validate_Labels' , () => {  

        cy.get('[data-element-type-name="Triage"]>div+div>div>div>table>tbody>tr>th').eq(0)
        .should('be.visible').should('contain','Time')

        
        cy.get('[data-element-type-name="Triage"]>div+div>div>div>table>tbody>tr>th').eq(1)
        .should('be.visible').should('contain','Treat as')

        // Patient is an adult (Pre - Enabled); Its a Non -  Editable field
        cy.get('[data-element-type-name="Triage"]>div+div>div>div>table>tbody>tr+tr>td>fieldset>label')
        .should('contain','Adult')

        
        cy.get('[data-element-type-name="Triage"]>div+div>div>div>table>tbody>tr>th').eq(2)
        .should('be.visible').should('contain','Set priority')


        cy.get('[data-element-type-name="Triage"]>div+div>div>div+div>table>tbody>tr>td>fieldset>label').eq(0)
        .should('be.visible').should('contain','Immediate')

        cy.get('[data-element-type-name="Triage"]>div+div>div>div+div>table>tbody>tr>td>fieldset>label').eq(1)
        .should('be.visible').should('contain','Very urgent')

        cy.get('[data-element-type-name="Triage"]>div+div>div>div+div>table>tbody>tr>td>fieldset>label').eq(2)
        .should('be.visible').should('contain','Urgent')

        cy.get('[data-element-type-name="Triage"]>div+div>div>div+div>table>tbody>tr>td>fieldset>label').eq(3)
        .should('be.visible').should('contain','Standard')

        cy.get('[data-element-type-name="Triage"]>div+div>div>div+div>table>tbody>tr>td>fieldset>label').eq(4)
        .should('be.visible').should('contain','Low')

        cy.get('[data-element-type-name="Triage"]>div+div>div>div+div>div').eq(0)
        .should('be.visible').should('contain','Chief complaint')

        cy.get('[data-element-type-name="Triage"]>div+div>div>div>div').eq(0)
        .should('be.visible').should('contain','Is the patient also under the care of a different eye unit?')


    })

    //Add  Triage details 
    it('0206.4_To_Add_Details' , () => {
      cy.fixture("clinicalmanagement.json").then((clinicalmanagement) => {
      
      cy.get('[name="OEModule_OphCiExamination_models_Element_OphCiExamination_Triage[triage][time]"]')
      .clear().type(clinicalmanagement.Triage_Time)
      
      
      if (clinicalmanagement.Set_Priority=="Immediate")
      {
        cy.get('[name="OEModule_OphCiExamination_models_Element_OphCiExamination_Triage[triage][priority_id]"]')
        .eq(0).click()
      }

      if (clinicalmanagement.Set_Priority=="Very urgent")
      {
        cy.get('[name="OEModule_OphCiExamination_models_Element_OphCiExamination_Triage[triage][priority_id]"]')
        .eq(1).click()
      }

      if (clinicalmanagement.Set_Priority=="Urgent")
      {
        cy.get('[name="OEModule_OphCiExamination_models_Element_OphCiExamination_Triage[triage][priority_id]"]')
        .eq(2).click()
      }

      if (clinicalmanagement.Set_Priority=="Standard")
      {
        cy.get('[name="OEModule_OphCiExamination_models_Element_OphCiExamination_Triage[triage][priority_id]"]')
        .eq(3).click()
      }

      if (clinicalmanagement.Set_Priority=="Low")
      {
        cy.get('[name="OEModule_OphCiExamination_models_Element_OphCiExamination_Triage[triage][priority_id]"]')
        .eq(4).click()
      }

      // Save Comments
      cy.get('[data-element-type-name="Triage"]>div+div>div>div+div+div>button.js-add-comments').click()
      cy.get('[name="OEModule_OphCiExamination_models_Element_OphCiExamination_Triage[triage][comments]"]').clear().type(clinicalmanagement.Triage_Comments)

      // Add Chief complaint
      cy.get('#add-chief-complaint').click()
      cy.get('#chief_complaint_id>div>ul>li').contains(clinicalmanagement.Chief_Complaint).click()
      cy.get('#eye_id>div>ul>li').contains(clinicalmanagement.Eye_Id).click()

      // Click to Add Button
      cy.get('[data-element-type-name="Triage"]>div+div>div>div+div+div>div>div.add-icon-btn').click()

    })
      
    })


  

})
