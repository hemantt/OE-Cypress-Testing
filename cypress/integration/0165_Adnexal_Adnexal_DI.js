//Test suite for Add Examination Event
describe('0165_Adnexal_Adnexal_DI', () => {
   //026_Adnexal - Adnexal".
    it('0165.01_Adnexal_Adnexal', () => {
  
        //To get the Adnexal - Adnexal Page
        cy.get("#js-manage-elements-btn").should('be.visible').click()

        cy.get('body').then((body) => {
      
            if (body.find('#manage-elements-Adnexal[class="added"]').length == 0)
            {
                cy.get("#manage-elements-Adnexal").should('be.visible').click()
            }
      
        })
      
        cy.get(".blue.hint.cols-full").should('be.visible').click()


        //Verify pahe title "Adnexal".
        cy.get('[data-element-type-name="Adnexal"] > header > h3').scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Adnexal'] > header > h3").should('contain',"Adnexal")
     })
    
    it('0165.02_Click_on_Add_Button', () => {
        //Click on Add Button at Right Side.
        cy.get("#add-examination-adnexal-right").click()
     })
  
    it('0165.03_Click_on_item_under_Add_List', () => {
        cy.fixture("AddExaminationEvents_Adnexal.json").then((AddExaminationEvents_Adnexal) => {
            //Click on item under "Add" List at Right Side
            cy.get("#add-to-adnexal-right > table > tbody").contains(AddExaminationEvents_Adnexal.Adnexal_Add).click()
        })
  
    })
    
    it('0165.04_Click_on__Click_to_add__button_under_Add_List_at_right_side', () => {

        //Click on Click to add button at right side.
        cy.get("#add-to-adnexal-right > div + div").contains('Click to add').click()
    })
        
    it('0165.05_Click_on_Add_Button_of_Left_side', () => {
        //Click on Add Button.
        cy.get("#add-examination-adnexal-left").click()
     })
  
     it('0165.06_Click_on_item_under_Add_List_of_Left_Side', () => {
        cy.fixture("AddExaminationEvents_Adnexal.json").then((AddExaminationEvents_Adnexal) => {
            //Click on item under "Add" List at Left Side
            cy.get("#add-to-adnexal-left > table > tbody > tr > td > div > div > ul").contains(AddExaminationEvents_Adnexal.Adnexal_Add2).click()
        })
  
    })
    
    it('0165.07_Click_on_Click_to_add_button_of_Left_Side', () => {
            //Click on Click to add button of Left Side.
            cy.get("#add-to-adnexal-left > div + div").contains('Click to add').click()
    })

     
})
  