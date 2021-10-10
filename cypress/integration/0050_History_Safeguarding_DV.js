describe('0050_Safeguarding_Element_DV', () => {
    //To Validate Safeguarding Element
    it('0050.9_To_Check_Safeguarding_Section_IsAvailable' ,() => {
        cy.get('[data-element-type-name="Safeguarding"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Safeguarding"] > header > h3').should('contain', 'Safeguarding')
      })
    
    //Validate Saved data is loaded Successfully
    it('0050.10_To_Validate_Saved_Data' , () => {
      cy.fixture("AddExaminationEvents_History.json").then((addexaminationevents) => {
        cy.get('[data-element-type-name="Safeguarding"] > div > table > tbody > tr > td').eq(0).should('be.visible').should('contain', addexaminationevents.Safeguarding_Concerns)
        cy.get('[data-element-type-name="Safeguarding"] > div > table > tbody > tr > td  + td').eq(0).should('be.visible').should('contain', addexaminationevents.Safeguarding_Comments)

        })
      }) 
    //validate Review Buttons
    it('0050.11_To_Validate_Safeguarding_Outcome_Review_Buttons' , () => {
       cy.get('[data-element-type-name="Safeguarding"] > div > div > div > table > tbody > tr > td > button').eq(0).should('be.visible')
       cy.get('[data-element-type-name="Safeguarding"] > div > div > div > table > tbody > tr > td > button').eq(1).should('be.visible')
       cy.get('[data-element-type-name="Safeguarding"] > div > div > div > table > tbody > tr > td > button').eq(2).should('be.visible')
    })

    // This is to add Confirm_Safeguarding_Concerns ,  To add other Safeguarding outcome review call the same from the fixture file
    it('0050.12_To_Add_Safeguarding_Outcome_Review' , () => {
        cy.get('[data-element-type-name="Safeguarding"] > header > h3').scrollIntoView().should('be.visible')
      cy.fixture("AddExaminationEvents_History.json").then((addexaminationevents) => {
        cy.get('[data-element-type-name="Safeguarding"] > div > div > div > table > tbody > tr > td > button').eq(2).should('be.visible').click()
          //To add comment
        cy.get('[data-element-type-name="Safeguarding"] > div > div > div + div > input + input').click().should('be.visible').clear().type(addexaminationevents.Safeguarding_No_Safeguarding_Concerns) 
          //To save Comments
        cy.get('[data-element-type-name="Safeguarding"] > div > div > div + div > input  + input + button').should('be.visible').click()
        })
      })        
    
    //Validate Saved Outcome Review is loaded successfuuly  
    it('0050.13_To_Validate_Saved_Safeguarding_Concerns' , () => {
      cy.get('[data-element-type-name="Safeguarding"] > header > h3').scrollIntoView().should('be.visible')
    cy.fixture("AddExaminationEvents_History.json").then((addexaminationevents) => {
        //To validate Status
      cy.get('#safeguarding-outcome-summary > table > tbody > tr  > td').eq(0).should('be.visible').should('contain', addexaminationevents.Safeguarding_Status_3)
       // To validate Comments
      cy.get('#safeguarding-outcome-summary > table > tbody > tr  > td').eq(1).should('be.visible').should('contain', addexaminationevents.Safeguarding_No_Safeguarding_Concerns)

    })
  })
  


    
  })














