//Test script for Corrective Head Posture element
describe('0280_Corrective_Head_Posture_Element_DV', () => {

    it('0280.9_Validate_Head_Posture_Element_Header' , () => {
      
      cy.get('[data-element-type-name="Corrective Head Posture"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Corrective Head Posture"] > header > h3').should('be.visible').should('contain', 'Corrective Head Posture')
    }) 

    it('0280.10_Validate_Head_Posture_Element_Data_Tilt' , () => {
      
      cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('#js-listview-headposture-pro > ul > li').should('be.visible').should('contain',"Tilt: " + orthoptictesting.Head_Posture_Tilt)
      })
    }) 

    it('0280.11_Validate_Head_Posture_Element_Data_Turn' , () => {
      
      cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('#js-listview-headposture-pro > ul > li + li').should('be.visible').should('contain',"Turn: " + orthoptictesting.Head_Posture_Turn)
      })
    }) 

    it('0280.12_Validate_Head_Posture_Element_Data_Chin' , () => {
      
      cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('#js-listview-headposture-pro > ul > li + li + li').should('be.visible').should('contain',"Chin: " + orthoptictesting.Head_Posture_Chin)
      })
    }) 

    it('0280.13_Validate_Element_Data_Head_Posture_Comments' , () => {
      
      cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('#js-listview-headposture-pro > ul > li + li + li').should('be.visible').should('contain',orthoptictesting.Head_Posture_Comments)
      })
    }) 
  })
