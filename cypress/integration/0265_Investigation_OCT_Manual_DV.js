//Test suite for Add Examination Event
describe('0265_Investigation_OCT_Manual_DV', () => {

    //Investigation_OCT_Manual.
    it('0265.19_To_Validate_Investigation_OCT_Manual_Section_is_Available', () => {
        //Verify Page title "_Investigation_OCT_Manual".
        cy.get("[data-element-type-name='OCT \\(manual\\)'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='OCT \\(manual\\)'] > header > h3").should('be.visible').should('contain','OCT (manual)')
    })
  
    it('0265.20_To_Validate_output_of_Image_Type_at_Right_side', () => {
        //To_Validate_and_provide_input_to_Image_Type_at_Right_side.
        cy.fixture("AddExaminationEvents_Investigation.json").then((AddExaminationEvents_Investigation) => {
            cy.get("[data-element-type-name='OCT (manual)'] > div > div > table > tbody > tr > td + td").should('be.visible').should('contain',AddExaminationEvents_Investigation.OCT_Manual_Image_Type_R)
        })
    })

    it('0265.21_To_Validate_output_of_Maximum_CRT_at_Right_side', () => {
        //To_Validate_and_provide_input_to_Maximum_CRT_at_Right_side   .
        //CRT must be between 250 and 850 at_Right_side
        cy.fixture("AddExaminationEvents_Investigation.json").then((AddExaminationEvents_Investigation) => {
            cy.get("[data-element-type-name='OCT (manual)'] > div > div > table > tbody > tr + tr > td + td").should('be.visible').should('contain',AddExaminationEvents_Investigation.OCT_Manual_Maximum_CRT_R)
        })
    })

    it('0265.22_To_Validate_output_of_Central_Macular_Thickness_(CMT)_at_Right_side', () => {
        //To_Validate_and_provide_input_to_Central_Macular_Thickness_(CMT)_at_Right_side
        //Central_Macular_Thickness_(CMT) must be between 50 and 1500 at_Right_side
        cy.fixture("AddExaminationEvents_Investigation.json").then((AddExaminationEvents_Investigation) => {
            cy.get("[data-element-type-name='OCT (manual)'] > div > div > table > tbody > tr + tr > td + td").should('be.visible').should('contain',AddExaminationEvents_Investigation.OCT_Manual_Central_Macular_Thickness_R)
        })
    })

    it('0265.23_To_Validate_output_of_Thickness_increase_of_100µm_at_Right_side', () => {
        //To_Validate_and_select_RadioButton_of_Thickness_increase_of_100µm_at_Right_side  .
        cy.fixture("AddExaminationEvents_Investigation.json").then((AddExaminationEvents_Investigation) => {
            if (AddExaminationEvents_Investigation.OCT_Manual_Thickness_increase_of_100µm_R == "1")
            {	//select_1_to_select_Yes_for_RadioButton_Thickness_increase_of_100µm_at_Right_side
                cy.get("[data-element-type-name='OCT (manual)'] > div > div > table > tbody > tr + tr + tr > td + td").should('be.visible').should('contain','Yes')
            }
            else
        
            {	//select_0_to_select_No_for_RadioButton_Thickness_increase_of_100µm_at_Right_side
                cy.get("[data-element-type-name='OCT (manual)'] > div > div > table > tbody > tr + tr + tr > td + td").should('be.visible').should('contain','No')
            }
        })
    })

    it('0265.24_To_Validate_output_of_Findings_and_FindingsType_dropdown_at_Right_side', () => {
        //To_Validate_output_of_Findings_and_FindingsType_dropdown_at_Right_side
        cy.fixture("AddExaminationEvents_Investigation.json").then((AddExaminationEvents_Investigation) => {
            if (AddExaminationEvents_Investigation.OCT_Manual_Dry_R == "0")
            {	//select_Yes_for_RadioButton_Thickness_increase_of_100µm_at_Right_side
                cy.get("[data-element-type-name='OCT (manual)'] > div > div > table > tbody > tr + tr + tr + tr + tr > td + td").should('be.visible').should('contain',AddExaminationEvents_Investigation.OCT_Manual_Findings_Type_R + " " + AddExaminationEvents_Investigation.OCT_Manual_Findings_R)
            }
            else
        
            {	//select_No_for_RadioButton_Thickness_increase_of_100µm_at_Right_side
                cy.get("[data-element-type-name='OCT (manual)'] > div > div > table > tbody > tr + tr + tr + tr + tr > td + td").should('be.visible').should('contain','Dry')
            }
        })
    })

    it('0265.25_To_Validate_output_of_Comments_of_Commentbox_at_Right_side', () => {
        //To_Validate_output_of_Comments_of_Commentbox_at_Right_side.
        cy.fixture("AddExaminationEvents_Investigation.json").then((AddExaminationEvents_Investigation) => {
            cy.get("[data-element-type-name='OCT (manual)'] > div > div > table > tbody > tr + tr + tr + tr + tr  + tr> td + td").should('be.visible').should('contain',AddExaminationEvents_Investigation.OCT_Manual_Comments)
        })
    })

    it('0265.26_To_Validate_output_of_Image_Type_at_Left_side', () => {
        //To_Validate_output_of_Image_Type_at_Left_side.
        cy.fixture("AddExaminationEvents_Investigation.json").then((AddExaminationEvents_Investigation) => {
            cy.get("[data-element-type-name='OCT (manual)'] > div > div + div > table > tbody > tr > td + td").should('be.visible').should('contain',AddExaminationEvents_Investigation.OCT_Manual_Image_Type_L)
        })
    })

    it('0265.27_To_Validate_output_of_Maximum_CRT_at_Left_side', () => {
        //To_Validate_output_of_Maximum_CRT_at_Left_side.
        cy.fixture("AddExaminationEvents_Investigation.json").then((AddExaminationEvents_Investigation) => {
            cy.get("[data-element-type-name='OCT (manual)'] > div > div + div > table > tbody > tr + tr > td + td").should('be.visible').should('contain',AddExaminationEvents_Investigation.OCT_Manual_Maximum_CRT_L)
        })
    })

    it('0265.28_To_Validate_output_of_Central_Macular_Thickness_(CMT)_at_Left_side', () => {
        //To_Validate_output_of_Central_Macular_Thickness_(CMT)_at_Left_side.
        cy.fixture("AddExaminationEvents_Investigation.json").then((AddExaminationEvents_Investigation) => {
            cy.get("[data-element-type-name='OCT (manual)'] > div > div + div > table > tbody > tr + tr + tr > td + td").should('be.visible').should('contain',AddExaminationEvents_Investigation.OCT_Manual_Central_Macular_Thickness_L)
        })
    })

    it('0265.29_To_Validate_output_of_Thickness_increase_of_100µm_at_Left_side', () => {
        //To_Validate_output_of_Thickness_increase_of_100µm_at_Left_side.
        cy.fixture("AddExaminationEvents_Investigation.json").then((AddExaminationEvents_Investigation) => {
            if (AddExaminationEvents_Investigation.OCT_Manual_Thickness_increase_of_100µm_L == "1")
            {	//select_1_to_select_Yes_for_RadioButton_Thickness_increase_of_100µm_at_Left_side
                cy.get("[data-element-type-name='OCT (manual)'] > div > div + div > table > tbody > tr + tr + tr + tr > td + td").should('be.visible').should('contain','Yes')
            }
            else
        
            {	//select_0_to_select_No_for_RadioButton_Thickness_increase_of_100µm_at_Left_side
                cy.get("[data-element-type-name='OCT (manual)'] > div > div + div > table > tbody > tr + tr + tr + tr > td + td").should('be.visible').should('contain','No')
            }
        })
    })

    it('0265.30_To_Validate_output_of_Findings_and_FindingsType_dropdown_at_Left_side', () => {
        //To_Validate_output_of_Findings_dropdown_at_Left_side.
        cy.fixture("AddExaminationEvents_Investigation.json").then((AddExaminationEvents_Investigation) => {
            if (AddExaminationEvents_Investigation.OCT_Manual_Dry_L == "0")
            {	//select_Yes_for_RadioButton_Thickness_increase_of_100µm_at_Left_side
                cy.get("[data-element-type-name='OCT (manual)'] > div > div + div > table > tbody > tr + tr + tr + tr + tr > td + td").should('be.visible').should('contain',AddExaminationEvents_Investigation.OCT_Manual_Findings_Type_L + " " + AddExaminationEvents_Investigation.OCT_Manual_Findings_L)
            }
            else
        
            {	//select_No_for_RadioButton_Thickness_increase_of_100µm_at_Left_side
                cy.get("[data-element-type-name='OCT (manual)'] > div > div + div > table > tbody > tr + tr + tr + tr + tr > td + td").should('be.visible').should('contain','Dry')
            }
        })
    })

    it('0265.31_To_Validate_output_of_Comments_of_Commentbox_at_Left_side', () => {
        //To_Validate_output_of_Comments_of_Commentbox_at_Left_side.
        cy.fixture("AddExaminationEvents_Investigation.json").then((AddExaminationEvents_Investigation) => {
            cy.get("[data-element-type-name='OCT (manual)'] > div > div + div > table > tbody > tr + tr + tr + tr + tr + tr > td + td").should('be.visible').should('contain',AddExaminationEvents_Investigation.OCT_Manual_Comments)
        })
    })

})