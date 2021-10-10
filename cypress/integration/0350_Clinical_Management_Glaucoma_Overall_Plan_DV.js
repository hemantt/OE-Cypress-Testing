//Test script for Glucoma Overall Plan
describe('0350_Glaucoma_Overall_Plan_DV', () => {

    it('0350.7_Validate_Glaucoma_Overall_Plan_Element_Header' , () => {
      
      cy.get('[data-element-type-name="Glaucoma Overall Plan"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Glaucoma Overall Plan"] > header > h3').should('be.visible').should('contain', 'Glaucoma Overall Plan')
    
    })

    it('0350.8_Validate_Clinical_Interval' , () => {
              
      cy.fixture("AddExaminationEvents_Clinical_Management.json").then((clinicalmanagement) => {
        
        cy.get('[data-element-type-name="Glaucoma Overall Plan"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Glaucoma Overall Plan"]>div>div>div>div>div>ul>li').eq(0).should('be.visible').should('contain', "Clinic interval                : "+ clinicalmanagement.Glaucoma_Overall_Plan_Clinic_Interval)
      
      })
     
    })

    it('0350.9_Validate_Photo' , () => {

      cy.fixture("AddExaminationEvents_Clinical_Management.json").then((clinicalmanagement) => {
                
       cy.get('[data-element-type-name="Glaucoma Overall Plan"]>div>div>div>div>div>ul>li').eq(1).should('be.visible').should('contain', "Photo                : " + clinicalmanagement.Glaucoma_Overall_Plan_Photo)
      })
    })

    it('0350.10_Validate_OCT' , () => {
                
      cy.fixture("AddExaminationEvents_Clinical_Management.json").then((clinicalmanagement) => {
      cy.get('[data-element-type-name="Glaucoma Overall Plan"]>div>div>div>div>div>ul>li').eq(2).should('be.visible').should('contain', "OCT                : " + clinicalmanagement.Glaucoma_Overall_Plan_OCT)
      
      })
    
    })

    // it('0350.11_Validate_VisualFields_THIS IS A DEFECT' , () => {
          
    //   // // Visual Fields Label missing , when the event is saved
    //   // cy.fixture("AddExaminationEvents_Clinical_Management.json").then((clinicalmanagement) => {
    //   // cy.get('[data-element-type-name="Glaucoma Overall Plan"]>div>div>div>div>div>ul>li').eq(3).should('be.visible').should('contain', "Visual Fields                : " + clinicalmanagement.Glaucoma_Overall_Plan_Visual_Fields)
      
    //   })
    
    // })


     it('0350.12_Validate_Gonio' , () => {
          
      // Visual Fields Label missing , when the event is saved
      cy.fixture("AddExaminationEvents_Clinical_Management.json").then((clinicalmanagement) => {
      cy.get('[data-element-type-name="Glaucoma Overall Plan"]>div>div>div>div>div>ul>li').eq(4).should('be.visible').should('contain', "Gonio                : " + clinicalmanagement.Glaucoma_Overall_Plan_Gonio)
      
      })

    })


      it('0350.13_Validate_HRT' , () => {
          
        // Visual Fields Label missing , when the event is saved
        cy.fixture("AddExaminationEvents_Clinical_Management.json").then((clinicalmanagement) => {
        cy.get('[data-element-type-name="Glaucoma Overall Plan"]>div>div>div>div>div>ul>li').eq(5).should('be.visible').should('contain', "HRT                : " + clinicalmanagement.Glaucoma_Overall_Plan_HRT)
        
        })

        //[data-element-type-name="Glaucoma Overall Plan"]>div>div>div>div.data-value.cols-11
      
    
    })

    it('0350.14_Validate_Comments' , () => {
          
      // Visual Fields Label missing , when the event is saved
      cy.fixture("AddExaminationEvents_Clinical_Management.json").then((clinicalmanagement) => {
      cy.get('[data-element-type-name="Glaucoma Overall Plan"]>div>div>div>div.data-value.cols-11').should('be.visible').should('contain',clinicalmanagement.Glaucoma_Overall_Plan_Comments)
      
      })
    
  
  })


  it('0350.15_Validate_Target_IOP_Right_Eye' , () => {
          
    // Visual Fields Label missing , when the event is saved
    cy.fixture("AddExaminationEvents_Clinical_Management.json").then((clinicalmanagement) => {
    cy.get('[data-element-type-name="Glaucoma Overall Plan"]>div>div+div>div>div>table>tbody>tr>td+td').eq(0).should('be.visible').should('contain',clinicalmanagement.Glaucoma_Overall_Plan_Target_IOP_Right_Eye)
    
    })

  })

    it('0350.16_Validate_Target_IOP_Left_Eye' , () => {
          
      // Visual Fields Label missing , when the event is saved
      cy.fixture("AddExaminationEvents_Clinical_Management.json").then((clinicalmanagement) => {
      cy.get('[data-element-type-name="Glaucoma Overall Plan"]>div>div+div>div>div>table>tbody>tr>td+td').eq(1).should('be.visible').should('contain',clinicalmanagement.Glaucoma_Overall_Plan_Target_IOP_Left_Eye)
      
      })
  

    })
 
   
})
