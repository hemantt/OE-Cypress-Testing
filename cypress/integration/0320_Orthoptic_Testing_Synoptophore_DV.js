describe('0320_Synoptophore_Element_DV', () => {

    //Verify that Synoptophore element is loaded successfully
    it('0320.23_To_Validate_Synoptophore__Section_isAvailable' , () => {
        cy.get('[data-element-type-name="Synoptophore"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Synoptophore"] > header > h3').should('contain', 'Synoptophore')
      })
    
    //Validate Angle of Primary
    it('0320_24_To_Validate_Saved_Data' , () => {
       cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
       
            if(orthoptictesting.Synoptophore_Angle_From_Primary == "20°" )
            {
               cy.get('[data-element-type-name="Synoptophore"] > div > div > div').eq(0).should('be.visible').should('contain' ,orthoptictesting.Synoptophore_Angle_From_Primary)
            }
            
            if(orthoptictesting.Synoptophore_Angle_From_Primary== "15°")
            {
                cy.get('[data-element-type-name="Synoptophore"] > div > div > div').eq(0).should('be.visible').should('contain' ,orthoptictesting.Synoptophore_Angle_From_Primary)
            }
               cy.get('[data-element-type-name="Synoptophore"] > div > div > div').eq(1).should('be.visible').should('contain' ,orthoptictesting.Synoptophore_Comments)
            
            cy.get('[data-element-type-name="Synoptophore"] > div > div > div').eq(1).should('be.visible').should('contain' ,orthoptictesting.Synoptophore_Comments)
        })
    })

    // To validate saved data for Right Eye
    it('0320_25_To_Validate_Right_Eye_Fixation_First_Three_Buttons' , () => {
       cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('[data-element-type-name="Synoptophore"] >  div > div > div > div   > table > tbody > tr > td').eq(0).should('be.visible').should('contain' , orthoptictesting.Synoptophore_Torsion_Sign + orthoptictesting.Synoptophore_H_Angle_Deg1 + orthoptictesting.Synoptophore_H_Angle_Deg2 + orthoptictesting.Synoptophore_H_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_V_Angle1 + orthoptictesting.Synoptophore_V_Angle2 + orthoptictesting.Synoptophore_V_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_Order + " " + orthoptictesting.Synoptophore_Torsion_Value1 + orthoptictesting.Synoptophore_Torsion_Value2 + " " + orthoptictesting.Synoptophore_Deviation_Validation_Right)
        cy.get('[data-element-type-name="Synoptophore"] >  div > div > div > div   > table > tbody > tr > td').eq(1).should('be.visible').should('contain' , orthoptictesting.Synoptophore_Torsion_Sign + orthoptictesting.Synoptophore_H_Angle_Deg1 + orthoptictesting.Synoptophore_H_Angle_Deg2 + orthoptictesting.Synoptophore_H_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_V_Angle1 + orthoptictesting.Synoptophore_V_Angle2 + orthoptictesting.Synoptophore_V_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_Order + " " + orthoptictesting.Synoptophore_Torsion_Value1 + orthoptictesting.Synoptophore_Torsion_Value2 + " " + orthoptictesting.Synoptophore_Deviation_Validation_Right)
        cy.get('[data-element-type-name="Synoptophore"] >  div > div > div > div   > table > tbody > tr > td').eq(2).should('be.visible').should('contain' , orthoptictesting.Synoptophore_Torsion_Sign + orthoptictesting.Synoptophore_H_Angle_Deg1 + orthoptictesting.Synoptophore_H_Angle_Deg2 + orthoptictesting.Synoptophore_H_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_V_Angle1 + orthoptictesting.Synoptophore_V_Angle2 + orthoptictesting.Synoptophore_V_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_Order + " " + orthoptictesting.Synoptophore_Torsion_Value1 + orthoptictesting.Synoptophore_Torsion_Value2 + " " + orthoptictesting.Synoptophore_Deviation_Validation_Right)
     
       })
    })
    
    // To validate saved data for Right Eye
   it('0320_26_To_Validate_Right_Eye_Fixation_Next_Three_Buttons' , () => {
       cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {   
        cy.get('[data-element-type-name="Synoptophore"] >  div > div > div > div   > table > tbody > tr > td').eq(3).should('be.visible').should('contain' , orthoptictesting.Synoptophore_Torsion_Sign + orthoptictesting.Synoptophore_H_Angle_Deg1 + orthoptictesting.Synoptophore_H_Angle_Deg2 + orthoptictesting.Synoptophore_H_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_V_Angle1 + orthoptictesting.Synoptophore_V_Angle2 + orthoptictesting.Synoptophore_V_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_Order + " " + orthoptictesting.Synoptophore_Torsion_Value1 + orthoptictesting.Synoptophore_Torsion_Value2 + " " + orthoptictesting.Synoptophore_Deviation_Validation_Right)
        cy.get('[data-element-type-name="Synoptophore"] >  div > div > div > div   > table > tbody > tr > td').eq(4).should('be.visible').should('contain' , orthoptictesting.Synoptophore_Torsion_Sign + orthoptictesting.Synoptophore_H_Angle_Deg1 + orthoptictesting.Synoptophore_H_Angle_Deg2 + orthoptictesting.Synoptophore_H_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_V_Angle1 + orthoptictesting.Synoptophore_V_Angle2 + orthoptictesting.Synoptophore_V_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_Order + " " + orthoptictesting.Synoptophore_Torsion_Value1 + orthoptictesting.Synoptophore_Torsion_Value2 + " " + orthoptictesting.Synoptophore_Deviation_Validation_Right)
        cy.get('[data-element-type-name="Synoptophore"] >  div > div > div > div   > table > tbody > tr > td').eq(5).should('be.visible').should('contain' , orthoptictesting.Synoptophore_Torsion_Sign + orthoptictesting.Synoptophore_H_Angle_Deg1 + orthoptictesting.Synoptophore_H_Angle_Deg2 + orthoptictesting.Synoptophore_H_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_V_Angle1 + orthoptictesting.Synoptophore_V_Angle2 + orthoptictesting.Synoptophore_V_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_Order + " " + orthoptictesting.Synoptophore_Torsion_Value1 + orthoptictesting.Synoptophore_Torsion_Value2 + " " + orthoptictesting.Synoptophore_Deviation_Validation_Right)
       })
    })
    
    // To validate saved data for Right Eye
    it('0320_27_To_Validate_Right_Eye_Fixation_Last_Three_Buttons' , () => {
       cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {   
        cy.get('[data-element-type-name="Synoptophore"] >  div > div > div > div   > table > tbody > tr > td').eq(6).should('be.visible').should('contain' , orthoptictesting.Synoptophore_Torsion_Sign + orthoptictesting.Synoptophore_H_Angle_Deg1 + orthoptictesting.Synoptophore_H_Angle_Deg2 + orthoptictesting.Synoptophore_H_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_V_Angle1 + orthoptictesting.Synoptophore_V_Angle2 + orthoptictesting.Synoptophore_V_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_Order + " " + orthoptictesting.Synoptophore_Torsion_Value1 + orthoptictesting.Synoptophore_Torsion_Value2 + " " + orthoptictesting.Synoptophore_Deviation_Validation_Right)
        cy.get('[data-element-type-name="Synoptophore"] >  div > div > div > div   > table > tbody > tr > td').eq(7).should('be.visible').should('contain' , orthoptictesting.Synoptophore_Torsion_Sign + orthoptictesting.Synoptophore_H_Angle_Deg1 + orthoptictesting.Synoptophore_H_Angle_Deg2 + orthoptictesting.Synoptophore_H_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_V_Angle1 + orthoptictesting.Synoptophore_V_Angle2 + orthoptictesting.Synoptophore_V_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_Order + " " + orthoptictesting.Synoptophore_Torsion_Value1 + orthoptictesting.Synoptophore_Torsion_Value2 + " " + orthoptictesting.Synoptophore_Deviation_Validation_Right)
        cy.get('[data-element-type-name="Synoptophore"] >  div > div > div > div   > table > tbody > tr > td').eq(8).should('be.visible').should('contain' , orthoptictesting.Synoptophore_Torsion_Sign + orthoptictesting.Synoptophore_H_Angle_Deg1 + orthoptictesting.Synoptophore_H_Angle_Deg2 + orthoptictesting.Synoptophore_H_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_V_Angle1 + orthoptictesting.Synoptophore_V_Angle2 + orthoptictesting.Synoptophore_V_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_Order + " " + orthoptictesting.Synoptophore_Torsion_Value1 + orthoptictesting.Synoptophore_Torsion_Value2 + " " + orthoptictesting.Synoptophore_Deviation_Validation_Right)
       })
    })    
    
    //To Validate saved data for Left Eye
    it('0320_28_To_Validate_LeftEye_Fixation_First_Three_Buttons' , () => {
         cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
            cy.get('[data-element-type-name="Synoptophore"] >  div > div > div > div   > table > tbody > tr > td').eq(9).should('be.visible').should('contain' , orthoptictesting.Synoptophore_Torsion_Sign + orthoptictesting.Synoptophore_H_Angle_Deg1 + orthoptictesting.Synoptophore_H_Angle_Deg2 + orthoptictesting.Synoptophore_H_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_V_Angle1 + orthoptictesting.Synoptophore_V_Angle2 + orthoptictesting.Synoptophore_V_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_Order + " " + orthoptictesting.Synoptophore_Torsion_Value1 + orthoptictesting.Synoptophore_Torsion_Value2 + " " + orthoptictesting.Synoptophore_Deviation_Validation_Right)

            cy.get('[data-element-type-name="Synoptophore"] >  div > div > div > div   > table > tbody > tr > td').eq(10).should('be.visible').should('contain' , orthoptictesting.Synoptophore_Torsion_Sign + orthoptictesting.Synoptophore_H_Angle_Deg1 + orthoptictesting.Synoptophore_H_Angle_Deg2 + orthoptictesting.Synoptophore_H_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_V_Angle1 + orthoptictesting.Synoptophore_V_Angle2 + orthoptictesting.Synoptophore_V_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_Order + " " + orthoptictesting.Synoptophore_Torsion_Value1 + orthoptictesting.Synoptophore_Torsion_Value2 + " " + orthoptictesting.Synoptophore_Deviation_Validation_Right)

            cy.get('[data-element-type-name="Synoptophore"] >  div > div > div > div   > table > tbody > tr > td').eq(11).should('be.visible').should('contain' , orthoptictesting.Synoptophore_Torsion_Sign + orthoptictesting.Synoptophore_H_Angle_Deg1 + orthoptictesting.Synoptophore_H_Angle_Deg2 + orthoptictesting.Synoptophore_H_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_V_Angle1 + orthoptictesting.Synoptophore_V_Angle2 + orthoptictesting.Synoptophore_V_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_Order + " " + orthoptictesting.Synoptophore_Torsion_Value1 + orthoptictesting.Synoptophore_Torsion_Value2 + " " + orthoptictesting.Synoptophore_Deviation_Validation_Right)
       })
    })
    
    //To Validate saved data for Left Eye
     it('0320_29_To_Validate_Left_Eye_Fixation_Next_Three_Buttons' , () => {
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {   
            cy.get('[data-element-type-name="Synoptophore"] >  div > div > div > div   > table > tbody > tr > td').eq(12).should('be.visible').should('contain' , orthoptictesting.Synoptophore_Torsion_Sign + orthoptictesting.Synoptophore_H_Angle_Deg1 + orthoptictesting.Synoptophore_H_Angle_Deg2 + orthoptictesting.Synoptophore_H_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_V_Angle1 + orthoptictesting.Synoptophore_V_Angle2 + orthoptictesting.Synoptophore_V_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_Order + " " + orthoptictesting.Synoptophore_Torsion_Value1 + orthoptictesting.Synoptophore_Torsion_Value2 + " " + orthoptictesting.Synoptophore_Deviation_Validation_Right)
            cy.get('[data-element-type-name="Synoptophore"] >  div > div > div > div   > table > tbody > tr > td').eq(13).should('be.visible').should('contain' , orthoptictesting.Synoptophore_Torsion_Sign + orthoptictesting.Synoptophore_H_Angle_Deg1 + orthoptictesting.Synoptophore_H_Angle_Deg2 + orthoptictesting.Synoptophore_H_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_V_Angle1 + orthoptictesting.Synoptophore_V_Angle2 + orthoptictesting.Synoptophore_V_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_Order + " " + orthoptictesting.Synoptophore_Torsion_Value1 + orthoptictesting.Synoptophore_Torsion_Value2 + " " + orthoptictesting.Synoptophore_Deviation_Validation_Right)
            cy.get('[data-element-type-name="Synoptophore"] >  div > div > div > div   > table > tbody > tr > td').eq(14).should('be.visible').should('contain' , orthoptictesting.Synoptophore_Torsion_Sign + orthoptictesting.Synoptophore_H_Angle_Deg1 + orthoptictesting.Synoptophore_H_Angle_Deg2 + orthoptictesting.Synoptophore_H_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_V_Angle1 + orthoptictesting.Synoptophore_V_Angle2 + orthoptictesting.Synoptophore_V_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_Order + " " + orthoptictesting.Synoptophore_Torsion_Value1 + orthoptictesting.Synoptophore_Torsion_Value2 + " " + orthoptictesting.Synoptophore_Deviation_Validation_Right)
        })
    })
     
    //To Validate saved data for Left Eye
    it('0320_30_To_Validate_Left_Eye_Fixation_Last_Three_Buttons' , () => {
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {   
            cy.get('[data-element-type-name="Synoptophore"] >  div > div > div > div   > table > tbody > tr > td').eq(15).should('be.visible').should('contain' , orthoptictesting.Synoptophore_Torsion_Sign + orthoptictesting.Synoptophore_H_Angle_Deg1 + orthoptictesting.Synoptophore_H_Angle_Deg2 + orthoptictesting.Synoptophore_H_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_V_Angle1 + orthoptictesting.Synoptophore_V_Angle2 + orthoptictesting.Synoptophore_V_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_Order + " " + orthoptictesting.Synoptophore_Torsion_Value1 + orthoptictesting.Synoptophore_Torsion_Value2 + " " + orthoptictesting.Synoptophore_Deviation_Validation_Right)
            cy.get('[data-element-type-name="Synoptophore"] >  div > div > div > div   > table > tbody > tr > td').eq(16).should('be.visible').should('contain' , orthoptictesting.Synoptophore_Torsion_Sign + orthoptictesting.Synoptophore_H_Angle_Deg1 + orthoptictesting.Synoptophore_H_Angle_Deg2 + orthoptictesting.Synoptophore_H_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_V_Angle1 + orthoptictesting.Synoptophore_V_Angle2 + orthoptictesting.Synoptophore_V_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_Order + " " + orthoptictesting.Synoptophore_Torsion_Value1 + orthoptictesting.Synoptophore_Torsion_Value2 + " " + orthoptictesting.Synoptophore_Deviation_Validation_Right)
            cy.get('[data-element-type-name="Synoptophore"] >  div > div > div > div   > table > tbody > tr > td').eq(17).should('be.visible').should('contain' , orthoptictesting.Synoptophore_Torsion_Sign + orthoptictesting.Synoptophore_H_Angle_Deg1 + orthoptictesting.Synoptophore_H_Angle_Deg2 + orthoptictesting.Synoptophore_H_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_V_Angle1 + orthoptictesting.Synoptophore_V_Angle2 + orthoptictesting.Synoptophore_V_Angle_Deg_Validation + " " + orthoptictesting.Synoptophore_Order + " " + orthoptictesting.Synoptophore_Torsion_Value1 + orthoptictesting.Synoptophore_Torsion_Value2 + " " + orthoptictesting.Synoptophore_Deviation_Validation_Right)
        })
    })  




})
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    