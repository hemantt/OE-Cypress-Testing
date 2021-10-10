
//Anterior_Segment - Anterior_Segment_DI
describe('0180_Anterior_Segment_Anterior_Segment_DI', () =>  {

    it('0180.01_Select_Anterior_Segment', () => {
        //To get the "Anterior_Segment" Page
        cy.get("#js-manage-elements-btn").should('be.visible').click()

        cy.get('body').then((body) => {
      
            if (body.find('#manage-elements-Anterior-Segment[class="added"]').length == 0)
            {
                cy.get("#manage-elements-Anterior-Segment").should('be.visible').click()
            }
      
        })
      
        cy.get(".blue.hint.cols-full").should('be.visible').click()

    })
    
    
    it('0180.02_To_Validate_manage_elements_Anterior_Segment_Section_is_Available', () => {
        //Verify Page title "manage-elements-Anterior-Segment".
        cy.get("[data-element-type-name='Anterior Segment'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Anterior Segment'] > header > h3").should('be.visible').should('contain','Anterior Segment')
    })
  
    //------------ This part covers Conjunctiva section for Right Eye---------------------

       
    it('0180.03.02_To_Validate_and_Click_on_Buttons_to_add_all_options_to_Doodle_Dropdown_Available', () => {
        //Click on Conjunctiva Buttons to add option to Doodle Dropdown
        cy.get("[data-element-type-name='Anterior Segment'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("#eyedrawwidget_right_315 > div > ul > li + li > a > i.ed-i.icon-ed-ConjunctivalHaem").should('be.visible').click()
        })
    
    
    it('0180.04_To_Select_and_Validate_value_from_Doodle_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //Verify Conjunctiva option to Doodle Dropdown
        cy.get("[data-element-type-name='Anterior Segment']>header+div+style+div>div>div>div+div>div+div>div>ul+div>select").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Anterior_Segment_Doodle_Dropdown_R02)
        })
    })

    it('0180.05_To_Validate_and_input_values_for_Conjunctivitis', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Conjunctivitis.
        cy.get("#ed_canvas_edit_right_315_conjunctivitisType_control").should('be.visible').select(AddExaminationEvents_Anterior_Segment.Anterior_Segment_Conjunctiva_Conjunctivitis_R)
        })
    })    
        
    it('0180.06_To_Validate_and_input_values_for_Hyperaemia', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
            //To_Validate_and_input values for Hyperaemia.
            cy.get("#ed_canvas_edit_right_315_hyperaemia_control").should('be.visible').select(AddExaminationEvents_Anterior_Segment.Anterior_Segment_Conjunctiva_Hyperaemia_R)
           })
    })

    it('0180.07_To_Validate_and_input_values_for_Haemorrhage', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
            //To_Validate_and_input values for Haemorrhage
            cy.get("#ed_canvas_edit_right_315_haemorrhageGrade_control").should('be.visible').select(AddExaminationEvents_Anterior_Segment.Anterior_Segment_Conjunctiva_Haemorrhage_R)
           })
    })

    it('0180.08_To_Validate_and_input_values_for_Swelling', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
            //To_Validate_and_input values for Swelling
            cy.get("#ed_canvas_edit_right_315_swellingGrade_control").should('be.visible').select(AddExaminationEvents_Anterior_Segment.Anterior_Segment_Conjunctiva_Swelling_R)
           })
    })

    it('0180.09_To_Validate_and_check_the_checkbox_Mucopurulent', () => {
        //To_Validate_and_check the checkbox Mucopurulent
        cy.get("#ed_canvas_edit_right_315_mucopurulent_control").should('be.visible').should('be.not.checked').check()
    })
      
    //------------ This part covers Episcleritis section Right Eye---------------------

    it('0180.10_To_Validate_and_Click_on_Buttons_to_add_all_options_to_Doodle_Dropdown_Available', () => {
        //Click on Buttons to add all options to Doodle Dropdown
        cy.get("[data-element-type-name='Anterior Segment'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("#eyedrawwidget_right_315 > div > ul > li + li + li > a > i.ed-i.icon-ed-Episcleritis").should('be.visible').click()
    })

    it('0180.11_To_Select_and_Verify_Episcleritis_option_to_Doodle_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //Verify Episcleritis option to Doodle Dropdown
        cy.get("[data-element-type-name='Anterior Segment']>header+div+style+div>div>div>div+div>div+div>div>ul+div>select").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Anterior_Segment_Doodle_Dropdown_R03)
        })
    })//

    it('0180.12_To_Validate_and_input_values_for_Severity', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Severity under Episcleritis.
        cy.get("#ed_canvas_edit_right_315_severity_control").should('be.visible').select(AddExaminationEvents_Anterior_Segment.Anterior_Segment_Episcleritis_Severity_R)
        })
    })    
     
    //------------ This part covers Marginal keratitis section Right Eye---------------------


    it('0180.13_To_Validate_and_Click_on_Buttons_to_add_all_options_to_Doodle_Dropdown_Available', () => {
        //Click on Buttons to add all options to Doodle Dropdown
        cy.get("[data-element-type-name='Anterior Segment'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("#eyedrawwidget_right_315 > div > ul > li + li + li + li > a > i.ed-i.icon-ed-MarginalKeratitis").should('be.visible').click()
    })//#ed_canvas_edit_right_315_epithelialDefectPercent_control

    it('0180.14_To_Validate_and_select_values_for_Marginal_keratitis_to_Doodle_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //Verify Marginal keratitis option to Doodle Dropdown
        cy.get("[data-element-type-name='Anterior Segment']>header+div+style+div>div>div>div+div>div+div>div>ul+div>select").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Anterior_Segment_Doodle_Dropdown_R04)
        })//
    })    
      
    it('0180.15_To_Validate_and_input_values_for_Epithelial_defect_of_corneal_infiltrate', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for Epithelial defect of corneal infiltrate.
        cy.get("#ed_canvas_edit_right_315_epithelialDefectPercent_control").should('be.visible').clear().type(AddExaminationEvents_Anterior_Segment.Anterior_Segment_Marginalkeratitis_EpithelialDefectOfCornealInfiltrate_R)
        })
    })  


    //------------------ This part covers SPEE section Right Eye---------------------


    it('0180.16_To_Validate_and_Click_on_Buttons_to_add_all_options_to_Doodle_Dropdown_Available', () => {
        //Click on Buttons to add all options to Doodle Dropdown
        cy.get("[data-element-type-name='Anterior Segment'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("#eyedrawwidget_right_315 > div > ul > li + li + li + li + li > a > i.ed-i.icon-ed-SPEE").should('be.visible').click()
    })
        
    it('0180.17_To_Select_and_Verify_SPEE_option_to_Doodle_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //Select and Verify SPEE option to Doodle Dropdown
        cy.get("[data-element-type-name='Anterior Segment']>header+div+style+div>div>div>div+div>div+div>div>ul+div>select").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Anterior_Segment_Doodle_Dropdown_R05)
        })
    })    
      
    //------------------ This part covers "Corneal epithelial defect" section Right Eye---------------------

    it('0180.18_To_Validate_and_Click_on_Buttons_to_add_all_options_to_Doodle_Dropdown_Available', () => {
        //Click on Buttons to add all options to Doodle Dropdown
        cy.get("[data-element-type-name='Anterior Segment'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("#eyedrawwidget_right_315 > div > ul > li + li + li + li + li + li > a > i.ed-i.icon-ed-CornealEpithelialDefect").should('be.visible').click()
        
    })

    it('0180.19_To_Select_and_Verify_Corneal_epithelial_defect_option_to_Doodle_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //Select and Verify Corneal epithelial defect option to Doodle Dropdown
        cy.get("[data-element-type-name='Anterior Segment']>header+div+style+div>div>div>div+div>div+div>div>ul+div>select").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Anterior_Segment_Doodle_Dropdown_R06)
        })
    })    
      
    it('0180.20_To_Validate_and_input_values_for_Height_of_Corneal_epithelial', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for Height of Corneal epithelial.
        cy.get("#ed_canvas_edit_right_315_height_control").should('be.visible').clear().type(AddExaminationEvents_Anterior_Segment.Anterior_Segment_CornealEpithelialDefect_Height_R)
        })
    })  

    it('0180.21_To_Validate_and_input_values_for_Width_of_Corneal_epithelial', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for Width of Corneal epithelial.
        cy.get("#ed_canvas_edit_right_315_width_control").should('be.visible').clear().type(AddExaminationEvents_Anterior_Segment.Anterior_Segment_CornealEpithelialDefect_Width_R)
        })
    })  


        //------------ This part covers Conjunctiva section for Left Eye---------------------


    it('0180.22_To_Validate_and_Click_on_Buttons_to_add_all_options_to_Doodle_Dropdown_Available', () => {
        //Click on Conjunctiva Buttons to add option to Doodle Dropdown for Left Eye
        cy.get("[data-element-type-name='Anterior Segment'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("#ConjunctivalHaemleft_315 > a.ed-button").should('be.visible').click()
    })
    
    
    it('0180.23_To_Select_and_Verify_Conjunctiva_option_to_Doodle_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //Select and Verify Conjunctiva option to Doodle Dropdown
        cy.get("[data-element-type-name='Anterior Segment']>header+div+style+div>div>div>div+div>div+div>div>ul+div>select").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Anterior_Segment_Doodle_Dropdown_L02)
        })
                
    })

    it('0180.24_To_Validate_and_input_values_for_Conjunctivitis', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Conjunctivitis.
        cy.get("#eyedrawwidget_left_315 > div + div > div + div > div > div > div > div > select#ed_canvas_edit_left_315_conjunctivitisType_control").should('be.visible').select(AddExaminationEvents_Anterior_Segment.Anterior_Segment_Conjunctiva_Conjunctivitis_L)
        })   
    })    
        
    it('0180.25_To_Validate_and_input_values_for_Hyperaemia', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
            //To_Validate_and_input values for Hyperaemia.
            cy.get("#ed_canvas_edit_left_315_hyperaemia_control").scrollIntoView().should('be.visible')
            cy.get("#ed_canvas_edit_left_315_hyperaemia_control").should('be.visible').select(AddExaminationEvents_Anterior_Segment.Anterior_Segment_Conjunctiva_Hyperaemia_L)
           })
    })

    it('0180.26_To_Validate_and_input_values_for_Haemorrhage', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
            //To_Validate_and_input values for Haemorrhage
            cy.get("#ed_canvas_edit_left_315_haemorrhageGrade_control").should('be.visible').select(AddExaminationEvents_Anterior_Segment.Anterior_Segment_Conjunctiva_Haemorrhage_L)
           })     //#ed_canvas_edit_left_315_haemorrhageGrade_control
    })

    it('0180.27_To_Validate_and_input_values_for_Swelling', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
            //To_Validate_and_input values for Swelling
            cy.get('#ed_canvas_edit_left_315_swellingGrade_control').should('be.visible').select(AddExaminationEvents_Anterior_Segment.Anterior_Segment_Conjunctiva_Swelling_L)
           })
    })

    it('0180.28_To_Validate_and_check_the_checkbox_Mucopurulent', () => {
        //To_Validate_and_check the checkbox Mucopurulent
        cy.get('#ed_canvas_edit_left_315_mucopurulent_control').should('be.visible').should('be.not.checked').check()
        
    })
        

    //------------ This part covers Episcleritis section Left Eye---------------------

    it('0180.29_To_Validate_and_Click_on_Buttons_to_add_all_options_to_Doodle_Dropdown_Available', () => {
        //Click on Buttons to add all options to Doodle Dropdown
        cy.get("[data-element-type-name='Anterior Segment'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("#Episcleritisleft_315 > a > i.ed-i.icon-ed-Episcleritis").should('be.visible').click()
    })

    it('0180.30_To_Select_and_Verify_Episcleritis_option_to_Doodle_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //Select and Verify Episcleritis option to Doodle Dropdown
        cy.get("[data-element-type-name='Anterior Segment']>header+div+style+div>div>div>div+div>div+div>div>ul+div>select").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Anterior_Segment_Doodle_Dropdown_L03)
        })
    })

    it('0180.31_To_Validate_and_input_values_for_Severity_under_Episcleritis', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Severity under Episcleritis.
        cy.get('#ed_canvas_edit_left_315_severity_control').should('be.visible').select(AddExaminationEvents_Anterior_Segment.Anterior_Segment_Episcleritis_Severity_L)
        })
    })    
        

    //------------ This part covers Marginal keratitis section Left Eye---------------------


    it('0180.32_To_Validate_and_Click_on_Buttons_to_add_all_options_to_Doodle_Dropdown_Available', () => {
        //Click on Buttons to add all options to Doodle Dropdown
        cy.get("[data-element-type-name='Anterior Segment'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("#MarginalKeratitisleft_315 > a > i.ed-i.icon-ed-MarginalKeratitis").should('be.visible').click()
    })

    it('0180.33_To_Select_and_Verify_Marginal_keratitis_option_to_Doodle_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //Select and Verify Marginal keratitis option to Doodle Dropdown
        cy.get("[data-element-type-name='Anterior Segment']>header+div+style+div>div>div>div+div>div+div>div>ul+div>select").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Anterior_Segment_Doodle_Dropdown_L04)
        })
    })    
      
    it('0180.34_To_Validate_and_input_values_for_Epithelial_defect_of_corneal_infiltrate', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for Epithelial defect of corneal infiltrate.
        cy.get("#ed_canvas_edit_left_315_epithelialDefectPercent_control").should('be.visible').clear().type(AddExaminationEvents_Anterior_Segment.Anterior_Segment_Marginalkeratitis_EpithelialDefectOfCornealInfiltrate_L)
        })
    })  


    //------------------ This part covers SPEE section Left Eye---------------------


    it('0180.35_To_Validate_and_Click_on_Buttons_to_add_all_options_to_Doodle_Dropdown_Available', () => {
        //Click on Buttons to add all options to Doodle Dropdown
        cy.get("[data-element-type-name='Anterior Segment'] > header > h3").scrollIntoView().should('be.visible')
        cy.get('#eyedrawwidget_left_315 > div > ul > li + li + li + li + li > a > i.ed-i.icon-ed-SPEE').should('be.visible').click()
    })
        
    it('0180.36_To_Select_and_Verify_SPEE_option_to_Doodle_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //Select and Verify SPEE option to Doodle Dropdown
        cy.get("[data-element-type-name='Anterior Segment']>header+div+style+div>div>div>div+div>div+div>div>ul+div>select").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Anterior_Segment_Doodle_Dropdown_L05)
        })
    })    
      
    //------------------ This part covers "Corneal epithelial defect" section Left Eye---------------------

    it('0180.37_To_Validate_and_Click_on_Buttons_to_add_all_options_to_Doodle_Dropdown_Available', () => {
        //Click on Buttons to add all options to Doodle Dropdown
        cy.get("[data-element-type-name='Anterior Segment'] > header > h3").scrollIntoView().should('be.visible')
        cy.get('#eyedrawwidget_left_315 > div > ul > li + li + li + li + li + li > a > i.icon-ed-CornealEpithelialDefect').should('be.visible').click()
        
    })

    it('0180.38_To_Select_and_Verify_Corneal_epithelial_defect_option_to_Doodle_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //Select and Verify Corneal epithelial defect option to Doodle Dropdown
        cy.get("[data-element-type-name='Anterior Segment']>header+div+style+div>div>div>div+div>div+div>div>ul+div>select").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Anterior_Segment_Doodle_Dropdown_L06)
        })
    })    
      
    it('0180.39_To_Validate_and_input_values_for_Height', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for Height of Corneal epithelial.
        cy.get('#ed_canvas_edit_left_315_height_control').should('be.visible').clear().type(AddExaminationEvents_Anterior_Segment.Anterior_Segment_CornealEpithelialDefect_Height_L)
        })
    })  

    it('0180.40_To_Validate_and_input_values_for_Width', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for Width of Corneal epithelial.
        cy.get('#ed_canvas_edit_left_315_width_control').should('be.visible').clear().type(AddExaminationEvents_Anterior_Segment.Anterior_Segment_CornealEpithelialDefect_Width_L)
        })
    })  
    
})