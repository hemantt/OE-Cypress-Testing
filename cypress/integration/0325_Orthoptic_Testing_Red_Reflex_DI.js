//Test script for Red Reflex element
describe('0325_Red_Reflex_Element_DI', () => {

    //Add the Red Reflex element
    it('0325.1_To_Add_Red_Reflex_Element' , () => {
      cy.get("#js-manage-elements-btn").should('be.visible').click()

      cy.get('body').then((body) => {
    
          if (body.find('#manage-elements-Red-Reflex[class="added"]').length == 0)
          {
            cy.get('#manage-elements-Red-Reflex').should('be.visible').click()
          }
    
      })
    
      cy.get(".blue.hint.cols-full").should('be.visible').click()

    })

    //Verify that Prism Reflex Test element is loaded successfully
    it('0325.2_To_Validate_Red_Reflex_Section_isAvailable' , () => {
      cy.get('[data-element-type-name="Red Reflex"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Red Reflex"] > header > h3').should('be.visible').should('contain', 'Red Reflex')
    })

    //Verify that the labels are loaded successfully
    it('0325.3_To_Validate_Lables' , () => {
        cy.get('#OEModule_OphCiExamination_models_RedReflex_right_form > div > div > label').should('be.visible').should('contain' , 'Has red reflex')
        cy.get('#OEModule_OphCiExamination_models_RedReflex_right_form > div > div > label + label').should('be.visible').should('contain' , 'Yes')
        cy.get('#OEModule_OphCiExamination_models_RedReflex_right_form > div > div > label + label + label').should('be.visible').should('contain' , 'No')

        cy.get('#OEModule_OphCiExamination_models_RedReflex_left_form > div > div > label').should('be.visible').should('contain' , 'Has red reflex')
        cy.get('#OEModule_OphCiExamination_models_RedReflex_left_form > div > div > label + label').should('be.visible').should('contain' , 'Yes')
        cy.get('#OEModule_OphCiExamination_models_RedReflex_left_form > div > div > label + label + label').should('be.visible').should('contain' , 'No')
      })

      //Validate Radio Buttons
    it('0325.4_Validate_Radio_Buttons' , () => {
        cy.get('#OEModule_OphCiExamination_models_RedReflex_right_has_red_reflex1').should('be.visible').click()
        cy.get('#OEModule_OphCiExamination_models_RedReflex_right_has_red_reflex0').should('be.visible').click()

        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
          if (orthoptictesting.Red_Reflex_Has_Red_Reflex_Right_Eye == "Yes")
          {
            cy.get('#OEModule_OphCiExamination_models_RedReflex_right_has_red_reflex1').should('be.visible').click()
          }
          else
          {
            cy.get('#OEModule_OphCiExamination_models_RedReflex_right_has_red_reflex0').should('be.visible').click()
          }
        })

        cy.get('#OEModule_OphCiExamination_models_RedReflex_left_has_red_reflex1').should('be.visible').click()
        cy.get('#OEModule_OphCiExamination_models_RedReflex_left_has_red_reflex0').should('be.visible').click()

        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
          if (orthoptictesting.Red_Reflex_Has_Red_Reflex_Left_Eye == "Yes")
          {
            cy.get('#OEModule_OphCiExamination_models_RedReflex_left_has_red_reflex1').should('be.visible').click()
          }
          else
          {
            cy.get('#OEModule_OphCiExamination_models_RedReflex_left_has_red_reflex0').should('be.visible').click()
          }
        })
      })

})
