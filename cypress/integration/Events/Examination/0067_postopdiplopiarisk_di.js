//Test script for Post-Op Diplopia Risk element
describe('0067_Post_Op_Diplopia_Risk_Element_DI', () => {

    //Add the Post-Op Diplopia Risk element
    it('0067.1_To_Add_Post_Op_Diplopia_Risk_Element' , () => {
        cy.get("#js-manage-elements-btn").should('be.visible').click()
        cy.get('#manage-elements-Post-Op-Diplopia-Risk').should('be.visible').click()
        cy.get('.blue').should('be.visible').click()
    })

    //Verify that Post-Op Diplopia Risk element is loaded successfully
    it('0067.2_To_Validate_Post_Op_Diplopia_Risk_Section_isAvailable' , () => {
      cy.get('[data-element-type-name="Post-Op Diplopia Risk"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Post-Op Diplopia Risk"] > header > h3').should('be.visible').should('contain', 'Post-Op Diplopia Risk')
    })

    //Verify that the labels are loaded successfully
    it('0067.3_To_Validate_Lables' , () => {
      cy.get('#OEModule_OphCiExamination_models_PostOpDiplopiaRisk_element > div + div > label').should('be.visible').should('contain' , 'At Risk')
      cy.get('#OEModule_OphCiExamination_models_PostOpDiplopiaRisk_element > div + div > label + label').should('be.visible').should('contain' , 'yes')
      cy.get('#OEModule_OphCiExamination_models_PostOpDiplopiaRisk_element > div + div > label + label + label').should('be.visible').should('contain' , 'no')
    })

      //To add comments
    it('0067.4_To_Add_and_Verify_Comments' , () => {
        cy.fixture("orthoptictesting.json").then((orthoptictesting) => {
  
          //Add comments
          cy.get('#OEModule_OphCiExamination_models_PostOpDiplopiaRisk_comments').should('be.visible').clear().type(orthoptictesting.Post_Op_Diplopia_Risk_Comments)
        })
    })

      //Validate Radio Buttons
      it('0067.5_Validate_Radio_Buttons' , () => {
        cy.get('#OEModule_OphCiExamination_models_PostOpDiplopiaRisk_at_risk_1').should('be.visible').click()
        cy.get('#OEModule_OphCiExamination_models_PostOpDiplopiaRisk_at_risk_0').should('be.visible').click()

        cy.fixture("orthoptictesting.json").then((orthoptictesting) => {
          if (orthoptictesting.Post_Op_Diplopia_Risk_At_Risk == "Yes")
          {
            cy.get('#OEModule_OphCiExamination_models_PostOpDiplopiaRisk_at_risk_1').should('be.visible').click()
          }
          else
          {
            cy.get('#OEModule_OphCiExamination_models_PostOpDiplopiaRisk_at_risk_0').should('be.visible').click()
          }
        })
      })

})
