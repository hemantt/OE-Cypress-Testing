//Test script for Glucoma Overall Plan
describe('0208_Laser_Management_DV', () => {

  it('0208.5_Validate_Laser_Management_Element_Header' , () => {
    
    cy.get('[data-element-type-name="Laser Management"] > header > h3').should('be.visible').should('contain', 'Laser Management')
  
  })

  it('0208.6_Validate_Laser_Management_Details_Right_Eye' , () => {
            
    cy.fixture("clinicalmanagement.json").then((clinicalmanagement) => {
      
      // Validate Laser Management Right Eye Input Data
    if (clinicalmanagement.Laser_Status_Right_Eye=="Not Required")
      {
          cy.get('[data-element-type-name="Laser Management"]>div>div>table>tbody>tr>td+td>div')
           .should('contain',clinicalmanagement.Laser_Status_Right_Eye)
      }

    if(clinicalmanagement.Laser_Status_Right_Eye=="Deferred")

      {

        cy.get('[data-element-type-name="Laser Management"]>div>div>table>tbody>tr>td+td>div')
        .should('contain',clinicalmanagement.Laser_Status_Right_Eye)

        if (clinicalmanagement.Laser_Deferral_Reason_Right_Eye =="Other")
        {

          cy.get('[data-element-type-name="Laser Management"]>div>div>table>tbody>tr>td+td>div')
          .should('contain',clinicalmanagement.Laser_Deferral_Reason_Other_Right_Eye)

        }

        else
        {


          cy.get('[data-element-type-name="Laser Management"]>div>div>table>tbody>tr>td+td>div')
          .should('contain',clinicalmanagement.Laser_Deferral_Reason_Right_Eye)


        }

      }
      if(clinicalmanagement.Laser_Status_Right_Eye=="Booked for a future date")
      {
        cy.get('[data-element-type-name="Laser Management"]>div>div>table>tbody>tr>td+td>div')
          .should('contain',clinicalmanagement.Laser_Status_Right_Eye)

          if (clinicalmanagement.Laser_Type_Right_Eye=="Other")
          {
          cy.get('[data-element-type-name="Laser Management"]>div>div>table>tbody>tr>td+td>div')
          .should('contain',clinicalmanagement.Laser_Type_Name_Right_Eye)
          }

          else
          {

          cy.get('[data-element-type-name="Laser Management"]>div>div>table>tbody>tr>td+td>div')
          .should('contain',clinicalmanagement.Laser_Type_Right_Eye)
          
          }

          cy.get('[data-element-type-name="Laser Management"]>div>div>table>tbody>tr>td+td>div')
          .should('contain',clinicalmanagement.Laser_Management_Comments_Right)
      }

      if(clinicalmanagement.Laser_Status_Right_Eye=="Performred today")
      {
        cy.get('[data-element-type-name="Laser Management"]>div>div>table>tbody>tr>td+td>div')
          .should('contain',clinicalmanagement.Laser_Status_Right_Eye)

          if (clinicalmanagement.Laser_Type_Right_Eye=="Other")
          {
          cy.get('[data-element-type-name="Laser Management"]>div>div>table>tbody>tr>td+td>div')
          .should('contain',clinicalmanagement.Laser_Type_Name_Right_Eye)
          }

          else
          {

          cy.get('[data-element-type-name="Laser Management"]>div>div>table>tbody>tr>td+td>div')
          .should('contain',clinicalmanagement.Laser_Type_Right_Eye)
          
          }

          cy.get('[data-element-type-name="Laser Management"]>div>div>table>tbody>tr>td+td>div')
          .should('contain',clinicalmanagement.Laser_Management_Comments_Right)
      }

      
    })
   
  })


  it('0208.7_Validate_Laser_Management_Details_Left_Eye' , () => {
            
    cy.fixture("clinicalmanagement.json").then((clinicalmanagement) => {
      
      // Validate Laser Management Left Eye Input Data
    if (clinicalmanagement.Laser_Status_Left_Eye=="Not Required")
      {
          cy.get('[data-element-type-name="Laser Management"]>div>div>table>tbody>tr>td+td>div')
           .should('contain',clinicalmanagement.Laser_Status_Left_Eye)
      }

    if(clinicalmanagement.Laser_Status_Left_Eye=="Deferred")

      {

        cy.get('[data-element-type-name="Laser Management"]>div>div>table>tbody>tr>td+td>div')
        .should('contain',clinicalmanagement.Laser_Status_Left_Eye)

        if (clinicalmanagement.Laser_Deferral_Reason_Left_Eye =="Other")
        {

          cy.get('[data-element-type-name="Laser Management"]>div>div>table>tbody>tr>td+td>div')
          .should('contain',clinicalmanagement.Laser_Deferral_Reason_Other_Left_Eye)

        }

        else
        {


          cy.get('[data-element-type-name="Laser Management"]>div>div>table>tbody>tr>td+td>div')
          .should('contain',clinicalmanagement.Laser_Deferral_Reason_Left_Eye)


        }

      }
      if(clinicalmanagement.Laser_Status_Left_Eye=="Booked for a future date")
      {
        cy.get('[data-element-type-name="Laser Management"]>div>div>table>tbody>tr>td+td>div')
          .should('contain',clinicalmanagement.Laser_Status_Left_Eye)

          if (clinicalmanagement.Laser_Type_Left_Eye=="Other")
          {
          cy.get('[data-element-type-name="Laser Management"]>div>div>table>tbody>tr>td+td>div')
          .should('contain',clinicalmanagement.Laser_Type_Name_Left_Eye)
          }

          else
          {

          cy.get('[data-element-type-name="Laser Management"]>div>div>table>tbody>tr>td+td>div')
          .should('contain',clinicalmanagement.Laser_Type_Left_Eye)
          
          }

          cy.get('[data-element-type-name="Laser Management"]>div>div>table>tbody>tr>td+td>div')
          .should('contain',clinicalmanagement.Laser_Management_Comments_Left)
      }

      if(clinicalmanagement.Laser_Status_Left_Eye=="Performred today")
      {
        cy.get('[data-element-type-name="Laser Management"]>div>div>table>tbody>tr>td+td>div')
          .should('contain',clinicalmanagement.Laser_Status_Left_Eye)

          if (clinicalmanagement.Laser_Type_Left_Eye=="Other")
          {
          cy.get('[data-element-type-name="Laser Management"]>div>div>table>tbody>tr>td+td>div')
          .should('contain',clinicalmanagement.Laser_Type_Name_Left_Eye)
          }

          else
          {

          cy.get('[data-element-type-name="Laser Management"]>div>div>table>tbody>tr>td+td>div')
          .should('contain',clinicalmanagement.Laser_Type_Left_Eye)
          
          }

          cy.get('[data-element-type-name="Laser Management"]>div>div>table>tbody>tr>td+td>div')
          .should('contain',clinicalmanagement.Laser_Management_Comments_Left)
      }

      
    })
   
  })



 
   
  
})
