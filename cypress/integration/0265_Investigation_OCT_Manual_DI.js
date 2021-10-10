//Test suite for Add Examination Event
describe('0265_Investigation_OCT_Manual_DI', () => {

    
    it('0265.01_Investigation_OCT_Manual', () => {
        //To get the "_Investigation_OCT_Manual" Page
        cy.get("#js-manage-elements-btn").should('be.visible').click()

        cy.get('body').then((body) => {
      
            if (body.find('#manage-elements-OCT-\\(manual\\)[class="added"]').length == 0)
            {
                cy.get("#manage-elements-OCT-\\(manual\\)").should('be.visible').click()
            }
      
        })
      
        cy.get(".blue.hint.cols-full").should('be.visible').click()

    })
    
    
    it('0265.02_To_Validate_Investigation_OCT_Manual_Section_is_Available', () => {
        //Verify Page title "_Investigation_OCT_Manual".
        cy.get("[data-element-type-class='OEModule_OphCiExamination_models_Element_OphCiExamination_OCT'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-class='OEModule_OphCiExamination_models_Element_OphCiExamination_OCT'] > header > h3").should('be.visible').should('contain','OCT (manual)')
    })
  
    it('0265.03_To_Validate_and_provide_input_to_Image_Type_at_Right_side', () => {
        //To_Validate_and_provide_input_to_Image_Type_at_Right_side.
        cy.fixture("AddExaminationEvents_Investigation.json").then((AddExaminationEvents_Investigation) => {
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_right_method_id").should('be.visible').select(AddExaminationEvents_Investigation.OCT_Manual_Image_Type_R)
        })
    })

    it('0265.04_To_Validate_and_provide_input_to_Maximum_CRT_at_Right_side', () => {
        //To_Validate_and_provide_input_to_Maximum_CRT_at_Right_side.
        //CRT must be between 250 and 850 at_Right_side
        cy.fixture("AddExaminationEvents_Investigation.json").then((AddExaminationEvents_Investigation) => {
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_right_crt").should('be.visible').clear().type(AddExaminationEvents_Investigation.OCT_Manual_Maximum_CRT_R)
        })
    })

    it('0265.05_To_Validate_and_provide_input_to_Central_Macular_Thickness_(CMT)_at_Right_side', () => {
        //To_Validate_and_provide_input_to_Central_Macular_Thickness_(CMT)_at_Right_side
        //Central_Macular_Thickness_(CMT) must be between 50 and 1500 at_Right_side
        cy.fixture("AddExaminationEvents_Investigation.json").then((AddExaminationEvents_Investigation) => {
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_right_sft").should('be.visible').clear().type(AddExaminationEvents_Investigation.OCT_Manual_Central_Macular_Thickness_R)
        })
    })//

    it('0265.06_To_Validate_and_select_RadioButton_of_Thickness_increase_of_100µm_at_Right_side', () => {
        //To_Validate_and_select_RadioButton_of_Thickness_increase_of_100µm_at_Right_side.
        //from Fixture file, Select 1 for Yes and 0 for No  
        cy.fixture("AddExaminationEvents_Investigation.json").then((AddExaminationEvents_Investigation) => {
            if (AddExaminationEvents_Investigation.OCT_Manual_Thickness_increase_of_100µm_R == "1")
            {	//select_1_for_Yes_for_RadioButton_Thickness_increase_of_100µm_at_Right_side
                cy.get('[type="radio"]#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_right_thickness_increase_1').should('be.visible').check(AddExaminationEvents_Investigation.OCT_Manual_Thickness_increase_of_100µm_R)
            }
            else
        
            {	//select_0_for_No_for_RadioButton_Thickness_increase_of_100µm_at_Right_side
                cy.get('[type="radio"]#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_right_thickness_increase_0').should('be.visible').check(AddExaminationEvents_Investigation.OCT_Manual_Thickness_increase_of_100µm_R)
            }
        })
    })

    it('0265.07_To_Validate_and_select_RadioButton_of_Dry_at_Right_side', () => {
        //To_Validate_and_select_RadioButton_of_Dry_at_Right_side
        //from Fixture file, Select 1 for "Yes" and 0 for "No"
        cy.fixture("AddExaminationEvents_Investigation.json").then((AddExaminationEvents_Investigation) => {
            if (AddExaminationEvents_Investigation.OCT_Manual_Dry_R == "0")
            {	//select_0_for_No_for_RadioButton_Thickness_increase_of_100µm_at_Right_side
                cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_right_dry_0').should('be.visible').check(AddExaminationEvents_Investigation.OCT_Manual_Dry_R)
            }
            else
        
            {	//select_1_for_Yes_for_RadioButton_Thickness_increase_of_100µm_at_Right_side
                cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_right_dry_1').should('be.visible').check(AddExaminationEvents_Investigation.OCT_Manual_Dry_R)
            }
            
            
        })
    })

    it('0265.08_To_Validate_and_select_from_Findings_dropdown_at_Right_side', () => {
        //To_Validate_and_select_from_Findings_dropdown_at_Right_side
        cy.fixture("AddExaminationEvents_Investigation.json").then((AddExaminationEvents_Investigation) => {
            if (AddExaminationEvents_Investigation.OCT_Manual_Dry_R == "0")
            {	//select_0_for_No_for_RadioButton_Thickness_increase_of_100µm_at_Right_side
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_right_fluidtypes").should('be.visible').select(AddExaminationEvents_Investigation.OCT_Manual_Findings_R)
            }
        })
    })

    it('0265.09_To_Validate_and_select_from_Findings_Type_dropdown_at_Right_side', () => {
        //To_Validate_and_select_from_Findings_Type_dropdown_at_Right_side
        cy.fixture("AddExaminationEvents_Investigation.json").then((AddExaminationEvents_Investigation) => {
            if (AddExaminationEvents_Investigation.OCT_Manual_Dry_R == "0")
            {	//select_0_for_No_for_RadioButton_Thickness_increase_of_100µm_at_Right_side
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_right_fluidstatus_id").should('be.visible').select(AddExaminationEvents_Investigation.OCT_Manual_Findings_Type_R)
            }
        })
    })

    it('0265.10_To_click_and_Input_Comments_in_Commentbox_at_Right_Side', () => {
        //click_and_Input_Comments_in_Commentbox_at_Right_Side.
        cy.fixture("AddExaminationEvents_Investigation.json").then((AddExaminationEvents_Investigation) => {  
           cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_right_comment_button").click()
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_right_comments").should('be.visible').clear().type(AddExaminationEvents_Investigation.OCT_Manual_Comments)
          })
    })

    it('0265.11_To_Validate_and_provide_input_to_Image_Type_at_Left_side', () => {
        //To_Validate_and_provide_input_to_Image_Type_at_Left_side.
        cy.fixture("AddExaminationEvents_Investigation.json").then((AddExaminationEvents_Investigation) => {
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_left_method_id").should('be.visible').select(AddExaminationEvents_Investigation.OCT_Manual_Image_Type_L)
        })
    })

    it('0265.12_To_Validate_and_provide_input_to_Maximum_CRT_at_Left_side', () => {
        //To_Validate_and_provide_input_to_Maximum_CRT_at_Left_side   .
        //CRT must be between 250 and 850 at_Left_side
        cy.fixture("AddExaminationEvents_Investigation.json").then((AddExaminationEvents_Investigation) => {
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_left_crt").should('be.visible').clear().type(AddExaminationEvents_Investigation.OCT_Manual_Maximum_CRT_L)
        })
    })

    it('0265.13_To_Validate_and_provide_input_to_Central_Macular_Thickness_(CMT)_at_Left_side', () => {
        //To_Validate_and_provide_input_to_Central_Macular_Thickness_(CMT)_at_Left_side
        //Central_Macular_Thickness_(CMT) must be between 50 and 1500 at_Left_side
        cy.fixture("AddExaminationEvents_Investigation.json").then((AddExaminationEvents_Investigation) => {
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_left_sft").should('be.visible').clear().type(AddExaminationEvents_Investigation.OCT_Manual_Central_Macular_Thickness_L)
        })
    })

    it('0265.14_To_Validate_and_select_RadioButton_of_Thickness_increase_of_100µm_at_Left_side', () => {
        //To_Validate_and_select_RadioButton_of_Thickness_increase_of_100µm_at_Left_side.
        //from Fixture file, Select 1 for Yes and 0 for No  
        cy.fixture("AddExaminationEvents_Investigation.json").then((AddExaminationEvents_Investigation) => {
            if (AddExaminationEvents_Investigation.OCT_Manual_Thickness_increase_of_100µm_L == "1")
            {	//select_1_for_Yes_for_RadioButton_Thickness_increase_of_100µm_at_Left_side
                cy.get('[type="radio"]#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_left_thickness_increase_1').should('be.visible').check(AddExaminationEvents_Investigation.OCT_Manual_Thickness_increase_of_100µm_L)
            }
            else
        
            {	//select_0_for_No_for_RadioButton_Thickness_increase_of_100µm_at_Left_side
                cy.get('[type="radio"]#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_left_thickness_increase_0').should('be.visible').check(AddExaminationEvents_Investigation.OCT_Manual_Thickness_increase_of_100µm_R)
            }
            
        })
    })

    it('0265.15_To_Validate_and_select_RadioButton_of_Dry_at_Left_side', () => {
        //To_Validate_and_select_RadioButton_of_Dry_at_Left_side
        //from Fixture file, Select 1 for "Yes" and 0 for "No"
        cy.fixture("AddExaminationEvents_Investigation.json").then((AddExaminationEvents_Investigation) => {
            if (AddExaminationEvents_Investigation.OCT_Manual_Dry_L == "0")
            {	//select_0_for_No_for_RadioButton_of_Dry_at_Left_side
                cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_left_dry_0').should('be.visible').check(AddExaminationEvents_Investigation.OCT_Manual_Dry_L)
            }
            else
            {	//select_1_for_Yes_for_RadioButton_of_Dry_at_Left_side
                cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_left_dry_1').should('be.visible').check(AddExaminationEvents_Investigation.OCT_Manual_Dry_L)
            }
        })
    })

    it('0265.16_To_Validate_and_select_from_Findings_dropdown_at_Left_side', () => {
        //To_Validate_and_select_from_Findings_dropdown_at_Left_side
        cy.fixture("AddExaminationEvents_Investigation.json").then((AddExaminationEvents_Investigation) => {
            if (AddExaminationEvents_Investigation.OCT_Manual_Dry_L == "0")
            {	//select_0_for_No_for_RadioButton_of_Dry_at_Left_side
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_left_fluidtypes").should('be.visible').select(AddExaminationEvents_Investigation.OCT_Manual_Findings_L)
            }
        })
    })

    it('0265.17_To_Validate_and_select_from_Findings_Type_dropdown_at_Left_side', () => {
        //To_Validate_and_select_from_Findings_Type_dropdown_at_Left_side
        cy.fixture("AddExaminationEvents_Investigation.json").then((AddExaminationEvents_Investigation) => {
            if (AddExaminationEvents_Investigation.OCT_Manual_Dry_L == "0")
            {	//select_0_for_No_for_RadioButton_of_Dry_at_Left_side
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_left_fluidstatus_id").should('be.visible').select(AddExaminationEvents_Investigation.OCT_Manual_Findings_Type_L)
            }
            
        })
    })

    it('0265.18_To_click_and_Input_Comments_in_Commentbox_at_Left_Side', () => {
        //click_and_Input_Comments_in_Commentbox_at_Right_Side.
        cy.fixture("AddExaminationEvents_Investigation.json").then((AddExaminationEvents_Investigation) => {  
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_left_comment_button").click()
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_left_comments").should('be.visible').clear().type(AddExaminationEvents_Investigation.OCT_Manual_Comments)
        })
    })
})