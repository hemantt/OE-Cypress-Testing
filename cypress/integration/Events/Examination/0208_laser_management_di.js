//Test script for Laser Management element
describe('0208.1_Laser_Management_DI', () => {

    //Add the Laser Management 
    it('0208.1_To_Add_Laser_Management' , () => {
        cy.get("#js-manage-elements-btn").should('be.visible').click()
        cy.get('#manage-elements-Laser-Management').should('be.visible').click()
        cy.get('.blue').should('be.visible').click()
    })

    //Verify that Laser Management element is loaded successfully
    it('0208.2_To_Validate_Laser_Management_SectionisAvailable' , () => {
      cy.get('[data-element-type-name="Laser Management"] > header > h3').should('be.visible').should('contain', 'Laser Management')
    })

    //Verify that the labels are loaded successfully
    it('0208.3_Validate_Labels' , () => {  
    

        
        cy.get('[for="OEModule_OphCiExamination_models_Element_OphCiExamination_LaserManagement_right_laser_status_id"]')
        .should('be.visible').should('contain','Laser')

        cy.get('[for="OEModule_OphCiExamination_models_Element_OphCiExamination_LaserManagement_left_laser_status_id"]')
        .should('be.visible').should('contain','Laser')



    })

    //   //Add Laser Details
    it('0208.4_To_Add_Details' , () => {
      cy.fixture("clinicalmanagement.json").then((clinicalmanagement) => {

         //----------------------------- RIGHT EYE DETAILS ---------------------------------
        
         // Case - When "Not Required" is chosen
        if (clinicalmanagement.Laser_Status_Right_Eye=="Not Required")
      {
      
      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_LaserManagement_right_laser_status_id')
      .select(clinicalmanagement.Laser_Status_Right_Eye)
      }

      // Case - When "Deferred" is chosen
      if (clinicalmanagement.Laser_Status_Right_Eye=="Deferred")
      {
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_LaserManagement_right_laser_status_id')
        .select(clinicalmanagement.Laser_Status_Right_Eye)

        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_LaserManagement_right_laser_deferralreason_id')
        .select(clinicalmanagement.Laser_Deferral_Reason_Right_Eye)

          // Case - When "Deferred" is chosen and Deferral Reason is Chosen as "Other"
          if (clinicalmanagement.Laser_Deferral_Reason_Right_Eye=="Other")
          {
            cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_LaserManagement_right_laser_deferralreason_other')
            .clear().type(clinicalmanagement.Laser_Deferral_Reason_Other_Right_Eye)
          }
      }

      // Case - When "Booked for a future dated" is chosen
      if (clinicalmanagement.Laser_Status_Right_Eye=="Booked for a future date")
      {
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_LaserManagement_right_laser_status_id')
        .select(clinicalmanagement.Laser_Status_Right_Eye)

        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_LaserManagement_right_lasertype_id')
        .select(clinicalmanagement.Laser_Type_Right_Eye)

          // Case - When "Booked for a future date" is chosen and "Laser Type" is Chosen as "Other"
          if (clinicalmanagement.Laser_Type_Right_Eye=="Other")
          {
            cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_LaserManagement_right_lasertype_other')
            .clear().type(clinicalmanagement.Laser_Type_Name_Right_Eye)
          }

          cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_LaserManagement_right_comments')
          .clear().type(clinicalmanagement.Laser_Management_Comments_Right)
      }

      // Case - When "Performed today" is chosen
      if (clinicalmanagement.Laser_Status_Right_Eye=="Performed today")
      {
        // An alert is displayed after selecting Performed today from dropdown
        cy.get('#div_OEModule_OphCiExamination_models_Element_OphCiExamination_LaserManagement_treatment_fields>div>div>table>tbody>tr#right_laser_event_hint>td>div>div>span')
        .should('contain',"Ensure a Laser event is added for this patient when procedure is complete")

        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_LaserManagement_right_laser_status_id')
        .select(clinicalmanagement.Laser_Status_Right_Eye)

        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_LaserManagement_right_lasertype_id')
        .select(clinicalmanagement.Laser_Type_Right_Eye)

          // Case - When "Performed today" is chosen and "Laser Type" is Chosen as "Other"
          if (clinicalmanagement.Laser_Type_Right_Eye=="Other")
          {
            cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_LaserManagement_right_lasertype_other')
            .clear().type(clinicalmanagement.Laser_Type_Name_Right_Eye)
          }

          cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_LaserManagement_right_comments')
          .clear().type(clinicalmanagement.Laser_Management_Comments_Right)
      }

      //---------------------------------- LEFT EYE DETAILS------------------------------

      // Case - When "Not Required" is chosen
      if (clinicalmanagement.Laser_Status_Left_Eye=="Not Required")
      {
      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_LaserManagement_left_laser_status_id')
      .select(clinicalmanagement.Laser_Status_Left_Eye)

      }
      // Case - When "Deffered" is chosen
      if (clinicalmanagement.Laser_Status_Left_Eye=="Deferred")
      {
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_LaserManagement_left_laser_status_id')
        .select(clinicalmanagement.Laser_Status_Left_Eye)

        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_LaserManagement_left_laser_deferralreason_id')
        .select(clinicalmanagement.Laser_Deferral_Reason_Left_Eye)

        // Case - When "Deffered" is chosen and Deferral Reason Chosen is "Other"
        if (clinicalmanagement.Laser_Deferral_Reason_Left_Eye=="Other")
        {
          cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_LaserManagement_left_laser_deferralreason_other')
          .clear().type(clinicalmanagement.Laser_Deferral_Reason_Other_Left_Eye)
        }
      }

      // Case - When "Booked for a future date" is chosen
      if (clinicalmanagement.Laser_Status_Left_Eye=="Booked for a future date")
      {
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_LaserManagement_left_laser_status_id')
        .select(clinicalmanagement.Laser_Status_Left_Eye)

        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_LaserManagement_left_lasertype_id')
        .select(clinicalmanagement.Laser_Type_Left_Eye)

         // Case - When "Booked for a future date" is chosen and Laser Type Chosen is "Other"
          if (clinicalmanagement.Laser_Type_Left_Eye=="Other")
          {
            cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_LaserManagement_left_lasertype_other')
            .clear().type(clinicalmanagement.Laser_Type_Name_Left_Eye)
          }

        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_LaserManagement_left_comments')
        .clear().type(clinicalmanagement.Laser_Management_Comments_Left)
      }



      // Case - When "Performed today" is chosen
      if (clinicalmanagement.Laser_Status_Left_Eye=="Performed today")
      {

        // An alert is displayed after selecting Performed today from dropdown
        cy.get('#div_OEModule_OphCiExamination_models_Element_OphCiExamination_LaserManagement_treatment_fields>div>div>table>tbody>tr#left_laser_event_hint>td>div>div>span')
        .should('contain',"Ensure a Laser event is added for this patient when procedure is complete")

        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_LaserManagement_left_laser_status_id')
        .select(clinicalmanagement.Laser_Status_Left_Eye)

        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_LaserManagement_left_lasertype_id')
        .select(clinicalmanagement.Laser_Type_Left_Eye)

          // Case - When "Performed today" is chosen and Laser Type is chosen as "Other"
          if (clinicalmanagement.Laser_Type_Left_Eye=="Other")
          {
            cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_LaserManagement_left_lasertype_other')
            .clear().type(clinicalmanagement.Laser_Type_Name_Left_Eye)
          }

          cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_LaserManagement_left_comments')
          .clear().type(clinicalmanagement.Laser_Management_Comments_Left)
      }

    })

   
      
   })


  

})
