//Retina_Macula_DV
describe('0235_Retina_Macula_DV', () =>  {

    it('0235.29_To_Validate_Retina_Macula_Section_is_Available', () => {
        //Verify Page title "manage-elements-Anterior-Segment".
        cy.get("[data-element-type-name='Macula'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Macula'] > header > h3").should('be.visible').should('contain','Macula')
    })

    it('0235.30_To_Validate_Saved_values_of_Retina_Macula_Section_from_Right_Side_are_Available', () => {
        cy.fixture("AddExaminationEvents_Retina.json").then((AddExaminationEvents_Retina) => {
        //To_Validate_Saved values of Anterior_Segment_Section_from Right Side are_Available
        
        cy.get("[data-element-type-name='Macula'] > div > div > div > div > div + div").eq(0).should('be.visible').should('contain',AddExaminationEvents_Retina.Macula_Drusen_type_RV)
        cy.get("[data-element-type-name='Macula'] > div > div > div > div > div + div").eq(0).should('be.visible').should('contain',AddExaminationEvents_Retina.Macula_Doodle_Dropdown_RV01)
        cy.get("[data-element-type-name='Macula'] > div > div > div > div > div + div").eq(0).should('be.visible').should('contain',AddExaminationEvents_Retina.Macula_Doodle_Dropdown_R03)
        cy.get("[data-element-type-name='Macula'] > div > div > div > div > div + div").eq(0).should('be.visible').should('contain',AddExaminationEvents_Retina.Macula_type_RV)
        cy.get("[data-element-type-name='Macula'] > div > div > div > div > div + div").eq(0).should('be.visible').should('contain',AddExaminationEvents_Retina.Macula_Doodle_Dropdown_RV05)
        cy.get("[data-element-type-name='Macula'] > div > div > div > div > div + div").eq(0).should('be.visible').should('contain',AddExaminationEvents_Retina.Macula_Doodle_Dropdown_RV055)
        cy.get("[data-element-type-name='Macula'] > div > div > div > div > div + div").eq(0).should('be.visible').should('contain',AddExaminationEvents_Retina.Macula_Doodle_Dropdown_RV02)
        cy.get("[data-element-type-name='Macula'] > div > div > div > div > div + div").eq(0).should('be.visible').should('contain',AddExaminationEvents_Retina.Macula_comment_R)
        })
    })

    it('0235.31_To_Validate_Saved_values_of_Retina_Macula_Section_from_Left_Side_are_Available', () => {
        cy.fixture("AddExaminationEvents_Retina.json").then((AddExaminationEvents_Retina) => {
        //To_Validate_Saved values of Anterior_Segment_Section_from Left Side are_Available
        
        cy.get("[data-element-type-name='Macula'] > div > div > div > div > div + div").eq(1).should('be.visible').should('contain',AddExaminationEvents_Retina.Macula_Drusen_type_LV)
        cy.get("[data-element-type-name='Macula'] > div > div > div > div > div + div").eq(1).should('be.visible').should('contain',AddExaminationEvents_Retina.Macula_Doodle_Dropdown_LV01)
        cy.get("[data-element-type-name='Macula'] > div > div > div > div > div + div").eq(1).should('be.visible').should('contain',AddExaminationEvents_Retina.Macula_Doodle_Dropdown_L03)
        cy.get("[data-element-type-name='Macula'] > div > div > div > div > div + div").eq(1).should('be.visible').should('contain',AddExaminationEvents_Retina.Macula_type_LV)
        cy.get("[data-element-type-name='Macula'] > div > div > div > div > div + div").eq(1).should('be.visible').should('contain',AddExaminationEvents_Retina.Macula_Doodle_Dropdown_LV05)
        cy.get("[data-element-type-name='Macula'] > div > div > div > div > div + div").eq(1).should('be.visible').should('contain',AddExaminationEvents_Retina.Macula_Doodle_Dropdown_LV055)
        cy.get("[data-element-type-name='Macula'] > div > div > div > div > div + div").eq(1).should('be.visible').should('contain',AddExaminationEvents_Retina.Macula_Doodle_Dropdown_LV02)
        cy.get("[data-element-type-name='Macula'] > div > div > div > div > div + div").eq(1).should('be.visible').should('contain',AddExaminationEvents_Retina.Macula_comment_L)
        })
    })

})