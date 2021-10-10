//Test script for Prism Fusion Range element
describe('0310_Prism_Fusion_Range_Element_DV', () => {

    it('0310.9_Validate_Prism_Fusion_Range_Element_Header' , () => {
      
      cy.get('[data-element-type-name="Prism Fusion Range"] > header > h3').should('be.visible').should('contain', 'Prism Fusion Range')
    }) 
  
    it('0310.10_Validate_Prism_Fusion_Range_Element_Prism_Over' , () => {
      
      cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('[data-element-type-name="Prism Fusion Range"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Prism Fusion Range"] > div > div > table > tbody > tr > td').should('be.visible').should('contain', orthoptictesting.Prism_Fusion_Range_Prism_Over)
      })
    }) 
  
    it('0310.11_Validate_Prism_Fusion_Range_Element_Near_BO' , () => {
      
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
          cy.get('[data-element-type-name="Prism Fusion Range"] > div > div > table > tbody > tr > td + td').should('be.visible').should('contain', orthoptictesting.Prism_Fusion_Range_Near_BO_Value)
          cy.get('[data-element-type-name="Prism Fusion Range"] > div > div > table > tbody > tr > td + td > b').should('be.visible').should('contain', 'BO')
        })
    }) 
  
    it('0310.12_Validate_Prism_Fusion_Range_Element_Near_BI' , () => {
      
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
          cy.get('[data-element-type-name="Prism Fusion Range"] > div > div > table > tbody > tr > td + td + td').should('be.visible').should('contain', orthoptictesting.Prism_Fusion_Range_Near_BI_Value)
          cy.get('[data-element-type-name="Prism Fusion Range"] > div > div > table > tbody > tr > td + td + td > b').should('be.visible').should('contain', 'BI')
        })
    }) 

    it('0310.13_Validate_Prism_Fusion_Range_Element_Near_BU' , () => {
      
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
          cy.get('[data-element-type-name="Prism Fusion Range"] > div > div > table > tbody > tr > td + td + td + td').should('be.visible').should('contain', orthoptictesting.Prism_Fusion_Range_Near_BU_Value)
          cy.get('[data-element-type-name="Prism Fusion Range"] > div > div > table > tbody > tr > td + td + td + td > b').should('be.visible').should('contain', 'BU')
        })
    }) 

    it('0310.14_Validate_Prism_Fusion_Range_Element_Near_BD' , () => {
      
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
          cy.get('[data-element-type-name="Prism Fusion Range"] > div > div > table > tbody > tr > td + td + td + td + td').should('be.visible').should('contain', orthoptictesting.Prism_Fusion_Range_Near_BD_Value)
          cy.get('[data-element-type-name="Prism Fusion Range"] > div > div > table > tbody > tr > td + td + td + td + td > b').should('be.visible').should('contain', 'BD')
        })
    }) 

    it('0310.15_Validate_Prism_Fusion_Range_Element_Distance_BO' , () => {
      
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
          cy.get('[data-element-type-name="Prism Fusion Range"] > div > div > table > tbody > tr > td + td + td + td + td + td').should('be.visible').should('contain', orthoptictesting.Prism_Fusion_Range_Distance_BO_Value)
          cy.get('[data-element-type-name="Prism Fusion Range"] > div > div > table > tbody > tr > td + td + td + td + td + td > b').should('be.visible').should('contain', 'BO')
        })
    }) 

    it('0310.16_Validate_Prism_Fusion_Range_Element_Distance_BI' , () => {
      
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
          cy.get('[data-element-type-name="Prism Fusion Range"] > div > div > table > tbody > tr > td + td + td + td + td + td + td').should('be.visible').should('contain', orthoptictesting.Prism_Fusion_Range_Distance_BI_Value)
          cy.get('[data-element-type-name="Prism Fusion Range"] > div > div > table > tbody > tr > td + td + td + td + td + td + td > b').should('be.visible').should('contain', 'BI')
        })
    }) 

    it('0310.17_Validate_Prism_Fusion_Range_Element_Distance_BU' , () => {
      
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
          cy.get('[data-element-type-name="Prism Fusion Range"] > div > div > table > tbody > tr > td + td + td + td + td + td + td + td').should('be.visible').should('contain', orthoptictesting.Prism_Fusion_Range_Distance_BU_Value)
          cy.get('[data-element-type-name="Prism Fusion Range"] > div > div > table > tbody > tr > td + td + td + td + td + td + td + td > b').should('be.visible').should('contain', 'BU')
        })
    }) 

    it('0310.18_Validate_Prism_Fusion_Range_Element_Distance_BD' , () => {
      
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
          cy.get('[data-element-type-name="Prism Fusion Range"] > div > div > table > tbody > tr > td + td + td + td + td + td + td + td + td').should('be.visible').should('contain', orthoptictesting.Prism_Fusion_Range_Distance_BD_Value)
          cy.get('[data-element-type-name="Prism Fusion Range"] > div > div > table > tbody > tr > td + td + td + td + td + td + td + td + td > b').should('be.visible').should('contain', 'BD')
        })
    }) 

    it('0310.19_Validate_Prism_Fusion_Range_Element_Correction' , () => {
      
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
          cy.get('[data-element-type-name="Prism Fusion Range"] > div > div > table > tbody > tr > td + td + td + td + td + td + td + td + td + td').should('be.visible').should('contain', orthoptictesting.Prism_Fusion_Range_Correction)
        })
    }) 

    it('0310.20_Validate_Prism_Fusion_Range_Element_CHP' , () => {
      
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
          cy.get('[data-element-type-name="Prism Fusion Range"] > div > div > table > tbody > tr > td + td + td + td + td + td + td + td + td + td + td').should('be.visible').should('contain', orthoptictesting.Prism_Fusion_Range_CHP)
        })
    }) 

    it('0310.21_Validate_Prism_Fusion_Range_Comments' , () => {
      
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
          cy.get('[data-element-type-name="Prism Fusion Range"] > div > div + hr + div').should('be.visible').should('contain', orthoptictesting.Prism_Fusion_Range_Comments)
        })
      }) 
    })
  