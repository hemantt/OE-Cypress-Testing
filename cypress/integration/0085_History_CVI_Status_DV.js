describe('0085_CVI_status_DV', () => {


    it('0085.07_To_Validate_CVI_status_Section_is_Available', () => {
        //To_Validate_CVI_status_Section_is_Available.
        cy.get("[data-element-type-name='CVI status'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='CVI status'] > header > h3").should('be.visible').should('contain',"CVI status")
            
    })

    it('0085.08_Verify_CVI_status_saved_Value ', () => {
        cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {
            //Verify cvistatus saved Value
            cy.get("[data-element-type-name='CVI status'] > div > table > tbody > tr > td").eq(0).should('be.visible').should('contain',AddExaminationEvents_History.CviStatus_ListItem)
        })  
    }) 

        
        
    
})