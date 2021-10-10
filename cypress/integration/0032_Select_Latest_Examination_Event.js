//Test script for saving Examination event
describe('0032_Select_Latest_Examination_Event', () => {

    it('0032.1_Select_Latest_Examination_Event' , () => {

      //The Examination Event has to be the first event on the list, on the left pane
      cy.get('#js-events-by-date > li').eq(0).click()

    })
})
