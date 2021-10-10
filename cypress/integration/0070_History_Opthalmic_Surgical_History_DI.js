describe('0000070_Ophthalmic Surgical History_Element_DI', () => {
      
  //Add the Opthalmic surgical history element
      it('0070.1_To_add_Ophthalmic_Surgical_History_Element' , () => {
        cy.get("#js-manage-elements-btn").should('be.visible').click()

        cy.get('body').then((body) => {
      
            if (body.find('#manage-elements-Ophthalmic-Surgical-History[class="added"]').length == 0)
            {
              cy.get('#manage-elements-Ophthalmic-Surgical-History').should('be.visible').click()
            }
      
        })
      
        cy.get(".blue.hint.cols-full").should('be.visible').click()

      })  
    
      //Verify that Opthalmic surgical history section is loaded successfully
    it('0070.2_To_Validate_Ophthalmic_Surgical_History_Section_IsAvailable' , () => {
        cy.get('[data-element-type-name="Ophthalmic Surgical History"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Ophthalmic Surgical History"] > header > h3').should('contain' , 'Ophthalmic Surgical History')
        
         cy.get('body').then(($body) => {
         const cnt = $body.find('[data-element-type-name="Ophthalmic Surgical History"] >  div > div  > table > tbody > tr  > td + td + td + td + td + td + td > i').length 

          var i;
          for(i = 0; i <= cnt-1; i++)
        {
         cy.get('[data-element-type-name="Ophthalmic Surgical History"] >  div > div  > table > tbody > tr  > td + td + td + td + td + td + td > i').click()
         cy.wait(1000)
 

        }
        

      })
    })
    // Add and verify opthalmic surgery history 

    it('0070.3_To_Add_And_Verify_Opthalmic_Surgical_History' , () => {

      cy.get('#add-to-past-surgery > button + button').should('be.visible').click()

  //Select the opthalmic surgery history  value, as mentioned in the addexaminationevents file
   cy.fixture("AddExaminationEvents_History.json").then((addexaminationevents) => {
    if(addexaminationevents.Ophthalmic_Surgical_History=="Other")
    {
        cy.get('#add-to-past-surgery > div > table > tbody > tr > td > div > div > ul').contains(addexaminationevents.Ophthalmic_Surgical_History).click()
        //Click the button to close the popup, post the selections made on the popup window
        cy.get("#add-to-past-surgery > div > div + div").should('be.visible').click()
        cy.get('[data-element-type-name="Ophthalmic Surgical History"] > div + div > div > div + table > tbody > tr > td > input + input').should('be.visible').clear().type(addexaminationevents.Ophthalmic_Surgical_History_Other)
    }
    else
    {
        cy.get('#add-to-past-surgery > div > table > tbody > tr > td > div > div > ul').contains(addexaminationevents.Ophthalmic_Surgical_History).click()
        //Click the button to close the popup, post the selections made on the popup window
        cy.get("#add-to-past-surgery > div > div + div").should('be.visible').click()
    }
   
   })

  
  })

  //select right and left checkbox 
    it('0070.4_To_Verify_Right_Left_Checkbox' , () => {
      cy.get('[data-element-type-name="Ophthalmic Surgical History"] > div > div > table > tbody >   tr > td  + td + td > span > label > input').eq(0).should('be.visible').click()
      cy.get('[data-element-type-name="Ophthalmic Surgical History"] > div > div > table > tbody >   tr > td  + td + td > span > label > input').eq(1).should('be.visible').click()

      //Add OSH date, as mentioned in the addexaminationevents json file
    
    cy.fixture("AddExaminationEvents_History.json").then((addexaminationevents) => {
      cy.get('[data-element-type-name="Ophthalmic Surgical History"] >  div > div  > table > tbody > tr > td  + td   + td + td + td  > input').should('be.visible').clear().type(addexaminationevents.Ophthalmic_Surgical_History_Date)
    
    })

  })  

})
    // To be checked - blocker
    /* it('0070.6_To_add_comments' , () => {
      cy.get ('[data-element-type-name="Ophthalmic Surgical History"] > div > div + div > button ').eq(0).should('be.visible').click()
      cy.fixture("AddExaminationEvents_History.json").then((addexaminationevents) => {

        //Add comments to the OSH, as mentioned in the addexaminationevents file
      cy.get('[data-element-type-name="Ophthalmic Surgical History"] > div > div > div > textarea').should('be.visible').clear().type(addexaminationevents.Ophthalmic_Surgical_History_Comments)
      }) */
     
    
    
    
    
    
    
    
    
  

    
    
    // commenting out might need later
    /*it('0070.0070_To check event by n/a' , () => {
      cy.changecontext()
      cy.addexamination_clear_elements()

    })

    //Add the Opthalmic surgical history element
    it('0070.8_To_add_Ophthalmic_Surgical_History_Element' , () => {
      cy.get("#js-manage-elements-btn").should('be.visible').click()
      cy.get('#manage-elements-Ophthalmic-Surgical-History').should('be.visible').click()
      cy.get('.blue').should('be.visible').click()
  })
    
  it('0070.9_To_Add_and_verify_Opthalmic_surgery_history' , () => {
    
    // To delete the added history
      cy.get('#OEModule_OphCiExamination_models_PastSurgery_operations_0 > :nth-child(0070) > .oe-i').click()

   // Click on add button
cy.get('#show-add-popup').should('be.visible').click()
//Select the opthalmic surgery history  value, as mentioned in the addexaminationevents file
cy.fixture("AddExaminationEvents_History.json").then((addexaminationevents) => {
cy.get('.add-options').contains(addexaminationevents.Ophthalmic_Surgical_History).parent().click()
//Click the button to close the popup, post the selections made on the popup window
  cy.get(".add-icon-btn").should('be.visible').click()
})
  })
it('0070.10_To_select n/a checkbox' , () =>{

  cy.get('#OEModule_OphCiExamination_models_PastSurgery_operation_0_na_eye').should('be.visible').click()


   //Add OSH date, as mentioned in the addexaminationevents json file
    
   cy.fixture("AddExaminationEvents_History.json").then((addexaminationevents) => {
    cy.get('#past-surgery-datepicker-0').should('be.visible').clear().type(addexaminationevents.Ophthalmic_Surgical_History_date)
  })
}) */ 


 //Save the examination and verify the header of the next page
/* it('0070.11_To save Ophthalmic_Surgery_History _record and verify next page is loaded successfully' , () => {

  cy.get('#et_save').should('be.visible').click()

  //Verify the next page header
 cy.get('#flash-success').should('be.visible').should('contain.text', 'Examination created')
}) 
}) */


  









