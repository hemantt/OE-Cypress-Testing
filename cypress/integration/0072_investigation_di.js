//Test script for Investigation element
describe('0072_Investigation_Element_DI', () => {

    //Add the Investigation element
    it('0072.1_To_Add_Investigation_Element' , () => {
        cy.get("#js-manage-elements-btn").should('be.visible').click()
        cy.get('#manage-elements-Investigation').should('be.visible').click()
        cy.get('.blue').should('be.visible').click()
    })

    //Verify that Investigation element is loaded successfully
    it('0072.2_To_Validate_Investigation_Section_isAvailable' , () => {
      cy.get('[data-element-type-name="Investigation"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Investigation"] > header > h3').should('be.visible').should('contain', 'Investigation')
    })

      //Add and verify the Investigation details and values
    it('0072.3_To_Add_And_Verify_Details' , () => {
      cy.get('#add-investigation-btn').should('be.visible').click()

      //Add details
      cy.fixture("investigation.json").then((investigation) => {
        cy.get('#add-investigation-btn + div > table > tbody > tr > td > div > div > ul').contains(investigation.Investigation).click()

        //Click the button to close the popup, post the selections made on the popup window
        cy.get("#add-investigation-btn + div > div + div").should('be.visible').click()
      })
    })
/*
    //Verify user name
    it('0072.4_Verify_User_Name_Field' , () => {
      cy.get('body').then(($body) => {

        const cnt = $body.find('#OEModule_OphCiExamination_models_Element_OphCiExamination_Investigation_entries_0_last_modified_user').text()

        console.log(" AA - " + cnt.trim())

        cy.get("#oe-patient-details + script + div + div > ul > li").should('be.visible').should('contain',cnt.trim())
      })
    })
*/
    //Verify date field
      it('0072.5_Verify_Date_And_Time_Fields' , () => {
        cy.fixture("investigation.json").then((investigation) => {
          cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Investigation_entries_0_date").should('be.visible').clear().type(investigation.Investigation_Date)
        })
      })

    //Verify time field
    it('0072.6_Verify_Date_And_Time_Fields' , () => {
      cy.fixture("investigation.json").then((investigation) => {
        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Investigation_entries_0_time").should('be.visible').clear().type(investigation.Investigation_Time)
      })
    })

  //Add investigation comments
      it('0072.7_Add_Investigation_Comments' , () => {
        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Investigation_entries_0_comments_button").should('be.visible').click()

        cy.fixture("investigation.json").then((investigation) => {
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Investigation_entries_0_comments").should('be.visible').clear().type(investigation.Investigation_Comments)

          })
      })

      //Add investigation description
      it('0072.8_Add_Investigation_Description' , () => {
        cy.fixture("investigation.json").then((investigation) => {
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Investigation_description").should('be.visible').clear().type(investigation.Investigation_Description)

          })
      })

})
