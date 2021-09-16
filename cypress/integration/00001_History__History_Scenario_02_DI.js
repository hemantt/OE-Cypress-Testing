
//Test suite for Add Examination Event
describe('001_Element_History_Scenario#2_DI', () => {
        
    //Scenario 1# History via Previous History Elements page.
    it('01.02.01_Select_History', () => {
        
        //To get the History element
        cy.get("#js-manage-elements-btn").should('be.visible').click()
        cy.get("#manage-elements-History").should('be.visible').click()
        //click on OK button if prompted to click on same element (History)
        cy.get('body').then(($body) => {
            if($body.find('.secondary.small.confirm.ok').length > 0)
            {
              cy.get(".secondary.small.confirm.ok").should('be.visible').click()
              cy.wait(1000)
              cy.get("#manage-elements-History").should('be.visible').click()
            }
        })
        cy.get(".blue.hint.cols-full").should('be.visible').click()
        
        
    })

    it('01.02.02__To_Validate_History_Section_is_Available', () => {
        //To_Validate_History_Section_is_Available.
        cy.get("[data-element-type-name='History'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='History'] > header > h3").should('be.visible').should('contain',"History")
            
    })  

    it('01.02.03_get the element of copy Previous History Elements button', () => {
        //To get the element of copy Previous History Elements button
        cy.get("[data-element-type-name='History'] > div > span > i").eq(0).should("be.visible").click()
        cy.wait(2000)
    })  
    
    it('01.02.04_verify page title of Previous History Elements page', () => {
        //To verify page title of Previous History Elements page.
        cy.get("[class='oe-popup-wrap'] > div > div.title").should("be.visible").should('contain', 'Previous History Elements')
    }) 
    
    it('01.02.05_click copy button from Previous History Elements page', () => {
        // To click copy button from Previous History Elements page
        cy.get("[data-element-type-class='OEModule_OphCiExamination_models_Element_OphCiExamination_History']").eq(1).should('be.visible').should('contain', 'Copy').click()
        cy.wait(2000)
    })
    
         
    
    
})


