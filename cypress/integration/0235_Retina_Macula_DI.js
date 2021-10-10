//Retina - Macula_DI
describe('0235_Retina_Macula_DI', () =>  {

    it('0235.01_Select_Macula_Segment', () => {
        //To get the "Anterior_Segment" Page
        cy.get("#js-manage-elements-btn").should('be.visible').click()

        cy.get('body').then((body) => {
      
            if (body.find('#manage-elements-Macula[class="added"]').length == 0)
            {
                cy.get("#manage-elements-Macula").should('be.visible').click()
            }
      
        })
      
        cy.get(".blue.hint.cols-full").should('be.visible').click()

    })
    
    
    it('0235.02_To_Validate_Retina_Macula_Section_is_Available', () => {
        //Verify Page title "Macula" is available.
        cy.get("[data-element-type-name='Macula'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Macula'] > header > h3").should('be.visible').should('contain','Macula')
    })
  
    //------------ This part covers Drusen section for Right Eye---------------------
    
    it('0235.03_To_click_Drusen_button', () => {
        //Click and Verify "Drusen" button.
        cy.get("#eyedrawwidget_right_317 > div > ul > li > a > i.ed-i.icon-ed-Drusen").should('be.visible').click()
    })

    it('0235.04_To_Select_and_Validate_value_from_Doodle_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Retina.json").then((AddExaminationEvents_Retina) => {
        //Verify Drusen option to Doodle Dropdown
        cy.get("#eyedrawwidget_right_317 > div + div > div > div > select").should('be.visible').select(AddExaminationEvents_Retina.Macula_Doodle_Dropdown_R01)
        })
    })

    it('0235.05_To_Validate_and_input_values_for_Drusen_type', () => {
        cy.fixture("AddExaminationEvents_Retina.json").then((AddExaminationEvents_Retina) => {
        //To_Validate_and_input values for_Drusen_type.
        cy.get("#ed_canvas_edit_right_317_drusenType_control").should('be.visible').select(AddExaminationEvents_Retina.Macula_Drusen_type_R,{force: true})
        })
    })    
    
    //------------ This part covers RPE Atrophy section for Right Eye---------------------
    
    it('0235.06_To_click_RPE_Atrophy_button', () => {
        //To_click "RPE Atrophy" button.
        cy.get("#RPEAtrophyright_317 > a > i.ed-i.icon-ed-RPEAtrophy").should('be.visible').click()
    })

    it('0235.07_To_Select_and_Validate_value_from_Doodle_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Retina.json").then((AddExaminationEvents_Retina) => {
        //Verify RPE Atrophy option to Doodle Dropdown
        cy.get("#eyedrawwidget_right_317 > div + div > div > div > select").should('be.visible').select(AddExaminationEvents_Retina.Macula_Doodle_Dropdown_R02)
        })
    })

    //------------ This part covers Geographic atrophy section for Right Eye---------------------
    
    it('0235.08_To_click_Geographic_atrophy_button', () => {
        //To_click "Geographic atrophy" button.
        cy.get("#Geographicright_317 > a > i.ed-i.icon-ed-Geographic").should('be.visible').click()
    })

    it('0235.09_To_Select_and_Validate_value_from_Doodle_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Retina.json").then((AddExaminationEvents_Retina) => {
        //Verify Geographic atrophy option to Doodle Dropdown
        cy.get("#eyedrawwidget_right_317 > div + div > div > div > select").should('be.visible').select(AddExaminationEvents_Retina.Macula_Doodle_Dropdown_R03)
        })
    })

    
    //------------ This part covers Fovea section for Right Eye---------------------
    
    it('0235.10_To_click_Fovea_button', () => {
        //To_click "Fovea" button.
        cy.get("#Fovearight_317 > a > i.ed-i.icon-ed-Fovea").should('be.visible').click()
    })

    it('0235.11_To_Select_and_Validate_value_from_Doodle_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Retina.json").then((AddExaminationEvents_Retina) => {
        //Verify Fovea option to Doodle Dropdown
        cy.get("#eyedrawwidget_right_317 > div + div > div > div > select").should('be.visible').select(AddExaminationEvents_Retina.Macula_Doodle_Dropdown_R04)
        })
    })

    it('0235.12_To_Validate_and_input_values_for_Fovea_type', () => {
        cy.fixture("AddExaminationEvents_Retina.json").then((AddExaminationEvents_Retina) => {
        //To_Validate_and_input values for_Fovea_type.
        cy.get("#ed_canvas_edit_right_317_type_control").should('be.visible').select(AddExaminationEvents_Retina.Macula_type_R,{force: true})
        })
    })    
    
    //------------ This part covers RPE detachment section for Right Eye---------------------
    
    it('0235.13_To_click_RPE_detachment_button', () => {
        //To_click "RPE detachment" button.
        cy.get("#RPEDetachmentright_317 > a > i.ed-i.icon-ed-RPEDetachment").should('be.visible').click()
    })

    it('0235.14_To_Select_and_Validate_value_from_Doodle_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Retina.json").then((AddExaminationEvents_Retina) => {
        //Verify RPE detachment option to Doodle Dropdown
         cy.get("#eyedrawwidget_right_317 > div + div > div > div > select").should('be.visible').select(AddExaminationEvents_Retina.Macula_Doodle_Dropdown_R05)
        })
    })

    //------------ This part covers comments for Right Eye---------------------
    
    it('0235.15_To_Enters_comments_in_commentbox', () => {
        cy.fixture("AddExaminationEvents_Retina.json").then((AddExaminationEvents_Retina) => {
        //To_Enters comments in commentbox.
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_PosteriorPole_right_description").should('be.visible').clear().type(AddExaminationEvents_Retina.Macula_comment_R)
        })
    })

    //------------------------------------------------------------------------------//
    
    //------------------------------------------------------------------------------//

    //------------ This part covers Drusen section for Left Eye---------------------//

    
    it('0235.16_To_click_Drusen_button', () => {
        //Click and Verify "Drusen" button.
        cy.get("#Drusenleft_317 >  a > i.ed-i.icon-ed-Drusen").should('be.visible').click()
    })

    it('0235.17_To_Select_and_Validate_value_from_Doodle_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Retina.json").then((AddExaminationEvents_Retina) => {
        //Verify Drusen option to Doodle Dropdown
        cy.get("[data-element-type-name='Macula']>div+div>div>div>a+div>div>div+div>div>div>select").eq(1).should('be.visible').select(AddExaminationEvents_Retina.Macula_Doodle_Dropdown_L01)
        })
    })

    it('0235.18_To_Validate_and_input_values_for_Drusen_type', () => {
        cy.fixture("AddExaminationEvents_Retina.json").then((AddExaminationEvents_Retina) => {
        //To_Validate_and_input values for_Drusen_type.
        cy.get("#ed_canvas_edit_left_317_drusenType_control").should('be.visible').select(AddExaminationEvents_Retina.Macula_Drusen_type_L,{force: true})
        })
    })    
    
    //------------ This part covers RPE Atrophy section for Left Eye---------------------
    
    it('0235.19_To_click_RPE_Atrophy_button', () => {
        //To_click "RPE Atrophy" button.
        cy.get("#RPEAtrophyleft_317 > a > i.ed-i.icon-ed-RPEAtrophy").should('be.visible').click()
    })

    it('0235.20_To_Select_and_Validate_value_from_Doodle_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Retina.json").then((AddExaminationEvents_Retina) => {
        //Verify RPE Atrophy option to Doodle Dropdown
        cy.get("[data-element-type-name='Macula']>div+div>div>div>a+div>div>div+div>div>div>select").eq(1).should('be.visible').select(AddExaminationEvents_Retina.Macula_Doodle_Dropdown_L02)
        })
    })

    //------------ This part covers Geographic atrophy section for Left Eye---------------------
    
    it('0235.21_To_click_Geographic_atrophy_button', () => {
        //To_click "Geographic atrophy" button.
        cy.get("#Geographicleft_317 > a > i.ed-i.ed-i.icon-ed-Geographic").should('be.visible').click()
    })

    it('0235.22_To_Select_and_Validate_value_from_Doodle_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Retina.json").then((AddExaminationEvents_Retina) => {
        //Verify Geographic atrophy option to Doodle Dropdown
        cy.get("[data-element-type-name='Macula']>div+div>div>div>a+div>div>div+div>div>div>select").eq(1).should('be.visible').select(AddExaminationEvents_Retina.Macula_Doodle_Dropdown_L03)
        })
    })

    
    //------------ This part covers Fovea section for Left Eye---------------------
    
    it('0235.23_To_click_Fovea_button', () => {
        //To_click "Fovea" button.
        cy.get("#Fovealeft_317 > a > i.ed-i.icon-ed-Fovea").should('be.visible').click()
    })

    it('0235.24_To_Select_and_Validate_value_from_Doodle_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Retina.json").then((AddExaminationEvents_Retina) => {
        //Verify Fovea option to Doodle Dropdown
        cy.get("[data-element-type-name='Macula']>div+div>div>div>a+div>div>div+div>div>div>select").eq(1).should('be.visible').select(AddExaminationEvents_Retina.Macula_Doodle_Dropdown_L04)
        })
    })

    it('0235.25_To_Validate_and_input_values_for_Fovea_type', () => {
        cy.fixture("AddExaminationEvents_Retina.json").then((AddExaminationEvents_Retina) => {
        //To_Validate_and_input values for_Fovea_type.
        cy.get("#ed_canvas_edit_left_317_type_control").should('be.visible').select(AddExaminationEvents_Retina.Macula_type_L,{force: true})
        })
    })    
    
    //------------ This part covers RPE detachment section for Left Eye---------------------
    
    it('0235.26_To_click_RPE_detachment_button', () => {
        //To_click "RPE detachment" button.
        cy.get("#RPEDetachmentleft_317 > a > i.ed-i.icon-ed-RPEDetachment").should('be.visible').click()
    })

    it('0235.27_To_Select_and_Validate_value_from_Doodle_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Retina.json").then((AddExaminationEvents_Retina) => {
        //Verify RPE detachment option to Doodle Dropdown
        cy.get("[data-element-type-name='Macula']>div+div>div>div>a+div>div>div+div>div>div>select").eq(1).should('be.visible').select(AddExaminationEvents_Retina.Macula_Doodle_Dropdown_L05)
        })
    })

     //------------ This part covers comments for Left Eye---------------------
    
     it('0235.28_To_Enters_comments_in_commentbox_at_Left_Side', () => {
        cy.fixture("AddExaminationEvents_Retina.json").then((AddExaminationEvents_Retina) => {
        //To_Enters comments in commentbox at Left Side.
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_PosteriorPole_left_description").should('be.visible').clear().type(AddExaminationEvents_Retina.Macula_comment_L)
        })
    })

    
  
})