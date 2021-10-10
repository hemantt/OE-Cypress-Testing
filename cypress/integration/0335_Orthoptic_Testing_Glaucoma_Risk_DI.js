//Test script for Glaucoma Risk element
describe('0335_Glaucoma_Risk_Element_DI', () => {

    //Add the Glaucoma Risk element
    it('0335.1_To_Add_Glaucoma_Risk_Element' , () => {
      cy.get("#js-manage-elements-btn").should('be.visible').click()

      cy.get('body').then((body) => {
    
          if (body.find('#manage-elements-Glaucoma-Risk[class="added"]').length == 0)
          {
            cy.get('#manage-elements-Glaucoma-Risk').should('be.visible').click()
          }
    
      })
    
      cy.get(".blue.hint.cols-full").should('be.visible').click()

    })

    //Verify that Glaucoma Risk element is loaded successfully
    it('0335.2_To_Validate_Glaucoma_Risk_Section_isAvailable' , () => {
      cy.get('[data-element-type-name="Glaucoma Risk"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Glaucoma Risk"] > header > h3').should('be.visible').should('contain', 'Glaucoma Risk')
    })

      //Add and verify the Glaucoma Risk details and values
    it('0335.3_To_Add_And_Verify_Details' , () => {
      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_GlaucomaRisk_risk_id').should('be.visible').select("High")
      cy.get('[data-element-type-name="Glaucoma Risk"] > div > div > div + a').should('be.visible').click()
    })

    //Validate Popup Text
      it('0335.4_Validate_Popup_Text' , () => {
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_GlaucomaRisk_descriptions > div > b > a').eq(0).should('be.visible').should('contain', 'Low')
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_GlaucomaRisk_descriptions > div > b > a').eq(1).should('be.visible').should('contain', 'Moderate')
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_GlaucomaRisk_descriptions > div > b > a').eq(2).should('be.visible').should('contain', 'High')

        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_GlaucomaRisk_descriptions > div').eq(0).should('be.visible').should('contain', 'Early glaucoma with an IOP less than target, and with no evidence of progression')
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_GlaucomaRisk_descriptions > div').eq(1).should('be.visible').should('contain', 'Moderate to advanced glaucoma with an IOP maintained as less than target for the last 12 months, and with no evidence of progression')
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_GlaucomaRisk_descriptions > div').eq(2).should('be.visible').should('contain', 'IOP greater than target and/or evidence of actual or possible progression')

      })
  
    //Validate Popup Links
    it('0335.5_Validate_Popup_Links' , () => {
      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_GlaucomaRisk_descriptions > div > b > a').eq(0).should('be.visible').click()
      cy.wait(1000)
      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_GlaucomaRisk_risk_id').should('be.visible').find(':selected').contains('Low')
      cy.get('[data-element-type-name="Glaucoma Risk"] > div > div > div + a').should('be.visible').click()

      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_GlaucomaRisk_descriptions > div > b > a').eq(1).should('be.visible').click()
      cy.wait(1000)
      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_GlaucomaRisk_risk_id').should('be.visible').find(':selected').contains('Moderate')
      cy.get('[data-element-type-name="Glaucoma Risk"] > div > div > div + a').should('be.visible').click()

      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_GlaucomaRisk_descriptions > div > b > a').eq(2).should('be.visible').click()
      cy.wait(1000)
      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_GlaucomaRisk_risk_id').should('be.visible').find(':selected').contains('High')
    })

    //Add Glaucoma Risk
    it('0335.6_Add_Glaucoma Risk' , () => {
      cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_GlaucomaRisk_risk_id').should('be.visible').select(orthoptictesting.Glaucoma_Risk)
      })
    })
  
})
