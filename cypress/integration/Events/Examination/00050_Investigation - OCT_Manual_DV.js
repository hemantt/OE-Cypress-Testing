//Test suite for Add Examination Event
describe('00050_Investigation - OCT (manual)_DV', () => {

    //50 - Investigation - OCT (manual).
    it('050.01_To_Validate_OCT_(manual)_Section_is_Available', () => {
        //Verify Page title "OCT (manual)".
        cy.get("[data-element-type-name='OCT \\(manual\\)'] > header > h3").should('be.visible').scrollIntoView()
        cy.get("[data-element-type-name='OCT \\(manual\\)'] > header > h3").should('be.visible').should('contain','OCT (manual)')
    })
  
    it('050.02_To_Validate_output_of_Image_Type_at_Right_side', () => {
        //To_Validate_and_provide_input_to_Image_Type_at_Right_side.
        cy.fixture("Investigation_OCT_Manual.json").then((Investigation_OCT_Manual) => {
            cy.get("[data-element-type-name='OCT (manual)'] > div > div > table > tbody > tr > td + td").should('be.visible').should('contain',Investigation_OCT_Manual.OCTM_Image_Type_R)
        })
    })

    it('050.03_To_Validate_output_of_Maximum_CRT_at_Right_side', () => {
        //To_Validate_and_provide_input_to_Maximum_CRT_at_Right_side   .
        //CRT must be between 250 and 850 at_Right_side
        cy.fixture("Investigation_OCT_Manual.json").then((Investigation_OCT_Manual) => {
            cy.get("[data-element-type-name='OCT (manual)'] > div > div > table > tbody > tr + tr > td + td").should('be.visible').should('contain',Investigation_OCT_Manual.OCTM_Maximum_CRT_R)
        })
    })

    it('050.04_To_Validate_output_of_Central_Macular_Thickness_(CMT)_at_Right_side', () => {
        //To_Validate_and_provide_input_to_Central_Macular_Thickness_(CMT)_at_Right_side
        //Central_Macular_Thickness_(CMT) must be between 50 and 1500 at_Right_side
        cy.fixture("Investigation_OCT_Manual.json").then((Investigation_OCT_Manual) => {
            cy.get("[data-element-type-name='OCT (manual)'] > div > div > table > tbody > tr + tr > td + td").should('be.visible').should('contain',Investigation_OCT_Manual.OCTM_Central_Macular_Thickness_R)
        })
    })

    it('050.05_To_Validate_output_of_Thickness_increase_of_100µm_at_Right_side', () => {
        //To_Validate_and_select_RadioButton_of_Thickness_increase_of_100µm_at_Right_side  .
        cy.fixture("Investigation_OCT_Manual.json").then((Investigation_OCT_Manual) => {
            if (Investigation_OCT_Manual.OCTM_Thickness_increase_of_100µm_R == "1")
            {	//select_1_to_select_Yes_for_RadioButton_Thickness_increase_of_100µm_at_Right_side
                cy.get("[data-element-type-name='OCT (manual)'] > div > div > table > tbody > tr + tr + tr > td + td").should('be.visible').should('contain','Yes')
            }
            else
        
            {	//select_0_to_select_No_for_RadioButton_Thickness_increase_of_100µm_at_Right_side
                cy.get("[data-element-type-name='OCT (manual)'] > div > div > table > tbody > tr + tr + tr > td + td").should('be.visible').should('contain','No')
            }
        })
    })

    it('050.06_To_Validate_output_of_Findings_and_FindingsType_dropdown_at_Right_side', () => {
        //To_Validate_output_of_Findings_and_FindingsType_dropdown_at_Right_side
        cy.fixture("Investigation_OCT_Manual.json").then((Investigation_OCT_Manual) => {
            if (Investigation_OCT_Manual.OCTM_Dry_R == "0")
            {	//select_Yes_for_RadioButton_Thickness_increase_of_100µm_at_Right_side
                cy.get("[data-element-type-name='OCT (manual)'] > div > div > table > tbody > tr + tr + tr + tr + tr > td + td").should('be.visible').should('contain',Investigation_OCT_Manual.OCTM_Findings_Type_R + " " + Investigation_OCT_Manual.OCTM_Findings_R)
            }
            else
        
            {	//select_No_for_RadioButton_Thickness_increase_of_100µm_at_Right_side
                cy.get("[data-element-type-name='OCT (manual)'] > div > div > table > tbody > tr + tr + tr + tr + tr > td + td").should('be.visible').should('contain','Dry')
            }
        })
    })

    it('050.07_To_Validate_output_of_Comments_of_Commentbox_at_Right_side', () => {
        //To_Validate_output_of_Comments_of_Commentbox_at_Right_side.
        cy.fixture("Investigation_OCT_Manual.json").then((Investigation_OCT_Manual) => {
            cy.get("[data-element-type-name='OCT (manual)'] > div > div > table > tbody > tr + tr + tr + tr + tr  + tr> td + td").should('be.visible').should('contain',Investigation_OCT_Manual.OCTM_Comments)
        })
    })

    it('050.08_To_Validate_output_of_Image_Type_at_Left_side', () => {
        //To_Validate_output_of_Image_Type_at_Left_side.
        cy.fixture("Investigation_OCT_Manual.json").then((Investigation_OCT_Manual) => {
            cy.get("[data-element-type-name='OCT (manual)'] > div > div + div > table > tbody > tr > td + td").should('be.visible').should('contain',Investigation_OCT_Manual.OCTM_Image_Type_L)
        })
    })

    it('050.09_To_Validate_output_of_Maximum_CRT_at_Left_side', () => {
        //To_Validate_output_of_Maximum_CRT_at_Left_side.
        cy.fixture("Investigation_OCT_Manual.json").then((Investigation_OCT_Manual) => {
            cy.get("[data-element-type-name='OCT (manual)'] > div > div + div > table > tbody > tr + tr > td + td").should('be.visible').should('contain',Investigation_OCT_Manual.OCTM_Maximum_CRT_L)
        })
    })

    it('050.10_To_Validate_output_of_Central_Macular_Thickness_(CMT)_at_Left_side', () => {
        //To_Validate_output_of_Central_Macular_Thickness_(CMT)_at_Left_side.
        cy.fixture("Investigation_OCT_Manual.json").then((Investigation_OCT_Manual) => {
            cy.get("[data-element-type-name='OCT (manual)'] > div > div + div > table > tbody > tr + tr + tr > td + td").should('be.visible').should('contain',Investigation_OCT_Manual.OCTM_Central_Macular_Thickness_L)
        })
    })

    it('050.11_To_Validate_output_of_Thickness_increase_of_100µm_at_Left_side', () => {
        //To_Validate_output_of_Thickness_increase_of_100µm_at_Left_side.
        cy.fixture("Investigation_OCT_Manual.json").then((Investigation_OCT_Manual) => {
            if (Investigation_OCT_Manual.OCTM_Thickness_increase_of_100µm_L == "1")
            {	//select_1_to_select_Yes_for_RadioButton_Thickness_increase_of_100µm_at_Left_side
                cy.get("[data-element-type-name='OCT (manual)'] > div > div + div > table > tbody > tr + tr + tr + tr > td + td").should('be.visible').should('contain','Yes')
            }
            else
        
            {	//select_0_to_select_No_for_RadioButton_Thickness_increase_of_100µm_at_Left_side
                cy.get("[data-element-type-name='OCT (manual)'] > div > div + div > table > tbody > tr + tr + tr + tr > td + td").should('be.visible').should('contain','No')
            }
        })
    })

    it('050.12_To_Validate_output_of_Findings_and_FindingsType_dropdown_at_Left_side', () => {
        //To_Validate_output_of_Findings_dropdown_at_Left_side.
        cy.fixture("Investigation_OCT_Manual.json").then((Investigation_OCT_Manual) => {
            if (Investigation_OCT_Manual.OCTM_Dry_L == "0")
            {	//select_Yes_for_RadioButton_Thickness_increase_of_100µm_at_Left_side
                cy.get("[data-element-type-name='OCT (manual)'] > div > div + div > table > tbody > tr + tr + tr + tr + tr > td + td").should('be.visible').should('contain',Investigation_OCT_Manual.OCTM_Findings_Type_L + " " + Investigation_OCT_Manual.OCTM_Findings_L)
            }
            else
        
            {	//select_No_for_RadioButton_Thickness_increase_of_100µm_at_Left_side
                cy.get("[data-element-type-name='OCT (manual)'] > div > div + div > table > tbody > tr + tr + tr + tr + tr > td + td").should('be.visible').should('contain','Dry')
            }
        })
    })

    it('050.13_To_Validate_output_of_Comments_of_Commentbox_at_Left_side', () => {
        //To_Validate_output_of_Comments_of_Commentbox_at_Left_side.
        cy.fixture("Investigation_OCT_Manual.json").then((Investigation_OCT_Manual) => {
            cy.get("[data-element-type-name='OCT (manual)'] > div > div + div > table > tbody > tr + tr + tr + tr + tr + tr > td + td").should('be.visible').should('contain',Investigation_OCT_Manual.OCTM_Comments)
        })
    })

})