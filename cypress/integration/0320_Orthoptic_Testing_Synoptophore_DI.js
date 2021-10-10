//Test script for Synoptophore element
describe('0320_Synoptophore_Element_DI', () => {

    //Add the Synoptophore element
    it('0320.1_To_Add_Synoptophore_Element' , () => {
        cy.get("#js-manage-elements-btn").should('be.visible').click()

        cy.get('body').then((body) => {
      
            if (body.find('#manage-elements-Synoptophore[class="added"]').length == 0)
            {
                cy.get('#manage-elements-Synoptophore').should('be.visible').click()
            }
      
        })
      
        cy.get(".blue.hint.cols-full").should('be.visible').click()

    })

    //Verify that Synoptophore element is loaded successfully
    it('0320.2_To_Validate_Synoptophore_Section_IsAvailable' , () => {
      cy.get('[data-element-type-name="Synoptophore"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Synoptophore"] > header > h3').should('contain', 'Synoptophore')
    })

    //Verify Labels are loaded successfully
    it('0320.3_Validate_Labels' , () => {
       cy.get('[data-element-type-name="Synoptophore"] > div + div > div > div  > label > input').eq(1).should('be.visible')
       cy.get('[data-element-type-name="Synoptophore"] > div + div > div > div  > label > input').eq(1).should('be.visible')
    })
    
    
    
    //Add Angle From Primary
    it('0320.4_To_Select_Angle_From_Primary' , () => {
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        const cntSynoptophore_Angle_From_Primary= orthoptictesting.Synoptophore_Angle_From_Primary
    //For selecting Angle From Primary
    if(cntSynoptophore_Angle_From_Primary == "15°"){

        cy.get('[data-element-type-name="Synoptophore"] > div + div > div > div  > label > input').eq(0).should('be.visible').click()

    }
    if(cntSynoptophore_Angle_From_Primary == "20°"){

        cy.get('[data-element-type-name="Synoptophore"] > div + div > div > div  > label > input').eq(1).should('be.visible').click()

    }
    
    })
}) 
    //Add and verify Right Eye Fixation
    it('0320_5_To_Add_Right_Eye_Fixation_First_Button' , () => {
        cy.get('[data-element-type-name="Synoptophore"] >  div + div > div  + div > div > div > table > tbody > tr > td > div > button ').eq(0).should('be.visible').click()
        // To add Right Eye Fixation with first Add button
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(0).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg1).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(1).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg2).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(2).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle1).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(3).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle2).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(0).should('be.visible').contains(orthoptictesting.Synoptophore_Order).click()   
        
        if(orthoptictesting.Synoptophore_Torsion_Sign == "+")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table  > tbody > tr > td > div > div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.plus').eq(0).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign).click()
        }
        if(orthoptictesting.Synoptophore_Torsion_Sign == "-")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table  > tbody > tr > td > div > div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.minus').eq(0).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign).click()
        }
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(4).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value1).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(5).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value2).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(2).should('be.visible').contains(orthoptictesting.Synoptophore_Deviation).click()   
        
        //Click the button to close the popup, post the selections made on the popup window
        cy.get('[data-element-type-name="Synoptophore"] >  div +  div > div + div  > div  >  div > table > tbody > tr > td > div  > div > div + div').eq(0).should('be.visible').click()
    })
    })
    
    it('0320_6_To_Add_Right_Eye_Fixation_Second_Button' , () => {
        cy.get('[data-element-type-name="Synoptophore"] >  div + div > div  + div > div > div > table > tbody > tr > td > div > button ').eq(2).should('be.visible').click()
        // To add Right Eye Fixation with Second Add button
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(6).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg1).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(7).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg2).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(8).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle1).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(9).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle2).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(3).should('be.visible').contains(orthoptictesting.Synoptophore_Order).click()   
        if(orthoptictesting.Synoptophore_Torsion_Sign == "+")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.plus').eq(1).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign).click()
        }
        if(orthoptictesting.Synoptophore_Torsion_Sign == "-")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.minus').eq(1).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign).click()
        }
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(10).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value1).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(11).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value2).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(5).should('be.visible').contains(orthoptictesting.Synoptophore_Deviation).click()   
        
        //Click the button to close the popup, post the selections made on the popup window
        cy.get('[data-element-type-name="Synoptophore"] >  div +  div > div + div  > div  >  div > table > tbody > tr > td > div  > div > div + div').eq(1).should('be.visible').click()
    })
    })

    
    it('0320_7_To_Add_Right_Eye_Fixation_Third_Button' , () => {
        cy.get('[data-element-type-name="Synoptophore"] >  div + div > div  + div > div > div > table > tbody > tr > td > div > button ').eq(4).should('be.visible').click()
        // To add Right Eye Fixation with Third Add button
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(12).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg1).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(13).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg2).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(14).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle1).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(15).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle2).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(6).should('be.visible').contains(orthoptictesting.Synoptophore_Order).click()   
        if(orthoptictesting.Synoptophore_Torsion_Sign == "+")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.plus').eq(2).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign).click()
        }
        if(orthoptictesting.Synoptophore_Torsion_Sign == "-")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.minus').eq(2).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign).click()
        }
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(16).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value1).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(17).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value2).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(8).should('be.visible').contains(orthoptictesting.Synoptophore_Deviation).click()   
        
        //Click the button to close the popup, post the selections made on the popup window
        cy.get('[data-element-type-name="Synoptophore"] >  div +  div > div + div  > div  >  div > table > tbody > tr > td > div  > div > div + div').eq(2).should('be.visible').click()
    })
    })
    
    it('0320_8_To_Add_Right_Eye_Fixation_Fourth_Button' , () => {
        cy.get('[data-element-type-name="Synoptophore"] >  div + div > div  + div > div > div > table > tbody > tr > td > div > button ').eq(6).should('be.visible').click()
        // To add Right Eye Fixation with Fourth Add button
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(18).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg1).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(19).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg2).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(20).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle1).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(21).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle2).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(9).should('be.visible').contains(orthoptictesting.Synoptophore_Order).click()   
        if(orthoptictesting.Synoptophore_Torsion_Sign == "+")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.plus').eq(3).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign).click()
        }
        if(orthoptictesting.Synoptophore_Torsion_Sign == "-")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.minus').eq(3).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign).click()
        }
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(22).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value1).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(23).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value2).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(11).should('be.visible').contains(orthoptictesting.Synoptophore_Deviation).click()   
        
        //Click the button to close the popup, post the selections made on the popup window
        cy.get('[data-element-type-name="Synoptophore"] >  div +  div > div + div  > div  >  div > table > tbody > tr > td > div  > div > div + div').eq(3).should('be.visible').click()
    })
    })
    
    it('0320_9_To_Add_Right_Eye_Fixation_Fifth_Button' , () => {
        cy.get('[data-element-type-name="Synoptophore"] >  div + div > div  + div > div > div > table > tbody > tr > td > div > button ').eq(8).should('be.visible').click()
        // To add Right Eye Fixation with Fifth Add button
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(24).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg1).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(25).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg2).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(26).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle1).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(27).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle2).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(12).should('be.visible').contains(orthoptictesting.Synoptophore_Order).click()   
        if(orthoptictesting.Synoptophore_Torsion_Sign == "+")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.plus').eq(4).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign).click()
        }
        if(orthoptictesting.Synoptophore_Torsion_Sign == "-")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.minus').eq(4).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign).click()
        }  
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(28).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value1).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(29).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value2).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(14).should('be.visible').contains(orthoptictesting.Synoptophore_Deviation).click()   
        
        //Click the button to close the popup, post the selections made on the popup window
        cy.get('[data-element-type-name="Synoptophore"] >  div +  div > div + div  > div  >  div > table > tbody > tr > td > div  > div > div + div').eq(4).should('be.visible').click()
    })
    })
    
    it('0320_10_To_Add_Right_Eye_Fixation_Sixth_Button' , () => {
        cy.get('[data-element-type-name="Synoptophore"] >  div + div > div  + div > div > div > table > tbody > tr > td > div > button ').eq(10).should('be.visible').click()
        // To add Right Eye Fixation with Sixth Add button
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(30).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg1).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(31).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg2).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(32).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle1).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(33).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle2).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(15).should('be.visible').contains(orthoptictesting.Synoptophore_Order).click()   
        if(orthoptictesting.Synoptophore_Torsion_Sign == "+")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.plus').eq(5).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign).click()
        }
        if(orthoptictesting.Synoptophore_Torsion_Sign == "-")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.minus').eq(5).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign).click()
        }
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(34).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value1).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(35).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value2).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(17).should('be.visible').contains(orthoptictesting.Synoptophore_Deviation).click()   
        
        //Click the button to close the popup, post the selections made on the popup window
        cy.get('[data-element-type-name="Synoptophore"] >  div +  div > div + div  > div  >  div > table > tbody > tr > td > div  > div > div + div').eq(5).should('be.visible').click()
    })
    })

    it('0320_11_To_Add_Right_Eye_Fixation_Seventh_Button' , () => {
        cy.get('[data-element-type-name="Synoptophore"] >  div + div > div  + div > div > div > table > tbody > tr > td > div > button ').eq(12).should('be.visible').click()
        // To add Right Eye Fixation with Seventh Add button
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(36).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg1).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(37).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg2).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(38).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle1).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(39).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle2).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(18).should('be.visible').contains(orthoptictesting.Synoptophore_Order).click()   
        if(orthoptictesting.Synoptophore_Torsion_Sign == "+")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.plus').eq(6).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign).click()
        }
        if(orthoptictesting.Synoptophore_Torsion_Sign == "-")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.minus').eq(6).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign).click()
        }
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(40).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value1).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(41).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value2).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(20).should('be.visible').contains(orthoptictesting.Synoptophore_Deviation).click()   
        
        //Click the button to close the popup, post the selections made on the popup window
        cy.get('[data-element-type-name="Synoptophore"] >  div +  div > div + div  > div  >  div > table > tbody > tr > td > div  > div > div + div').eq(6).should('be.visible').click()
    })
    })

    it('0320_12_To_Add_Right_Eye_Fixation_Eighth_Button' , () => {
        cy.get('[data-element-type-name="Synoptophore"] >  div + div > div  + div > div > div > table > tbody > tr > td > div > button ').eq(14).should('be.visible').click()
        // To add Right Eye Fixation with Eighth Add button
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(42).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg1).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(43).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg2).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(44).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle1).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(45).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle2).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(21).should('be.visible').contains(orthoptictesting.Synoptophore_Order).click()   
        if(orthoptictesting.Synoptophore_Torsion_Sign == "+")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.plus').eq(7).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign).click()
        }
        if(orthoptictesting.Synoptophore_Torsion_Sign == "-")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.minus').eq(7).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign).click()
        }
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(46).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value1).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(47).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value2).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(23).should('be.visible').contains(orthoptictesting.Synoptophore_Deviation).click()   
        
        //Click the button to close the popup, post the selections made on the popup window
        cy.get('[data-element-type-name="Synoptophore"] >  div +  div > div + div  > div  >  div > table > tbody > tr > td > div  > div > div + div').eq(7).should('be.visible').click()
    })
    })

    it('0320_12_To_Add_Right_Eye_Fixation_Ninth_Button' , () => {
        cy.get('[data-element-type-name="Synoptophore"] >  div + div > div  + div > div > div > table > tbody > tr > td > div > button ').eq(16).should('be.visible').click()
        // To add Right Eye Fixation with Ninth Add button
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(48).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg1).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(49).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg2).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(50).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle1).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(51).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle2).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(24).should('be.visible').contains(orthoptictesting.Synoptophore_Order).click()   
        if(orthoptictesting.Synoptophore_Torsion_Sign == "+")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.plus').eq(8).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign).click()
        }
        if(orthoptictesting.Synoptophore_Torsion_Sign == "-")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.minus').eq(8).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign).click()
        }
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(52).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value1).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(53).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value2).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(26).should('be.visible').contains(orthoptictesting.Synoptophore_Deviation).click()   
        
        //Click the button to close the popup, post the selections made on the popup window
        cy.get('[data-element-type-name="Synoptophore"] >  div +  div > div + div  > div  >  div > table > tbody > tr > td > div  > div > div + div').eq(8).should('be.visible').click()
    })
    })  

       

        //Add and verify Left Eye Fixation
    it('0320_13_To_Add_Left_Eye_Fixation_Tenth_Button' , () => {
        cy.get('[data-element-type-name="Synoptophore"] >  div + div > div  + div > div > div > table > tbody > tr > td > div > button ').eq(18).should('be.visible').click()
        // To add _Left_Eye Fixation with Tenth Add button
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(54).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg1_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(55).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg2_Left_Eye).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(56).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle1_Left_Eye).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(57).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle2_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(27).should('be.visible').contains(orthoptictesting.Synoptophore_Order_Left_Eye).click()   
        if(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye == "+")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.plus').eq(9).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye).click()
        }
        if(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye == "-")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.minus').eq(9).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye).click()
        }
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(58).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value1_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(59).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value2_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(29).should('be.visible').contains(orthoptictesting.Synoptophore_Deviation_Left_Eye).click()   
        
        //Click the button to close the popup, post the selections made on the popup window
        cy.get('[data-element-type-name="Synoptophore"] >  div +  div > div + div  > div  >  div > table > tbody > tr > td > div  > div > div + div').eq(9).should('be.visible').click()
    })
    })
    
    it('0320_14_To_Add_Left_Eye_Fixation_Eleventh_Button' , () => {
        cy.get('[data-element-type-name="Synoptophore"] >  div + div > div  + div > div > div > table > tbody > tr > td > div > button ').eq(20).should('be.visible').click()
        // To add _Left_Eye Fixation with Eleventh Add button
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(60).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg1_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(61).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg2_Left_Eye).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(62).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle1_Left_Eye).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(63).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle2_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(30).should('be.visible').contains(orthoptictesting.Synoptophore_Order_Left_Eye).click()   
        if(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye == "+")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.plus').eq(10).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye).click()
        }
        if(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye == "-")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.minus').eq(10).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye).click()
        }
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(64).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value1_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(65).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value2_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(32).should('be.visible').contains(orthoptictesting.Synoptophore_Deviation_Left_Eye).click()   
        
        //Click the button to close the popup, post the selections made on the popup window
        cy.get('[data-element-type-name="Synoptophore"] >  div +  div > div + div  > div  >  div > table > tbody > tr > td > div  > div > div + div').eq(10).should('be.visible').click()
    })
    })

    it('0320_15_To_Add_Left_Eye_Fixation_Twelfth_Button' , () => {
        cy.get('[data-element-type-name="Synoptophore"] >  div + div > div  + div > div > div > table > tbody > tr > td > div > button ').eq(22).should('be.visible').click()
        // To add _Left_Eye Fixation with Twelfth_ Add button
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(66).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg1_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(67).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg2_Left_Eye).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(68).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle1_Left_Eye).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(69).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle2_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(33).should('be.visible').contains(orthoptictesting.Synoptophore_Order_Left_Eye).click()   
        if(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye == "+")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.plus').eq(11).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye).click()
        }
        if(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye == "-")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.minus').eq(11).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye).click()
        }
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(70).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value1_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(71).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value2_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(35).should('be.visible').contains(orthoptictesting.Synoptophore_Deviation_Left_Eye).click()   
        
        //Click the button to close the popup, post the selections made on the popup window
        cy.get('[data-element-type-name="Synoptophore"] >  div +  div > div + div  > div  >  div > table > tbody > tr > td > div  > div > div + div').eq(11).should('be.visible').click()
    })
    })
    
    it('0320_16_To_Add_Left_Eye_Fixation_Thirteenth_Button' , () => {
        cy.get('[data-element-type-name="Synoptophore"] >  div + div > div  + div > div > div > table > tbody > tr > td > div > button ').eq(24).should('be.visible').click()
        // To add _Left_Eye Fixation with Thirteenth__ Add button
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(72).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg1_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(73).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg2_Left_Eye).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(74).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle1_Left_Eye).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(75).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle2_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(36).should('be.visible').contains(orthoptictesting.Synoptophore_Order_Left_Eye).click()   
        if(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye == "+")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.plus').eq(12).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye).click()
        }
        if(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye == "-")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.minus').eq(12).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye).click()
        }
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(76).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value1_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(77).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value2_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(38).should('be.visible').contains(orthoptictesting.Synoptophore_Deviation_Left_Eye).click()   
        
        //Click the button to close the popup, post the selections made on the popup window
        cy.get('[data-element-type-name="Synoptophore"] >  div +  div > div + div  > div  >  div > table > tbody > tr > td > div  > div > div + div').eq(12).should('be.visible').click()
    })
    })

    it('0320_17_To_Add_Left_Eye_Fixation_Fourteenth_Button' , () => {
        cy.get('[data-element-type-name="Synoptophore"] >  div + div > div  + div > div > div > table > tbody > tr > td > div > button ').eq(26).should('be.visible').click()
        // To add _Left_Eye Fixation with Fourteenth__ Add button
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(78).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg1_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(79).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg2_Left_Eye).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(80).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle1_Left_Eye).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(81).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle2_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(39).should('be.visible').contains(orthoptictesting.Synoptophore_Order_Left_Eye).click()   
        if(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye == "+")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.plus').eq(13).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye).click()
        }
        if(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye == "-")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.minus').eq(13).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye).click()
        }  
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(82).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value1_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(83).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value2_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(41).should('be.visible').contains(orthoptictesting.Synoptophore_Deviation_Left_Eye).click()   
        
        //Click the button to close the popup, post the selections made on the popup window
        cy.get('[data-element-type-name="Synoptophore"] >  div +  div > div + div  > div  >  div > table > tbody > tr > td > div  > div > div + div').eq(13).should('be.visible').click()
    })
    })

    it('0320_18_To_Add_Left_Eye_Fixation_Fiftheenth_Button' , () => {
        cy.get('[data-element-type-name="Synoptophore"] >  div + div > div  + div > div > div > table > tbody > tr > td > div > button ').eq(28).should('be.visible').click()
        // To add _Left_Eye Fixation with Fiftheenth__ Add button
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(84).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg1_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(85).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg2_Left_Eye).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(86).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle1_Left_Eye).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(87).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle2_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(42).should('be.visible').contains(orthoptictesting.Synoptophore_Order_Left_Eye).click()   
        if(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye == "+")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.plus').eq(14).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye).click()
        }
        if(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye == "-")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.minus').eq(14).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye).click()
        }
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(88).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value1_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(89).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value2_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(44).should('be.visible').contains(orthoptictesting.Synoptophore_Deviation_Left_Eye).click()   
        
        //Click the button to close the popup, post the selections made on the popup window
        cy.get('[data-element-type-name="Synoptophore"] >  div +  div > div + div  > div  >  div > table > tbody > tr > td > div  > div > div + div').eq(14).should('be.visible').click()
    })
    })

    it('0320_19_To_Add_Left_Eye_Fixation_Sixteenth_Button' , () => {
        cy.get('[data-element-type-name="Synoptophore"] >  div + div > div  + div > div > div > table > tbody > tr > td > div > button ').eq(30).should('be.visible').click()
        // To add _Left_Eye Fixation with Sixteenth__ Add button
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(90).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg1_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(91).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg2_Left_Eye).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(92).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle1_Left_Eye).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(93).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle2_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(45).should('be.visible').contains(orthoptictesting.Synoptophore_Order_Left_Eye).click()   
        if(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye == "+")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.plus').eq(15).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye).click()
        }
        if(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye == "-")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.minus').eq(15).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye).click()
        }
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(94).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value1_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(95).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value2_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(47).should('be.visible').contains(orthoptictesting.Synoptophore_Deviation_Left_Eye).click()   
        
        //Click the button to close the popup, post the selections made on the popup window
        cy.get('[data-element-type-name="Synoptophore"] >  div +  div > div + div  > div  >  div > table > tbody > tr > td > div  > div > div + div').eq(15).should('be.visible').click()
    })
    })
     
    it('0320_20_To_Add_Left_Eye_Fixation_Seventeenth_Button' , () => {
        cy.get('[data-element-type-name="Synoptophore"] >  div + div > div  + div > div > div > table > tbody > tr > td > div > button ').eq(32).should('be.visible').click()
        // To add _Left_Eye Fixation with Seventeenth___ Add button
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(96).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg1_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(97).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg2_Left_Eye).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(98).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle1_Left_Eye).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(99).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle2_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(48).should('be.visible').contains(orthoptictesting.Synoptophore_Order_Left_Eye).click()   
        if(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye == "+")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.plus').eq(16).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye).click()
        }
        if(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye == "-")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.minus').eq(16).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye).click()
        }
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(100).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value1_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(101).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value2_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(50).should('be.visible').contains(orthoptictesting.Synoptophore_Deviation_Left_Eye).click()   
        
        //Click the button to close the popup, post the selections made on the popup window
        cy.get('[data-element-type-name="Synoptophore"] >  div +  div > div + div  > div  >  div > table > tbody > tr > td > div  > div > div + div').eq(16).should('be.visible').click()
    })
    })

    it('0320_21_To_Add_Left_Eye_Fixation_Eighteenth_Button' , () => {
        cy.get('[data-element-type-name="Synoptophore"] >  div + div > div  + div > div > div > table > tbody > tr > td > div > button ').eq(34).should('be.visible').click()
        // To add _Left_Eye Fixation with Eighteenth___ Add button
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(102).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg1_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(103).should('be.visible').contains(orthoptictesting.Synoptophore_H_Angle_Deg2_Left_Eye).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(104).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle1_Left_Eye).click()    
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul').eq(105).should('be.visible').contains(orthoptictesting.Synoptophore_V_Angle2_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(51).should('be.visible').contains(orthoptictesting.Synoptophore_Order_Left_Eye).click()   
        if(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye == "+")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.plus').eq(17).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye).click()
        }
        if(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye == "-")
        {
            cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div  > div > table > tbody > tr > td > div > button + div > div + div + table > tbody > tr > td + td + td + td > div > div > ul > li > span > i.oe-i.active.minus').eq(17).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Sign_Left_Eye).click()
        }  
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(106).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value1_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td > div > div > div > ul ').eq(107).should('be.visible').contains(orthoptictesting.Synoptophore_Torsion_Value2_Left_Eye).click()   
        cy.get('[data-element-type-name="Synoptophore"] > div + div > div + div > div > div > table > tbody > tr > td > div  > div > table > tbody > tr > td + td + td > div > div > ul').eq(53).should('be.visible').contains(orthoptictesting.Synoptophore_Deviation_Left_Eye).click()   
        
        //Click the button to close the popup, post the selections made on the popup window
        cy.get('[data-element-type-name="Synoptophore"] >  div +  div > div + div  > div  >  div > table > tbody > tr > td > div  > div > div + div').eq(17).should('be.visible').click()
    })
    }) 

    it('0320_22_To_Add_Synoptophore_Comments' , () => {
      cy.get('[data-element-type-name="Synoptophore"] > div + div > div > button').should('be.visible').click()
      cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
      cy.get('[data-element-type-name="Synoptophore"] > div + div  > div > div > div > textarea').should('be.visible').clear().type(orthoptictesting.Synoptophore_Comments).click()


    })
    })

})    





























































  










