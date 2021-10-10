//Test script for Freehand Draw element
describe('0255_Freehand_Draw_Element_DV', () => {

    it('0255.14_Validate_Freehand_Draw_Element_Header' , () => {
      
      cy.get('[data-element-type-name="Freehand draw"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Freehand draw"] > header > h3').should('be.visible').should('contain', 'Freehand draw')
    }) 

    /*  
    Images are not getting loaded - known issue
    it('0255.15_Validate_Freehand_Draw_Image_1' , () => {
      
        cy.fixture("AddExaminationEvents_Investigation.json").then((investigation) => {
            if (investigation.Freehand_Draw_Category == "Blepharospasm")
            {
              cy.get('[data-element-type-name="Freehand draw"] > div > div > div > div').eq(0).should('be.visible').invoke('attr','src').should('eq','/ProtectedFile/Download/24')
            }
            else if (investigation.Freehand_Draw_Category == "Conjunctiva")
            {
                cy.get('[data-element-type-name="Freehand draw"] > div > div > div > div').eq(0).should('be.visible').invoke('attr','src').should('eq','/ProtectedFile/Download/25')
            }
          })
      }) 
*/
      it('0255.16_Validate_Freehand_Draw_Category_1' , () => {
      
      cy.fixture("AddExaminationEvents_Investigation.json").then((investigation) => {
        cy.get('[data-element-type-name="Freehand draw"] > div > div > div > div + div > table > tbody > tr > td').should('be.visible').should('contain', investigation.Freehand_Draw_Category_1)
      })
    }) 

    it('0255.17_Validate_Freehand_Draw_Comments_1' , () => {
      
        cy.fixture("AddExaminationEvents_Investigation.json").then((investigation) => {
            cy.get('[data-element-type-name="Freehand draw"] > div > div > div > div + div > table > tbody > tr + tr > td > span').should('be.visible').should('contain', investigation.Freehand_Draw_Comments_1)
        })
    }) 
    
    /*  
    Images are not getting loaded - known issue
    it('0255.18_Validate_Freehand_Draw_Image_2' , () => {
      
        cy.fixture("AddExaminationEvents_Investigation.json").then((investigation) => {
            if (investigation.Freehand_Draw_Category == "Blepharospasm")
            {
              cy.get('[data-element-type-name="Freehand draw"] > div > div > div > div').eq(0).should('be.visible').invoke('attr','src').should('eq','/ProtectedFile/Download/24')
            }
            else if (investigation.Freehand_Draw_Category == "Conjunctiva")
            {
                cy.get('[data-element-type-name="Freehand draw"] > div > div > div > div').eq(0).should('be.visible').invoke('attr','src').should('eq','/ProtectedFile/Download/25')
            }
          })
      }) 
*/

  it('0255.19_Validate_Freehand_Draw_Category_2' , () => {
    cy.fixture("AddExaminationEvents_Investigation.json").then((investigation) => {
      if (investigation.Freehand_Draw_Category_2 != "")
      {
        cy.get('[data-element-type-name="Freehand draw"] > div > div > div > div + div > table > tbody > tr > td').eq(3).should('be.visible').should('contain', investigation.Freehand_Draw_Category_2)
      }
    })
  }) 

  it('0255.20_Validate_Freehand_Draw_Comments_2' , () => {
    cy.fixture("AddExaminationEvents_Investigation.json").then((investigation) => {
      if (investigation.Freehand_Draw_Category_2 != "")
      {
          cy.get('[data-element-type-name="Freehand draw"] > div > div > div > div + div > table > tbody > tr + tr > td > span').eq(1).should('be.visible').should('contain', investigation.Freehand_Draw_Comments_2)
      }
    })
  }) 
})
