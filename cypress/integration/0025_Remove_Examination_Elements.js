///    <reference types="cypress" /> 

//To remove the elements of examination event
describe('0025_Remove_Elements_From_Examination_Event', () => {

    it('0025.1_Remove_Elements_From_Examination_Event' , () => {

        cy.get('body').then(($body) => {
          const cnt = $body.find('.oe-i.trash-blue').length
    
          var i;
          for(i = 0; i <= cnt-1; i++)
          {
            cy.get(".oe-i.trash-blue").eq(0).should('be.visible').click()
            cy.wait(1000)
    
            cy.get('body').then(($body) => {
              if($body.find('.secondary.small.confirm.ok').length > 0)
              {
                cy.get(".secondary.small.confirm.ok").should('be.visible').click()
                cy.wait(1000)
              }
            })
          }
        })
    })
})
