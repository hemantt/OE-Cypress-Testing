//Gonioscopy_DI
describe('0190_Gonioscopy_DI', () =>  {

    it('0190.01_Select_Gonioscopy_Segment', () => {
        //To get the "Gonioscopy" Page
        cy.get("#js-manage-elements-btn").should('be.visible').click()

        cy.get('body').then((body) => {
      
            if (body.find('#manage-elements-Gonioscopy[class="added"]').length == 0)
            {
                cy.get("#manage-elements-Gonioscopy").should('be.visible').click()
            }
      
        })
      
        cy.get(".blue.hint.cols-full").should('be.visible').click()

    })
        
    it('0190.02_To_Validate_Gonioscopy_Section_is_Available', () => {
        //To_Validate_Gonioscopy_Section_is_Available.
        cy.get("[data-element-type-name='Gonioscopy'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Gonioscopy'] > header > h3").should('be.visible').should('contain','Gonioscopy')
        cy.wait(3000)
    })


    //--------------------common setup For Right Eye ------------------------//

    it('0190.03_To_Validate_and_input_values_for_Mode_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Mode_Dropdown.

        cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div+div>div+div>div+div>div>div>select.gonioscopy-mode").eq(0).should('be.visible').select(AddExaminationEvents_Anterior_Segment.Gonioscopy_Mode_R)
        cy.wait(3000)
        }) 
    })
    
    
    it('0190.04_To_Validate_and_input_values_for_Shaffer_grade_Angle_Open_#1_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Shaffer grade_/Angle_Open Dropdown 1st Dropdown.
          if (AddExaminationEvents_Anterior_Segment.Gonioscopy_Mode_R == "Expert")
            {	//For_Shaffer_grade first dropdown..
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Gonioscopy_right_gonio_sup_id").select(Anterior_Segment_Gonioscopy.Gonioscopy_Shaffer_grade_R01)//.should('be.visible'),{force: true}
            }
          else
            {	//For_Angle_Open first dropdown.
                cy.get("#right_gonio_sup_basic").select(AddExaminationEvents_Anterior_Segment.Gonioscopy_Angle_Open_R01)//.should('be.visible'),{force: true}
            }
        }) 
    })
      
    it('0190.05_To_Validate_and_input_values_for_Shaffer_grade_Angle_Open_#2_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Shaffer grade_/Angle_Open Dropdown 2nd Dropdown.
          if (AddExaminationEvents_Anterior_Segment.Gonioscopy_Mode_R == "Expert")
            {	//For_Shaffer_grade Second dropdown..
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Gonioscopy_right_gonio_nas_id").select(Anterior_Segment_Gonioscopy.Gonioscopy_Shaffer_grade_R02)//.should('be.visible'),{force: true}
            }
          else
            {	//For_Angle_Open Second dropdown.
                cy.get("#right_gonio_nas_basic").select(AddExaminationEvents_Anterior_Segment.Gonioscopy_Angle_Open_R02)//.should('be.visible'),{force: true}
            }
        }) 
    })
      
    it('0190.06_To_Validate_and_input_values_for_Shaffer_grade_Angle_Open_#3_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Shaffer grade_/Angle_Open Dropdown 3rd Dropdown.
          if (AddExaminationEvents_Anterior_Segment.Gonioscopy_Mode_R == "Expert")
            {	//For_Shaffer_grade Third dropdown..
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Gonioscopy_right_gonio_inf_id").select(Anterior_Segment_Gonioscopy.Gonioscopy_Shaffer_grade_R03)//.should('be.visible'),{force: true}
            }
          else
            {	//For_Angle_Open Third dropdown.
                cy.get("#right_gonio_inf_basic").select(AddExaminationEvents_Anterior_Segment.Gonioscopy_Angle_Open_R03)//.should('be.visible'),{force: true}
            }
        }) 
    })
      
    
    it('0190.07_To_Validate_and_input_values_for_Shaffer_grade_Angle_Open_#4_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Shaffer grade_/Angle_Open Dropdown 4th Dropdown.
          if (AddExaminationEvents_Anterior_Segment.Gonioscopy_Mode_R == "Expert")
            {	//For_Shaffer_grade forth dropdown..
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Gonioscopy_right_gonio_tem_id").select(Anterior_Segment_Gonioscopy.Gonioscopy_Shaffer_grade_R04)//.should('be.visible'),{force: true}
            }
          else
            {	//For_Angle_Open forth dropdown.
                cy.get("#right_gonio_tem_basic").select(AddExaminationEvents_Anterior_Segment.Gonioscopy_Angle_Open_R04)//.should('be.visible'),{force: true}
            }
          }) 
    })
      
        
    it('0190.08_To_Validate_and_input_values_for_Iris_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Drusen_type.
        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Gonioscopy_right_iris_id").should('be.visible').select(AddExaminationEvents_Anterior_Segment.Gonioscopy_Iris_R)
        })
    })
    
    
    it('0190.09_To_Validate_and_input_values_for_Comments_Textbox', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Drusen_type.
        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Gonioscopy_right_description").should('be.visible').clear().type(AddExaminationEvents_Anterior_Segment.Gonioscopy_Comments_R)
        })

    })
    

    
    //--------------------Common setup For Left Eye ------------------------//

    it('0190.10_To_Validate_and_input_values_for_Mode_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Drusen_type.
        cy.get("[data-element-type-name='Gonioscopy'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div+div>div+div>div+div>div>div>select.gonioscopy-mode").eq(1).should('be.visible').select(AddExaminationEvents_Anterior_Segment.Gonioscopy_Mode_L)
        cy.wait(1000)
        })

    })
    

    
    it('0190.11_To_Validate_and_input_values_for_Mode_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Mode_Dropdown.
          if (AddExaminationEvents_Anterior_Segment.Gonioscopy_Mode_L == "Expert")
            {	//To_select_Gonioscopy_Mode_Dropdown as "Expert".
                cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div+div>div+div>div+div>div>div>select.gonioscopy-mode").eq(1).should('be.visible').select(AddExaminationEvents_Anterior_Segment.Gonioscopy_Mode_L)
                cy.wait(1000)
            }
          else
            {	//To_select_Gonioscopy_Mode_Dropdown as "Basic".
                cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div+div>div+div>div+div>div>div>select.gonioscopy-mode").eq(1).should('be.visible').select(AddExaminationEvents_Anterior_Segment.Gonioscopy_Mode_L)
            }
          }) 
      })
    
    
    
    it('0190.12_To_Validate_and_input_values_for_Shaffer_grade_Angle_Open_#1_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Shaffer grade_/Angle_Open Dropdown 1st Dropdown.
          if (AddExaminationEvents_Anterior_Segment.Gonioscopy_Mode_R == "Expert")
            {	//For_Shaffer_grade first dropdown..
                cy.get("OEModule_OphCiExamination_models_Element_OphCiExamination_Gonioscopy_left_gonio_sup_id").should('be.visible').select(Anterior_Segment_Gonioscopy.Gonioscopy_Shaffer_grade_L01)//,{force: true}
                cy.wait(1000)
            }
          else
            {	//For_Angle_Open first dropdown.
                cy.get("#left_gonio_sup_basic").select(AddExaminationEvents_Anterior_Segment.Gonioscopy_Angle_Open_L01)//.should('be.visible'),{force: true}
            }
        }) 
    })
      
    it('0190.13_To_Validate_and_input_values_for_Shaffer_grade_Angle_Open_#2_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Shaffer grade_/Angle_Open Dropdown 2nd Dropdown.
          if (AddExaminationEvents_Anterior_Segment.Gonioscopy_Mode_R == "Expert")
            {	//For_Shaffer_grade Second dropdown..
                cy.get("OEModule_OphCiExamination_models_Element_OphCiExamination_Gonioscopy_left_gonio_nas_id").should('be.visible').select(Anterior_Segment_Gonioscopy.Gonioscopy_Shaffer_grade_L02)//,{force: true}
                cy.wait(1000)
            }
          else
            {	//For_Angle_Open Second dropdown.
                cy.get("#left_gonio_nas_basic").select(AddExaminationEvents_Anterior_Segment.Gonioscopy_Angle_Open_L02)//.should('be.visible'),{force: true}
            }
        }) 
    })
      
    it('0190.14_To_Validate_and_input_values_for_Shaffer_grade_Angle_Open_#3_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Shaffer grade_/Angle_Open Dropdown 3rd Dropdown.
          if (AddExaminationEvents_Anterior_Segment.Gonioscopy_Mode_R == "Expert")
            {	//For_Shaffer_grade Third dropdown..
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Gonioscopy_left_gonio_inf_id").select(Anterior_Segment_Gonioscopy.Gonioscopy_Shaffer_grade_L03)//.should('be.visible'),{force: true}
                cy.wait(1000)
            }
          else
            {	//For_Angle_Open Third dropdown.
                cy.get("#left_gonio_inf_basic").should('be.visible').select(AddExaminationEvents_Anterior_Segment.Gonioscopy_Angle_Open_L03)//,{force: true}
            }
        }) 
    })
      
    
    it('0190.15_To_Validate_and_input_values_for_Shaffer_grade_Angle_Open_#4_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        cy.get("[data-element-type-name='Gonioscopy'] > header > h3").scrollIntoView().should('be.visible')
            //To_Validate_and_input values for_Shaffer grade_/Angle_Open Dropdown 4th Dropdown.
          if (AddExaminationEvents_Anterior_Segment.Gonioscopy_Mode_R == "Expert")
            {	//For_Shaffer_grade forth dropdown..
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Gonioscopy_left_gonio_tem_id").select(AddExaminationEvents_Anterior_Segment.Gonioscopy_Shaffer_grade_L04)//.should('be.visible'),{force: true}
                cy.wait(1000)
            }
          else
            {	//For_Angle_Open forth dropdown.
                cy.get("#left_gonio_tem_basic").should('be.visible').select(AddExaminationEvents_Anterior_Segment.Gonioscopy_Angle_Open_L04)//,{force: true}
            }
          }) 
    })

    it('0190.16_To_Validate_and_input_values_for_Iris_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Drusen_type.
        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Gonioscopy_left_iris_id").should('be.visible').select(AddExaminationEvents_Anterior_Segment.Gonioscopy_Iris_L)
        })
    })
    
    
    it('0190.17_To_Validate_and_input_values_for_Comments_Textbox', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Drusen_type.
        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Gonioscopy_left_description").should('be.visible').clear().type(AddExaminationEvents_Anterior_Segment.Gonioscopy_Comments_L)
        })

    })
    
    

    
    //--------------------------------- Click "Angle new vessels" button from Right side -----------------------------------------//

    it('0190.18_To_Validate_and_Click_Angle_new_vessels_button', () => {
        //To_Validate_and_Click "Angle new vessels" button.
        cy.get("[data-element-type-name='Gonioscopy'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div>ul>li>a>i.ed-i.icon-ed-AngleNV").eq(0).should('be.visible').click()
        cy.wait(1000)
    })
    
    it('0190.19_To_Validate_and_input_values_for_Doodle_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Doodle_Dropdown.
        cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div+div>div>ul+div>select#ed_example_selected_doodle").eq(0).scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div+div>div>ul+div>select#ed_example_selected_doodle").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Doodle_Dropdown_R01)
        cy.wait(1000)
        })

    })
    
    //--------------------------------- Click "Anterior synechiae" button from Right side -----------------------------------------//

    it('0190.20_To_Validate_and_Click_Anterior_synechiae_button', () => {
        //To_Validate_and_Click "Anterior synechiae" button.
        cy.get("[data-element-type-name='Gonioscopy'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div>ul>li>a>i.ed-i.icon-ed-AntSynech").eq(0).should('be.visible').click()
        cy.wait(1000)
    })
    
    it('0190.21_To_Validate_and_input_values_for_Doodle_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Doodle_Dropdown.
        cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div+div>div>ul+div>select#ed_example_selected_doodle").eq(0).scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div+div>div>ul+div>select#ed_example_selected_doodle").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Doodle_Dropdown_R02)
        cy.wait(1000)
        })
    })
     
    it('0190.22_To_Validate_and_input_values_for_Colour_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Colour_Dropdown.
        cy.get("#ed_canvas_edit_right_354_colour_control").should('be.visible').select(AddExaminationEvents_Anterior_Segment.Gonioscopy_Anterior_synechiae_Colour_R)
        })
    })

    
     //--------------------------------- Click "Angle recession" button from Right side -----------------------------------------//


     it('0190.23_To_Validate_and_Click_Angle_recession_button', () => {
        //To_Validate_and_Click "Angle recession" button.
        cy.get("[data-element-type-name='Gonioscopy'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div>ul>li>a>i.ed-i.icon-ed-AngleRecession").eq(0).should('be.visible').click()
        cy.wait(1000)
    })
    
    it('0190.24 values_for_Doodle_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Doodle_Dropdown.
        cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div+div>div>ul+div>select#ed_example_selected_doodle").eq(0).scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div+div>div>ul+div>select#ed_example_selected_doodle").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Doodle_Dropdown_R03)
        cy.wait(1000)
        })
    })
    
     //--------------------------------- Click "Freehand - temporary" button from Right side -----------------------------------------//


     it('0190.25_To_Validate_and_Click_Freehand_temporary_button', () => {
        //To_Validate_and_Click "Angle recession" button.
        cy.get("[data-element-type-name='Gonioscopy'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div>ul>li>a>i.ed-i.icon-ed-Freehand").eq(0).should('be.visible').click()
        cy.wait(1000)
    })
    
    it('0190.26_To_Validate_and_input_values_for_Doodle_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Doodle_Dropdown.
        cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div+div>div>ul+div>select#ed_example_selected_doodle").eq(0).scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div+div>div>ul+div>select#ed_example_selected_doodle").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Doodle_Dropdown_R04)
        cy.wait(1000)
        })
    })
    it('0190.27_To_Validate_and_input_values_for_Colour_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Colour_Dropdown.
        cy.get("#ed_canvas_edit_right_354_colourString_control").should('be.visible').select(AddExaminationEvents_Anterior_Segment.Gonioscopy_Freehand_temporary_Colour_R)
        })
    })

    
    it('0190.28_To_Validate_and_Check_Fill_checkbox', () => {
        //To_Validate_and_Click "Angle recession" button.
        cy.get("#ed_canvas_edit_right_354_filled_control").should('be.visible').should('be.checked')
        cy.wait(1000)
    })
    
    it('0190.29_To_Validate_and_input_values_for_Thickness_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Thickness_Dropdown.
        cy.get("#ed_canvas_edit_right_354_thickness_control").should('be.visible').select(AddExaminationEvents_Anterior_Segment.Gonioscopy_Freehand_temporary_Thickness_R)
        })
    })
    
    it('0190.30_To_Validate_and_input_values_for_Comments_Textbox', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Label.
        cy.get("#ed_canvas_edit_right_354_labelText_control").should('be.visible').clear().type(AddExaminationEvents_Anterior_Segment.Gonioscopy_Freehand_temporary_Label_R)
        })

    })
    
    //--------------------------------- Click "Label" button from Right side -----------------------------------------//


    it('0190.31_To_Validate_and_Click_Label_button', () => {
        //To_Validate_and_Click "Label" button.
        cy.get("[data-element-type-name='Gonioscopy'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div>ul>li>a>i.ed-i.icon-ed-Label").eq(0).should('be.visible').click()
        cy.wait(1000)
    })
    
    it('0190.32_To_Validate_and_input_values_for_Doodle_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Doodle_Dropdown.
        cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div+div>div>ul+div>select#ed_example_selected_doodle").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Doodle_Dropdown_R05)
        cy.wait(1000)
        })
    })
    
    it('0190.33_To_Validate_and_input_values_for_Text_Textbox', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Text.
        cy.get("#ed_canvas_edit_right_354_labelText_control").should('be.visible').clear().type(AddExaminationEvents_Anterior_Segment.Gonioscopy_Label_Text_R)
        })

    })


    //------------------------------------------------------------------------------//
    //------------------------------------------------------------------------------//

  
    //--------------------------------- Click "Angle new vessels" button from Left side -----------------------------------------//

    it('0190.34_To_Validate_and_Click_Angle_new_vessels_button', () => {
        //To_Validate_and_Click "Angle new vessels" button.
        cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div>ul>li>a>i.ed-i.icon-ed-AngleNV").eq(1).scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div>ul>li>a>i.ed-i.icon-ed-AngleNV").eq(1).should('be.visible').click()
        cy.wait(1000)
    })
    
    it('0190.35_To_Validate_and_input_values_for_Mode_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Drusen_type.
        cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div+div>div>ul+div>select#ed_example_selected_doodle").eq(1).scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div+div>div>ul+div>select#ed_example_selected_doodle").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Doodle_Dropdown_L01)
        cy.wait(1000)
        })

    })

    
    //--------------------------------- Click "Anterior synechiae" button from Left side -----------------------------------------//

    it('0190.36_To_Validate_and_Click_Anterior_synechiae_button', () => {
        //To_Validate_and_Click "Anterior synechiae" button.
        cy.get("[data-element-type-name='Gonioscopy'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div>ul>li>a>i.ed-i.icon-ed-AntSynech").eq(1).should('be.visible').click()
        cy.wait(1000)
    })
    
    it('0190.37_To_Validate_and_input_values_for_Doodle_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Doodle_Dropdown.
        cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div+div>div>ul+div>select#ed_example_selected_doodle").eq(1).scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div+div>div>ul+div>select#ed_example_selected_doodle").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Doodle_Dropdown_L02)
        cy.wait(1000)
        })
    })
     
    it('0190.38_To_Validate_and_input_values_for_Colour_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Colour_Dropdown.
        cy.get("#ed_canvas_edit_left_354_colour_control").should('be.visible').select(AddExaminationEvents_Anterior_Segment.Gonioscopy_Anterior_synechiae_Colour_L)
        })
    })

    
     //--------------------------------- Click "Angle recession" button from Left side -----------------------------------------//


     it('0190.39_To_Validate_and_Click_Angle_recession_button', () => {
        //To_Validate_and_Click "Angle recession" button.
        cy.get("[data-element-type-name='Gonioscopy'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div>ul>li>a>i.ed-i.icon-ed-AngleRecession").eq(1).should('be.visible').click()
        cy.wait(1000)
    })
    
    it('0190.40_To_Validate_and_input_values_for_Doodle_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Doodle_Dropdown.
        cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div+div>div>ul+div>select#ed_example_selected_doodle").eq(1).scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div+div>div>ul+div>select#ed_example_selected_doodle").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Doodle_Dropdown_L03)
        cy.wait(1000)
        })
    })
    
     //--------------------------------- Click "Freehand - temporary" button from Left side -----------------------------------------//


     it('0190.41_To_Validate_and_Click_Freehand_temporary_button', () => {
        //To_Validate_and_Click "Angle recession" button.
        cy.get("[data-element-type-name='Gonioscopy'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div>ul>li>a>i.ed-i.icon-ed-Freehand").eq(1).should('be.visible').click()
        cy.wait(1000)
    })
    
    it('0190.42_To_Validate_and_input_values_for_Doodle_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Doodle_Dropdown.
        cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div+div>div>ul+div>select#ed_example_selected_doodle").eq(1).scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div+div>div>ul+div>select#ed_example_selected_doodle").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Doodle_Dropdown_L04)
        cy.wait(1000)
        })
    })
    it('0190.43_To_Validate_and_input_values_for_Colour_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Colour_Dropdown.
        cy.get("#ed_canvas_edit_left_354_colourString_control").should('be.visible').select(AddExaminationEvents_Anterior_Segment.Gonioscopy_Freehand_temporary_Colour_R)
        })
    })

    
    it('0190.44_To_Validate_and_Check_Fill_checkbox', () => {
        //To_Validate_and_Click "Angle recession" button.
        cy.get("#ed_canvas_edit_left_354_filled_control").should('be.visible').should('be.checked')
        cy.wait(1000)
    })
    
    it('0190.45_To_Validate_and_input_values_for_Thickness_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Thickness_Dropdown.
        cy.get("#ed_canvas_edit_left_354_thickness_control").should('be.visible').select(AddExaminationEvents_Anterior_Segment.Gonioscopy_Freehand_temporary_Thickness_L)
        })
    })
    
    it('0190.46_To_Validate_and_input_values_for_Comments_Textbox', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Label.
        cy.get("#ed_canvas_edit_left_354_labelText_control").should('be.visible').clear().type(AddExaminationEvents_Anterior_Segment.Gonioscopy_Freehand_temporary_Label_L)
        })

    })
    
    //--------------------------------- Click "Label" button from Left side -----------------------------------------//


    it('0190.47_To_Validate_and_Click_Label_button', () => {
        //To_Validate_and_Click "Label" button.
        cy.get("[data-element-type-name='Gonioscopy'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div>ul>li>a>i.ed-i.icon-ed-Label").eq(1).should('be.visible').click()
        cy.wait(1000)
    })
    
    it('0190.48_To_Validate_and_input_values_for_Doodle_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Doodle_Dropdown.
        cy.get("[data-element-type-name='Gonioscopy']>div+div>div>div>a+div>div>div+div>div>ul+div>select#ed_example_selected_doodle").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Doodle_Dropdown_L05)
        cy.wait(1000)
        })
    })
    
    it('0190.49_To_Validate_and_input_values_for_Text_Textbox', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Text.
        cy.get("#ed_canvas_edit_left_354_labelText_control").should('be.visible').clear().type(AddExaminationEvents_Anterior_Segment.Gonioscopy_Label_Text_L)
        })

    })

})
