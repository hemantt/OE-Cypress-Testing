//Test suite for Add Examination Event
describe('00050_Investigation - OCT (manual)_DI', () => {

    
    it('050.01_Investigation - OCT (manual)', () => {
        //To get the "OCT (manual)" Page
        cy.get("#js-manage-elements-btn").should('be.visible').should('be.visible').click()
        cy.get("#manage-elements-OCT-\\(manual\\)").should('be.visible').click()
        cy.get(".blue.hint.cols-full").should('be.visible').click()
    })
    
    
    it('050.02_To_Validate_OCT_(manual)_Section_is_Available', () => {
        //Verify Page title "OCT (manual)".
        cy.get("[data-element-type-class='OEModule_OphCiExamination_models_Element_OphCiExamination_OCT'] > header > h3").should('be.visible').scrollIntoView()
        cy.get("[data-element-type-class='OEModule_OphCiExamination_models_Element_OphCiExamination_OCT'] > header > h3").should('be.visible').should('contain','OCT (manual)')
    })
  
    it('050.03_To_Validate_and_provide_input_to_Image_Type_at_Right_side', () => {
        //To_Validate_and_provide_input_to_Image_Type_at_Right_side.
        cy.fixture("Investigation_OCT_Manual.json").then((Investigation_OCT_Manual) => {
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_right_method_id").should('be.visible').select(Investigation_OCT_Manual.OCTM_Image_Type_R)
        })
    })

    it('050.04_To_Validate_and_provide_input_to_Maximum_CRT_at_Right_side', () => {
        //To_Validate_and_provide_input_to_Maximum_CRT_at_Right_side.
        //CRT must be between 250 and 850 at_Right_side
        cy.fixture("Investigation_OCT_Manual.json").then((Investigation_OCT_Manual) => {
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_right_crt").should('be.visible').clear().type(Investigation_OCT_Manual.OCTM_Maximum_CRT_R)
        })
    })

    it('050.05_To_Validate_and_provide_input_to_Central_Macular_Thickness_(CMT)_at_Right_side', () => {
        //To_Validate_and_provide_input_to_Central_Macular_Thickness_(CMT)_at_Right_side
        //Central_Macular_Thickness_(CMT) must be between 50 and 1500 at_Right_side
        cy.fixture("Investigation_OCT_Manual.json").then((Investigation_OCT_Manual) => {
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_right_sft").should('be.visible').clear().type(Investigation_OCT_Manual.OCTM_Central_Macular_Thickness_R)
        })
    })//

    it('050.06_To_Validate_and_select_RadioButton_of_Thickness_increase_of_100µm_at_Right_side', () => {
        //To_Validate_and_select_RadioButton_of_Thickness_increase_of_100µm_at_Right_side.
        //from Fixture file, Select 1 for Yes and 0 for No  
        cy.fixture("Investigation_OCT_Manual.json").then((Investigation_OCT_Manual) => {
            if (Investigation_OCT_Manual.OCTM_Thickness_increase_of_100µm_R == "1")
            {	//select_1_for_Yes_for_RadioButton_Thickness_increase_of_100µm_at_Right_side
                cy.get('[type="radio"]#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_right_thickness_increase_1').should('be.visible').check(Investigation_OCT_Manual.OCTM_Thickness_increase_of_100µm_R)
            }
            else
        
            {	//select_0_for_No_for_RadioButton_Thickness_increase_of_100µm_at_Right_side
                cy.get('[type="radio"]#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_right_thickness_increase_0').should('be.visible').check(Investigation_OCT_Manual.OCTM_Thickness_increase_of_100µm_R)
            }
        })
    })

    it('050.07_To_Validate_and_select_RadioButton_of_Dry_at_Right_side', () => {
        //To_Validate_and_select_RadioButton_of_Dry_at_Right_side
        //from Fixture file, Select 1 for "Yes" and 0 for "No"
        cy.fixture("Investigation_OCT_Manual.json").then((Investigation_OCT_Manual) => {
            if (Investigation_OCT_Manual.OCTM_Dry_R == "0")
            {	//select_0_for_No_for_RadioButton_Thickness_increase_of_100µm_at_Right_side
                cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_right_dry_0').should('be.visible').check(Investigation_OCT_Manual.OCTM_Dry_R)
            }
            else
        
            {	//select_1_for_Yes_for_RadioButton_Thickness_increase_of_100µm_at_Right_side
                cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_right_dry_1').should('be.visible').check(Investigation_OCT_Manual.OCTM_Dry_R)
            }
            
            
        })
    })

    it('050.08_To_Validate_and_select_from_Findings_dropdown_at_Right_side', () => {
        //To_Validate_and_select_from_Findings_dropdown_at_Right_side
        cy.fixture("Investigation_OCT_Manual.json").then((Investigation_OCT_Manual) => {
            if (Investigation_OCT_Manual.OCTM_Dry_R == "0")
            {	//select_0_for_No_for_RadioButton_Thickness_increase_of_100µm_at_Right_side
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_right_fluidtypes").should('be.visible').select(Investigation_OCT_Manual.OCTM_Findings_R)
            }
        })
    })

    it('050.09_To_Validate_and_select_from_Findings_Type_dropdown_at_Right_side', () => {
        //To_Validate_and_select_from_Findings_Type_dropdown_at_Right_side
        cy.fixture("Investigation_OCT_Manual.json").then((Investigation_OCT_Manual) => {
            if (Investigation_OCT_Manual.OCTM_Dry_R == "0")
            {	//select_0_for_No_for_RadioButton_Thickness_increase_of_100µm_at_Right_side
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_right_fluidstatus_id").should('be.visible').select(Investigation_OCT_Manual.OCTM_Findings_Type_R)
            }
        })
    })

    it('050.10_To_click_and_Input_Comments_in_Commentbox_at_Right_Side', () => {
        //click_and_Input_Comments_in_Commentbox_at_Right_Side.
        cy.fixture("Investigation_OCT_Manual.json").then((Investigation_OCT_Manual) => {  
           cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_right_comment_button").click()
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_right_comments").should('be.visible').clear().type(Investigation_OCT_Manual.OCTM_Comments)
          })
    })

    it('050.11_To_Validate_and_provide_input_to_Image_Type_at_Left_side', () => {
        //To_Validate_and_provide_input_to_Image_Type_at_Left_side.
        cy.fixture("Investigation_OCT_Manual.json").then((Investigation_OCT_Manual) => {
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_left_method_id").should('be.visible').select(Investigation_OCT_Manual.OCTM_Image_Type_L)
        })
    })

    it('050.12_To_Validate_and_provide_input_to_Maximum_CRT_at_Left_side', () => {
        //To_Validate_and_provide_input_to_Maximum_CRT_at_Left_side   .
        //CRT must be between 250 and 850 at_Left_side
        cy.fixture("Investigation_OCT_Manual.json").then((Investigation_OCT_Manual) => {
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_left_crt").should('be.visible').clear().type(Investigation_OCT_Manual.OCTM_Maximum_CRT_L)
        })
    })

    it('050.13_To_Validate_and_provide_input_to_Central_Macular_Thickness_(CMT)_at_Left_side', () => {
        //To_Validate_and_provide_input_to_Central_Macular_Thickness_(CMT)_at_Left_side
        //Central_Macular_Thickness_(CMT) must be between 50 and 1500 at_Left_side
        cy.fixture("Investigation_OCT_Manual.json").then((Investigation_OCT_Manual) => {
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_left_sft").should('be.visible').clear().type(Investigation_OCT_Manual.OCTM_Central_Macular_Thickness_L)
        })
    })

    it('050.14_To_Validate_and_select_RadioButton_of_Thickness_increase_of_100µm_at_Left_side', () => {
        //To_Validate_and_select_RadioButton_of_Thickness_increase_of_100µm_at_Left_side.
        //from Fixture file, Select 1 for Yes and 0 for No  
        cy.fixture("Investigation_OCT_Manual.json").then((Investigation_OCT_Manual) => {
            if (Investigation_OCT_Manual.OCTM_Thickness_increase_of_100µm_L == "1")
            {	//select_1_for_Yes_for_RadioButton_Thickness_increase_of_100µm_at_Left_side
                cy.get('[type="radio"]#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_left_thickness_increase_1').should('be.visible').check(Investigation_OCT_Manual.OCTM_Thickness_increase_of_100µm_L)
            }
            else
        
            {	//select_0_for_No_for_RadioButton_Thickness_increase_of_100µm_at_Left_side
                cy.get('[type="radio"]#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_left_thickness_increase_0').should('be.visible').check(Investigation_OCT_Manual.OCTM_Thickness_increase_of_100µm_R)
            }
            
        })
    })

    it('050.15_To_Validate_and_select_RadioButton_of_Dry_at_Left_side', () => {
        //To_Validate_and_select_RadioButton_of_Dry_at_Left_side
        //from Fixture file, Select 1 for "Yes" and 0 for "No"
        cy.fixture("Investigation_OCT_Manual.json").then((Investigation_OCT_Manual) => {
            if (Investigation_OCT_Manual.OCTM_Dry_L == "0")
            {	//select_0_for_No_for_RadioButton_of_Dry_at_Left_side
                cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_left_dry_0').should('be.visible').check(Investigation_OCT_Manual.OCTM_Dry_L)
            }
            else
            {	//select_1_for_Yes_for_RadioButton_of_Dry_at_Left_side
                cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_left_dry_1').should('be.visible').check(Investigation_OCT_Manual.OCTM_Dry_L)
            }
        })
    })

    it('050.16_To_Validate_and_select_from_Findings_dropdown_at_Left_side', () => {
        //To_Validate_and_select_from_Findings_dropdown_at_Left_side
        cy.fixture("Investigation_OCT_Manual.json").then((Investigation_OCT_Manual) => {
            if (Investigation_OCT_Manual.OCTM_Dry_L == "0")
            {	//select_0_for_No_for_RadioButton_of_Dry_at_Left_side
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_left_fluidtypes").should('be.visible').select(Investigation_OCT_Manual.OCTM_Findings_L)
            }
        })
    })

    it('050.17_To_Validate_and_select_from_Findings_Type_dropdown_at_Left_side', () => {
        //To_Validate_and_select_from_Findings_Type_dropdown_at_Left_side
        cy.fixture("Investigation_OCT_Manual.json").then((Investigation_OCT_Manual) => {
            if (Investigation_OCT_Manual.OCTM_Dry_L == "0")
            {	//select_0_for_No_for_RadioButton_of_Dry_at_Left_side
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_left_fluidstatus_id").should('be.visible').select(Investigation_OCT_Manual.OCTM_Findings_Type_L)
            }
            
        })
    })

    it('050.18_To_click_and_Input_Comments_in_Commentbox_at_Left_Side', () => {
        //click_and_Input_Comments_in_Commentbox_at_Right_Side.
        cy.fixture("Investigation_OCT_Manual.json").then((Investigation_OCT_Manual) => {  
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_left_comment_button").click()
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_OCT_left_comments").should('be.visible').clear().type(Investigation_OCT_Manual.OCTM_Comments)
        })
    })

  
})