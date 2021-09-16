describe('0025_Refraction_Element_DI', () => {

      //Add the  refraction elements
      it('0025.1_To_add_Refraction_Element' , () => {
        cy.get("#js-manage-elements-btn").should('be.visible').click()
        cy.get('#manage-elements-Refraction').should('be.visible').click()
        cy.get('.blue').should('be.visible').click()
      })

      //Verify that  refraction is loaded successfully
      it('0025.2_To_Validate_Refraction_isAvailable' , () => {
        cy.get('[data-element-type-name="Refraction"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Refraction"] > header > h3').should('contain' , 'Refraction')
      }) 

      //To verify Headers for right eye
      it('0025.3_To_Check_Headers Field_Right_Eye' , () => {
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction_right_form > .active-form > table.cols-full > thead > tr > :nth-child(1)').should('have.text' , 'Sphere')
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction_right_form > .active-form > table.cols-full > thead > tr > :nth-child(2)').should('have.text' , 'Cylinder')
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction_right_form > .active-form > table.cols-full > thead > tr > :nth-child(3)').should('have.text' , 'Axis')

      })
      
      //To verify Headers for left eye
      it('0025.4_To_Check_Headers Field_Left_Eye' , () => {
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction_left_form > .active-form > table.cols-full > thead > tr > :nth-child(1)').should('have.text' , 'Sphere')
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction_left_form > .active-form > table.cols-full > thead > tr > :nth-child(2)').should('have.text' , 'Cylinder')
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction_left_form > .active-form > table.cols-full > thead > tr > :nth-child(3)').should('have.text' , 'Axis')
      })


      //Add and verify the Refraction details and values for Right Eye
      it('0025.5_To_Add_And_Verify_Details_Right_Eye' , () => {
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction_right_form > div > div > div + div > button + button').should('be.visible').click()
  
      //Add details
        cy.fixture("contrastsensitivity.json").then((contrastsensitivity) => {
      // cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction_right_form > div > div > div + div > div > table > tbody > tr > td > div > div > ul').eq(0).contains(contrastsensitivity.Refraction_Sphere_Right_Eye_Sign).click()
        cy.get('[data-id="OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction\\[right_readings\\]\\[\\{\\{row_count\\}\\}\\]\\_sphere"]').eq(1).contains(contrastsensitivity.Refraction_Sphere_Right_Eye_1).click()
        cy.get('[data-id="OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction\\[right_readings\\]\\[\\{\\{row_count\\}\\}\\]\\_sphere"]').eq(2).contains(contrastsensitivity.Refraction_Sphere_Right_Eye_2).click()
          
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction\\[right_readings\\]\\[\\{\\{row_count\\}\\}\\]\\_sphere > div > ul').eq(1).contains(contrastsensitivity.Refraction_Sphere_Right_Eye_3).click()
      //cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction\\[right_readings\\]\\[\\{\\{row_count\\}\\}\\]\\_cylinder > div > ul').eq(0).contains(contrastsensitivity.Refraction_Cylinder_Right_Eye_Sign).click()
          
        cy.get('[data-id="OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction\\[right_readings\\]\\[\\{\\{row_count\\}\\}\\]\\_cylinder"]').eq(1).contains(contrastsensitivity.Refraction_Cylinder_Right_Eye_1).click()
        cy.get('[data-id="OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction\\[right_readings\\]\\[\\{{row_count\\}\\}\\]\\_cylinder"]').eq(2).contains(contrastsensitivity.Refraction_Cylinder_Right_Eye_2).click()
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction\\[right_readings\\]\\[\\{\\{row_count\\}\\}\\]\\_cylinder > div > ul').eq(1).contains(contrastsensitivity.Refraction_Cylinder_Right_Eye_3).click()
          
        cy.get('[data-id="OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction\\[right_readings\\]\\[\\{\\{row_count\\}\\}\\]\\_axis"]').eq(1).contains(contrastsensitivity.Refraction_Axis_Right_Eye_1).click()
        cy.get('[data-id="OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction\\[right_readings\\]\\[\\{\\{row_count\\}\\}\\]\\_axis"]').eq(2).contains(contrastsensitivity.Refraction_Axis_Right_Eye_2).click()
        cy.get('[data-id="OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction\\[right_readings\\]\\[\\{\\{row_count\\}\\}\\]\\_axis"]').eq(3).contains(contrastsensitivity.Refraction_Axis_Right_Eye_3).click()
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction\\[right_readings\\]\\[\\{\\{row_count\\}\\}\\]\\_type_id ').contains(contrastsensitivity.Refraction_Type_Right_Eye).click()
           
      //Click the button to close the popup, post the selections made on the popup window
        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction_right_form > div > div > div > div > div + div").should('be.visible').click()
      })
    }) 

      // To add comments to Right Eye
      it('0025.6_To_Add_and_Verify_Comments' , () => {
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction_right_form  > div > div > div > button ').eq(0).should('be.visible').click()
      cy.fixture("contrastsensitivity.json").then((contrastsensitivity) => {
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction_right_form > div > div > div > div  > textarea').should('be.visible').clear().type(contrastsensitivity.Refraction_Comments_Right_Eye)
        })
      })

    //Add and verify the Refraction details and values for Left Eye
    it('0025.7_To_Add_And_Verify_Details_Left_Eye' , () => {
      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction_left_form > div > div > div + div > button + button').should('be.visible').click()  
     
     //Add details
     cy.fixture("contrastsensitivity.json").then((contrastsensitivity) => {
      // cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction_left_form > div > div > div + div > div > table > tbody > tr > td > div > div > ul').eq(0).contains(contrastsensitivity.Refraction_Sphere_Right_Eye_Sign).click()
        cy.get('[data-id="OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction\\[left_readings\\]\\[\\{\\{row_count\\}\\}\\]\\_sphere"]').eq(1).contains(contrastsensitivity.Refraction_Sphere_Left_Eye_1).click()
        cy.get('[data-id="OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction\\[left_readings\\]\\[\\{\\{row_count\\}\\}\\]\\_sphere"]').eq(2).contains(contrastsensitivity.Refraction_Sphere_Left_Eye_2).click()

        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction\\[left_readings\\]\\[\\{\\{row_count\\}\\}\\]\\_sphere > div > ul').eq(1).contains(contrastsensitivity.Refraction_Sphere_Left_Eye_3).click()
      //cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction\\[left_readings\\]\\[\\{\\{row_count\\}\\}\\]\\_cylinder > div > ul').eq(0).contains(contrastsensitivity.Refraction_Cylinder_Left_Eye_Sign).click()
            
          cy.get('[data-id="OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction\\[left_readings\\]\\[\\{\\{row_count\\}\\}\\]\\_cylinder"]').eq(1).contains(contrastsensitivity.Refraction_Cylinder_Left_Eye_1).click()
          cy.get('[data-id="OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction\\[left_readings\\]\\[\\{{row_count\\}\\}\\]\\_cylinder"]').eq(2).contains(contrastsensitivity.Refraction_Cylinder_Left_Eye_2).click()
          cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction\\[left_readings\\]\\[\\{\\{row_count\\}\\}\\]\\_cylinder > div > ul').eq(1).contains(contrastsensitivity.Refraction_Cylinder_Left_Eye_3).click()
            
          cy.get('[data-id="OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction\\[left_readings\\]\\[\\{\\{row_count\\}\\}\\]\\_axis"]').eq(1).contains(contrastsensitivity.Refraction_Axis_Left_Eye_1).click()
          cy.get('[data-id="OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction\\[left_readings\\]\\[\\{\\{row_count\\}\\}\\]\\_axis"]').eq(2).contains(contrastsensitivity.Refraction_Axis_Left_Eye_2).click()
          cy.get('[data-id="OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction\\[left_readings\\]\\[\\{\\{row_count\\}\\}\\]\\_axis"]').eq(3).contains(contrastsensitivity.Refraction_Axis_Left_Eye_3).click()
          cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction\\[left_readings\\]\\[\\{\\{row_count\\}\\}\\]\\_type_id ').contains(contrastsensitivity.Refraction_Type_Left_Eye).click()   

      //Click the button to close the popup, post the selections made on the popup window
        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction_left_form > div > div > div > div > div + div").should('be.visible').click()
      })
    }) 

      // To add comments to Left Eye
      it('0025.8_To_Add_and_Verify_Comments' , () => {
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction_left_form  > div > div > div > button ').eq(0).should('be.visible').click()
      cy.fixture("contrastsensitivity.json").then((contrastsensitivity) => {
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Refraction_left_form > div > div > div > div  > textarea').should('be.visible').clear().type(contrastsensitivity.Refraction_Comments_Left_Eye)
      })
    })



})

    
    



    



    
           
            
    
    
