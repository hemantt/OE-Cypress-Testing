//Test suite for Add Examination Event
describe('0170_Adnexal_Lids_Surgical_DI', () => {
    
    //Adnexal - Lids Surgical".
    it('0170.01_Adnexal_Lids_Surgical', () => {
  
        //To get the Adnexal - Lids Surgical Page
        cy.get("#js-manage-elements-btn").should('be.visible').click()

        cy.get('body').then((body) => {
      
            if (body.find('#manage-elements-Lids-Surgical[class="added"]').length == 0)
            {
                cy.get("#manage-elements-Lids-Surgical").should('be.visible').click()
            }
      
        })
      
        cy.get(".blue.hint.cols-full").should('be.visible').click()


        //Verify Page title "Lids Surgical".
        cy.get('[data-element-type-name="Lids Surgical"] > header > h3').scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Lids Surgical'] > header > h3").should('contain',"Lids Surgical")
     })
    
    it('0170.02_comments_in_No_abnormality_Textbox_at_Right_side', () => {
        cy.fixture("AddExaminationEvents_Adnexal.json").then((AddExaminationEvents_Adnexal) => {
            //Type comments in "No abnormality" Textbox at Right side
            cy.get("#OEModule_OphCiExamination_models_SurgicalLids_right_comments").clear().type(AddExaminationEvents_Adnexal.Lids_Surgical_Label_R)
            })
  
        })

    it('0170.03_comments_in_No_abnormality_Textbox_at_Left_side', () => {
        cy.fixture("AddExaminationEvents_Adnexal.json").then((AddExaminationEvents_Adnexal) => {
            //Type comments in "No abnormality" Textbox at Left side
            cy.get("#OEModule_OphCiExamination_models_SurgicalLids_left_comments").clear().type(AddExaminationEvents_Adnexal.Lids_Surgical_Label_L)
        })
      
    })
    
    it('0170.04_Click_at_Freehand_temporary_button_at_right_side', () => {
        
            //Click at Freehand - temporary button at right side.
            cy.get("#Freehandright_452 > a").click()
        
     })
  
    it('0170.05_Select_value_from_Colour_dropdown_at_right_side', () => {
        cy.fixture("AddExaminationEvents_Adnexal.json").then((AddExaminationEvents_Adnexal) => {
            //Select value from Colour dropdown at right side.
            cy.get("#ed_canvas_edit_right_452_colourString_control").select(AddExaminationEvents_Adnexal.Lids_Surgical_Colour_R)
        })                  

     })

    it('0170.06_Select_value_from_Thickness_dropdown_at_right_side', () => {
        cy.fixture("AddExaminationEvents_Adnexal.json").then((AddExaminationEvents_Adnexal) => {
            //Select value from Thickness dropdown at right side.
            cy.get("#ed_canvas_edit_right_452_thickness_control").select(AddExaminationEvents_Adnexal.Lids_Surgical_Thickness_R)
        })                  

     })
    
    it('0170.07_Insert_Value_to_Label_Textbox_at_right_side', () => {
            cy.fixture("AddExaminationEvents_Adnexal.json").then((AddExaminationEvents_Adnexal) => {
                //Insert Value to "Label" Textbox at right side.
                cy.get("#ed_canvas_edit_right_452_labelText_control").clear().type(AddExaminationEvents_Adnexal.Lids_Surgical_Label_R)
            })
         })
      
    it('0170.08_Click_at_Freehand_temporary_button_at_Left_side', () => {
            
                //Click at Freehand - temporary button at Left side.
                cy.get("#Freehandleft_452 > a").click()
            
         })
      
    it('0170.09_Select_value_from_Colour_dropdown_at_Left_side', () => {
            cy.fixture("AddExaminationEvents_Adnexal.json").then((AddExaminationEvents_Adnexal) => {
                //Select value from Colour dropdown at Left side.
                cy.get("#ed_canvas_edit_left_452_colourString_control").select(AddExaminationEvents_Adnexal.Lids_Surgical_Colour_L)
            })                  
    
         })
    
    it('0170.10_Select_value_from_Thickness_dropdown_at_right_side', () => {
            cy.fixture("AddExaminationEvents_Adnexal.json").then((AddExaminationEvents_Adnexal) => {
                //Select value from Thickness dropdown at Left side.
                cy.get("#ed_canvas_edit_left_452_thickness_control").select(AddExaminationEvents_Adnexal.Lids_Surgical_Thickness_L)
            })                  
    
         })
        
    it('0170.11_Insert_Value_to_Label_Textbox_at_Left_side', () => {
                cy.fixture("AddExaminationEvents_Adnexal.json").then((AddExaminationEvents_Adnexal) => {
                    //Insert Value to "Label" Textbox at Left side.
                    cy.get("#ed_canvas_edit_left_452_labelText_control").clear().type(AddExaminationEvents_Adnexal.Lids_Surgical_Label_L)
                })
             })
             
     
   })
  