//Test suite for Ophthalmic Diagnoses element
describe('0245_Element_Ophthalmic_Diagnoses_DI', () => {
    
        //To get the Ophthalmic Diagnoses element
    it('0245.1_Add_Ophthalmic_Diagnoses_Element', () => {

      cy.get("#js-manage-elements-btn").should('be.visible').click()

      cy.get('body').then((body) => {
    
          if (body.find('#manage-elements-Ophthalmic-Diagnoses[class="added"]').length == 0)
          {
            cy.get("#manage-elements-Ophthalmic-Diagnoses").should('be.visible').click()
          }
    
      })
    
      cy.get(".blue.hint.cols-full").should('be.visible').click()

    })
        
    //Verify that Ophthalmic Diagnoses element is loaded successfully
    it('0245.2_To_Validate_Ophthalmic Diagnoses_Section_isAvailable' , () => {
      cy.get('[data-element-type-name="Ophthalmic Diagnoses"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Ophthalmic Diagnoses"] > header > h3').should('be.visible').should('contain', 'Ophthalmic Diagnoses')
    })

    //Verify that the labels are loaded successfully
    it('0245.3_To_Validate_Lables' , () => {
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Diagnoses_diagnoses_table > thead > tr > :nth-child(1)').should('be.visible').should('contain' , 'Diagnosis')
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Diagnoses_diagnoses_table > thead > tr > :nth-child(2)').should('be.visible').should('contain' , 'Side')
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Diagnoses_diagnoses_table > thead > tr > :nth-child(3)').should('be.visible').should('contain' , 'Principal')
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Diagnoses_diagnoses_table > thead > tr > :nth-child(4)').should('be.visible').should('contain' , 'Date')
    })

    //Add and verify the Ophthalmic Diagnoses details and values
    it('0245.4_To_Add_And_Verify_Ophthalmic Diagnoses_Details' , () => {

      cy.fixture("AddExaminationEvents_Ophthalmic_Diagnoses.json").then((ophthalmicdiagnoses) => {

        cy.get('body').then(($body) => {
          const cnt = $body.find('#OphCiExamination_diagnoses > tr').length

          var i;
          for(i = 0; i <= cnt-1; i++)
          {
            if($body.find('#OphCiExamination_diagnoses > tr').eq(i).children().eq(0).text().trim().includes(ophthalmicdiagnoses.Ophthalmic_Diagnoses))
            {
              $body.find('#OphCiExamination_diagnoses > tr').eq(i).children().eq(4).find('a').click()
            }
          }
        })

        cy.get('#add-ophthalmic-diagnoses').should('be.visible').click()

        cy.get('[data-id="disorder-list"]').contains(ophthalmicdiagnoses.Ophthalmic_Diagnoses).click()

        //Click the button to close the popup, post the selections made on the popup window
        cy.get("#ophthalmic-diagnoses-popup > div > div + div").should('be.visible').click()
      
      })

    })

    //Add and verify the Ophthalmic Diagnoses details and values
    it('0245.5_Validate_And_Provide_Additional_Details' , () => {

      cy.fixture("AddExaminationEvents_Ophthalmic_Diagnoses.json").then((ophthalmicdiagnoses) => {

        cy.get('body').then(($body) => {
          const cnt = $body.find('#OphCiExamination_diagnoses > tr').length

          //var i;
          //for(i = 0; i <= cnt-1; i++)
          //{
            if($body.find('#OphCiExamination_diagnoses > tr').eq(cnt-1).children().eq(0).text().trim().includes(ophthalmicdiagnoses.Ophthalmic_Diagnoses))
            {

              if (ophthalmicdiagnoses.Ophthalmic_Diagnoses_Side_Right == "Yes")
              {
                $body.find('#OphCiExamination_diagnoses > tr').eq(cnt-1).children().eq(1).find('span > label').eq(0).click()
              }

              if (ophthalmicdiagnoses.Ophthalmic_Diagnoses_Side_Left == "Yes")
              {
                $body.find('#OphCiExamination_diagnoses > tr').eq(cnt-1).children().eq(1).find('span > label').eq(1).click()
              }

              if (ophthalmicdiagnoses.Ophthalmic_Diagnoses_Side_Principal == "Yes")
              {
                $body.find('#OphCiExamination_diagnoses > tr').eq(cnt-1).children().eq(2).find('input').click()
              }
            }
          //}
        })
      })
    })
})
