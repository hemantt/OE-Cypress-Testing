//Test suite for Add Examination Event
describe('0130_Visual_Function_Visual_Acuity_DI', () => {
    
    
    //Scenario 2# 019_Visual_Function__Visual_Acuity".
    it('0130.01_Visual_Function_Visual_Acuity_Page', () => {

        //To get the Visual_Function__Visual_Acuity
        cy.get("#js-manage-elements-btn").should('be.visible').click()

        cy.get('body').then((body) => {
      
            if (body.find('#manage-elements-Visual-Acuity[class="added"]').length == 0)
            {
                cy.get("#manage-elements-Visual-Acuity").should('be.visible').click()
            }
      
        })
      
        cy.get(".blue.hint.cols-full").should('be.visible').click()
        
    })
    
    it('0130.02__To_Validate_Visual_Acuity_Section_is_Available', () => {
        //To_Validate_Visual_Acuity_Section_is_Available.
        cy.get("[data-element-type-name='Visual Acuity'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Visual Acuity'] > header > h3").should('be.visible').should('contain',"Visual Acuity")
        
    })
    
    
    
    it('0130.03_Click_on_Add_Button', () => {
        //Click on Add Button.
        cy.get("#add-VisualAcuity-reading-btn-right").should('be.visible').click()
        cy.wait(1000)
     })

    it('0130.04_Click_under_Value_List ', () => {
        cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {
            //Click under "Value" List
            cy.get("#right-add-VisualAcuity-reading > div > table > tbody > tr > td >div").should('be.visible').contains(AddExaminationEvents_Visual_Functions.Visual_Acuity_Value).click()
        })

    })

    it('0130.05_Click_under_Method_List', () => {
        cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {
            //Click under "Method" List
            cy.get("#right-add-VisualAcuity-reading > div > table > tbody > tr > td >div").should('be.visible').contains(AddExaminationEvents_Visual_Functions.Visual_Acuity_Method).click()
        })

    })
    
    it('0130.06_Click_on_Click_to_add_button', () => {
            //Click on Click to add button.
            cy.get("#right-add-VisualAcuity-reading > div > div + div").should('be.visible').contains('Click to add').click()
                        
         })

    it('0130.07_Add_Comments_for_Right_eye', () => {
      cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {
          //Add Comments for Right eye  
          cy.get("#visualacuity-right-comment-button").click()
          cy.get("#visualacuity-right-comments").should('be.visible').clear().type(AddExaminationEvents_Visual_Functions.Visual_Acuity_Comments_R)
          
          })
      })

    it('0130.08_Click_on_Add_Button', () => {
        //Click on Add Button.
        cy.get("#add-VisualAcuity-reading-btn-left").should('be.visible').click()
        
     })

    it('0130.09_Click_under_Value_List', () => {
        cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {
            //Click under "Value" List
            cy.get("#left-add-VisualAcuity-reading > div > table > tbody > tr > td >div").should('be.visible').contains(AddExaminationEvents_Visual_Functions.Visual_Acuity_Value2).click()
        })

    })

    it('0130.10_Click_under_Method_List', () => {
        cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {
            //Click under "Method" List
            cy.get("#left-add-VisualAcuity-reading > div > table > tbody > tr > td >div").should('be.visible').contains(AddExaminationEvents_Visual_Functions.Visual_Acuity_Method2).click()
        })

    })
    
    it('0130.11_Click_on_Click_to_add_button', () => {
            //Click on Click to add button.
            cy.get("#left-add-VisualAcuity-reading > div > div + div").should('be.visible').contains('Click to add').click()
                        
    })

    it('0130.12_Add_Comments_for_left_eye', () => {
      cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {  
        //Click on Click to add button.
        cy.get("#visualacuity-left-comment-button").click()
        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_VisualAcuity_left_notes").should('be.visible').clear().type(AddExaminationEvents_Visual_Functions.Visual_Acuity_Comments_L)
      })            
    })

    
})
