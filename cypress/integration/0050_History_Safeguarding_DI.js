describe('0050_Safeguarding_Element_DI', () => {

   
    
      it('0050.1_To_Select_Safeguarding_Element' , () => {

        // To select Safegurading element
        cy.get("#js-manage-elements-btn").should('be.visible').click()

        cy.get('body').then((body) => {
    
          if (body.find('#manage-elements-Safeguarding[class="added"]').length == 0)
          {
            cy.get('#manage-elements-Safeguarding').should('be.visible').click()
          }
    
        })
    
        cy.get(".blue.hint.cols-full").should('be.visible').click()

      }) 

/* Commenting out the checking the checkbox option - may need to create a separate script
      it('3.2_To_Check_Safeguarding section is Available' ,() => {
          cy.get('.element-title').should('have.text' , 'Safeguarding')
      }) 


      
      it('3.3_To_Add and verify Safeguarding' , () => {
          cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Safeguarding_no_concerns').should('be.visible').click()
      })
 
      
      }) 
*/
    //To Validate Safeguarding Element
    it('0050.4_To_Check_Safeguarding_Section_IsAvailable' ,() => {
      cy.get('[data-element-type-name="Safeguarding"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Safeguarding"] > header > h3').should('contain', 'Safeguarding')
    })
    //To validate Headers 
    it('0050.6_Verify_Checkbox_And_Label' ,() => {
      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Safeguarding_no_concerns').should('be.visible')
      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Safeguarding_element > div > label').should('be.visible').should('contain' , ' No safeguarding concerns')
    })

    it('0050.7_To_Add_And_Verify_Safeguarding' , () => {
      cy.get('[data-element-type-name="Safeguarding"] > div > div + div > button').should('be.visible').click()
    //Select the Safeguarding Concerns value, as mentioned in the addexaminationevents file
    cy.fixture("AddExaminationEvents_History.json").then((addexaminationevents) => {
      cy.get('#concern_ids > div > ul').contains(addexaminationevents.Safeguarding_Concerns).click()
      //Might need to change later html doesn't have any element related tag

        cy.get('[data-id="concern_ids"]').parent("thead").parent("table").prev().should('be.visible').click()

      })
    })
    //To add comments   
    it('0050.8_To_Add_Safeguarding_Comments' ,() => {
      cy.get('[data-element-type-name="Safeguarding"] >  div > div > table > tbody > tr > td > div > button').should('be.visible').click()
    cy.fixture("AddExaminationEvents_History.json").then((addexaminationevents) => {
    //Add comments to the Safeguarding , as mentioned in the addexaminationevents file
      cy.get('[data-element-type-name="Safeguarding"] >  div > div > table > tbody > tr > td > div > div > div > textarea').should('be.visible').clear().type(addexaminationevents.Safeguarding_Comments)
      })
      })


  })