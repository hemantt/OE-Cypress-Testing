//Clinical_Management_Injection_Management_DV
describe('0365_Clinical_Management_Injection_Management_DV', () => {

    it('0365.41_To_Validate_Clinical_Management_Injection_Management_Section_is_Available', () => {
        //To_Validate_Clinical_Management_Injection_Management_Section_is_Available.
            cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible')
            cy.get("[data-element-type-name='Injection Management'] > header > h3").should('be.visible').should('contain','Injection Management')
            
    })

    it('0365.42_Verification_of_saved_values_of_Intended_Treatment', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_R != "" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_R == "Yes")
            {//Verification of saved values of Intended Treatment
            cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible')
            cy.get("[data-element-type-name='Injection Management'] > div>div>table>tbody>tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Intended_Treatment_R )                                        
            }
        else if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_R == "" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_R == "Yes")
            {//Verification of saved values of Intended Treatment
            cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible')
            cy.get("[data-element-type-name='Injection Management'] > div>div>table>tbody>tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Intended_Treatment_R )                                        
            }
        
        })
    }) 

    it('0365.43_Verification_of_saved_values_of_Risks', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_R != "" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_R == "Yes")
            {//Verification of saved values of Risks
           
            cy.get("[data-element-type-name='Injection Management'] > div>div>table>tbody>tr+tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Risks_R)
            }
        else if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_R == "" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_R == "Yes")
            {//Verification of saved values of Risks
           
            cy.get("[data-element-type-name='Injection Management'] > div>div>table>tbody>tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Risks_R)
            }
                
        })
    })

    it('0365.44_Verification_of_saved_values_of_Comments', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_R != "" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_R == "Yes")
            {//Verification of saved values of Comments
            cy.get("[data-element-type-name='Injection Management'] > div>div>table>tbody>tr+tr+tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Comments_R )                                        
            }
        else if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_R == "" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_R == "Yes")
            {//Verification of saved values of Comments
            cy.get("[data-element-type-name='Injection Management'] > div>div>table>tbody>tr+tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Comments_R )                                        
            }
        })
    }) 

    it('0365.45_Verification_of_saved_values_of_Intended_Treatment', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_L != "" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "Yes")
            {//Verification of saved values of Intended Treatment
            cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible')
            cy.get("[data-element-type-name='Injection Management'] > div>div+div>table>tbody>tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Intended_Treatment_L )                                        
            }
        else if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_L == "" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "Yes")
            {//Verification of saved values of Intended Treatment
            cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible')
            cy.get("[data-element-type-name='Injection Management'] > div>div+div>table>tbody>tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Intended_Treatment_L )                                        
            }
        
        })
    }) 

    it('0365.46_Verification_of_saved_values_of_Risks', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_L != "" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "Yes")
            {//Verification of saved values of Risks
            cy.get("[data-element-type-name='Injection Management'] > div>div+div>table>tbody>tr+tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Risks_L)
            }
        else if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_L == "" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "Yes")
            {//Verification of saved values of Risks
            cy.get("[data-element-type-name='Injection Management'] > div>div+div>table>tbody>tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Risks_L)
            }
        })
    })

    it('0365.47_Verification_of_saved_values_of_Comments', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_L != "" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "Yes")
            {//Verification of saved values of Comments
            cy.get("[data-element-type-name='Injection Management'] > div>div+div>table>tbody>tr+tr+tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Comments_L )                                        
            }
        else if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_L == "" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "Yes")
            {//Verification of saved values of Comments
            cy.get("[data-element-type-name='Injection Management'] > div>div+div>table>tbody>tr+tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Comments_L )                                        
            }
        })
    }) 

    //------------------------------------------------------------------------------------------------------//

    it('0365.48_Verification_of_saved_values_of_Diagnosis', () => {
        cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible')
        //Verification of saved values of Diagnosis
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
            if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_R == "Macular retinal oedema" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_R == "Yes")
            {	//To_Validate_and_input values for_"Associated with"_Dropdown.
                cy.get("[data-element-type-name='Injection Management'] > div>div>table>tbody>tr").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_R)
                
                if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_R == "Venous retinal branch occlusion")
                {   //Associated with
                    cy.get("[data-element-type-name='Injection Management'] > div>div>table>tbody>tr+tr>td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_R)
                    //Failed Laser
                    cy.get("[data-element-type-name='Injection Management'] > div>div>table>tbody>tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_Failed_Laser_R )                                        
                    //Unsuitable for Laser
                    cy.get("[data-element-type-name='Injection Management'] > div>div>table>tbody>tr+tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_Unsuitable_for_Laser_R )                                        
                    //Previously received intravitreal
                    cy.get("[data-element-type-name='Injection Management'] > div>div>table>tbody>tr+tr+tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_Previously_received_intravitreal_treatment_R )                                        
                }
            }
        
          
        })
    })

    //---------------------------------------------------------------------------------------------------//
    //--------------------- For Right Side Verification ---------------------------------//
    it('0365.49_To_Validate_and_Output_values_for_Macular_retinal_oedema_&_Diabetic_macular_oedema_3rd_combination', () => {
        cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible')
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        //To_Validate_and_check Injection_Management_Diagnosis_L = Choroidal retinal neovascularisation.
        if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_R == "Macular retinal oedema" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_R == "Yes")
            {	
                if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_R == "Diabetic macular oedema")
                {   //for "Diagnosis" Output Value.
                    if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_R == "Macular retinal oedema")
                    {
                        cy.get("[data-element-type-name='Injection Management'] > div>div>table>tbody>tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_R )
                        cy.wait(1000)
                    }
                    //for "Associated with" Output Value.
                    if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_R == "Diabetic macular oedema")
                    {
                        cy.get("[data-element-type-name='Injection Management'] > div>div>table>tbody>tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_R )
                        cy.wait(1000)
                    }
                    
                    //for "CRT >= 400 µ" Radio Buttons.
                    if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_CRT_GrThEq_400µ_R == "Yes")
                    {
                        cy.get("[data-element-type-name='Injection Management'] > div>div>table>tbody>tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_CRT_GrThEq_400µ_R )
                        cy.wait(1000)
                    }
                    else
                    {	
                         cy.get("[data-element-type-name='Injection Management'] > div>div>table>tbody>tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_CRT_GrThEq_400µ_R )
            
                    }
                    //For "Foveal structural damage" Radio Buttons.
                    if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Foveal_structural_damage_R == "Yes")
                    {
                        cy.get("[data-element-type-name='Injection Management'] > div>div>table>tbody>tr+tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Foveal_structural_damage_R )
                        cy.wait(1000)
                    }
                    else
                    {	
                         cy.get("[data-element-type-name='Injection Management'] > div>div>table>tbody>tr+tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Foveal_structural_damage_R )
            
                    }
                    //For "Failed laser" Radio Buttons.
                    if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Failed_laser_R == "Yes")
                    {
                        cy.get("[data-element-type-name='Injection Management'] > div>div>table>tbody>tr+tr+tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Failed_laser_R )
                        cy.wait(1000)
                    }
                    else
                    {	
                         cy.get("[data-element-type-name='Injection Management'] > div>div>table>tbody>tr+tr+tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Failed_laser_R )
            
                    }
                    //For "Unsuitable for Laser" Radio Buttons.
                    if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Unsuitable_for_Laser_R == "Yes")
                    {
                        cy.get("[data-element-type-name='Injection Management'] > div>div>table>tbody>tr+tr+tr+tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Unsuitable_for_Laser_R )
                        cy.wait(1000)
                    }
                    else
                    {	
                         cy.get("[data-element-type-name='Injection Management'] > div>div>table>tbody>tr+tr+tr+tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Unsuitable_for_Laser_R )
            
                    }
                    //For "Previously received Anti VEGF" Radio Buttons.
                    if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Previously_received_Anti_VEGF_R == "Yes")
                    {
                        cy.get("[data-element-type-name='Injection Management'] > div>div>table>tbody>tr+tr+tr+tr+tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Previously_received_Anti_VEGF_R )
                        cy.wait(1000)
                    }
                    else
                    {	
                         cy.get("[data-element-type-name='Injection Management'] > div>div>table>tbody>tr+tr+tr+tr+tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Previously_received_Anti_VEGF_R )
            
                    }
                }
        
            }    
        })
    })


    //---------------------------------------------------------------------------------------------------//
    //--------------------- For Left Side Verification ---------------------------------//
    //------------------------------------------------------------------------------------------------------//


    //---------------------------------------------------------------------------------------------------------//
    //--------------"Macular retinal oedema & Venous retinal branch occlusion":"1st combination"----------------//
    //----------------------------------------------------------------------------------------------------------//
     it('0365.50_Verification_of_saved_values_of_Diagnosis', () => {
        cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible')
        //Verification of saved values of Diagnosis
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
            if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_L == "Macular retinal oedema" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "Yes")
            {	//To_Validate_and_input values for_"Associated with"_Dropdown.
                cy.get("[data-element-type-name='Injection Management'] > div>div+div>table>tbody>tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_L)
                
                if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_L == "Venous retinal branch occlusion")
                {   //Associated with
                    cy.get("[data-element-type-name='Injection Management'] > div>div+div>table>tbody>tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_L)
                    //Failed Laser
                    cy.get("[data-element-type-name='Injection Management'] > div>div+div>table>tbody>tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_Failed_Laser_L )                                        
                    //Unsuitable for Laser
                    cy.get("[data-element-type-name='Injection Management'] > div>div+div>table>tbody>tr+tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_Unsuitable_for_Laser_L )                                        
                    //Previously received intravitreal
                    cy.get("[data-element-type-name='Injection Management'] > div>div+div>table>tbody>tr+tr+tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_Previously_received_intravitreal_treatment_L )                                        
                }
            }
        
          
        })
    })
    //--------------------------------------------------------------------------------------------------------------------------------//

    //------------To_Validate_and_Output values for  "Macular retinal oedema & Diabetic macular oedema" - 3rd combination  --------------//

    //----------------------------------------------------------------------------------------------------------------------------------//

    it('0365.51_To_Validate_and_Output_values_for_Macular_retinal_oedema_&_Diabetic_macular_oedema_3rd_combination', () => {
        cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible')
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        //To_Validate_and_check Injection_Management_Diagnosis_L = Choroidal retinal neovascularisation.
        if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_L == "Macular retinal oedema" && AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "Yes")
            {	
                if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_L == "Diabetic macular oedema")
                {   //for "Diagnosis" Output Value.
                    if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_L == "Macular retinal oedema")
                    {
                        cy.get("[data-element-type-name='Injection Management'] > div>div+div>table>tbody>tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_L )
                        cy.wait(1000)
                    }
                    //for "Associated with" Output Value.
                    if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_L == "Diabetic macular oedema")
                    {
                        cy.get("[data-element-type-name='Injection Management'] > div>div+div>table>tbody>tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_L )
                        cy.wait(1000)
                    }
                    
                    //for "CRT >= 400 µ" Radio Buttons.
                    if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_CRT_GrThEq_400µ_L == "Yes")
                    {
                        cy.get("[data-element-type-name='Injection Management'] > div>div+div>table>tbody>tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_CRT_GrThEq_400µ_L )
                        cy.wait(1000)
                    }
                    else
                    {	
                         cy.get("[data-element-type-name='Injection Management'] > div>div+div>table>tbody>tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_CRT_GrThEq_400µ_L )
            
                    }
                    //For "Foveal structural damage" Radio Buttons.
                    if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Foveal_structural_damage_L == "Yes")
                    {
                        cy.get("[data-element-type-name='Injection Management'] > div>div+div>table>tbody>tr+tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Foveal_structural_damage_L )
                        cy.wait(1000)
                    }
                    else
                    {	
                         cy.get("[data-element-type-name='Injection Management'] > div>div+div>table>tbody>tr+tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Foveal_structural_damage_L )
            
                    }
                    //For "Failed laser" Radio Buttons.
                    if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Failed_laser_L == "Yes")
                    {
                        cy.get("[data-element-type-name='Injection Management'] > div>div+div>table>tbody>tr+tr+tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Failed_laser_L )
                        cy.wait(1000)
                    }
                    else
                    {	
                         cy.get("[data-element-type-name='Injection Management'] > div>div+div>table>tbody>tr+tr+tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Failed_laser_L )
            
                    }
                    //For "Unsuitable for Laser" Radio Buttons.
                    if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Unsuitable_for_Laser_L == "Yes")
                    {
                        cy.get("[data-element-type-name='Injection Management'] > div>div+div>table>tbody>tr+tr+tr+tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Unsuitable_for_Laser_L )
                        cy.wait(1000)
                    }
                    else
                    {	
                         cy.get("[data-element-type-name='Injection Management'] > div>div+div>table>tbody>tr+tr+tr+tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Unsuitable_for_Laser_L )
            
                    }
                    //For "Previously received Anti VEGF" Radio Buttons.
                    if (AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Previously_received_Anti_VEGF_L == "Yes")
                    {
                        cy.get("[data-element-type-name='Injection Management'] > div>div+div>table>tbody>tr+tr+tr+tr+tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Previously_received_Anti_VEGF_L )
                        cy.wait(1000)
                    }
                    else
                    {	
                         cy.get("[data-element-type-name='Injection Management'] > div>div+div>table>tbody>tr+tr+tr+tr+tr+tr+tr>td+td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Diagnosis_AssociatedWith_Previously_received_Anti_VEGF_L )
            
                    }
                }
        
            }    
        })
    })

    it('0365.52_Verification_of_saved_values_of_Intended_Treatment', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        if (AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_R == "No" && AddExaminationEvents_Clinical_Management.Injection_Management_Reason_for_no_treatment_R == "Other")
            {//Verification of saved values of Intended Treatment
            cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible')
            cy.get("[data-element-type-name='Injection Management'] > div>div>table>tbody>tr>td").should('be.visible').should('contain','Reason for no treatment:' )
            cy.get("[data-element-type-name='Injection Management'] > div>div>table>tbody>tr>td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Other_Reason_for_no_treatment_R )
            }
        else if (AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_R == "No" && AddExaminationEvents_Clinical_Management.Injection_Management_Reason_for_no_treatment_R != "Other")
            {
                cy.get("[data-element-type-name='Injection Management'] > div>div>table>tbody>tr>td").should('be.visible').should('contain','Reason for no treatment:' )
                cy.get("[data-element-type-name='Injection Management'] > div>div>table>tbody>tr>td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Reason_for_no_treatment_R )
            }
        })
    }) 

    it('0365.53_Verification_of_saved_values_of_Intended_Treatment', () => {
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((AddExaminationEvents_Clinical_Management) => {
        if (AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "No" && Clinical_Management__Injection_Management.Injection_Management_Reason_for_no_treatment_L == "Other")
            {//Verification of saved values of Intended Treatment
            cy.get("[data-element-type-name='Injection Management'] > header > h3").scrollIntoView().should('be.visible')
            cy.get("[data-element-type-name='Injection Management'] > div>div>table>tbody>tr>td").should('be.visible').should('contain','Reason for no treatment:' )
            cy.get("[data-element-type-name='Injection Management'] > div>div>table>tbody>tr>td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Other_Reason_for_no_treatment_L )
            }
        else if (AddExaminationEvents_Clinical_Management.Injection_Management_Treatment_L == "No" && AddExaminationEvents_Clinical_Management.Injection_Management_Reason_for_no_treatment_L != "Other")
            {
            cy.get("[data-element-type-name='Injection Management'] > div>div>table>tbody>tr>td").should('be.visible').should('contain','Reason for no treatment:' )
            cy.get("[data-element-type-name='Injection Management'] > div>div>table>tbody>tr>td").should('be.visible').should('contain',AddExaminationEvents_Clinical_Management.Injection_Management_Reason_for_no_treatment_L )
            }
        })
    }) 


    




})