//Test script for Corrective Head Posture element
describe('0280_Corrective_Head_Posture_Element_DI', () => {

    //Add the Corrective Head Posture element
    it('0280.1_To_Add_Corrective_Head_Posture_Element' , () => {
      cy.get("#js-manage-elements-btn").should('be.visible').click()

      cy.get('body').then((body) => {
    
          if (body.find('#manage-elements-Corrective-Head-Posture[class="added"]').length == 0)
          {
            cy.get('#manage-elements-Corrective-Head-Posture').should('be.visible').click()
          }
    
      })
    
      cy.get(".blue.hint.cols-full").should('be.visible').click()

    })

    //Verify that Corrective Head Posture element is loaded successfully
    it('0280.2_To_Validate_Corrective_Head_Posture_Section_isAvailable' , () => {
      cy.get('[data-element-type-name="Corrective Head Posture"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Corrective Head Posture"] > header > h3').should('be.visible').should('contain', 'Corrective Head Posture')
    })

    //Verify that the labels are loaded successfully
    it('0280.3_To_Validate_Lables' , () => {
        cy.get('.cols-10 > thead > tr > :nth-child(1)').should('be.visible').should('contain' , 'Tilt')
        cy.get('.cols-10 > thead > tr > :nth-child(2)').should('be.visible').should('contain' , 'Turn')
        cy.get('.cols-10 > thead > tr > :nth-child(3)').should('be.visible').should('contain' , 'Chin')
      })

      //Add and verify Tilt, Turn and Chin
    it('0280.4_To_Add_And_Verify_Tilt_Turn_Chin' , () => {
      cy.get('#add-headposture-popup').should('be.visible').click()

      //Select the Tilt, Turn and Chin values, as mentioned in the orthoptictesting json file
      cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('[data-id="OEModule_OphCiExamination_models_HeadPosture_tilt"]').contains(orthoptictesting.Head_Posture_Tilt).click()
        cy.get('[data-id="OEModule_OphCiExamination_models_HeadPosture_turn"]').contains(orthoptictesting.Head_Posture_Turn).click()
        cy.get('[data-id="OEModule_OphCiExamination_models_HeadPosture_chin"]').contains(orthoptictesting.Head_Posture_Chin).click()

        //Click the button to close the popup, post the selections made on the popup window
        cy.get("#add-headposture-popup > div > div + div").should('be.visible').click()
      })
    })

    //To add comments
    it('0280.5_To_Add_and_Verify_Comments' , () => {
      cy.get('#OEModule_OphCiExamination_models_HeadPosture-comment-button').should('be.visible').click()

      cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {

        //Add comments
        cy.get('#OEModule_OphCiExamination_models_HeadPosture_comments').should('be.visible').clear().type(orthoptictesting.Head_Posture_Comments)
      })
    })
})
