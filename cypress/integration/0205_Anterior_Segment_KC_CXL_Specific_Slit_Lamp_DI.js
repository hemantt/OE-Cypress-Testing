//Specular_Microscopy_DI
describe('0205_Anterior_Segment_KC_CXL_Specific_Slit_Lamp_DI', () =>  {

    it('0205.01_Select_KC_CXL_Specific_Slit_Lamp_Segment', () => {
        //To get the "KC_CXL_Specific_Slit_Lamp" Page
        cy.get("#js-manage-elements-btn").should('be.visible').click()

        cy.get('body').then((body) => {
      
            if (body.find('#manage-elements-KC\\/CXL-Specific-Slit-Lamp[class="added"]').length == 0)
            {
              cy.get("#manage-elements-KC\\/CXL-Specific-Slit-Lamp").should('be.visible').click()
            }
      
        })
      
        cy.get(".blue.hint.cols-full").should('be.visible').click()

    })
        
    it('0205.02_To_Validate_Specular_Microscopy_Section_is_Available', () => {
        //To_Validate_KC_CXL_Specific_Lamp_SeKC_CXL_Specific_Lampction_is_Available.
        cy.get("[data-element-type-name='KC/CXL-Specific Slit Lamp'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='KC/CXL-Specific Slit Lamp'] > header > h3").should('be.visible').should('contain','KC/CXL-Specific Slit Lamp')
    })

    //---------------------------------------------------------------------------------------------------------------------------//

   
    it('0205.03_To_Validate_and_input_values_for_Allergic_Conjunctivitis_Dropdown_at_right_side', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Allergic Conjunctivitis Dropdown at right side.
          cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Slit_Lamp_right_allergic_conjunctivitis_id").should('be.visible').select(AddExaminationEvents_Anterior_Segment.KC_CXL_Specific_Lamp_Allergic_Conjunctivitis_R)
        }) 
    })
    
    it('0205.04_To_Validate_and_input_values_for_Blepharitis_Dropdown_at_right_side', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Blepharitis Dropdown at right side.
          cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Slit_Lamp_right_blepharitis_id").should('be.visible').select(AddExaminationEvents_Anterior_Segment.KC_CXL_Specific_Lamp_Blepharitis_R)
        }) 
    })

    it('0205.05_To_Validate_and_input_values_for_Dry_Eye_Dropdown_at_right_side', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Dry Eye Dropdown at right side.
          cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Slit_Lamp_right_dry_eye_id").should('be.visible').select(AddExaminationEvents_Anterior_Segment.KC_CXL_Specific_Lamp_Dry_Eye_R)
        }) 
    })
    
    it('0205.06_To_Validate_and_input_values_for_Cornea_Dropdown_at_right_side', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Cornea Dropdown at right side.
          cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Slit_Lamp_right_cornea_id").should('be.visible').select(AddExaminationEvents_Anterior_Segment.KC_CXL_Specific_Lamp_Cornea_R)
        }) 
    })
    
    //------------------------------------------------------------------------------------------------------------------------------------//

   
   
    it('0205.07_To_Validate_and_input_values_for_Allergic_Conjunctivitis_Dropdown_at_Left_side', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Allergic Conjunctivitis Dropdown at Left side.
          cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Slit_Lamp_left_allergic_conjunctivitis_id").should('be.visible').select(AddExaminationEvents_Anterior_Segment.KC_CXL_Specific_Lamp_Allergic_Conjunctivitis_L)
        }) 
    })
    
    it('0205.08_To_Validate_and_input_values_for_Blepharitis_Dropdown_at_Left_side', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Blepharitis Dropdown at Left side.
          cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Slit_Lamp_left_blepharitis_id").should('be.visible').select(AddExaminationEvents_Anterior_Segment.KC_CXL_Specific_Lamp_Blepharitis_L)
        }) 
    })

    it('0205.09_To_Validate_and_input_values_for_Dry_Eye_Dropdown_at_Left_side', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Dry Eye Dropdown at Left side.
          cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Slit_Lamp_left_dry_eye_id").should('be.visible').select(AddExaminationEvents_Anterior_Segment.KC_CXL_Specific_Lamp_Dry_Eye_L)
        }) 
    })
    
    it('0205.10_To_Validate_and_input_values_for_Cornea_Dropdown_at_Left_side', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Cornea Dropdown at Left side.
          cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Slit_Lamp_left_cornea_id").should('be.visible').select(AddExaminationEvents_Anterior_Segment.KC_CXL_Specific_Lamp_Cornea_L)
        }) 
    })
    


})