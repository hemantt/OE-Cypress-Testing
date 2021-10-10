describe('0155_Element_Retinoscopy_DI', () => {
    it('0155.1_Select_Retinoscopy_Element', () => {

        //To get the Retinoscopy element
        cy.get("#js-manage-elements-btn").should('be.visible').click()

        cy.get('body').then((body) => {
      
            if (body.find('#manage-elements-Retinoscopy[class="added"]').length == 0)
            {
              cy.get("#manage-elements-Retinoscopy").should('be.visible').click()
            }
      
        })
      
        cy.get(".blue.hint.cols-full").should('be.visible').click()

      })

    //To validate Retinoscoopy element     
    it('0155.2_To_Check_Retinoscopy_Section_IsAvailable' ,() => {
      cy.get('[data-element-type-name="Retinoscopy"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Retinoscopy"] > header > h3').should('contain', 'Retinoscopy')
  })
  
    //To validate Labels are loaded successfully for Right Eye
    it('0155.3_To_Validate_Labels_Right_Eye' ,() => {
      cy.get('#OEModule_OphCiExamination_models_Retinoscopy_right_form > .active-form > .row > .cols-7 > tbody > :nth-child(1) > :nth-child(1)').should('contain' ,'Dilated')
      cy.get('#OEModule_OphCiExamination_models_Retinoscopy_right_form > .active-form > .row > .cols-7 > tbody > :nth-child(2) > :nth-child(1)').should('contain' , 'Right Working Distance')
      cy.get('#OEModule_OphCiExamination_models_Retinoscopy_right_form > .active-form > .row > .cols-7 > tbody > :nth-child(3) > :nth-child(1)').should('contain' , 'Angle')
      cy.get('#OEModule_OphCiExamination_models_Retinoscopy_right_form > .active-form > .row > .cols-7 > tbody > :nth-child(4) > :nth-child(1)').should('contain' , 'P1')
      cy.get('#OEModule_OphCiExamination_models_Retinoscopy_right_form > .active-form > .row > .cols-7 > tbody > :nth-child(5) > :nth-child(1)').should('contain' , 'P2')
      cy.get('#OEModule_OphCiExamination_models_Retinoscopy_right_form > .active-form > .row > .cols-7 > tbody > :nth-child(6) > :nth-child(1)').should('contain' , 'Refraction')
    })
     
    //To validate Labels are loaded successfully for Left Eye
      it('0155.4_To_Validate_Labels_Left_Eye' , () => {
      cy.get('#OEModule_OphCiExamination_models_Retinoscopy_left_form > .active-form > .row > .cols-7 > tbody > :nth-child(1) > :nth-child(1)').should('contain' ,'Dilated')
      cy.get('#OEModule_OphCiExamination_models_Retinoscopy_left_form > .active-form > .row > .cols-7 > tbody > :nth-child(2) > :nth-child(1)').should('contain' , 'Left Working Distance')
      cy.get('#OEModule_OphCiExamination_models_Retinoscopy_left_form > .active-form > .row > .cols-7 > tbody > :nth-child(3) > :nth-child(1)').should('contain' , 'Angle')
      cy.get('#OEModule_OphCiExamination_models_Retinoscopy_left_form > .active-form > .row > .cols-7 > tbody > :nth-child(4) > :nth-child(1)').should('contain' , 'P1')
      cy.get('#OEModule_OphCiExamination_models_Retinoscopy_left_form > .active-form > .row > .cols-7 > tbody > :nth-child(5) > :nth-child(1)').should('contain' , 'P2')
      cy.get('#OEModule_OphCiExamination_models_Retinoscopy_left_form > .active-form > .row > .cols-7 > tbody > :nth-child(6) > :nth-child(1)').should('contain' , 'Refraction')
      
    })

  
     //To add Retinoscopy values to Right eye
     it('0155.5_To_Add_Retinoscopy_Values_Right_Eye' , () => {
      cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div  >  div > button + button').eq(0).should('be.visible').click()

     //Get the value of Retinoscopy, as mentioned in the contrastsensitivity json file
     cy.fixture("AddExaminationEvents_Visual_Functions.json").then((contrastsensitivity) => {
     if(contrastsensitivity.Retinoscopy_Right_Working_Distance_Right_Eye == "1.5m")  
     {
      cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table > tbody > tr > td > div > div > ul').eq(0).contains(contrastsensitivity.Retinoscopy_Right_Working_Distance_Right_Eye).click()

     }
     if(contrastsensitivity.Retinoscopy_Right_Working_Distance_Right_Eye == "1/3m")  
     {
      cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table > tbody > tr > td > div > div > ul').eq(0).contains(contrastsensitivity.Retinoscopy_Right_Working_Distance_Right_Eye)

     }    
      cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul').eq(0).contains(contrastsensitivity.Retinoscopy_Angle_Right_Eye_1).click()
      cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul').eq(1).contains(contrastsensitivity.Retinoscopy_Angle_Right_Eye_2).click()

      if(contrastsensitivity.Retinoscopy_Angle_Right_Eye_3 == "1")
      {
      cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul ').eq(2).contains(contrastsensitivity.Retinoscopy_Angle_Right_Eye_3).click()
      }
      if(contrastsensitivity.Retinoscopy_Angle_Right_Eye_3 == "0")
      {
      cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul ').eq(2).contains(contrastsensitivity.Retinoscopy_Angle_Right_Eye_3)
      }
     

      if(contrastsensitivity.Retinoscopy_P1_Sign_Right_Eye == "-") 
      {
        cy.get('[data-element-type-name="Retinoscopy"]  > div > div > div  > div + div + div > div + div > button + button + div > div + div + table >  tbody > tr > td + td + td > div  > div > ul > li > span > i.oe-i.active.minus').eq(0).should('be.visible').click()
      }
      
      if(contrastsensitivity.Retinoscopy_P1_Sign_Right_Eye == "+")
      {
        cy.get('[data-element-type-name="Retinoscopy"]  > div > div > div  > div + div + div > div + div > button + button + div > div + div + table >  tbody > tr > td + td + td > div  > div > ul > li > span > i.oe-i.active.plus').eq(0).should('be.visible')
      }
      cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul').eq(3).contains(contrastsensitivity.Retinoscopy_P1_Value1_Right_Eye).click()
      if(contrastsensitivity.Retinoscopy_P1_Value2_Right_Eye == "1")
      {
      cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul').eq(4).contains(contrastsensitivity.Retinoscopy_P1_Value2_Right_Eye).click()
      }
      if(contrastsensitivity.Retinoscopy_P1_Value2_Right_Eye == "0")
      {
      cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul').eq(4).contains(contrastsensitivity.Retinoscopy_P1_Value2_Right_Eye)
      }
      cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table > tbody > tr > td > div > div > ul ').eq(2).contains(contrastsensitivity.Retinoscopy_P1_Value3_Right_Eye).click()
      
      

      if(contrastsensitivity.Retinoscopy_P2_Sign_Right_Eye == "-") 
      {
        cy.get('[data-element-type-name="Retinoscopy"]  > div > div > div  > div + div + div > div + div > button + button + div > div + div + table >  tbody > tr > td + td + td > div  > div > ul > li > span > i.oe-i.active.minus').eq(1).should('be.visible').click()
      }
      
      else(contrastsensitivity.Retinoscopy_P2_Sign_Right_Eye== "+")
      {
        cy.get('[data-element-type-name="Retinoscopy"]  > div > div > div  > div + div + div > div + div > button + button + div > div + div + table >  tbody > tr > td + td + td > div  > div > ul > li > span > i.oe-i.active.plus').eq(1).should('be.visible')
      }
      
      cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul').eq(5).contains(contrastsensitivity.Retinoscopy_P2_Value1_Right_Eye).click()
      if(contrastsensitivity.Retinoscopy_P2_Value2_Right_Eye== "1")
      {
      cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul ').eq(6).contains(contrastsensitivity.Retinoscopy_P2_Value2_Right_Eye).click()
      }
      if(contrastsensitivity.Retinoscopy_P2_Value2_Right_Eye== "0")
      {
      cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul ').eq(6).contains(contrastsensitivity.Retinoscopy_P2_Value2_Right_Eye)
      }
      cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table > tbody > tr > td > div > div > ul').eq(4).contains(contrastsensitivity.Retinoscopy_P2_Value3_Right_Eye).click()
    
    //Click the button to close the popup, post the selections made on the popup window
      cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > div + div').eq(0).should('be.visible').click()
     })
    })

// To add Retinoscopy comments to Right Eye
 it('0155.6_To_Add_Retinoscopy_Comments_Right_Eye' , () => {
  cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div  >  div > button').eq(0).scrollIntoView().should('be.visible')
  cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div  >  div > button').eq(0).should('be.visible').click()

    cy.fixture("AddExaminationEvents_Visual_Functions.json").then((contrastsensitivity) => {
      
//Add comments to the Retinoscopy Right Eye , as mentioned in the addexaminationevents file
      cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div   > div >  div   > div > textarea').eq(0).should('be.visible').clear().type(contrastsensitivity.Retinoscopy_Comments_Right_Eye)
    })
 })   

 //Add Dilation To Right Eye
   it('0155.7_To_Add_Dilation_Right_Eye' , () => {
      cy.get('[data-element-type-name="Retinoscopy"] >  div > div  > div > div + div  > table  > tbody > tr > td > input + input').eq(0).click({ force: true })
   })
   
//To add Retinoscopy values to Left eye
it('0155.8_To_Add_Retinoscopy_Values_Left_Eye' , () => {
   cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div  >  div > button + button').eq(1).should('be.visible').click()
cy.fixture("AddExaminationEvents_Visual_Functions.json").then((contrastsensitivity) => {
  if(contrastsensitivity.Retinoscopy_Left_Working_Distance_Left_Eye=="1.5m")
  {
    cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table > tbody > tr > td > div > div > ul ').eq(5).contains(contrastsensitivity.Retinoscopy_Left_Working_Distance_Left_Eye).click()
  } 
 if(contrastsensitivity.Retinoscopy_Left_Working_Distance_Left_Eye=="1/3m")
  {
    cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table > tbody > tr > td > div > div > ul ').eq(5).contains(contrastsensitivity.Retinoscopy_Left_Working_Distance_Left_Eye)
  }   
    cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul').eq(7).contains(contrastsensitivity.Retinoscopy_Angle_Left_Eye_1).click()
    cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul').eq(8).contains(contrastsensitivity.Retinoscopy_Angle_Left_Eye_2).click()
  if(contrastsensitivity.Retinoscopy_Angle_Left_Eye_3 == "1")
  {
    cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul ').eq(9).contains(contrastsensitivity.Retinoscopy_Angle_Left_Eye_3).click()
  }
  if(contrastsensitivity.Retinoscopy_Angle_Left_Eye_3 == "0")
  {
    cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul ').eq(9).contains(contrastsensitivity.Retinoscopy_Angle_Left_Eye_3)
  }
    
    

    if(contrastsensitivity.Retinoscopy_P1_Sign_Left_Eye == "-") 
    {
      cy.get('[data-element-type-name="Retinoscopy"]  > div > div > div  > div + div + div > div + div > button + button + div > div + div + table >  tbody > tr > td + td + td > div  > div > ul > li > span > i.oe-i.active.minus').eq(2).should('be.visible').click()
    }
    
   if(contrastsensitivity.Retinoscopy_P1_Sign_Left_Eye== "+")
    {
      cy.get('[data-element-type-name="Retinoscopy"]  > div > div > div  > div + div + div > div + div > button + button + div > div + div + table >  tbody > tr > td + td + td > div  > div > ul > li > span > i.oe-i.active.plus').eq(2).should('be.visible')
    }
    
    cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul').eq(10).contains(contrastsensitivity.Retinoscopy_P1_Value1_Left_Eye).click()
    if(contrastsensitivity.Retinoscopy_P1_Value2_Left_Eye== "1")
    {
    cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul').eq(11).contains(contrastsensitivity.Retinoscopy_P1_Value2_Left_Eye).click()
    }
    if(contrastsensitivity.Retinoscopy_P1_Value2_Left_Eye== "0")
    {
    cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul').eq(11).contains(contrastsensitivity.Retinoscopy_P1_Value2_Left_Eye)
    }
    cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table > tbody > tr > td > div > div > ul ').eq(7).contains(contrastsensitivity.Retinoscopy_P1_Value3_Left_Eye).click()
    
    

    if(contrastsensitivity.Retinoscopy_P2_Sign_Left_Eye == "-") 
    {
      cy.get('[data-element-type-name="Retinoscopy"]  > div > div > div  > div + div + div > div + div > button + button + div > div + div + table >  tbody > tr > td + td + td > div  > div > ul > li > span > i.oe-i.active.minus').eq(3).should('be.visible').click()
    }
    
   if(contrastsensitivity.Retinoscopy_P2_Sign_Left_Eye== "+")
    {
      cy.get('[data-element-type-name="Retinoscopy"]  > div > div > div  > div + div + div > div + div > button + button + div > div + div + table >  tbody > tr > td + td + td > div  > div > ul > li > span > i.oe-i.active.plus').eq(3).should('be.visible')
    }
    
    cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul').eq(12).contains(contrastsensitivity.Retinoscopy_P2_Value1_Left_Eye).click()
    if(contrastsensitivity.Retinoscopy_P2_Value2_Left_Eye == "1")
    {
    cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul ').eq(13).contains(contrastsensitivity.Retinoscopy_P2_Value2_Left_Eye).click()
    }
    if(contrastsensitivity.Retinoscopy_P2_Value2_Left_Eye == "0")
    {
    cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table  > tbody > tr > td + td > div > div > div > ul ').eq(13).contains(contrastsensitivity.Retinoscopy_P2_Value2_Left_Eye)
    }
    cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > table > tbody > tr > td > div > div > ul').eq(9).contains(contrastsensitivity.Retinoscopy_P2_Value3_Left_Eye).click()


  //Click the button to close the popup, post the selections made on the popup window
     cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div > div + div > div > div + div').eq(1).should('be.visible').click()
})
})


// To add Retinoscopy comments to Left Eye
it('0155.9_To_Add_Retinoscopy_Comments_Left_Eye' , () => {
  cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div  >  div > button').eq(2).scrollIntoView().should('be.visible')
  cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div  >  div > button').eq(2).should('be.visible').click()

  cy.fixture("AddExaminationEvents_Visual_Functions.json").then((contrastsensitivity) => {
    
    //Add comments to the Retinoscopy Left eye, as mentioned in the addexaminationevents file
    cy.get('[data-element-type-name="Retinoscopy"] >  div > div >  div > div + div + div   > div >  div   > div > textarea ').eq(1).should('be.visible').clear().type(contrastsensitivity.Retinoscopy_Comments_Left_Eye)
  })
  
})

//Add Dilation To Left Eye
  it('0155.10_To_Add_Dilation_Left_Eye' , () => {
    cy.get('[data-element-type-name="Retinoscopy"] >  div > div  > div > div + div  > table  > tbody > tr > td > input + input').eq(1).click({ force: true })
  })
})
