//Anterior_Segment_Anterior_Segment_DV
describe('0180_Anterior_Segmen_Anterior_Segment_DV', () =>  {

    it('0180.01_To_Validate_Anterior_Segment_Section_is_Available', () => {
        //Verify Page title "Anterior-Segment".
        cy.get("[data-element-type-name='Anterior Segment'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Anterior Segment'] > header > h3").should('be.visible').should('contain','Anterior Segment')
    })
    
    it('0180.02_To_Validate_Saved_values_of_Anterior_Segment_Section_from_Right_Side_are_Available', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_Saved values of Anterior_Segment_Section_from Right Side are_Available
        
        cy.get("[data-element-type-name='Anterior Segment'] > div > div > div > div >  div + div").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Anterior_Segment_Doodle_Dropdown_R04)
        cy.get("[data-element-type-name='Anterior Segment'] > div > div > div > div >  div + div").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Anterior_Segment_CornealEpithelialDefect_Height_R)
        cy.get("[data-element-type-name='Anterior Segment'] > div > div > div > div >  div + div").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Anterior_Segment_CornealEpithelialDefect_Width_R)
        cy.get("[data-element-type-name='Anterior Segment'] > div > div > div > div >  div + div").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Anterior_Segment_Conjunctiva_Conjunctivitis_R)
        cy.get("[data-element-type-name='Anterior Segment'] > div > div > div > div >  div + div").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Anterior_Segment_Conjunctiva_Hyperaemia_R)
        cy.get("[data-element-type-name='Anterior Segment'] > div > div > div > div >  div + div").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Anterior_Segment_Conjunctiva_Haemorrhage_R)
        cy.get("[data-element-type-name='Anterior Segment'] > div > div > div > div >  div + div").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Anterior_Segment_Conjunctiva_Swelling_R)
        cy.get("[data-element-type-name='Anterior Segment'] > div > div > div > div >  div + div").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Anterior_Segment_Conjunctiva_Mucopurulent_RV)
        cy.get("[data-element-type-name='Anterior Segment'] > div > div > div > div >  div + div").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Anterior_Segment_Episcleritis_Severity_R)
        cy.get("[data-element-type-name='Anterior Segment'] > div > div > div > div >  div + div").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Anterior_Segment_Doodle_Dropdown_RV03)
        cy.get("[data-element-type-name='Anterior Segment'] > div > div > div > div >  div + div").eq(0).should('be.visible').should('contain',"Superficial punctate epithelial erosions")
        })
    })

    it('0180.03_To_Validate_Saved_values_of_Anterior_Segment_Section_from_Left_Side_are_Available', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_Saved values of Anterior_Segment_Section_from Left Side are_Available
        
        cy.get("[data-element-type-name='Anterior Segment'] > div > div > div > div >  div + div").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Anterior_Segment_Doodle_Dropdown_L04)
        cy.get("[data-element-type-name='Anterior Segment'] > div > div > div > div >  div + div").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Anterior_Segment_CornealEpithelialDefect_Height_L)
        cy.get("[data-element-type-name='Anterior Segment'] > div > div > div > div >  div + div").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Anterior_Segment_CornealEpithelialDefect_Width_L)
        cy.get("[data-element-type-name='Anterior Segment'] > div > div > div > div >  div + div").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Anterior_Segment_Conjunctiva_Conjunctivitis_L)
        cy.get("[data-element-type-name='Anterior Segment'] > div > div > div > div >  div + div").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Anterior_Segment_Conjunctiva_Hyperaemia_L)
        cy.get("[data-element-type-name='Anterior Segment'] > div > div > div > div >  div + div").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Anterior_Segment_Conjunctiva_Haemorrhage_L)
        cy.get("[data-element-type-name='Anterior Segment'] > div > div > div > div >  div + div").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Anterior_Segment_Conjunctiva_Swelling_L)
        cy.get("[data-element-type-name='Anterior Segment'] > div > div > div > div >  div + div").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Anterior_Segment_Conjunctiva_Mucopurulent_LV)
        cy.get("[data-element-type-name='Anterior Segment'] > div > div > div > div >  div + div").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Anterior_Segment_Episcleritis_Severity_L)
        cy.get("[data-element-type-name='Anterior Segment'] > div > div > div > div >  div + div").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Anterior_Segment_Doodle_Dropdown_LV03)
        cy.get("[data-element-type-name='Anterior Segment'] > div > div > div > div >  div + div").eq(1).should('be.visible').should('contain',"Superficial punctate epithelial erosions")
        })
    })
})