//const { contains } = require("cypress/types/jquery")

//const { it } = require("mocha")

//Test script for Follow-up element
describe('0375_Follow_up_Element_DI', () => {

    //Add the Follow_up_ element
    it('0375.1_To_Add_Follow_Up_Element' , () => {

        cy.get("#js-manage-elements-btn").should('be.visible').click()

        cy.get('body').then((body) => {
        
            if (body.find('#manage-elements-Follow-up[class="added"]').length == 0)
            {
                cy.get('#manage-elements-Follow-up').should('be.visible').click()
            }
        
        })
        
        cy.get(".blue.hint.cols-full").should('be.visible').click()

    })
    
    //Verify that Follow_up_ element is loaded successfully
        it('0375.2_To_Validate_Follow_Up_Section_IsAvailable' , () => {
          cy.get('[data-element-type-name="Follow-up"] > header > h3').scrollIntoView().should('be.visible')
          cy.get('[data-element-type-name="Follow-up"] > header > h3').should('contain', 'Follow-up')
        })
    

    //To Add Follow UP details
    it('0375.3_To_Add_Follow_Up_Details' , () => {
        cy.get('[data-element-type-name="Follow-up"] > header > h3').scrollIntoView().should('be.visible')
           cy.get('[data-element-type-name="Follow-up"] > div  + div > div + div > button + button').should('be.visible').click()
           cy.fixture("AddExaminationEvents_Clinical_Management.json").then((clinicalmanagement) => {  
    
    //Case when Follow Up is choosen         
    if(clinicalmanagement.Follow_Up_Outcome_Options == "Follow-up" || clinicalmanagement.Follow_Up_Outcome_Options == "Refer to stable monitoring clinic")
    {

            cy.get('[data-element-type-name="Follow-up"] > div  + div > div + div > div > div + button + table > tbody  > tr > td > div > ul').eq(0).should('be.visible').contains(clinicalmanagement.Follow_Up_Outcome_Options).click()
            cy.get('[data-element-type-name="Follow-up"] > div  + div > div + div > div > div + button + table > tbody  > tr > td > div > ul').eq(1).should('be.visible').contains(clinicalmanagement.Follow_Up_Quantity_Options).click()   
            cy.get('[data-element-type-name="Follow-up"] > div  + div > div + div > div > div + button + table > tbody  > tr > td > div > ul').eq(2).should('be.visible').contains(clinicalmanagement.Follow_Up_Period_Options).click() 
            cy.get('[data-element-type-name="Follow-up"] > div  + div > div + div > div > div + button + table > tbody  > tr > td  + td > ul').eq(0).should('be.visible').contains(clinicalmanagement.Follow_Up_Role_Options).click() 
            cy.get('[data-element-type-name="Follow-up"] > div  + div > div + div > div > div + button + table > tbody  > tr > td  + td + td + td > ul ').should('be.visible').contains(clinicalmanagement.Follow_Up_Risk_Status_Options).click()
           
            
            cy.get('[data-element-type-name="Follow-up"] > div  + div > div + div > div > div + button + table > tbody  > tr > td  + td + td > div > input').should('be.visible').clear().type(clinicalmanagement.Follow_Up_Name)
        
    //Click the button to close the popup, post the selections made on the popup window
            cy.get('[data-element-type-name="Follow-up"] > div  + div > div + div > button  + button + div > div + button').should('be.visible').click()
    }

    //Case when Discharge is choosen   
    else if (clinicalmanagement.Follow_Up_Outcome_Options == "Discharge")
    {
            cy.get('[data-element-type-name="Follow-up"] > div  + div > div + div > div > div + button + table > tbody  > tr > td > div > ul').eq(0).should('be.visible').contains(clinicalmanagement.Follow_Up_Outcome_Options).click()
            cy.get('[data-element-type-name="Follow-up"] > div + div  > div + div > div > table > tbody > tr > td + td + td + td + td + td > ul').eq(0).should('be.visible').contains(clinicalmanagement.Follow_Up_Discharge_Status).click()
       
       if(clinicalmanagement.Follow_Up_Destination_Discharge == "Transfer to another facility")
       {
             cy.get('[data-element-type-name="Follow-up"] > div + div  > div + div > div > table > tbody > tr > td + td + td + td + td + td > ul').eq(1).should('be.visible').contains(clinicalmanagement.Follow_Up_Destination_Discharge).click()
            cy.get('[data-element-type-name="Follow-up"] > div + div  > div + div > div > table > tbody > tr > td + td + td + td + td + td > input').should('be.visible').clear().type(clinicalmanagement.Follow_Up_Destination_Other)
            cy.wait(1000)
            cy.get('[data-element-type-name="Follow-up"] > div + div  > div + div > div > table > tbody > tr > td + td + td + td + td + td > ul').eq(2).should('be.visible').contains(clinicalmanagement.Follow_Up_Destination_Other).click()
            cy.get('[data-element-type-name="Follow-up"] > div  + div > div + div > button  + button + div > div + button').should('be.visible').click()
        
       }
        else if(clinicalmanagement.Follow_Up_Destination_Discharge == "Residential home")
        {
            cy.get('[data-element-type-name="Follow-up"] > div + div  > div + div > div > table > tbody > tr > td + td + td + td + td + td > ul').eq(1).should('be.visible').contains(clinicalmanagement.Follow_Up_Destination_Discharge).click()
            cy.get('[data-element-type-name="Follow-up"] > div  + div > div + div > button  + button + div > div + button').should('be.visible').click()
        }

        else{}
    }    

    else if(clinicalmanagement.Follow_Up_Outcome_Options == "List for surgery")
       {
        cy.get('[data-element-type-name="Follow-up"] > div  + div > div + div > div > div + button + table > tbody  > tr > td > div > ul').eq(0).should('be.visible').contains(clinicalmanagement.Follow_Up_Outcome_Options).click()
        cy.get('[data-element-type-name="Follow-up"] > div  + div > div + div > button  + button + div > div + button').should('be.visible').click()
       }
       
       else{}
    })
    })
    
     //To add Comments
    
    it('0375.4_To_Add_Follow_Up_Comments' , () => {
           cy.get('[data-element-type-name="Follow-up"] > div  + div > div + div > button').eq(0).should('be.visible').click()
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((clinicalmanagement) => {     
           cy.get('[data-element-type-name="Follow-up"] > div  +  div > div > table + div > textarea').should('be.visible').clear().type(clinicalmanagement.Follow_Up_Comments)
        })   
    
    }) 


















})