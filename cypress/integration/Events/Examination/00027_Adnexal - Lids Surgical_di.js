//Test suite for Add Examination Event
describe('27_Adnexal - Lids Surgical_DI', () => {
    
    //27_Adnexal - Lids Surgical".
    it('27.01_Adnexal - Lids Surgical', () => {
  
        //To get the Adnexal - Lids Surgical Page
        cy.get("#js-manage-elements-btn").should('be.visible').click()
        cy.get("#manage-elements-Lids-Surgical").should('be.visible').click()
        cy.get(".blue.hint.cols-full").should('be.visible').click()

        //Verify Page title "Lids Surgical".
        cy.get('[data-element-type-name="Lids Surgical"] > header > h3').scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Lids Surgical'] > header > h3").should('contain',"Lids Surgical")
     })
    
    it('27.02 comments in No abnormality Textbox at Right side', () => {
        cy.fixture("adnexal.json").then((adnexal) => {
            //Type comments in "No abnormality" Textbox at Right side
            cy.get("#OEModule_OphCiExamination_models_SurgicalLids_right_comments").clear().type(adnexal.Label_R)
            })
  
        })

    it('27.03 comments in No abnormality Textbox at Left side', () => {
        cy.fixture("adnexal.json").then((adnexal) => {
            //Type comments in "No abnormality" Textbox at Left side
            cy.get("#OEModule_OphCiExamination_models_SurgicalLids_left_comments").clear().type(adnexal.Label_L)
        })
      
    })
    
    it('27.04_Click at Freehand - temporary button at right side', () => {
        
            //Click at Freehand - temporary button at right side.
            cy.get("#Freehandright_452 > a").click()
        
     })
  
    it('27.05_Select value from Colour dropdown at right side', () => {
        cy.fixture("adnexal.json").then((adnexal) => {
            //Select value from Colour dropdown at right side.
            cy.get("#ed_canvas_edit_right_452_colourString_control").select(adnexal.colour_R)
        })                  

     })

    it('27.06_Select value from Thickness dropdown at right side', () => {
        cy.fixture("adnexal.json").then((adnexal) => {
            //Select value from Thickness dropdown at right side.
            cy.get("#ed_canvas_edit_right_452_thickness_control").select(adnexal.thickness_R)
        })                  

     })
    
    it('27.07_Insert Value to "Label" Textbox at right side', () => {
            cy.fixture("adnexal.json").then((adnexal) => {
                //Insert Value to "Label" Textbox at right side.
                cy.get("#ed_canvas_edit_right_452_labelText_control").clear().type(adnexal.Label_R)
            })
         })
      
    it('27.08_Click at Freehand - temporary button at Left side', () => {
            
                //Click at Freehand - temporary button at Left side.
                cy.get("#Freehandleft_452 > a").click()
            
         })
      
    it('27.09_Select value from Colour dropdown at Left side', () => {
            cy.fixture("adnexal.json").then((adnexal) => {
                //Select value from Colour dropdown at Left side.
                cy.get("#ed_canvas_edit_left_452_colourString_control").select(adnexal.colour_L)
            })                  
    
         })
    
    it('27.10_Select value from Thickness dropdown at right side', () => {
            cy.fixture("adnexal.json").then((adnexal) => {
                //Select value from Thickness dropdown at Left side.
                cy.get("#ed_canvas_edit_left_452_thickness_control").select(adnexal.thickness_L)
            })                  
    
         })
        
    it('27.11_Insert Value to "Label" Textbox at Left side', () => {
                cy.fixture("adnexal.json").then((adnexal) => {
                    //Insert Value to "Label" Textbox at Left side.
                    cy.get("#ed_canvas_edit_left_452_labelText_control").clear().type(adnexal.Label_L)
                })
             })
             
     
   })
  