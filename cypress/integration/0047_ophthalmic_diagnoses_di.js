//Test suite for Ophthalmic Diagnoses element
describe('0047_Element_Ophthalmic_Diagnoses_DI', () => {
    
        //To get the Ophthalmic Diagnoses element
    it('0047.1_Add_Ophthalmic_Diagnoses_Element', () => {

        cy.get("#js-manage-elements-btn").should('be.visible').click()
        cy.get("#manage-elements-Ophthalmic-Diagnoses").should('be.visible').click()
        cy.get(".blue.hint.cols-full").should('be.visible').click()
       })
        
    //Verify that Ophthalmic Diagnoses element is loaded successfully
    it('0047.2_To_Validate_Ophthalmic Diagnoses_Section_isAvailable' , () => {
      cy.get('[data-element-type-name="Ophthalmic Diagnoses"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Ophthalmic Diagnoses"] > header > h3').should('be.visible').should('contain', 'Ophthalmic Diagnoses')
    })

    //Verify that the labels are loaded successfully
    it('0047.3_To_Validate_Lables' , () => {
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Diagnoses_diagnoses_table > thead > tr > :nth-child(1)').should('be.visible').should('contain' , 'Diagnosis')
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Diagnoses_diagnoses_table > thead > tr > :nth-child(2)').should('be.visible').should('contain' , 'Side')
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Diagnoses_diagnoses_table > thead > tr > :nth-child(3)').should('be.visible').should('contain' , 'Principal')
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Diagnoses_diagnoses_table > thead > tr > :nth-child(4)').should('be.visible').should('contain' , 'Date')
      })

      //Add and verify the Ophthalmic Diagnoses details and values
      it('0047.4_To_Add_And_Verify_Ophthalmic Diagnoses_Details' , () => {

        cy.get('body').then(($body) => {
            const cnt = $body.find('#OEModule_OphCiExamination_models_Element_OphCiExamination_Diagnoses_diagnoses_table > tbody > tr + tr > td + td + td + td + td > a > i').length
      
            var i;
            for(i = 0; i <= cnt-1; i++)
            {
              cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Diagnoses_diagnoses_table > tbody > tr + tr > td + td + td + td + td > a > i").should('be.visible').click()
              cy.wait(1000)
      
            }
          })

        cy.get('#add-ophthalmic-diagnoses').should('be.visible').click()
  
        //Add details
        cy.fixture("ophthalmicdiagnoses.json").then((ophthalmicdiagnoses) => {
          cy.get('[data-id="disorder-list"]').contains(ophthalmicdiagnoses.Ophthalmic_Diagnoses).click()
  
          //Click the button to close the popup, post the selections made on the popup window
          cy.get("#ophthalmic-diagnoses-popup > div > div + div").should('be.visible').click()
        })
      })

    it('0047.5_Validate_Side_Checkboxes', () => {

        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Diagnoses_diagnoses_entries_row_0 > td + td > span > label").should('be.visible').should('contain','R')
        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Diagnoses_diagnoses_entries_row_0 > td + td > span > label + label").should('be.visible').should('contain','L')

        cy.fixture("ophthalmicdiagnoses.json").then((ophthalmicdiagnoses) => {
            if (ophthalmicdiagnoses.Ophthalmic_Diagnoses_Side_Right == "Yes")
            {
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Diagnoses_entries_0_right_eye").should('be.visible').click()
            }
        })

        cy.fixture("ophthalmicdiagnoses.json").then((ophthalmicdiagnoses) => {
            if (ophthalmicdiagnoses.Ophthalmic_Diagnoses_Side_Left == "Yes")
            {
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Diagnoses_entries_0_left_eye").should('be.visible').click()
            }
        })
    })

    it('0047.6_Validate_Principal_Radiobutton', () => {

        cy.fixture("ophthalmicdiagnoses.json").then((ophthalmicdiagnoses) => {
            if (ophthalmicdiagnoses.Ophthalmic_Diagnoses_Side_Principal == "Yes")
            {
                cy.get("#principal_diagnosis_row_key").should('be.visible').click()
            }
        })
    })

    it('0047.7_Add_Ophthalmic_Diagnoses_Date' , () => {
      
        cy.fixture("ophthalmicdiagnoses.json").then((ophthalmicdiagnoses) => {
          cy.get('#diagnoses-datepicker-0').should('be.visible').clear().type(ophthalmicdiagnoses.Ophthalmic_Diagnoses_Date)
        })
    }) 
})
