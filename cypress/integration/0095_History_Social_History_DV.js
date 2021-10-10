describe('0095_Social_History_DV', () => {

    it('0095.06_To_Validate_Social_History_Section_is_Available', () => {
        cy.get("#tile-group-exam-patient > section > header > h3").eq(0).scrollIntoView().should('be.visible')
        cy.get("#tile-group-exam-patient > section > header > h3").eq(0).should('be.visible').should('contain',"Social")
    })
    
    it('0095.07_To_Validate_Social_History_Section_is_Available', () => {

        cy.get('body').then(($body) => {

            const cnt = $body.find('#tile-group-exam-patient>section>div>div>div>table>tbody>tr>td').length

            if (cnt== 8)
            {
                cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {   
        
                    cy.get("#tile-group-exam-patient>section>div>div>div>table>tbody>tr>td").eq(0).should('be.visible').should('contain',"Employment: " + AddExaminationEvents_History.SocialHistory_Employment)
                    cy.get("#tile-group-exam-patient>section>div>div>div>table>tbody>tr>td").eq(1).should('be.visible').should('contain',"Driving Status: " + AddExaminationEvents_History.SocialHistory_Driving_Status)
                    cy.get("#tile-group-exam-patient>section>div>div>div>table>tbody>tr>td").eq(2).should('be.visible').should('contain',"Smoking Status: " + AddExaminationEvents_History.SocialHistory_Smoking_Status)
                    cy.get("#tile-group-exam-patient>section>div>div>div>table>tbody>tr>td").eq(3).should('be.visible').should('contain',"Accommodation: " + AddExaminationEvents_History.SocialHistory_Accommodation)
            
                    cy.get("#tile-group-exam-patient>section>div>div>div>table>tbody>tr>td").eq(7).scrollIntoView().should('be.visible')
                    cy.wait(1000)
            
                    cy.get("#tile-group-exam-patient>section>div>div>div>table>tbody>tr>td").eq(4).should('be.visible').should('contain',"Comments: " + AddExaminationEvents_History.SocialHistory_Comments)
                    cy.get("#tile-group-exam-patient>section>div>div>div>table>tbody>tr>td").eq(5).should('be.visible').should('contain',"Carer: " + AddExaminationEvents_History.SocialHistory_Carer)
                    cy.get("#tile-group-exam-patient>section>div>div>div>table>tbody>tr>td").eq(6).should('be.visible').should('contain',"Alcohol Intake: " + AddExaminationEvents_History.SocialHistory_Alcohol_Units + " units/week")
                    cy.get("#tile-group-exam-patient>section>div>div>div>table>tbody>tr>td").eq(7).should('be.visible').should('contain',"Substance Misuse: " + AddExaminationEvents_History.SocialHistory_Substance_Misuse)
                })
    
            }
            else
            {
                cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {   
                    cy.get("#tile-group-exam-patient>section>div>div>div>table>tbody>tr>td").eq(1).should('be.visible').should('contain',"Employment: " + AddExaminationEvents_History.SocialHistory_Employment)
                    cy.get("#tile-group-exam-patient>section>div>div>div>table>tbody>tr>td").eq(2).should('be.visible').should('contain',"Driving Status: " + AddExaminationEvents_History.SocialHistory_Driving_Status)
                    cy.get("#tile-group-exam-patient>section>div>div>div>table>tbody>tr>td").eq(3).should('be.visible').should('contain',"Smoking Status: " + AddExaminationEvents_History.SocialHistory_Smoking_Status)
                    cy.get("#tile-group-exam-patient>section>div>div>div>table>tbody>tr>td").eq(4).should('be.visible').should('contain',"Accommodation: " + AddExaminationEvents_History.SocialHistory_Accommodation)
        
                    cy.get("#tile-group-exam-patient>section>div>div>div>table>tbody>tr>td").eq(8).scrollIntoView().should('be.visible')
                    cy.wait(1000)
        
                    cy.get("#tile-group-exam-patient>section>div>div>div>table>tbody>tr>td").eq(5).should('be.visible').should('contain',"Comments: " + AddExaminationEvents_History.SocialHistory_Comments)
                    cy.get("#tile-group-exam-patient>section>div>div>div>table>tbody>tr>td").eq(6).should('be.visible').should('contain',"Carer: " + AddExaminationEvents_History.SocialHistory_Carer)
                    cy.get("#tile-group-exam-patient>section>div>div>div>table>tbody>tr>td").eq(7).should('be.visible').should('contain',"Alcohol Intake: " + AddExaminationEvents_History.SocialHistory_Alcohol_Units + " units/week")
                    cy.get("#tile-group-exam-patient>section>div>div>div>table>tbody>tr>td").eq(8).should('be.visible').should('contain',"Substance Misuse: " + AddExaminationEvents_History.SocialHistory_Substance_Misuse)
                })
            }

        })

    })

})