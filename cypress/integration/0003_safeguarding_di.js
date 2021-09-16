describe('0003_Safeguarding_Element_DI', () => {

   
    
      it('0003.1_Select Safeguarding Element' , () => {

        // To select Safeguradingelement
        cy.get("#js-manage-elements-btn").should('be.visible').click()
        cy.get('#manage-elements-Safeguarding').should('be.visible').click()
        cy.get(".blue.hint.cols-full").should('be.visible').click()
      }) 

/* Commenting out the checking the checkbox option - may need to create a separate script
      it('3.2_To_Check_Safeguarding section is Available' ,() => {
          cy.get('.element-title').should('have.text' , 'Safeguarding')
      }) 


      
      it('3.3_To_Add and verify Safeguarding' , () => {
          cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Safeguarding_no_concerns').should('be.visible').click()
      })
 
      it('3.4_To save safeguarding record and verify next page is loaded successfully' , () => {

          cy.get('#et_save').should('be.visible').click()

          //Verify the next page header
          cy.get('#flash-success').should('be.visible').should('contain.text', 'Examination created')
      }) 
*/

    it('0003.2_To_Check_Safeguarding section is Available' ,() => {
      cy.get('[data-element-type-name="Safeguarding"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Safeguarding"] > header > h3').should('contain', 'Safeguarding')
    })

    it('0003.3_Verify_Checkbox_And_Label' ,() => {
      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Safeguarding_no_concerns').should('be.visible')
      // confirm
      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Safeguarding_element > div > label').should('be.visible').should('contain' , ' No safeguarding concerns')
    })

    it('0003.4_To_Add and verify Safeguarding' , () => {

      //Select the Safeguarding Concerns value, as mentioned in the addexaminationevents file
      cy.fixture("addexaminationevents.json").then((addexaminationevents) => {

        if(addexaminationevents.Safeguarding_No_Safeguarding_Concerns == "Yes")
        {
          cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Safeguarding_no_concerns').should('be.visible').click()
        }
        else
        {
          //cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Safeguarding_no_concerns').uncheck()
          cy.get('[data-element-type-name="Safeguarding"] > div > div + div > button').should('be.visible').click()

          cy.get('#concern_ids > div > ul').contains(addexaminationevents.Safeguarding_Concerns).click()
          
          //Might need to change later html doesn't have any element related tag
          cy.get('.oe-add-select-search.auto-width > div + div').should('be.visible').click()

        }

      })
    })
      //To add comments   
    it('0003.5_To_Add_Comments' ,() => {

       cy.fixture("addexaminationevents.json").then((addexaminationevents) => {

        if(addexaminationevents.Safeguarding_No_Safeguarding_Concerns != "Yes")
        {
          cy.get('[data-element-type-name="Safeguarding"] >  div > div > table > tbody > tr > td > div > button').should('be.visible').click()

          //Add comments to the Safeguarding , as mentioned in the addexaminationevents file
          cy.get('[data-element-type-name="Safeguarding"] >  div > div > table > tbody > tr > td > div > div > div > textarea').should('be.visible').clear().type(addexaminationevents.Safeguarding_Comments)
        }
      })
    })


  })
  