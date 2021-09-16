//Test script for Intraocular Pressure element
describe('0078_Intraocular_Pressure_Element_DV', () => {

    it('0078.9_Validate_Intraocular_Pressure_Element_Header' , () => {
      
      cy.get('[data-element-type-name="Intraocular Pressure"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Intraocular Pressure"] > header > h3').should('be.visible').should('contain', 'Intraocular Pressure')
    }) 
  
    it('0078.10_Validate_Intraocular_Pressure_mm_Hg_Right_Eye' , () => {

      cy.fixture("intraocularpressure.json").then((intraocularpressure) => {

        var txt = "";

        if (intraocularpressure.Intraocular_Pressure_mm_Right_Eye != "0")
        {
          txt = txt + intraocularpressure.Intraocular_Pressure_mm_Right_Eye;
        }

        txt = txt + intraocularpressure.Intraocular_Pressure_hg_Right_Eye + "mm Hg";
      
        cy.get('[data-element-type-name="Intraocular Pressure"] > div > div > table > tbody > tr > td').should('be.visible').should('contain', txt)
      })
    }) 
    
    it('0078.11_Validate_Intraocular_Pressure_Instrument_Right_Eye' , () => {
      
        cy.fixture("intraocularpressure.json").then((intraocularpressure) => {
          cy.get('[data-element-type-name="Intraocular Pressure"] > div > div > table > tbody > tr > td + td + td').should('be.visible').should('contain', intraocularpressure.Intraocular_Pressure_Instrument_Right_Eye)
        })
    }) 

    it('0078.12_Validate_Intraocular_Pressure_mm_Hg_Left_Eye' , () => {
      
        cy.fixture("intraocularpressure.json").then((intraocularpressure) => {

          var txt = "";

          if (intraocularpressure.Intraocular_Pressure_mm_Left_Eye != "0")
          {
            txt = txt + intraocularpressure.Intraocular_Pressure_mm_Left_Eye;
          }
  
          txt = txt + intraocularpressure.Intraocular_Pressure_hg_Left_Eye + "mm Hg";

          cy.get('[data-element-type-name="Intraocular Pressure"] > div > div + div  table > tbody > tr > td').should('be.visible').should('contain', txt)
        })
    }) 
    
    it('0078.13_Validate_Intraocular_Pressure_Instrument_Left_Eye' , () => {
      
        cy.fixture("intraocularpressure.json").then((intraocularpressure) => {
          cy.get('[data-element-type-name="Intraocular Pressure"] > div > div + div  table > tbody > tr > td + td + td').should('be.visible').should('contain', intraocularpressure.Intraocular_Pressure_Instrument_Left_Eye)
        })
    }) 

    it('0078.14_Validate_Intraocular_Pressure_Comments_Right_Eye' , () => {
      
        cy.fixture("intraocularpressure.json").then((intraocularpressure) => {
          cy.get('[data-element-type-name="Intraocular Pressure"] > div > div > span').should('be.visible').should('contain', intraocularpressure.Intraocular_Pressure_Comments_Right_Eye)
        })
    }) 

    it('0078.15_Validate_Intraocular_Pressure_Comments_Left_Eye' , () => {
      
      cy.get('[data-element-type-name="Intraocular Pressure"] > div > div + div > span').scrollIntoView().should('be.visible')

      cy.fixture("intraocularpressure.json").then((intraocularpressure) => {
          cy.get('[data-element-type-name="Intraocular Pressure"] > div > div + div > span').should('be.visible').should('contain', intraocularpressure.Intraocular_Pressure_Comments_Left_Eye)
        })
    }) 
})
