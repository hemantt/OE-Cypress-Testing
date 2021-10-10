//Gonioscopy_DV
describe('0190_Gonioscopy_DV', () =>  {

    it('0190.50_To_Validate_Gonioscopy_Section_is_Available', () => {
        //To_Validate_Gonioscopy_Section_is_Available.
        cy.get("[data-element-type-name='Gonioscopy'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Gonioscopy'] > header > h3").should('be.visible').should('contain','Gonioscopy')
    })


    //------------------------Verification of Right Side ----------------------------------------------//

    it('0190.51_To_Validate_Saved_values_of_Gonioscopy_Section_from_Right_Side_are_Available', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_Saved values of Gonioscopy_Section_from Right Side are_Available
        
        cy.get("[data-element-type-name='Gonioscopy']>div>div>div>div>div+div").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Verificatin_R)
        cy.get("[data-element-type-name='Gonioscopy']>div>div>div>div>div+div").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Doodle_Dropdown_R01)
        cy.get("[data-element-type-name='Gonioscopy']>div>div>div>div>div+div").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Doodle_Dropdown_R02)
        cy.get("[data-element-type-name='Gonioscopy']>div>div>div>div>div+div").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Doodle_Dropdown_R03)
        cy.get("[data-element-type-name='Gonioscopy']>div>div>div>div>div+div").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Iris_R)
        cy.get("[data-element-type-name='Gonioscopy']>div>div>div>div>div+div").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Comments_R)

    it('0190.52_To_Validate_and_input_values_for_Mode_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_utput for Basic/Expert Mode.
          if (AddExaminationEvents_Anterior_Segment.Gonioscopy_Mode_R == "Expert")
            {	//To_Validate_utput for "Expert" Mode..
                cy.get("[data-element-type-name='Gonioscopy']>div>div>div>div>div+div").eq(0).should('be.visible').should('contain',"Shaffer Grade:")
                cy.get("[data-element-type-name='Gonioscopy']>div>div>div>div>div+div").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Shaffer_grade_R01)
                cy.get("[data-element-type-name='Gonioscopy']>div>div>div>div>div+div").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Shaffer_grade_R02)
                cy.get("[data-element-type-name='Gonioscopy']>div>div>div>div>div+div").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Shaffer_grade_R03)
                cy.get("[data-element-type-name='Gonioscopy']>div>div>div>div>div+div").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Shaffer_grade_R04)
            }
          else
            {	//To_Validate_utput for Basic Mode.
                cy.get("[data-element-type-name='Gonioscopy']>div>div>div>div>div+div").eq(0).should('be.visible').should('contain',"Shaffer Grade:")
                cy.get("[data-element-type-name='Gonioscopy']>div>div>div>div>div+div").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Angle_Open_R01)
                cy.get("[data-element-type-name='Gonioscopy']>div>div>div>div>div+div").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Angle_Open_R02)
                cy.get("[data-element-type-name='Gonioscopy']>div>div>div>div>div+div").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Angle_Open_R03)
                cy.get("[data-element-type-name='Gonioscopy']>div>div>div>div>div+div").eq(0).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Angle_Open_R04)
        
            }
            }) 
          })
        })
    })


    //------------------------Verification of Left Side ----------------------------------------------//

    it('0190.53_To_Validate_Saved_values_of_Gonioscopy_Section_from_Left_Side_are_Available', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_Saved values of Gonioscopy_Section_from Left Side are_Available
        
        cy.get("[data-element-type-name='Gonioscopy']>div>div>div>div>div+div").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Verificatin_L)
        cy.get("[data-element-type-name='Gonioscopy']>div>div>div>div>div+div").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Doodle_Dropdown_L01)
        cy.get("[data-element-type-name='Gonioscopy']>div>div>div>div>div+div").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Doodle_Dropdown_L02)
        cy.get("[data-element-type-name='Gonioscopy']>div>div>div>div>div+div").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Doodle_Dropdown_L03)
        cy.get("[data-element-type-name='Gonioscopy']>div>div>div>div>div+div").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Iris_L)
        cy.get("[data-element-type-name='Gonioscopy']>div>div>div>div>div+div").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Comments_L)
        
        
    it('0190.54_To_Validate_and_input_values_for_Mode_Dropdown', () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((AddExaminationEvents_Anterior_Segment) => {
        //To_Validate_utput for Basic/Expert Mode.
           if (AddExaminationEvents_Anterior_Segment.Gonioscopy_Mode_R == "Expert")
            {	//To_Validate_utput for "Expert" Mode..
                cy.get("[data-element-type-name='Gonioscopy']>div>div>div>div>div+div").eq(1).should('be.visible').should('contain',"Shaffer Grade:")
                cy.get("[data-element-type-name='Gonioscopy']>div>div>div>div>div+div").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Shaffer_grade_L01)
                cy.get("[data-element-type-name='Gonioscopy']>div>div>div>div>div+div").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Shaffer_grade_L02)
                cy.get("[data-element-type-name='Gonioscopy']>div>div>div>div>div+div").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Shaffer_grade_L03)
                cy.get("[data-element-type-name='Gonioscopy']>div>div>div>div>div+div").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Shaffer_grade_L04)
            }
           else
            {	//To_Validate_utput for Basic Mode.
                cy.get("[data-element-type-name='Gonioscopy']>div>div>div>div>div+div").eq(1).should('be.visible').should('contain',"Shaffer Grade:")
                cy.get("[data-element-type-name='Gonioscopy']>div>div>div>div>div+div").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Angle_Open_L01)
                cy.get("[data-element-type-name='Gonioscopy']>div>div>div>div>div+div").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Angle_Open_L02)
                cy.get("[data-element-type-name='Gonioscopy']>div>div>div>div>div+div").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Angle_Open_L03)
                cy.get("[data-element-type-name='Gonioscopy']>div>div>div>div>div+div").eq(1).should('be.visible').should('contain',AddExaminationEvents_Anterior_Segment.Gonioscopy_Angle_Open_L04)
        
            }
            }) 
          })
        })
    })
    
})