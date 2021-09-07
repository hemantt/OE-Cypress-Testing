//Test suite for Further Findings element
describe('0048_Element_Further_Findings_DI', () => {
    
    //To get the Further Findings element
    it('0048.1_Add_Further_Findings_Element', () => {

        cy.get("#js-manage-elements-btn").should('be.visible').click()
        cy.get("#manage-elements-Further-Findings").should('be.visible').click()
        cy.get(".blue.hint.cols-full").should('be.visible').click()
    })
        
    //Verify that Further Findings element is loaded successfully
    it('0048.2_To_Validate_Further_Findings_Section_isAvailable' , () => {
        cy.get('[data-element-type-name="Further Findings"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Further Findings"] > header > h3').should('be.visible').should('contain', 'Further Findings')
    })

    //Verify that the labels are loaded successfully
    it('0048.3_To_Validate_Lables' , () => {
        cy.get('[data-element-type-name="Further Findings"] > div + div > div > div > div + div').should('be.visible').should('contain' , 'Please add a further finding')
    })

    it('0048.4_Select_Further_Findings', () => {

        cy.fixture("ophthalmicdiagnoses.json").then((ophthalmicdiagnoses) => {
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_FurtherFindings_further_findings_assignment").should('be.visible').select(ophthalmicdiagnoses.Further_Findings)
        })
    })

    it('0048.5_Add_Further_Findings_Further_Findings_Other_Description', () => {

        cy.fixture("ophthalmicdiagnoses.json").then((ophthalmicdiagnoses) => {
                cy.get('[name="OEModule_OphCiExamination_models_Element_OphCiExamination_FurtherFindings[further_findings_assignment][0][description]"]').should('be.visible').clear().type(ophthalmicdiagnoses.Further_Findings_Other_Description)
        })
    })
})
