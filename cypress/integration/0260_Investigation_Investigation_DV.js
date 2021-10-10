//Test script for Investigation element
describe('0260_Investigation_Element_DV', () => {

    it('0260.9_Validate_Investigation_Element_Header' , () => {
      
      cy.get('[data-element-type-name="Investigation"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Investigation"] > header > h3').should('be.visible').should('contain', 'Investigation')
    }) 
  
    it('0260.10_Validate_Investigation' , () => {
      
      cy.fixture("AddExaminationEvents_Investigation.json").then((investigation) => {
        cy.get('[data-element-type-name="Investigation"] > div > div > table > tbody > tr > td').eq(0).should('be.visible').should('contain', investigation.Investigation)
      })
    }) 

    it('0260.11_Validate_Investigation_Date' , () => {
      
        cy.fixture("AddExaminationEvents_Investigation.json").then((investigation) => {
          cy.get('[data-element-type-name="Investigation"] > div > div > table > tbody > tr > td + td + td > span').eq(0).should('be.visible').should('contain', investigation.Investigation_Date_Expected_After_Save)
        })
    }) 
    
    it('0260.12_Validate_Investigation_Time' , () => {
      
        cy.fixture("AddExaminationEvents_Investigation.json").then((investigation) => {
          cy.get('[data-element-type-name="Investigation"] > div > div > table > tbody > tr > td + td + td + td > small').should('be.visible').should('contain', "at ")
          cy.get('[data-element-type-name="Investigation"] > div > div > table > tbody > tr > td + td + td + td').eq(0).should('be.visible').should('contain', investigation.Investigation_Time + ":00")
        })
    }) 

    it('0260.13_Validate_Investigation_Comments' , () => {
      
        cy.fixture("AddExaminationEvents_Investigation.json").then((investigation) => {
          cy.get('[data-element-type-name="Investigation"] > div > div > table > tbody > tr > td + td + td + td + td > span').should('be.visible').should('contain', investigation.Investigation_Comments)
        })
    }) 

    it('0260.14_Validate_Investigation_Description' , () => {
      
        cy.fixture("AddExaminationEvents_Investigation.json").then((investigation) => {
          cy.get('[data-element-type-name="Investigation"] > div > div > span').should('be.visible').should('contain', investigation.Investigation_Description)
        })
    }) 
})
