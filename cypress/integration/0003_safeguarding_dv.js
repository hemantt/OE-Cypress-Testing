describe('0003_Safeguarding_Element_DV', () => {

    it('0003.6_To_Check_Safeguarding section is Available' ,() => {
        cy.get('[data-element-type-name="Safeguarding"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Safeguarding"] > header > h3').should('contain', 'Safeguarding')
      })
  
    it('0003.7_To_Validate_Saved_Data' , () => {
        cy.fixture("addexaminationevents.json").then((addexaminationevents) => {
          if(addexaminationevents.Safeguarding_No_Safeguarding_Concerns == "Yes")
          {
            cy.get('[data-element-type-name="Safeguarding"] > div > span').should('be.visible').should('contain','Patient has no safeguarding concerns.')
          }
          else
          {
            cy.get('[data-element-type-name="Safeguarding"] > div > table > tbody > tr > td').eq(0).should('be.visible').should('contain', addexaminationevents.Safeguarding_Concerns)
            cy.get('[data-element-type-name="Safeguarding"] > div > table > tbody > tr > td  + td').eq(0).should('be.visible').should('contain', addexaminationevents.Safeguarding_Comments)
          }
        })
      }) 

    it('0003.8_To_Validate_' , () => {
      cy.fixture("addexaminationevents.json").then((addexaminationevents) => {
        if(addexaminationevents.Safeguarding_No_Safeguarding_Concerns != "Yes")
        {
          cy.get('[data-element-type-name="Safeguarding"] > div > div > div > table > tbody > tr > td > button').eq(0).should('be.visible')
          cy.get('[data-element-type-name="Safeguarding"] > div > div > div > table > tbody > tr > td > button').eq(1).should('be.visible')
          cy.get('[data-element-type-name="Safeguarding"] > div > div > div > table > tbody > tr > td > button').eq(2).should('be.visible')
        }
      })
    })

      // This is to add Confirm_Safeguarding_Concerns ,  To add other Safeguarding outcome review call the same from the fixture file
    it('0003.9_To_add_Safeguarding_Outcome_Review' , () => {
        cy.fixture("addexaminationevents.json").then((addexaminationevents) => {
          if(addexaminationevents.Safeguarding_No_Safeguarding_Concerns != "Yes")
          {
            cy.get('[data-element-type-name="Safeguarding"] > div > div > div > table > tbody > tr > td > button').eq(2).should('be.visible').click()
            //To add comment
            cy.get('[data-element-type-name="Safeguarding"] > div > div > div + div > input + input').should('be.visible').clear().type(addexaminationevents.No_Safeguarding_Concerns)
            //To save Comments
            cy.get('[data-element-type-name="Safeguarding"] > div > div > div + div > input  + input + button').should('be.visible').click()
          }
        })
      })        

    it('0003.10_To_Validate_Saved_Safeguarding_Concerns' , () => {
      cy.fixture("addexaminationevents.json").then((addexaminationevents) => {
        if(addexaminationevents.Safeguarding_No_Safeguarding_Concerns != "Yes")
        {
          //To validate Status
          cy.get('[data-element-type-name="Safeguarding"] > div > div > div > table > tbody > tr  > td').eq(0).should('be.visible').should('contain', addexaminationevents.Safeguarding_Status_3)
          // To validate Comments
          cy.get('[data-element-type-name="Safeguarding"] > div > div > div > table > tbody > tr  + tr > td').should('be.visible').should('contain', addexaminationevents.No_Safeguarding_Concerns)
        }

      })
    })

})
