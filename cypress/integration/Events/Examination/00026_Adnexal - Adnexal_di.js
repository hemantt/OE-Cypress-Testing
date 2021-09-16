//Test suite for Add Examination Event
describe('26_Adnexal - Adnexal_DI', () => {
   //026_Adnexal - Adnexal".
    it('26.01_Adnexal - Adnexal', () => {
  
        //To get the Adnexal - Adnexal Page
        cy.get("#js-manage-elements-btn").should('be.visible').click()
        cy.get("#manage-elements-Adnexal").should('be.visible').click()
        cy.get(".blue.hint.cols-full").should('be.visible').click()

        //Verify pahe title "Adnexal".
        cy.get('[data-element-type-name="Adnexal"] > header > h3').scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Adnexal'] > header > h3").should('contain',"Adnexal")
     })
    
    it('26.02_Click on Add Button', () => {
        //Click on Add Button at Right Side.
        cy.get("#add-examination-adnexal-right").click()
     })
  
    it('26.03_Click on item under "Add" List', () => {
        cy.fixture("adnexal.json").then((adnexal) => {
            //Click on item under "Add" List at Right Side
            cy.get("#add-to-adnexal-right > table > tbody").contains(adnexal.Add).click()
        })
  
    })
    
    it('26.04_Click on "Click to add" button under "Add" List at right side', () => {

        //Click on Click to add button at right side.
        cy.get("#add-to-adnexal-right > div + div").contains('Click to add').click()
    })
        
    it('26.05_Click on Add Button of Left side', () => {
        //Click on Add Button.
        cy.get("#add-examination-adnexal-left").click()
     })
  
     it('26.06_Click on item under "Add" List of Left Side', () => {
        cy.fixture("adnexal.json").then((adnexal) => {
            //Click on item under "Add" List at Left Side
            cy.get("#add-to-adnexal-left > table > tbody > tr > td > div > div > ul").contains(adnexal.Add2).click()
        })
  
    })
    
    it('26.07_Click on "Click to add" button of Left Side', () => {
            //Click on Click to add button of Left Side.
            cy.get("#add-to-adnexal-left > div + div").contains('Click to add').click()
    })

     
})
  