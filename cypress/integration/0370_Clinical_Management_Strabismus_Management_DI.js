//

//Test script for Strabismus Management element
describe('0370_Strabismus_Management_Element_DI', () => {

    //Add the Strabismus Management element
        it('0370.1_To_Add_Strabismus_Management_Element' , () => {
            cy.get("#js-manage-elements-btn").should('be.visible').click()

            cy.get('body').then((body) => {
          
                if (body.find('#manage-elements-Strabismus-Management[class="added"]').length == 0)
                {
                    cy.get('#manage-elements-Strabismus-Management').should('be.visible').click()
                }
          
            })
          
            cy.get(".blue.hint.cols-full").should('be.visible').click()

        })
    
    //Verify that Strabismus_Management  element is loaded successfully
        it('0370.2_To_Validate_Strabismus_Management_Section_IsAvailable' , () => {
          cy.get('[data-element-type-name="Strabismus Management"] > header > h3').scrollIntoView().should('be.visible')
          cy.get('[data-element-type-name="Strabismus Management"] > header > h3').should('contain', 'Strabismus Management')
        })

    //Add Strabismus_Management data
        it('0370.3_To_Add_Details' ,() => {
          cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > button + button').should('be.visible').click()
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((clinicalmanagement) => {  
    // Case when Glasses: issued is selected
        if(clinicalmanagement.Strabismus_Management_Treatment == "Glasses: issued")
        {
           cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(0).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Treatment).click()
           cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(1).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Treatment_Data).click()
           cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(3).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Treatment_Reason).click()
           cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(4).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Treatment_Eye_Side1).click()
           cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(4).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Treatment_Eye_Side2).click()
        }
     // Case when Bifocals: issued is selected
        if(clinicalmanagement.Strabismus_Management_Treatment == "Bifocals: issued")
        {

           cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(0).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Treatment).click()
           cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(3).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Treatment_Reason).click()
           cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(4).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Treatment_Eye_Side1).click()
           cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(4).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Treatment_Eye_Side2).click()
        }
     // Case when Fresnel prism is selected
        if(clinicalmanagement.Strabismus_Management_Treatment == "Fresnel prism")
        {
            cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(0).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Treatment).click()
            cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(1).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Fresnel_Prism_Value1).click()
            cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(2).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Fresnel_Prism_Value2).click()
            cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(3).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Treatment_Reason).click()
            cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(4).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Treatment_Eye_Side1).click()
            cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(4).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Treatment_Eye_Side2).click()
        }
    // Case when Atropine is selected    
        if(clinicalmanagement.Strabismus_Management_Treatment == "Atropine")
        {
            cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(0).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Treatment).click()
            cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(1).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Atropine_Days).click()
            cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(2).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Atropine_Penaliasation).click()
            cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(3).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Treatment_Reason).click()
            cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(4).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Treatment_Eye_Side1).click()
            cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(4).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Treatment_Eye_Side2).click()
        
        }
    // Case when Patching is selected    
        if(clinicalmanagement.Strabismus_Management_Treatment == "Patching")
        {
            cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(0).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Treatment).click()
            cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(1).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Patching_Hours).click()
            cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(3).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Treatment_Reason).click()
            cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(4).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Treatment_Eye_Side1).click()
            cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(4).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Treatment_Eye_Side2).click()
        }
    // Case when Surgery is selected    
        if(clinicalmanagement.Strabismus_Management_Treatment == "Surgery")
        {
            cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(0).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Treatment).click()
            cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(1).should('be.visible').contains(clinicalmanagement.Strabismus_ManagementS_urgery_Data1).click()
            cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(3).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Treatment_Reason).click()
            cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(4).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Treatment_Eye_Side1).click()
            cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(4).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Treatment_Eye_Side2).click()
        }
    // Case when exercise test is selected    
        if(clinicalmanagement.Strabismus_Management_Treatment == "exercise test")
        {
            cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(0).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Treatment).click()
            cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(1).should('be.visible').contains(clinicalmanagement.Strabismus_Management_exercise_Test_Data1).click()
            cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(3).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Treatment_Reason).click()
            cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(4).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Treatment_Eye_Side1).click()
            cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div + table > tbody > tr > td > div > div > ul').eq(4).should('be.visible').contains(clinicalmanagement.Strabismus_Management_Treatment_Eye_Side2).click()
        }
    
    //Click the button to close the popup, post the selections made on the popup window
            cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > div > div + div').should('be.visible').click()
    
       })
    })
    
    //To Add Comments
         it('0370.4_To_Add_Strabismus_Comments' , () => {
            cy.get('[data-element-type-name="Strabismus Management"] > div + div > div + div > button').eq(0).should('be.visible').click()
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((clinicalmanagement) => {     
            cy.get('[data-element-type-name="Strabismus Management"] > div + div > div > div > div > textarea').should('be.visible').clear().type(clinicalmanagement.Strabismus_Management_Comments)
        })
    })
    
    
    
    
    
    

















})        