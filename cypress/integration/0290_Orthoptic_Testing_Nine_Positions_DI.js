//const { it } = require("mocha")

//const { it } = require("mocha")

//Test script for Nine Positions element
describe('0290_Nine_Positions_Element_DI', () => {

    //Add the Nine Positions element
    it('0290.1_To_Add_Nine Positions_Element' , () => {
      cy.get("#js-manage-elements-btn").should('be.visible').click()

      cy.get('body').then((body) => {
    
          if (body.find('#manage-elements-Nine-Positions[class="added"]').length == 0)
          {
            cy.get('#manage-elements-Nine-Positions').should('be.visible').click()
          }
    
      })
    
      cy.get(".blue.hint.cols-full").should('be.visible').click()

    })

    //Verify that Nine Positions element is loaded successfully
    it('0290.2_To_Validate_Nine Positions_Section_IsAvailable' , () => {
      cy.get('[data-element-type-name="Nine Positions"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Nine Positions"] > header > h3').should('contain', 'Nine Positions')
    })

    //Verify Header Labels
    it('0290.3_To_Verify Labels_Are_Loaded_Successfully' , () => {
      cy.get('[data-element-type-name="Nine Positions"] >  div + div > div > div > div ').eq(0).should('be.visible').should('contain' , 'Reading')
      cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div > div > div > label').eq(0).should('be.visible').should('contain' , 'Glasses')
      cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div > div > div > label').eq(1).should('be.visible').should('contain' , 'Yes')
      cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div > div > div > label').eq(2).should('be.visible').should('contain' , 'No')
      cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div > div > div > label').eq(3).should('be.visible').should('contain' , 'CHP')
      cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div > div > div > label').eq(4).should('be.visible').should('contain' , 'Used')
      cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div > div > div > label').eq(5).should('be.visible').should('contain' , 'Not used')
      cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div > div > div > label').eq(6).should('be.visible').should('contain' , 'Wong supine positive')
      cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div > div > div > label').eq(7).should('be.visible').should('contain' , 'Hess chart')
      cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div > div > div > label').eq(8).should('be.visible').should('contain' ,'Full Ocular Movement')
      cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div > div > div > label').eq(9).should('be.visible').should('contain' , 'DVD')
      cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div > div > div > label').eq(10).should('be.visible').should('contain' , 'DVD')
    })

    //To Verify radiobuttons
    it('0290.4_ To_Verify_Radiobuttons' , () => {
       cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div > div > div > label > input').eq(0).should('be.visible')
       cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div > div > div > label > input').eq(1).should('be.visible')
       cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div > div > div > label > input').eq(2).should('be.visible')
       cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div > div > div > label > input').eq(3).should('be.visible')
       cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div > div > div > label > input').eq(4).should('be.visible')
       cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div > div > div > label > input').eq(5).should('be.visible')
       cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div > div > div > label > input').eq(6).should('be.visible')
      


    })

    //To verify Doodles
    it('0290.5_To_Check_Doodles_Are_Loaded_Successfully' ,() => {
       cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div > div > div > div >div > div > div > ul > li ').eq(0).should('be.visible').should('contain' , 'Orthoptic Shading')
       cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div > div > div > div >div > div > div > ul > li ').eq(1).should('be.visible').should('contain' , 'Up/Down Drift')
       cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div > div > div > div >div > div > div > ul > li ').eq(2).should('be.visible').should('contain' , 'Up/Down Shoot')
       cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div > div > div > div >div > div > div > ul > li ').eq(3).should('be.visible').should('contain' ,  "'A' Pattern")
       cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div > div > div > div >div > div > div > ul > li ').eq(4).should('be.visible').should('contain' , "'V' Pattern")
       cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div > div > div > div >div > div > div > ul > li ').eq(5).should('be.visible').should('contain' , 'No Pattern')
       cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div > div > div > div >div > div > div > ul > li ').eq(6).should('be.visible').should('contain' ,"'X' Pattern")
       cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div > div > div > div >div > div > div > ul > li ').eq(7).should('be.visible').should('contain' ,"'Y' Pattern")
       cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div > div > div > div >div > div > div > ul > li ').eq(8).should('be.visible').should('contain' , "'Inverse Y' Pattern")
       cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div > div > div > div >div > div > div > ul > li ').eq(9).should('be.visible').should('contain' , 'Orthoptic Shading')
       cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div > div > div > div >div > div > div > ul > li ').eq(10).should('be.visible').should('contain' , 'Up/Down Drift')
       cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div > div > div > div >div > div > div > ul > li ').eq(11).should('be.visible').should('contain' , 'Up/Down Shoot')
       


    
    })

    //Add DVD values
    it('0290.6_To_Add_DVD_Values' , () => {
    cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div > div > div + div > div > input').eq(0).should('be.visible').clear().type(orthoptictesting.Nine_Positions_DVD_Left)
        cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div > div > div + div > div > input').eq(1).should('be.visible').clear().type(orthoptictesting.Nine_Positions_DVD_Right)

    })
    })

    // Add and Verify Glasses
    it('0290.7_To_Add_Glasses' , () => {
      cy.get('[data-element-type-name="Nine Positions"] > header > h3').scrollIntoView().should('be.visible')
    cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        
    //For selecting Glasses
    if(orthoptictesting.Nine_Positions_Glasses == "Yes"){

        cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div > div > div > label > input').eq(0).should('be.visible').scrollIntoView().click()

    }
    if(orthoptictesting.Nine_Positions_Glasses == "No"){

        cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div > div > div > label > input').eq(1).should('be.visible').scrollIntoView().click()

    }
})

})
it('0290.8_To_Add_CHP' , () => {
  cy.get('[data-element-type-name="Nine Positions"] > header > h3').scrollIntoView().should('be.visible')
    cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
       
    //For selecting CHP
    if(orthoptictesting.Nine_Positions_CHP == "Not used"){

        cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div > div > div > label > input').eq(3).should('be.visible').scrollIntoView().click()

    }
    if(orthoptictesting.Nine_Positions_CHP == "Used"){

        cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div > div > div > label > input').eq(2).should('be.visible').scrollIntoView().click()

    }

    })
    })
    
     //To add checkboxes 
 it('0290.9_To_Add_ Details_Selecting_Checkboxes' , ()  => {
  cy.get('[data-element-type-name="Nine Positions"] > header > h3').scrollIntoView().should('be.visible')
    cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
 if(orthoptictesting.Nine_Positions_Checkbox == "Full Ocular Movement")
  {
    cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div > div > div > label > input').eq(6).should('be.visible').scrollIntoView().click()
   }
 if(orthoptictesting.Nine_Positions_Checkbox == "Wong supine positive")
  {
    cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div > div > div > label > input').eq(4).should('be.visible').scrollIntoView().click()
    //click on the Add button for adding 1st movement
    cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td > div > div + button').eq(0).should('be.visible').click()
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > div > ul').eq(0).should('be.visible').contains(orthoptictesting.Nine_Positions_Horizontal_Angle1).click()      
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > div > ul').eq(1).should('be.visible').contains(orthoptictesting.Nine_Positions_Horizontal_Angle2).click() 
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > ul').eq(0).should('be.visible').contains(orthoptictesting.Nine_Positions_Horizontal_X_Deviation_Id).click()
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > div > ul').eq(2).should('be.visible').contains(orthoptictesting.Nine_Positions_Vertical_Angle1).click()
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > div > ul').eq(3).should('be.visible').contains(orthoptictesting.Nine_Positions_Vertical_Angle1).click()
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > ul').eq(3).should('be.visible').contains(orthoptictesting.Nine_Positions_Vertical_Prism_Position).click()
     //Click the button to close the popup, post the selections made on the popup window
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div  > div + div > div + table > tbody > tr > td > div > div + button  + div > div + div').eq(0).should('be.visible').click()
     cy.wait(3000)
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody > tr > td + td > select').eq(0).select(orthoptictesting.Nine_Positions_Movement_Ids)
     
     //click on the Add button for adding 2nd movement
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td > div > div + button').eq(2).should('be.visible').click()
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > div > ul').eq(4).should('be.visible').contains(orthoptictesting.Nine_Positions_Horizontal_Angle1).click()      
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > div > ul').eq(5).should('be.visible').contains(orthoptictesting.Nine_Positions_Horizontal_Angle2).click() 
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > ul').eq(5).should('be.visible').contains(orthoptictesting.Nine_Positions_Horizontal_X_Deviation_Id).click()
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > div > ul').eq(6).should('be.visible').contains(orthoptictesting.Nine_Positions_Vertical_Angle1).click()
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > div > ul').eq(7).should('be.visible').contains(orthoptictesting.Nine_Positions_Vertical_Angle1).click()
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > ul').eq(8).should('be.visible').contains(orthoptictesting.Nine_Positions_Vertical_Prism_Position).click()
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div  > div + div > div + table > tbody > tr > td > div > div + button  + div > div + div').eq(1).should('be.visible').click()
     cy.wait(3000)
     // To select dropdown
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody > tr > td + td > select').eq(1).select(orthoptictesting.Nine_Positions_Movement_Ids)
    
     //click on the Add button for adding 3rd movement
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td > div > div + button').eq(4).should('be.visible').click()
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > div > ul').eq(8).should('be.visible').contains(orthoptictesting.Nine_Positions_Horizontal_Angle1).click()      
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > div > ul').eq(9).should('be.visible').contains(orthoptictesting.Nine_Positions_Horizontal_Angle2).click() 
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > ul').eq(11).should('be.visible').contains(orthoptictesting.Nine_Positions_Horizontal_E_Deviation_Id).click()
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > div > ul').eq(10).should('be.visible').contains(orthoptictesting.Nine_Positions_Vertical_Angle1).click()
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > div > ul').eq(11).should('be.visible').contains(orthoptictesting.Nine_Positions_Vertical_Angle1).click()
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > ul').eq(13).should('be.visible').contains(orthoptictesting.Nine_Positions_Vertical_Prism_Position).click()
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div  > div + div > div + table > tbody > tr > td > div > div + button  + div > div + div').eq(2).should('be.visible').click()
     cy.wait(3000)
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody > tr > td + td > select').eq(2).select(orthoptictesting.Nine_Positions_Movement_Ids)
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody > tr > td + td > select').eq(3).select(orthoptictesting.Nine_Positions_Movement_Ids)
    
     //click on the Add button for adding 4th movement
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td > div > div + button').eq(6).should('be.visible').click()
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > div > ul').eq(12).should('be.visible').contains(orthoptictesting.Nine_Positions_Horizontal_Angle1).click()      
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > div > ul').eq(13).should('be.visible').contains(orthoptictesting.Nine_Positions_Horizontal_Angle2).click() 
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > ul').eq(16).should('be.visible').contains(orthoptictesting.Nine_Positions_Horizontal_E_Deviation_Id).click()
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > div > ul').eq(14).should('be.visible').contains(orthoptictesting.Nine_Positions_Vertical_Angle1).click()
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > div > ul').eq(15).should('be.visible').contains(orthoptictesting.Nine_Positions_Vertical_Angle1).click()
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > ul').eq(18).should('be.visible').contains(orthoptictesting.Nine_Positions_Vertical_Prism_Position).click()
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div  > div + div > div + table > tbody > tr > td > div > div + button  + div > div + div').eq(3).should('be.visible').click()
     cy.wait(3000)
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody > tr > td + td > select').eq(4).select(orthoptictesting.Nine_Positions_Movement_Ids)
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody > tr > td + td > select').eq(5).select(orthoptictesting.Nine_Positions_Movement_Ids)

    //click on the Add button for adding 5th movement
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td > div > div + button').eq(8).should('be.visible').click()
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > div > ul').eq(16).should('be.visible').contains(orthoptictesting.Nine_Positions_Horizontal_Angle1).click()      
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > div > ul').eq(17).should('be.visible').contains(orthoptictesting.Nine_Positions_Horizontal_Angle2).click() 
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > ul').eq(21).should('be.visible').contains(orthoptictesting.Nine_Positions_Horizontal_E_Deviation_Id).click()
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > div > ul').eq(18).should('be.visible').contains(orthoptictesting.Nine_Positions_Vertical_Angle1).click()
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > div > ul').eq(19).should('be.visible').contains(orthoptictesting.Nine_Positions_Vertical_Angle1).click()
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > ul').eq(23).should('be.visible').contains(orthoptictesting.Nine_Positions_Vertical_Prism_Position).click()
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div  > div + div > div + table > tbody > tr > td > div > div + button  + div > div + div').eq(4).should('be.visible').click()
     cy.wait(3000)
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody > tr > td + td > select').eq(6).select(orthoptictesting.Nine_Positions_Movement_Ids)
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody > tr > td + td > select').eq(7).select(orthoptictesting.Nine_Positions_Movement_Ids)

    //Click on the Add Button for adding 6th Movement
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td > div > div + button').eq(10).should('be.visible').click()
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > div > ul').eq(20).should('be.visible').contains(orthoptictesting.Nine_Positions_Horizontal_Angle1).click()      
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > div > ul').eq(21).should('be.visible').contains(orthoptictesting.Nine_Positions_Horizontal_Angle2).click() 
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > ul').eq(26).should('be.visible').contains(orthoptictesting.Nine_Positions_Horizontal_E_Deviation_Id).click()
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > div > ul').eq(22).should('be.visible').contains(orthoptictesting.Nine_Positions_Vertical_Angle1).click()
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > div > ul').eq(23).should('be.visible').contains(orthoptictesting.Nine_Positions_Vertical_Angle1).click()
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody >  tr > td  > div > div  > div + div + table > tbody > tr > td > div > div  > ul').eq(28).should('be.visible').contains(orthoptictesting.Nine_Positions_Vertical_Prism_Position).click()
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div  > div + div > div + table > tbody > tr > td > div > div + button  + div > div + div').eq(5).should('be.visible').click()
     cy.wait(3000)
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody > tr > td + td > select').eq(6).select(orthoptictesting.Nine_Positions_Movement_Ids)
     cy.get('[data-element-type-name="Nine Positions"] > div + div > div > div > div + div > div + table > tbody > tr > td + td > select').eq(7).select(orthoptictesting.Nine_Positions_Movement_Ids)
    }    
     

  })
  })
})


        

































