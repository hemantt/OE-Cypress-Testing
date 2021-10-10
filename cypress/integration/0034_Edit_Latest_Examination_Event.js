//Test script for saving Examination event
describe('0034_Edit_Latest_Examination_Event', () => {

    it('0034.1_Edit_Latest_Examination_Event' , () => {

      //The Examination Event has to be the first event on the list, on the left pane
      cy.get('.button.header-tab').eq(1).click()

    })
})
