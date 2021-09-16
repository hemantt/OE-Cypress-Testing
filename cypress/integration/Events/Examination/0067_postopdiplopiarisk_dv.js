//Test script for Post-Op Diplopia Risk element
describe('0067_Post_Op_Diplopia_Risk_Element_DV', () => {

    it('0067.9_Validate_Post_Op_Diplopia_Risk_Element_Header' , () => {
      
      cy.get('[data-element-type-name="Post-Op Diplopia Risk"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Post-Op Diplopia Risk"] > header > h3').should('be.visible').should('contain', 'Post-Op Diplopia Risk')
    }) 
  
    it('0067.10_Validate_Post_Op_Diplopia_Risk_Element_Comments' , () => {
      
      cy.fixture("orthoptictesting.json").then((orthoptictesting) => {
        cy.get('#js-listview-postopdiplopiarisk-pro > ul > li').should('be.visible').should('contain', orthoptictesting.Post_Op_Diplopia_Risk_Comments)
      })
    }) 

    it('0067.11_Validate_Post_Op_Diplopia_Risk_Element_At Risk' , () => {
      
        cy.fixture("orthoptictesting.json").then((orthoptictesting) => {
          cy.get('#js-listview-postopdiplopiarisk-pro > ul > li + li').should('be.visible').should('contain', "At Risk: " + orthoptictesting.Post_Op_Diplopia_Risk_At_Risk)
        })
    }) 
    
  })
