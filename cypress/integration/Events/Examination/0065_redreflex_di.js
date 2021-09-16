//Test script for Red Reflex element
describe('0065_Red_Reflex_Element_DI', () => {

    //Add the Red Reflex element
    it('0065.1_To_Add_Red_Reflex_Element' , () => {
        cy.get("#js-manage-elements-btn").should('be.visible').click()
        cy.get('#manage-elements-Red-Reflex').should('be.visible').click()
        cy.get('.blue').should('be.visible').click()
    })

    //Verify that Prism Reflex Test element is loaded successfully
    it('0065.2_To_Validate_Red_Reflex_Section_isAvailable' , () => {
      cy.get('[data-element-type-name="Red Reflex"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Red Reflex"] > header > h3').should('be.visible').should('contain', 'Red Reflex')
    })

    //Verify that the labels are loaded successfully
    it('0065.3_To_Validate_Lables' , () => {
        cy.get('#OEModule_OphCiExamination_models_RedReflex_right_form > div > div > label').should('be.visible').should('contain' , 'Has red reflex')
        cy.get('#OEModule_OphCiExamination_models_RedReflex_right_form > div > div > label + label').should('be.visible').should('contain' , 'Yes')
        cy.get('#OEModule_OphCiExamination_models_RedReflex_right_form > div > div > label + label + label').should('be.visible').should('contain' , 'No')

        cy.get('#OEModule_OphCiExamination_models_RedReflex_left_form > div > div > label').should('be.visible').should('contain' , 'Has red reflex')
        cy.get('#OEModule_OphCiExamination_models_RedReflex_left_form > div > div > label + label').should('be.visible').should('contain' , 'Yes')
        cy.get('#OEModule_OphCiExamination_models_RedReflex_left_form > div > div > label + label + label').should('be.visible').should('contain' , 'No')
      })

      //Validate Radio Buttons
    it('0065.4_Validate_Radio_Buttons' , () => {
        cy.get('#OEModule_OphCiExamination_models_RedReflex_right_has_red_reflex1').should('be.visible').click()
        cy.get('#OEModule_OphCiExamination_models_RedReflex_right_has_red_reflex0').should('be.visible').click()

        cy.fixture("orthoptictesting.json").then((orthoptictesting) => {
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

        cy.fixture("orthoptictesting.json").then((orthoptictesting) => {
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
