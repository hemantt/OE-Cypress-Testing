describe('0024_Element_Retinoscopy_DI', () => {
    it('0024.1_Select_Retinoscopy_Element', () => {

        //To get the Retinoscopy element
      cy.get("#js-manage-elements-btn").should('be.visible').click()
      cy.get("#manage-elements-Retinoscopy").should('be.visible').click()
      cy.get(".blue.hint.cols-full").should('be.visible').click()
       })

    //To validate Retinoscoopy element     
    it('0024.2_To_Check_Retinoscopy section is Available' ,() => {
      cy.get('[data-element-type-name="Retinoscopy"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Retinoscopy"] > header > h3').should('contain', 'Retinoscopy')
  })
  
    //To validate Labels are loaded successfully for Right Eye
    it('0024.3_To_Validate_Labels_Right_Eye' ,() => {
      cy.get('#OEModule_OphCiExamination_models_Retinoscopy_right_form > .active-form > .row > .cols-7 > tbody > :nth-child(1) > :nth-child(1)').should('contain' ,'Dilated')
      cy.get('#OEModule_OphCiExamination_models_Retinoscopy_right_form > .active-form > .row > .cols-7 > tbody > :nth-child(2) > :nth-child(1)').should('contain' , 'Right Working Distance')
      cy.get('#OEModule_OphCiExamination_models_Retinoscopy_right_form > .active-form > .row > .cols-7 > tbody > :nth-child(3) > :nth-child(1)').should('contain' , 'Angle')
      cy.get('#OEModule_OphCiExamination_models_Retinoscopy_right_form > .active-form > .row > .cols-7 > tbody > :nth-child(4) > :nth-child(1)').should('contain' , 'P1')
      cy.get('#OEModule_OphCiExamination_models_Retinoscopy_right_form > .active-form > .row > .cols-7 > tbody > :nth-child(5) > :nth-child(1)').should('contain' , 'P2')
      cy.get('#OEModule_OphCiExamination_models_Retinoscopy_right_form > .active-form > .row > .cols-7 > tbody > :nth-child(6) > :nth-child(1)').should('contain' , 'Refraction')
    })
     
    //To validate Labels are loaded successfully for Left Eye
      it('0024.4_To_Validate_Labels_Left_Eye' , () => {
      cy.get('#OEModule_OphCiExamination_models_Retinoscopy_left_form > .active-form > .row > .cols-7 > tbody > :nth-child(1) > :nth-child(1)').should('contain' ,'Dilated')
      cy.get('#OEModule_OphCiExamination_models_Retinoscopy_left_form > .active-form > .row > .cols-7 > tbody > :nth-child(2) > :nth-child(1)').should('contain' , 'Left Working Distance')
      cy.get('#OEModule_OphCiExamination_models_Retinoscopy_left_form > .active-form > .row > .cols-7 > tbody > :nth-child(3) > :nth-child(1)').should('contain' , 'Angle')
      cy.get('#OEModule_OphCiExamination_models_Retinoscopy_left_form > .active-form > .row > .cols-7 > tbody > :nth-child(4) > :nth-child(1)').should('contain' , 'P1')
      cy.get('#OEModule_OphCiExamination_models_Retinoscopy_left_form > .active-form > .row > .cols-7 > tbody > :nth-child(5) > :nth-child(1)').should('contain' , 'P2')
      cy.get('#OEModule_OphCiExamination_models_Retinoscopy_left_form > .active-form > .row > .cols-7 > tbody > :nth-child(6) > :nth-child(1)').should('contain' , 'Refraction')
      
    })

  
     //To add Retinoscopy values to Right eye
     it('0024.5_To_Add_Retinoscopy_Values_Right_Eye' , () => {
      cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div  >  div > button + button').eq(0).should('be.visible').click()

     //Get the value of Retinoscopy, as mentioned in the contrastsensitivity json file
     cy.fixture("contrastsensitivity.json").then((contrastsensitivity) => {
      cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table > tbody > tr > td > div > div > ul').eq(0).contains(contrastsensitivity.Right_Working_Distance_Right_Eye).click()
      cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul').eq(0).contains(contrastsensitivity.Angle_Right_Eye_1).click()
      cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul').eq(1).contains(contrastsensitivity.Angle_Right_Eye_2).click()
      cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul ').eq(2).contains(contrastsensitivity.Angle_Right_Eye_3).click()
      
      //cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table > tbody > tr > td > div > div > ul ').eq(1).contains(contrastsensitivity.P1_Sign_Right_Eye).click()

      cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul').eq(3).contains(contrastsensitivity.P1_Value1_Right_Eye).click()
      cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul').eq(4).contains(contrastsensitivity.P1_Value2_Right_Eye).click()
      cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table > tbody > tr > td > div > div > ul ').eq(2).contains(contrastsensitivity.P1_Value3_Right_Eye).click()
      
      //cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table > tbody > tr > td > div > div > ul ').eq(3).contains(contrastsensitivity.P2_Sign_Right_Eye).click()
      
      cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul').eq(5).contains(contrastsensitivity.P2_Value1_Right_Eye).click()
      cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul ').eq(6).contains(contrastsensitivity.P2_Value2_Right_Eye).click()
      cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table > tbody > tr > td > div > div > ul').eq(4).contains(contrastsensitivity.P2_Value3_Right_Eye).click()
    
    //Click the button to close the popup, post the selections made on the popup window
      cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > div + div ').eq(0).should('be.visible').click()
     })
    })

// To add Retinoscopy comments to Right Eye
 it('0024.6_To_Add_Comments_Right_Eye' , () => {
  cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div  >  div > button').eq(0).scrollIntoView().should('be.visible')
  cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div  >  div > button').eq(0).should('be.visible').click()

    cy.fixture("contrastsensitivity.json").then((contrastsensitivity) => {
      
    //Add comments to the Retinoscopy Right Eye , as mentioned in the addexaminationevents file
      cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div   > div >  div   > div > textarea').eq(0).should('be.visible').clear().type(contrastsensitivity.Retinoscopy_Comments_Right_Eye)
    })
 })   

 //Add Dilation To Right Eye
   it('0024.7_To_Add_Dilation_Right_Eye' , () => {
      cy.get('[data-element-type-name="Retinoscopy"] >  div > div  > div > div + div  > table  > tbody > tr > td > input + input').eq(0).click()
   })
   


//To add Retinoscopy values to Left eye
it('0024.8_To_Add_Retinoscopy_Values_Left_Eye' , () => {
   cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div  >  div > button + button').eq(1).should('be.visible').click()

 //Get the value of Retinoscopy, as mentioned in the contrastsensitivity json file
cy.fixture("contrastsensitivity.json").then((contrastsensitivity) => {
  cy.fixture("contrastsensitivity.json").then((contrastsensitivity) => {
    cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table > tbody > tr > td > div > div > ul ').eq(5).contains(contrastsensitivity.Left_Working_Distance_Left_Eye).click()
    cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul').eq(7).contains(contrastsensitivity.Angle_Left_Eye_1).click()
    cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul').eq(8).contains(contrastsensitivity.Angle_Left_Eye_2).click()
    cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul ').eq(9).contains(contrastsensitivity.Angle_Left_Eye_3).click()
    
    //cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table > tbody > tr > td > div > div > ul ').eq(6).contains(contrastsensitivity.P1_Sign_Left_Eye).click()
    
    cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul').eq(10).contains(contrastsensitivity.P1_Value1_Left_Eye).click()
    cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul').eq(11).contains(contrastsensitivity.P1_Value2_Left_Eye).click()
    cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table > tbody > tr > td > div > div > ul ').eq(7).contains(contrastsensitivity.P1_Value3_Left_Eye).click()
    
    //cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table > tbody > tr > td > div > div > ul ').eq(8).contains(contrastsensitivity.P2_Sign_Left_Eye).click()
    
    cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul').eq(12).contains(contrastsensitivity.P2_Value1_Left_Eye).click()
    cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul ').eq(13).contains(contrastsensitivity.P2_Value2_Left_Eye).click()
    cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table > tbody > tr > td > div > div > ul').eq(9).contains(contrastsensitivity.P2_Value3_Left_Eye).click()


  //Click the button to close the popup, post the selections made on the popup window
     cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > div + div ').eq(1).should('be.visible').click()
})
})
})

// To add Retinoscopy comments to Left Eye
it('0024.9_To_Add_Comments_Left_Eye' , () => {
  cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div  >  div > button').eq(2).scrollIntoView().should('be.visible')
  cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div  >  div > button').eq(2).should('be.visible').click()

  cy.fixture("contrastsensitivity.json").then((contrastsensitivity) => {
    
    //Add comments to the Retinoscopy Left eye, as mentioned in the addexaminationevents file
    cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div   > div >  div   > div > textarea ').eq(1).should('be.visible').clear().type(contrastsensitivity.Retinoscopy_Comments_Left_Eye)
  })
  
})

//Add Dilation To Left Eye
  it('0024.10_To_Add_Dilation_Left_Eye' , () => {
    cy.get('[data-element-type-name="Retinoscopy"] >  div > div  > div > div + div  > table  > tbody > tr > td > input + input').eq(1).click()
  })
})
