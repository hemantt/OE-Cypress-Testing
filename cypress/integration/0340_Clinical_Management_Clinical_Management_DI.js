//Test script for Clinical Management element
describe('0340_Clinical_Management_DI', () => {

    //Add the Clinical Management element
    it('0340.1_To_Add_Corrective_Clinical_Management' , () => {
      cy.get("#js-manage-elements-btn").should('be.visible').click()

      cy.get('body').then((body) => {
    
          if (body.find('#manage-elements-Clinical-Management[class="added"]').length == 0)
          {
            cy.get('#manage-elements-Clinical-Management').should('be.visible').click()
          }
    
      })
    
      cy.get(".blue.hint.cols-full").should('be.visible').click()

    })

    //Verify that Clinical Management element is loaded successfully
    it('0340.2_To_Validate_Clinical_Management_Section_isAvailable' , () => {
      cy.get('[data-element-type-name="Clinical Management"] > header > h3').should('be.visible').should('contain', 'Clinical Management')
    })

    //Verify that the labels are loaded successfully
    it('0340.3_isCommentsEnabled' , () => {
      cy.fixture("AddExaminationEvents_Clinical_Management.json").then((clinicalmanagement) => {
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Management_comments').should('be.visible').should('be.enabled')
      
      })

    })

      //Add and verify the Clinical Management and values
    it('0340.4_To_Add_And_Verify_Details' , () => {
      cy.get('[data-element-type-name="Clinical Management"]>div+div>div+div>button').should('be.visible').click()

      //Add details
      cy.fixture("AddExaminationEvents_Clinical_Management.json").then((clinicalmanagement) => {
        cy.get('[data-element-type-name="Clinical Management"]>div+div>div+div>div>table>tbody>tr>td>div>div>ul>li').contains(clinicalmanagement.Clinical_Management_Conclusion).click()
       

        //Click the button to close the popup, post the selections made on the popup window
        cy.get('[data-element-type-name="Clinical Management"]>div+div>div+div>div>div+div').should('be.visible').click()
      })
    })


  

})
