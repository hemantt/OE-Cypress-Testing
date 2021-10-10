//Specular_Microscopy_DV
describe('0200_Specular_Microscopy_DV', () =>  {

    it('0200.09_To_Validate_Specular_Microscopy_Header_Title_is_Available', () => {
        //To_Validate_Specular_Microscopy_Header/Title_is_Available.
        cy.get("[data-element-type-name='Specular Microscopy'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Specular Microscopy'] > header > h3").should('be.visible').should('contain','Specular Microscopy')
    })

    it('0200.10_To_Validate_Specular_Microscopy_Drpdown_output_value_is_Available', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_Specular_Microscopy_Drpdown_output_value_is_Available.
        cy.get("[data-element-type-name='Specular Microscopy'] > header + div").should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Specular_Microscopy_Specular_Microscope)
        })
    })

    it('0200.11_To_Validate_Scan_Quality_Drpdown_output_value_is_Available', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_Scan Quality_Drpdown_output_value_is_Available.
        cy.get("[data-element-type-name='Specular Microscopy'] > header + div").should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Specular_Microscopy_Scan_Quality)
        })
    })

    it('0200.12_To_Validate_Endothelial_Cell_Density_(cells/mm2)_Textbox_output_value_of_Right_Side_is_Available', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_Endothelial Cell Density (cells/mm2)_Textbox_output_value_of Right Side_is_Available.
        cy.get("[data-element-type-name='Specular Microscopy'] > header + div + div > div > table > tbody >tr").eq(0).should('be.visible').should('contain', AddExaminationEvents_Anterior_Segment.Specular_Microscopy_Endothelial_Cell_Density_R)
        })
    })

    it('0200.13_To_Validate_Coefficient_of_Variation_(CV)_Textbox_output_value_of_Right_Side_is_Available', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_Coefficient of Variation (CV)_Textbox_output_value_of Right Side_is_Available.
        cy.get("[data-element-type-name='Specular Microscopy'] > header + div + div > div > table > tbody >tr").eq(1).should('be.visible').should('contain', AddExaminationEvents_Anterior_Segment.Specular_Microscopy_Coefficient_of_Variation_R)
        })
    })

    it('0200.14_To_Validate_Endothelial_Cell_Density_(cells/mm2)_Textbox_output_value_of_Left_Side_is_Available', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_Endothelial Cell Density (cells/mm2)_Textbox_output_value_of Left Side_is_Available.
        cy.get("[data-element-type-name='Specular Microscopy'] > header + div + div > div > table > tbody >tr").eq(2).should('be.visible').should('contain', AddExaminationEvents_Anterior_Segment.Specular_Microscopy_Endothelial_Cell_Density_L)
     })
    })

    it('0200.15_To_Validate_Coefficient_of_Variation_(CV)_Textbox_output_value_of_Left_Side_is_Available', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_Coefficient of Variation (CV)_Textbox_output_value_of Left Side_is_Available.
        cy.get("[data-element-type-name='Specular Microscopy'] > header + div + div > div > table > tbody >tr").eq(3).should('be.visible').should('contain', AddExaminationEvents_Anterior_Segment.Specular_Microscopy_Coefficient_of_Variation_L)
        })
    })



})