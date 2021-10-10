//Test suite for Add Examination Event
describe('0175_Adnexal_Lids_Medical_DI', () => {
    
    //Adnexal - Lids Surgical".
    it('0175.01_Adnexal_Lids_Medical', () => {
  
        //To get the Adnexal - Lids Surgical Page
        cy.get("#js-manage-elements-btn").should('be.visible').click()

        cy.get('body').then((body) => {
      
            if (body.find('#manage-elements-Lids-Medical[class="added"]').length == 0)
            {
                cy.get("#manage-elements-Lids-Medical").should('be.visible').click()
            }
      
        })
      
        cy.get(".blue.hint.cols-full").should('be.visible').click()

        //Verify Page title "Lids Medical".
        cy.get('[data-element-type-name="Lids Medical"] > header > h3').scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Lids Medical'] > header > h3").should('contain','Lids Medical')
        //cy.get("#element-content > div + section + section > header > h3").should('include.text','Lids Medical')
     })
    
    it('0175.02_Comments_in_No_abnormality_Textbox_at_Right_&_Left_side', () => {
        cy.fixture("AddExaminationEvents_Adnexal.json").then((AddExaminationEvents_Adnexal) => {
            //Type comments in "No abnormality" Textbox at Right side.
            cy.get("#OEModule_OphCiExamination_models_MedicalLids_right_comments").clear().type(AddExaminationEvents_Adnexal.Lids_Medical_CommentBox_R)

            //Type comments in "No abnormality" Textbox at Left side.
            cy.get("#OEModule_OphCiExamination_models_MedicalLids_left_comments").clear().type(AddExaminationEvents_Adnexal.Lids_Medical_CommentBox_L)
            })
  
        })
    
    it('0175.03_CLick_on_Palpebral_Conjunctivitis_button_from_Right_side', () => {
        
            //CLick on "Palpebral Conjunctivitis" button from Right side.
            cy.get("#PalpebralConjunctivitisright_447").click()
        })
  
    it('0175.04_Selct_Value_from_type_&_Hyperaemia_Dropdowns_from_Right_side', () => {
            cy.fixture("AddExaminationEvents_Adnexal.json").then((AddExaminationEvents_Adnexal) => {
                //Selct Value from type Dropdown from Right side.
                cy.get("#ed_canvas_edit_right_447_type_control").select(AddExaminationEvents_Adnexal.Lids_Medical_Type_R)

                //Selct Value from Hyperaemia Dropdown from Right side
                cy.get("#ed_canvas_edit_right_447_hyperaemia_control").select(AddExaminationEvents_Adnexal.Lids_Medical_Hyperaemia_R)
            })
         })
      
    it('0175.05_CLick_on_Palpebral_Conjunctivitis_button_from_Left_side', () => {
        
            //CLick on "Palpebral Conjunctivitis" button from Left side.
            cy.get("#PalpebralConjunctivitisleft_447").click()
     })

    it('0175.06_Selct_Value_from_type_&_Hyperaemia_Dropdowns_from_Left_side', () => {
        cy.fixture("AddExaminationEvents_Adnexal.json").then((AddExaminationEvents_Adnexal) => {
            //Selct Value from type Dropdown from Left side.
            cy.get("#ed_canvas_edit_left_447_type_control").select(AddExaminationEvents_Adnexal.Lids_Medical_Type_R)
  
            //Selct Value from Hyperaemia Dropdown from Left side
            cy.get("#ed_canvas_edit_left_447_hyperaemia_control").select(AddExaminationEvents_Adnexal.Lids_Medical_Hyperaemia_L)
  
        })
     })

    
  })
  