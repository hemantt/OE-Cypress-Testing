//Specular_Microscopy_DV
describe('0205_Specular_Microscopy_DV', () =>  {

    it('0205.11_To_Validate_Specular_Microscopy_Section_is_Available', () => {
        //To_Validate_KC_CXL_Specific_Lamp_SeKC_CXL_Specific_Lampction_is_Available.
        cy.get("[data-element-type-name='KC/CXL-Specific Slit Lamp'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='KC/CXL-Specific Slit Lamp'] > header > h3").should('be.visible').should('contain','KC/CXL-Specific Slit Lamp')
    })

    it('0205.12_To_Validate_Specular_Microscopy_Drpdown_output_value_is_Available', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_Specular_Microscopy_Drpdown_output_value_is_Available.
        cy.get("[data-element-type-name='KC/CXL-Specific Slit Lamp'] > div>div>table>tbody>tr>td+td").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.KC_CXL_Specific_Lamp_Allergic_Conjunctivitis_R)
        })
    })

    it('0205.13_To_Validate_Scan_Quality_Drpdown_output_value_is_Available', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_Scan Quality_Drpdown_output_value_is_Available.
        cy.get("[data-element-type-name='KC/CXL-Specific Slit Lamp'] > div>div>table>tbody>tr>td+td").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.KC_CXL_Specific_Lamp_Blepharitis_R)
        })
    })

    it('0205.14_To_Validate_Endothelial_Cell_Density_(cells/mm2)_Textbox_output_value_of_Right_Side_is_Available', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_Endothelial Cell Density (cells/mm2)_Textbox_output_value_of Right Side_is_Available.
        cy.get("[data-element-type-name='KC/CXL-Specific Slit Lamp'] > div>div>table>tbody>tr>td+td").eq(2).should('be.visible').should('contain', AddExaminationEvents_Anterior_Segment.KC_CXL_Specific_Lamp_Dry_Eye_R)
        })
    })

    it('0205.15_To_Validate_Coefficient_of_Variation_(CV)_Textbox_output_value_of_Right_Side_is_Available', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_Coefficient of Variation (CV)_Textbox_output_value_of Right Side_is_Available.
        cy.get("[data-element-type-name='KC/CXL-Specific Slit Lamp'] > div>div>table>tbody>tr>td+td").eq(3).should('be.visible').should('contain', AddExaminationEvents_Anterior_Segment.KC_CXL_Specific_Lamp_Cornea_R)
        })
    })

    it('0205.16_To_Validate_Endothelial_Cell_Density_(cells/mm2)_Textbox_output_value_of_Left_Side_is_Available', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_Endothelial Cell Density (cells/mm2)_Textbox_output_value_of Left Side_is_Available.
        cy.get("[data-element-type-name='KC/CXL-Specific Slit Lamp'] > div>div>table>tbody>tr>td+td").eq(4).should('be.visible').should('contain', AddExaminationEvents_Anterior_Segment.KC_CXL_Specific_Lamp_Allergic_Conjunctivitis_L)
     })
    })

    it('0205.17_To_Validate_Coefficient_of_Variation_(CV)_Textbox_output_value_of_Left_Side_is_Available', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_Coefficient of Variation (CV)_Textbox_output_value_of Left Side_is_Available.
        cy.get("[data-element-type-name='KC/CXL-Specific Slit Lamp'] > div>div>table>tbody>tr>td+td").eq(5).should('be.visible').should('contain', AddExaminationEvents_Anterior_Segment.KC_CXL_Specific_Lamp_Blepharitis_L)
        })
    })

    it('0205.18_To_Validate_Endothelial_Cell_Density_(cells/mm2)_Textbox_output_value_of_Left_Side_is_Available', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_Endothelial Cell Density (cells/mm2)_Textbox_output_value_of Left Side_is_Available.
        cy.get("[data-element-type-name='KC/CXL-Specific Slit Lamp'] > div>div>table>tbody>tr>td+td").eq(6).should('be.visible').should('contain', AddExaminationEvents_Anterior_Segment.KC_CXL_Specific_Lamp_Dry_Eye_L)
     })
    })

    it('0205.19_To_Validate_Coefficient_of_Variation_(CV)_Textbox_output_value_of_Left_Side_is_Available', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_Coefficient of Variation (CV)_Textbox_output_value_of Left Side_is_Available.
        cy.get("[data-element-type-name='KC/CXL-Specific Slit Lamp'] > div>div>table>tbody>tr>td+td").eq(7).should('be.visible').should('contain', AddExaminationEvents_Anterior_Segment.KC_CXL_Specific_Lamp_Cornea_L)
        })
    })



})