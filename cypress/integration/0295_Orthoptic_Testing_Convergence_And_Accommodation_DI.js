//Test script for Convergence & Accommodation element
describe('0295_Convergence_Accommodation_Element_DI', () => {

    //Add the Convergence & Accommodation element
    it('0295.1_To_Add_Convergence_Accommodation_Element' , () => {
      cy.get("#js-manage-elements-btn").should('be.visible').click()

      cy.get('body').then((body) => {
    
          if (body.find('#manage-elements-Convergence-\\&-Accommodation[class="added"]').length == 0)
          {
            cy.get('#manage-elements-Convergence-\\&-Accommodation').should('be.visible').click()
          }
    
      })
    
      cy.get(".blue.hint.cols-full").should('be.visible').click()

    })

    //Verify that Convergence & Accommodation element is loaded successfully
    it('0295.2_To_Validate_Convergence_Accommodation_Section_isAvailable' , () => {
      cy.get('[data-element-type-name="Convergence \\& Accommodation"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Convergence \\& Accommodation"] > header > h3').should('be.visible').should('contain', 'Convergence & Accommodation')
    })

    //Verify that the labels are loaded successfully
    it('0295.3_To_Validate_Lables' , () => {
        cy.get('.cols-10 > thead > tr > :nth-child(1)').should('be.visible').should('contain' , 'Correction')
        cy.get('#element-content > .element').should('be.visible').should('contain' , 'CHP')
      })

      //Add and verify the Cover Test details and values
    it('0295.4_To_Add_And_Verify_Details' , () => {
      cy.get('#add-convergenceaccommodation-popup').should('be.visible').click()

      //Add details
      cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('[data-id="OEModule_OphCiExamination_models_ConvergenceAccommodation_correctiontype_id"]').contains(orthoptictesting.Convergence_Accommodation_Correction).click()
        cy.get('[data-id="OEModule_OphCiExamination_models_ConvergenceAccommodation_with_head_posture"]').contains(orthoptictesting.Convergence_Accommodation_CHP).click()

        //Click the button to close the popup, post the selections made on the popup window
        cy.get("#add-convergenceaccommodation-popup > div > div + div").should('be.visible').click()
        
      })
    })

    //To add description
    it('0295.5_To_Add_and_Verify_Description' , () => {
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
  
          //Add description
          cy.get('#OEModule_OphCiExamination_models_ConvergenceAccommodation_comments').should('be.visible').clear().type(orthoptictesting.Convergence_Accommodation_Description)
        })
    })

})
