//Test script for Convergence & Accommodation element
describe('0340_Clinical_Management_Element_DV', () => {

    it('0340.7_Validate_Clinical_Management_Element_Header' , () => {
      
      cy.get("#tile-group-exam-patient > section > header > h3").eq(1).scrollIntoView().should('be.visible')
      cy.get("#tile-group-exam-patient > section > header > h3").eq(1).should('be.visible').should('contain',"Management")
      /*
      cy.get('body').then(($body) => {
        const cnt = $body.find('.element-header').length
  
        var i;
        //for loop ends here
        //the value of i, in this case of Management, will be 7

        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((clinicalmanagement) => {
          
        cy.get('.element-header + div > div').eq(i).should('be.visible').should('contain', clinicalmanagement.Clinical_Management_Conclusion)
        })

          })
          */
        })

    it('0340.8_Validate_Clinical_Management_Element_Saved_Data' , () => {
      cy.fixture("AddExaminationEvents_Clinical_Management.json").then((clinicalmanagement) => {
        cy.get("#tile-group-exam-patient > section > header").eq(1).next().should('be.visible').should('contain',clinicalmanagement.Clinical_Management_Conclusion)
      })
    }) 

    
})
