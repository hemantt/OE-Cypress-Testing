//Specular_Microscopy_DI
describe('0200_Specular_Microscopy_DI', () =>  {

    it('0200.01_Select_Specular_Microscopy_Segment', () => {
        //To get the "Gonioscopy" Page
        cy.get("#js-manage-elements-btn").should('be.visible').click()

        cy.get('body').then((body) => {
      
            if (body.find('#manage-elements-Specular-Microscopy[class="added"]').length == 0)
            {
                cy.get("#manage-elements-Specular-Microscopy").should('be.visible').click()
            }
      
        })
      
        cy.get(".blue.hint.cols-full").should('be.visible').click()

    })
        
    it('0200.02_To_Validate_Specular_Microscopy_Section_is_Available', () => {
        //To_Validate_Gonioscopy_Section_is_Available.
        cy.get("[data-element-type-name='Specular Microscopy'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Specular Microscopy'] > header > h3").should('be.visible').should('contain','Specular Microscopy')
    })

    it('0200.03_To_Validate_and_input_values_for_Specular_Microscope_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Specular_Microscope Dropdown.
          cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Specular_Microscopy_specular_microscope_id").should('be.visible').select(AddExaminationEvents_Anterior_Segment.Specular_Microscopy_Specular_Microscope)
        }) 
    })
    
    it('0200.04_To_Validate_and_input_values_for_Scan_Quality_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Scan_Quality Dropdown.
          cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Specular_Microscopy_scan_quality_id").should('be.visible').select(AddExaminationEvents_Anterior_Segment.Specular_Microscopy_Scan_Quality)
        }) 
    })

    //--------All Values entered into Textboxes should be greater than 500 ------------//
    
    it('0200.05_To_Validate_and_input_values_for_Endothelial_Cell_Density_(cells/mm2)_Textbox_at_Right_Side', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Endothelial Cell Density (cells/mm2) Textbox at Right Side.
        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Specular_Microscopy_right_endothelial_cell_density_value").should('be.visible').clear().type(AddExaminationEvents_Anterior_Segment.Specular_Microscopy_Endothelial_Cell_Density_R)
        }) 
    })
    
    it('0200.06_To_Validate_and_input_values_for_Coefficient_of_Variation_(CV)_Textbox_at_Right_Side', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Coefficient of Variation (CV) Textbox at Right Side.
        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Specular_Microscopy_right_coefficient_variation_value").should('be.visible').clear().type(AddExaminationEvents_Anterior_Segment.Specular_Microscopy_Coefficient_of_Variation_R)
        }) 
    })
    
    it('0200.07_To_Validate_and_input_values_for_Endothelial_Cell_Density_(cells/mm2)_Textbox_at_Left_Side', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Endothelial Cell Density (cells/mm2) Textbox at Left Side.
        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Specular_Microscopy_left_endothelial_cell_density_value").should('be.visible').clear().type(AddExaminationEvents_Anterior_Segment.Specular_Microscopy_Endothelial_Cell_Density_L)
        }) 
    })
    
    it('0200.08_To_Validate_and_input_values_for_Coefficient_of_Variation_(CV)_Textbox_at_Left_Side', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_and_input values for_Coefficient of Variation (CV) Textbox at Left Side.
        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Specular_Microscopy_left_coefficient_variation_value").should('be.visible').clear().type(AddExaminationEvents_Anterior_Segment.Specular_Microscopy_Coefficient_of_Variation_L)
        }) 
    })  


})