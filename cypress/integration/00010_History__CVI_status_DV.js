describe('010_CVI_status_DV', () => {


    it('10.01__To_Validate_CVI_status_Section_is_Available', () => {
        //To_Validate_CVI_status_Section_is_Available.
        cy.get("[data-element-type-name='CVI status'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='CVI status'] > header > h3").should('be.visible').should('contain',"CVI status")
            
    })

    it('10.02_Verify cvistatus saved Value ', () => {
        cy.fixture("cvistatus.json").then((cvistatus) => {
            //Verify cvistatus saved Value
            cy.get("[data-element-type-name='CVI status'] > div > table > tbody > tr > td").eq(0).should('be.visible').should('contain',cvistatus.list_item)
        })  
    }) 

        
        
    
})