//Test suite for Add Examination Event
describe('019_Visual_Function__Visual_Acuity_DI', () => {
    
    
    //Scenario 2# 019_Visual_Function__Visual_Acuity".
    it('19.01_Visual_Function__Visual_Acuity_Page', () => {

        //To get the Visual_Function__Visual_Acuity
        cy.get("#js-manage-elements-btn").should('be.visible').click()
        
        cy.get("#manage-elements-Visual-Acuity").should('be.visible').click()
        
        cy.get('body').then(($body) => {
            if($body.find('.secondary.small.confirm.ok').length > 0)
            {
              cy.get(".secondary.small.confirm.ok").should('be.visible').click()
              cy.wait(1000)
              cy.get("#manage-elements-Visual-Acuity").should('be.visible').click()
              cy.wait(1000)
            }
        })
        cy.get(".blue.hint.cols-full").should('be.visible').click()
        
    })
    
    it('19.02__To_Validate_Visual_Acuity_Section_is_Available', () => {
        //To_Validate_Visual_Acuity_Section_is_Available.
        cy.get("[data-element-type-name='Visual Acuity'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Visual Acuity'] > header > h3").should('be.visible').should('contain',"Visual Acuity")
        
    })
    
    
    
    it('19.03_Click on Add Button', () => {
        //Click on Add Button.
        cy.get("#add-VisualAcuity-reading-btn-right").should('be.visible').click()
        cy.wait(1000)
     })

    it('19.04_Click under "Value" List ', () => {
        cy.fixture("visualfunctions.json").then((visualfunctions) => {
            //Click under "Value" List
            cy.get("#right-add-VisualAcuity-reading > div > table > tbody > tr > td >div").should('be.visible').contains(visualfunctions.vavalue).click()
        })

    })

    it('19.05_Click under "Method" List', () => {
        cy.fixture("visualfunctions.json").then((visualfunctions) => {
            //Click under "Method" List
            cy.get("#right-add-VisualAcuity-reading > div > table > tbody > tr > td >div").should('be.visible').contains(visualfunctions.vaMethod).click()
        })

    })
    
    it('19.06_Click on "Click to add" button', () => {
            //Click on Click to add button.
            cy.get("#right-add-VisualAcuity-reading > div > div + div").should('be.visible').contains('Click to add').click()
                        
         })

    it('19.07_Add Comments for Right eye', () => {
      cy.fixture("visualfunctions.json").then((visualfunctions) => {
          //Add Comments for Right eye  
          cy.get("#visualacuity-right-comment-button").click()
          cy.get("#visualacuity-right-comments").should('be.visible').clear().type(visualfunctions.r_comments)
          
          })
      })

    it('19.08_Click on Add Button', () => {
        //Click on Add Button.
        cy.get("#add-VisualAcuity-reading-btn-left").should('be.visible').click()
        
     })

    it('19.09_Click under "Value" List', () => {
        cy.fixture("visualfunctions.json").then((visualfunctions) => {
            //Click under "Value" List
            cy.get("#left-add-VisualAcuity-reading > div > table > tbody > tr > td >div").should('be.visible').contains(visualfunctions.vavalue2).click()
        })

    })

    it('19.10_Click under "Method" List', () => {
        cy.fixture("visualfunctions.json").then((visualfunctions) => {
            //Click under "Method" List
            cy.get("#left-add-VisualAcuity-reading > div > table > tbody > tr > td >div").should('be.visible').contains(visualfunctions.vaMethod2).click()
        })

    })
    
    it('19.11_Click on "Click to add" button', () => {
            //Click on Click to add button.
            cy.get("#left-add-VisualAcuity-reading > div > div + div").should('be.visible').contains('Click to add').click()
                        
    })

    it('19.12_Add Comments for left eye', () => {
      cy.fixture("visualfunctions.json").then((visualfunctions) => {  
        //Click on Click to add button.
        cy.get("#visualacuity-left-comment-button").click()
        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_VisualAcuity_left_notes").should('be.visible').clear().type(visualfunctions.l_comments)
      })            
    })

    
})
