//Clinical_Management_Injection_Management_DI

//***********************************Please execute script with below combinations *************************************/
// Injection_Management_Treatment_R":"Yes" with below combinations
// 1. "Macular retinal oedema"(Diagnosis) & "Venous retinal branch occlusion"(AssociatedWith)(1st combination)
// 2. "Macular retinal oedema"(Diagnosis) & "Diabetic macular oedema"(AssociatedWith)(2nd combination)
// 3. "Vitreomacular traction syndrome"(Diagnosis) with NULL (AssociatedWith) selected (3rd combination)
// 4. "Choroidal retinal neovascularisation"(Diagnosis) with "Myopia" or any compatible value other than used(AssociatedWith) (4th combination)
// 5. "Scleritis" or Any value other than used(Diagnosis) with No value (AssociatedWith) (5th combination)

//Injection_Management_Treatment_R":"No" with below combinations
// 1. Reason for no treatment = "Other"
// 2. Reason for no treatment = any value other than "Other".

//**********************************************************************************************************************/
describe('0365_Clinical_Management_Injection_Management_DI', () => {

    it('0365.01_Select_Injection_Management_Segment', () => {
        //To get the "Injection Management" Page
        cy.get("#js-manage-elements-btn").should('be.visible').click()

        cy.get('body').then((body) => {
      
            if (body.find('#manage-elements-Injection-Management[class="added"]').length == 0)
            {
                cy.get("#manage-elements-Injection-Management").should('be.visible').click()
            }
      
        })
      
        cy.get(".blue.hint.cols-full").should('be.visible').click()

    })
        
    it('0365.02_To_Validate_Injection_Management_Section_is_Available', () => {
        //To_Validate_Injection Management_Section_is_Available.
        cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Injection Management'] > header > h3").should('be.visible').should('contain','Injection Management')
    })



    //------------------------------------------ For Right Eye -----------------------------------------//
    //---------------------------if Injection_Management_Treatment_R == "No"----------------------------//

    it('0365.03_To_Validate_and_input_values_for_No_treatment_Checkbox', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        //To_Validate_and_check the "No treatment" Checkbox.
          if (AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_R == "No")
            {	//To_select_"No treatment" Checkbox if Injection_Management_Treatment_R == "No".
                cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible')
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_no_treatment").should('be.visible').should('be.not.checked').check()
                cy.wait(1000)
            }
         
        }) 
    })

    it('0365.04_To_Validate_and_input_values_for_Reason_for_no_treatment_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        //To_Validate_and_input values for_"Reason for no treatment"_Dropdown.
          if (AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_R == "No")
            {	//if value for Injection_Management_Treatment_R is provided as "No"
                cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible')
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_no_treatment_reason_id").should('be.visible').select(AddExaminationEvents_Clinical_Management.Injection_Management_Reason_for_no_treatment_R)
                cy.wait(1000)
            }
         
        }) 
    })

    it('0365.05_To_Validate_and_input_values_for_Please_provide_other_reason_for_no_treatment_TextBox', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        //To_Validate_and_input values for_"Reason for no treatment"_Dropdown.
          if (AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_R == "No" && AddExaminationEvents_Clinical_Management.Injection_Management_Reason_for_no_treatment_R == "Other")
            {	//if value for Injection_Management_Treatment_R is provided as "No"
                cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible')
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_no_treatment_reason_other").should('be.visible').clear().type(AddExaminationEvents_Clinical_Management.Injection_Management_Other_Reason_for_no_treatment_R)
                cy.wait(1000)
            }
         
        }) 
    })

    //-------------------- For Right Eye ------------------------//
    //----------if Injection_Management_Treatment_R == "Yes"-------//

    it('0365.06_To_Validate_and_input_values_for_Diagnosis_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        //To_Validate_and_input values for_Diagnosis_Dropdown.
          if (AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_R == "Yes")
            {	//To_select_Diagnosis_Dropdown value.
                cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible')
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_diagnosis1_id").should('be.visible').select(AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_R)
                cy.wait(1000)
            }
         
        }) 
    })
    
    it('0365.07_To_Validate_and_input_values_for_Intended_Treatment_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        //To_Validate_and_input values for_Intended Treatment_Dropdown.
          if (AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_R == "Yes")
            {	//To_select_Intended Treatment_Dropdown value.
                cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible')
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_treatment_id").should('be.visible').select(AddExaminationEvents_Clinical_Management.Injection_Management_Intended_Treatment_R)
                cy.wait(1000)
            }
         
        }) 
    })
    
    it('0365.08_To_Validate_and_input_values_for_Risks_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        //To_Validate_and_input values for_Risks_Dropdown.
          if (AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_R == "Yes")
            {	//To_select_Risks_Dropdown value.
                cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible')
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_risks").should('be.visible').select(AddExaminationEvents_Clinical_Management.Injection_Management_Risks_R)
                cy.wait(1000)
            }
         
        }) 
    })

    

    //--------------------------------------- For Right Eye ------------------------------------//
    
    //----------if Injection_Management_Diagnosis_R = Choroidal retinal neovascularisation-------//

    it('0365.09_To_Validate_and_input_values_for_Associated_with_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        if    (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_R != "")
        {
        //To_Validate_and_check Injection_Management_Diagnosis_R = Choroidal retinal neovascularisation.
        if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_R == "Myopia" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_R == "Yes")
            {	//To_Validate_and_input values for_"Associated with"_Dropdown.
                cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible')
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_diagnosis2_id").should('be.visible').select(AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_R,{force : true})
                cy.wait(1000)
            }
        else if(AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_R == "Venous retinal branch occlusion" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_R == "Yes")
            {	//To_Validate_and_input values for_"Associated with"_Dropdown.
                cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible')
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_diagnosis2_id").should('be.visible').select(AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_R,{force : true})
                cy.wait(1000)
            }
        else if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_R == "Diabetic macular oedema" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_R == "Yes")
            {	//To_Validate_and_input values for_"Associated with"_Dropdown.
                cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible' )
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_diagnosis2_id").should('be.visible').select(AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_R,{force : true})
                cy.wait(1000)
            }
        
        else if (AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_R == "Yes")
            {	//To_Validate_and_input values for_"Associated with"_Dropdown.
                cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible')
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_diagnosis2_id").should('be.visible').select(AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_R,{force : true})
                cy.wait(1000)
            }
        }
        }) 
    })

    
    //----------if Injection_Management_Diagnosis_R = Choroidal retinal neovascularisation-------//
    //-----------------------------Radio Button Selection---------------------------------------//

    it('0365.10_To_Validate_and_input_values_for_CRT_Increase_<100_Radio_Buttons', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        //To_Validate_and_check Injection_Management_Diagnosis_R = Choroidal retinal neovascularisation.
        if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_R == "Choroidal retinal neovascularisation")
            {	
                //To_make selection from "CRT Increase <100" Radio Buttons.
                if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_CRT_Increase_Lt100_R == "Yes")
                {
                    cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_Answer_1_1").should('be.visible').should('be.not.selected').click()
                    cy.wait(1000)
                }
                else
                {	
                    cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_Answer_1_0").should('be.visible').should('be.not.selected').click()
            
                }
            }
        })
    })

    it('0365.11_To_Validate_and_input_values_for_CRT_>=_100_Radio_Buttons', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        //To_Validate_and_check Injection_Management_Diagnosis_R = Choroidal retinal neovascularisation.
        if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_R == "Choroidal retinal neovascularisation")
            {	
                //To_make selection from "CRT >= 100" Radio Buttons.
                if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_CRT_GrEqTo_100_R == "Yes")
                {
                    cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_Answer_2_1").should('be.visible').should('be.not.selected').click()
                    cy.wait(1000)
                }
                else
                {	
                    cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_Answer_2_0").should('be.visible').should('be.not.selected').click()
            
                }
            }
        })
    })

    it('0365.12_To_Validate_and_input_values_for_Loss_of_5_letters_Radio_Buttons', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
          //To_Validate_and_check Injection_Management_Diagnosis_R = Choroidal retinal neovascularisation.
            if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_R == "Choroidal retinal neovascularisation")
            {	
              //To_make selection from "Loss of 5 letters" Radio Buttons.
              if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Loss_of_5_letters_R == "Yes")
              {
                  cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_Answer_3_1").should('be.visible').should('be.not.selected').click()
                  cy.wait(1000)
              }
              else
              {	
                  cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_Answer_3_0").should('be.visible').should('be.not.selected').click()
          
              }
            }
        })
    })            
                
                
    it('0365.13_To_Validate_and_input_values_for_Loss_of_letter_>5_Radio_Buttons', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
          //To_Validate_and_check Injection_Management_Diagnosis_R = Choroidal retinal neovascularisation.
            if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_R == "Choroidal retinal neovascularisation")
            {	
              //To_make selection from "Loss of letter >5" Radio Buttons.
                if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Loss_of_letter_Gt5_R == "Yes")
                {
                    cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_Answer_4_1").should('be.visible').should('be.not.selected').click()
                    cy.wait(1000)
                }
                else
                {	//For_Angle_Open first dropdown.
                    cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_Answer_4_0").should('be.visible').should('be.not.selected').click()
            
                }


            }
        }) 
    })

       //-----------------------------------------------------------------------------------------------------//

    //----------if "Injection_Management_Diagnosis_R"=="Vitreomacular traction syndrome"-------//
    //-----------------------------Radio Button Selection---------------------------------------//

    it('0365.14_To_Validate_and_input_values_for_Epiretinal_membrane_present_Radio_Buttons', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        //To_Validate_and_check Injection_Management_Diagnosis_R = Vitreomacular traction syndrome.
        if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_R == "Vitreomacular traction syndrome")
            {	
                //To_make selection from "Epiretinal membrane present" Radio Buttons.
                if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_Epiretinal_membrane_present_R == "Yes")
                {
                    cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_Answer_13_1").should('be.visible').should('be.not.selected').click()
                    cy.wait(1000)
                }
                else
                {	
                    cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_Answer_13_0").should('be.visible').should('be.not.selected').click()
            
                }
            }
        })
    })

    it('0365.15_To_Validate_and_input_values_for_Is_it_a_stage_II_full_thickness_macular_hole_with_diameter_<=400_micrometers_Radio_Buttons', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        //To_Validate_and_check Injection_Management_Diagnosis_R2 = Choroidal retinal neovascularisation.
        if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_R == "Vitreomacular traction syndrome")
            {	
                //To_make selection from "Is it a stage II full thickness macular hole with diameter <=400 micrometers" Radio Buttons.
                if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_Is_it_a_stage_II_full_thickness_macular_hole_with_diameter_GrEq400_micrometers_R == "Yes")
                {
                    cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_Answer_14_1").should('be.visible').should('be.not.selected').click()
                    cy.wait(1000)
                }
                else
                {	
                    cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_Answer_14_0").should('be.visible').should('be.not.selected').click()
            
                }
            }
        })
    })

    it('0365.16_To_Validate_and_input_values_for_Do_they_have_severe_symptoms_Radio_Buttons', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
          //To_Validate_and_check Injection_Management_Diagnosis_R = Choroidal retinal neovascularisation.
            if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_R == "Vitreomacular traction syndrome")
            {	
              //To_make selection from "Do they have severe symptoms" Radio Buttons.
              if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_Do_they_have_severe_symptoms_R == "Yes")
              {
                  cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_Answer_15_1").should('be.visible').should('be.not.selected').click()
                  cy.wait(1000)
              }
              else
              {	
                  cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_Answer_15_0").should('be.visible').should('be.not.selected').click()
          
              }
            }
        })
    })            
 
    

    //--------------------------------------------------------------------------------------------------------//

    //----------------if "Injection_Management_Diagnosis_R"=="Macular retinal oedema",------------------------//
    //----------if "Injection_Management_Diagnosis_AssociatedWith_R"=="Venous retinal branch occlusion"-------//
    //-------------------------------------------Radio Button Selection---------------------------------------//

    it('0365.17_To_Validate_and_input_values_for_Failed_Laser_Radio_Buttons', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        //To_Validate_and_check Injection_Management_Diagnosis_R = Vitreomacular traction syndrome.
        if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_R =="Venous retinal branch occlusion" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_R == "Yes")
            {	
                //To_make selection from "Failed Laser" Radio Buttons.
                if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_Failed_Laser_R == "Yes")
                {
                    cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_Answer_5_1").should('be.visible').should('be.not.selected').click()
                    cy.wait(1000)
                }
                else
                {	
                    cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_Answer_5_0").should('be.visible').should('be.not.selected').click()
            
                }
            }
        })
    })

    it('0365.18_To_Validate_and_input_values_for_Unsuitable_for_Laser_Radio_Buttons', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        //To_Validate_and_check Injection_Management_Diagnosis_R2 = Choroidal retinal neovascularisation.
        if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_R =="Venous retinal branch occlusion" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_R == "Yes")
            {	
                //To_make selection from "Unsuitable for Laser" Radio Buttons.
                if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_Unsuitable_for_Laser_R == "Yes")
                {
                    cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_Answer_6_1").should('be.visible').should('be.not.selected').click()
                    cy.wait(1000)
                }
                else 
                {	
                    cy.get("OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_Answer_6_0").should('be.visible').should('be.not.selected').click()
            
                }
            }
        })
    })

    it('0365.19_To_Validate_and_input_values_for_Previously_received_intravitreal_treatment_Radio_Buttons', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
          //To_Validate_and_check Injection_Management_Diagnosis_R = Choroidal retinal neovascularisation.
            if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_R =="Venous retinal branch occlusion" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_R == "Yes")
            {	
              //To_make selection from "Previously received intravitreal treatment" Radio Buttons.
              if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_Previously_received_intravitreal_treatment_R == "Yes")
              {
                  cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_Answer_7_1").should('be.visible').should('be.not.selected').click()
                  cy.wait(1000)
              }
              else 
              {	
                  cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_Answer_7_0").should('be.visible').should('be.not.selected').click()
          
              }
            }
        })
    })            
                
    //---------------------------------------------------------------------------------------------------//

    //----------if Injection_Management_Diagnosis_R == "Macular retinal oedema"-------// and 
    //----------if Injection_Management_Diagnosis_AssociatedWith_R=="Diabetic macular oedema"-------//
    //-----------------------------Radio Button Selection---------------------------------------//

    it('0365.20_To_Validate_and_input_values_for_CRT_Increase_<100_Radio_Buttons', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        //To_Validate_and_check Injection_Management_Diagnosis_R = Choroidal retinal neovascularisation.
        if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_R == "Macular retinal oedema" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_R == "Yes")
            {	
                if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_R == "Diabetic macular oedema")
                {   //To_make selection from "CRT >= 400 µ" Radio Buttons.
                    if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_CRT_GrThEq_400µ_R == "Yes")
                    {
                        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_Answer_8_1").should('be.visible').should('be.not.selected').click()
                        cy.wait(1000)
                    }
                    else
                    {	
                         cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_Answer_8_0").should('be.visible').should('be.not.selected').click()
            
                    }
                    //To_make selection from "Foveal structural damage" Radio Buttons.
                    if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Foveal_structural_damage_R == "Yes")
                    {
                        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_Answer_9_1").should('be.visible').should('be.not.selected').click()
                        cy.wait(1000)
                    }
                    else
                    {	
                         cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_Answer_9_0").should('be.visible').should('be.not.selected').click()
            
                    }
                    //To_make selection from "Failed laser" Radio Buttons.
                    if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Failed_laser_R == "Yes")
                    {
                        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_Answer_10_1").should('be.visible').should('be.not.selected').click()
                        cy.wait(1000)
                    }
                    else
                    {	
                         cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_Answer_10_0").should('be.visible').should('be.not.selected').click()
            
                    }
                    //To_make selection from "Unsuitable for Laser" Radio Buttons.
                    if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Unsuitable_for_Laser_R == "Yes")
                    {
                        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_Answer_11_1").should('be.visible').should('be.not.selected').click()
                        cy.wait(1000)
                    }
                    else
                    {	
                         cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_Answer_11_0").should('be.visible').should('be.not.selected').click()
            
                    }
                    //To_make selection from "Previously received Anti VEGF" Radio Buttons.
                    if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Previously_received_Anti_VEGF_R == "Yes")
                    {
                        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_Answer_12_1").should('be.visible').should('be.not.selected').click()
                        cy.wait(1000)
                    }
                    else
                    {	
                         cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_Answer_12_0").should('be.visible').should('be.not.selected').click()
            
                    }
                }
        
            }    
        })
    })


    //---------------------------------------------------------------------------------------------------//

    
    //--------------------------- This part covers comments for Right Eye-------------------------------//
    
    it('0365.21_To_Enters_comments_in_commentbox_at_right_side', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        //To_Enters comments in commentbox.
        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_comment_button").click({force: true})
        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_right_comments").clear().type(AddExaminationEvents_Clinical_Management.Injection_Management_Comments_R)
      
        })
    })




    
    
    //********************************************************************************************************//
    
    //------------------------------------- For Left Eye -----------------------------------------//
    //-----------------------if Injection_Management_Treatment_L == "No"--------------------------//

    it('0365.22_To_Validate_and_input_values_for_Diagnosis_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        //To_Validate_and_check the "No treatment" Checkbox.
          if (AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "No")
            {	//To_select_"No treatment" Checkbox if Injection_Management_Treatment_L == "No".
                cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible')
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_no_treatment").should('be.visible').should('be.not.checked').check()
                cy.wait(1000)
            }
         
        }) 
    })

    it('0365.23_To_Validate_and_input_values_for_Reason_for_no_treatment_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        //To_Validate_and_input values for_"Reason for no treatment"_Dropdown.
          if (AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "No")
            {	//if value for Injection_Management_Treatment_R is provided as "No"
                cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible')
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_no_treatment_reason_id").should('be.visible').select(AddExaminationEvents_Clinical_Management.Injection_Management_Reason_for_no_treatment_L)
                cy.wait(1000)
            }
         
        }) 
    })

    it('0365.24_To_Validate_and_input_values_for_Please_provide_other_reason_for_no_treatment_TextBox', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        //To_Validate_and_input values for_"Reason for no treatment"_Dropdown.
          if (AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "No" && AddExaminationEvents_Clinical_Management.Injection_Management_Reason_for_no_treatment_L == "Other")
            {	//if value for Injection_Management_Treatment_R is provided as "No"
                cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible')
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_no_treatment_reason_other").should('be.visible').clear().type(AddExaminationEvents_Clinical_Management.Injection_Management_Other_Reason_for_no_treatment_L)
                cy.wait(1000)
            }
         
        }) 
    })

    //-------------------- -----------------------For Left Eye --------------------------------------// 
    //-----------------------------if Injection_Management_Treatment_R == "Yes"----------------------//

     it('0365.25_To_Validate_and_input_values_for_Diagnosis_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        //To_Validate_and_input values for_Diagnosis_Dropdown.
          if (AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "Yes"  && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "Yes")
            {	//To_select_Diagnosis_Dropdown value.
                cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible')
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_diagnosis1_id").should('be.visible').select(AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_L)
                cy.wait(1000)
            }
         
        }) 
    })
    
    it('0365.26_To_Validate_and_input_values_for_Intended_Treatment_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        //To_Validate_and_input values for_Intended Treatment_Dropdown.
          if (AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "Yes" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "Yes")
            {	//To_select_Gonioscopy_Intended Treatment_Dropdown value.
                cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible')
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_treatment_id").should('be.visible').select(AddExaminationEvents_Clinical_Management.Injection_Management_Intended_Treatment_L)
                cy.wait(1000)
            }
         
        }) 
    })
    
    it('0365.27_To_Validate_and_input_values_for_Diagnosis_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        //To_Validate_and_input values for_Diagnosis_Dropdown.
          if (AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "Yes" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "Yes")
            {	//To_select_Gonioscopy_Mode_Dropdown as "Expert".
                cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible')
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_risks").should('be.visible').select(AddExaminationEvents_Clinical_Management.Injection_Management_Risks_L)
                cy.wait(1000)
            }
         
        }) 
    })
    

     

    //-------------------------------- For Left Eye ---------------------------------------------//
    
    //----------if Injection_Management_Diagnosis_L = Choroidal retinal neovascularisation-------//

    it('0365.28_To_Validate_and_input_values_for_Associated_with_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        if    (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_L != "")
            {
            //To_Validate_and_check Injection_Management_Diagnosis_L = Choroidal retinal neovascularisation.
        if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_L == "Myopia" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "Yes")
            {	//To_Validate_and_input values for_"Associated with"_Dropdown.
                cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible')
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_diagnosis2_id").should('be.visible').select(AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_L,{force : true})
                cy.wait(1000)
            }
        else if(AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_L == "Venous retinal branch occlusion" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "Yes")
            {	//To_Validate_and_input values for_"Associated with"_Dropdown.
                cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible')
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_diagnosis2_id").should('be.visible').select(AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_L ,{force : true})
                cy.wait(1000)
            }
        else if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_L == "Diabetic macular oedema" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "Yes")
            {	//To_Validate_and_input values for_"Associated with"_Dropdown.
                cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible')
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_diagnosis2_id").should('be.visible').select(AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_L ,{force : true})
                cy.wait(1000)
            }
        else if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_L == "" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "Yes")
            {	//To_Validate_and_input values for_"Associated with"_Dropdown.
                cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible')
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_diagnosis2_id").should('be.visible').select(AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_L ,{force : true})
                cy.wait(1000)
            }
        else if( AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "Yes")
            {	//To_Validate_and_input values for_"Associated with"_Dropdown.
                cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible')
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_diagnosis2_id").should('be.visible').select(AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_L ,{force : true})
                cy.wait(1000)
            }
        }
        }) 
    })

    
    //----------if Injection_Management_Diagnosis_R = Choroidal retinal neovascularisation-------//
    //-----------------------------Radio Button Selection---------------------------------------//

    it('0365.29_To_Validate_and_input_values_for_CRT_Increase_<100_Radio_Buttons', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        //To_Validate_and_check Injection_Management_Diagnosis_R2 = Choroidal retinal neovascularisation.
        if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_L == "Choroidal retinal neovascularisation" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "Yes")
            {	
                //To_make selection from "CRT Increase <100" Radio Buttons.
                if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_CRT_Increase_Lt100_L == "Yes")
                {
                    cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_Answer_1_1").should('be.visible').should('be.not.selected').click()
                    cy.wait(1000)
                }
                else
                {	
                    cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_Answer_1_0").should('be.visible').should('be.not.selected').click()
            
                }
            }
        })
    })

    it('0365.30_To_Validate_and_input_values_for_CRT_>=_100_Radio_Buttons', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        //To_Validate_and_check Injection_Management_Diagnosis_R2 = Choroidal retinal neovascularisation.
        if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_L == "Choroidal retinal neovascularisation" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "Yes")
            {	
                //To_make selection from "CRT >= 100" Radio Buttons.
                if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_CRT_GrEqTo_100_L == "Yes")
                {
                    cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_Answer_2_1").should('be.visible').should('be.not.selected').click()
                    cy.wait(1000)
                }
                else
                {	
                    cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_Answer_2_0").should('be.visible').should('be.not.selected').click()
            
                }
            }
        })
    })

    it('0365.31_To_Validate_and_input_values_for_Loss_of_5_letters_Radio_Buttons', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
          //To_Validate_and_check Injection_Management_Diagnosis_R = Choroidal retinal neovascularisation.
            if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_L == "Choroidal retinal neovascularisation" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "Yes")
            {	
              //To_make selection from "Loss of 5 letters" Radio Buttons.
              if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Loss_of_5_letters_L == "Yes")
              {
                  cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_Answer_3_1").should('be.visible').should('be.not.selected').click()
                  cy.wait(1000)
              }
              else
              {	
                  cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_Answer_3_0").should('be.visible').should('be.not.selected').click()
          
              }
            }
        })
    })            
                
                
    it('0365.32_To_Validate_and_input_values_for_Loss_of_letter_>5_Radio_Buttons', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
          //To_Validate_and_check Injection_Management_Diagnosis_R = Choroidal retinal neovascularisation.
            if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_L == "Choroidal retinal neovascularisation" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "Yes")
            {	
              //To_make selection from "Loss of letter >5" Radio Buttons.
                if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Loss_of_letter_Gt5_L == "Yes")
                {
                    cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_Answer_4_1").should('be.visible').should('be.not.selected').click()
                    cy.wait(1000)
                }
                else
                {	//For_Angle_Open first dropdown.
                    cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_Answer_4_0").should('be.visible').should('be.not.selected').click()
            
                }


            }
        }) 
    })



    //-----------------------------------------------------------------------------------------------------//

    //----------if "Injection_Management_Diagnosis_R"=="Vitreomacular traction syndrome"-------//
    //-----------------------------Radio Button Selection of Left side ---------------------------------------//

    it('0365.33_To_Validate_and_input_values_for_Epiretinal_membrane_present_Radio_Buttons', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        //To_Validate_and_check Injection_Management_Diagnosis_R = Vitreomacular traction syndrome.
        if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_L == "Vitreomacular traction syndrome" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "Yes")
            {	
                //To_make selection from "Epiretinal membrane present" Radio Buttons.
                if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_Epiretinal_membrane_present_L == "Yes")
                {
                    cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_Answer_13_1").should('be.visible').should('be.not.selected').click()
                    cy.wait(1000)
                }
                else
                {	
                    cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_Answer_13_0").should('be.visible').should('be.not.selected').click()
            
                }
            }
        })
    })

    it('0365.34_To_Validate_and_input_values_for_Is_it_a_stage_II_full_thickness_macular_hole_with_diameter_<=400_micrometers_Radio_Buttons', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        //To_Validate_and_check Injection_Management_Diagnosis_R2 = Choroidal retinal neovascularisation.
        if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_L == "Vitreomacular traction syndrome" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "Yes")
            {	
                //To_make selection from "Is it a stage II full thickness macular hole with diameter <=400 micrometers" Radio Buttons.
                if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_Is_it_a_stage_II_full_thickness_macular_hole_with_diameter_GrEq400_micrometers_L == "Yes")
                {
                    cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_Answer_14_1").should('be.visible').should('be.not.selected').click()
                    cy.wait(1000)
                }
                else
                {	
                    cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_Answer_14_0").should('be.visible').should('be.not.selected').click()
            
                }
            }
        })
    })

    it('0365.35_To_Validate_and_input_values_for_Do_they_have_severe_symptoms_Radio_Buttons', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
          //To_Validate_and_check Injection_Management_Diagnosis_R = Choroidal retinal neovascularisation.
            if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_L == "Vitreomacular traction syndrome" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "Yes")
            {	
              //To_make selection from "Do they have severe symptoms" Radio Buttons.
              if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_Do_they_have_severe_symptoms_L == "Yes")
              {
                  cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_Answer_15_1").should('be.visible').should('be.not.selected').click()
                  cy.wait(1000)
              }
              else
              {	
                  cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_Answer_15_0").should('be.visible').should('be.not.selected').click()
          
              }
            }
        })
    })            
                

    

    //--------------------------------------------------------------------------------------------------------//

    //----------------if "Injection_Management_Diagnosis_R"=="Macular retinal oedema",------------------------//
    //----------if "Injection_Management_Diagnosis_AssociatedWith_R"=="Venous retinal branch occlusion"-------//
    //-------------------------------------------Radio Button Selection---------------------------------------//

    it('0365.36_To_Validate_and_input_values_for_Failed_Laser_Radio_Buttons', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        //To_Validate_and_check Injection_Management_Diagnosis_R = Vitreomacular traction syndrome.
        if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_L =="Venous retinal branch occlusion" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "Yes")
            {	
                //To_make selection from "Failed Laser" Radio Buttons.
                if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_Failed_Laser_L == "Yes")
                {
                    cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_Answer_5_1").should('be.visible').should('be.not.selected').click()
                    cy.wait(1000)
                }
                else 
                {	
                    cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_Answer_5_0").should('be.visible').should('be.not.selected').click()
            
                }
            }
        })
    })

    it('0365.37_To_Validate_and_input_values_for_Unsuitable_for_Laser_Radio_Buttons', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        //To_Validate_and_check Injection_Management_Diagnosis_R2 = Choroidal retinal neovascularisation.
        if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_L =="Venous retinal branch occlusion" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "Yes")
            {	
                //To_make selection from "Unsuitable for Laser" Radio Buttons.
                if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_Unsuitable_for_Laser_L == "Yes")
                {
                    cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_Answer_6_1").should('be.visible').should('be.not.selected').click()
                    cy.wait(1000)
                }
                else
                {	
                    cy.get("OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_Answer_6_0").should('be.visible').should('be.not.selected').click()
            
                }
            }
        })
    })

    it('0365.38_To_Validate_and_input_values_for_Previously_received_intravitreal_treatment_Radio_Buttons', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
          //To_Validate_and_check Injection_Management_Diagnosis_R = Choroidal retinal neovascularisation.
            if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_L =="Venous retinal branch occlusion" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "Yes")
            {	
              //To_make selection from "Previously received intravitreal treatment" Radio Buttons.
              if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_Previously_received_intravitreal_treatment_L == "Yes")
              {
                  cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_Answer_7_1").should('be.visible').should('be.not.selected').click()
                  cy.wait(1000)
              }
              else
              {	
                  cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_Answer_7_0").should('be.visible').should('be.not.selected').click()
          
              }
            }
        })
    })            
                
    //---------------------------------------------------------------------------------------------------//
    it('0365.39_To_Validate_and_input_values_for_Radio_Buttons', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        //To_Validate_and_check Injection_Management_Diagnosis_L = Choroidal retinal neovascularisation.
        if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_L == "Macular retinal oedema" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "Yes")
            {	
                if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_L == "Diabetic macular oedema")
                {   //To_make selection from "CRT >= 400 µ" Radio Buttons.
                    if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_CRT_GrThEq_400µ_L == "Yes")
                    {
                        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_Answer_8_1").should('be.visible').should('be.not.selected').click()
                        cy.wait(1000)
                    }
                    else
                    {	
                         cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_Answer_8_0").should('be.visible').should('be.not.selected').click()
            
                    }
                    //To_make selection from "Foveal structural damage" Radio Buttons.
                    if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Foveal_structural_damage_L == "Yes")
                    {
                        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_Answer_9_1").should('be.visible').should('be.not.selected').click()
                        cy.wait(1000)
                    }
                    else
                    {	
                         cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_Answer_9_0").should('be.visible').should('be.not.selected').click()
            
                    }
                    //To_make selection from "Failed laser" Radio Buttons.
                    if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Failed_laser_L == "Yes")
                    {
                        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_Answer_10_1").should('be.visible').should('be.not.selected').click()
                        cy.wait(1000)
                    }
                    else
                    {	
                         cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_Answer_10_0").should('be.visible').should('be.not.selected').click()
            
                    }
                    //To_make selection from "Unsuitable for Laser" Radio Buttons.
                    if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Unsuitable_for_Laser_L == "Yes")
                    {
                        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_Answer_11_1").should('be.visible').should('be.not.selected').click()
                        cy.wait(1000)
                    }
                    else
                    {	
                         cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_Answer_11_0").should('be.visible').should('be.not.selected').click()
            
                    }
                    //To_make selection from "Previously received Anti VEGF" Radio Buttons.
                    if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Previously_received_Anti_VEGF_L == "Yes")
                    {
                        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_Answer_12_1").should('be.visible').should('be.not.selected').click()
                        cy.wait(1000)
                    }
                    else
                    {	
                         cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_Answer_12_0").should('be.visible').should('be.not.selected').click()
            
                    }
                }
        
            }    
        })
    })


    
    //------------ This part covers comments for Left Eye---------------------
    
    it('0365.40_To_Enters_comments_in_commentbox_at_left_side', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        //To_Enters comments in commentbox.
        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_comment_button").click({force: true})
        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_InjectionManagementComplex_left_comments").clear().type(AddExaminationEvents_Clinical_Management.Injection_Management_Comments_L)
      
        })
    })


})