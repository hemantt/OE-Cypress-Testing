//Test script for Glucoma Overall Plan
describe('0204_Glaucoma_Overall_Plan_DV', () => {

    it('0204.1_Validate_Glaucoma_Overall_Plan_Element_Header' , () => {
      
      
      cy.get('[data-element-type-name="Glaucoma Overall Plan"] > header > h3').should('be.visible').should('contain', 'Glaucoma Overall Plan')
    
    })

    it('0204.2_Validate_Clinical_Interval' , () => {
              
      cy.fixture("clinicalmanagement.json").then((clinicalmanagement) => {
        
        cy.get('[data-element-type-name="Glaucoma Overall Plan"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Glaucoma Overall Plan"]>div>div>div>div>div>ul>li').eq(0).should('be.visible').should('contain', "Clinic interval                : "+ clinicalmanagement.Clinic_interval)
      
      })
     
    })

    it('0204.3_Validate_Photo' , () => {

      cy.fixture("clinicalmanagement.json").then((clinicalmanagement) => {
                
       cy.get('[data-element-type-name="Glaucoma Overall Plan"]>div>div>div>div>div>ul>li').eq(1).should('be.visible').should('contain', "Photo                : " + clinicalmanagement.Photo)
      })
    })

    it('0204.4_Validate_OCT' , () => {
                
      cy.fixture("clinicalmanagement.json").then((clinicalmanagement) => {
      cy.get('[data-element-type-name="Glaucoma Overall Plan"]>div>div>div>div>div>ul>li').eq(2).should('be.visible').should('contain', "OCT                : " + clinicalmanagement.OCT)
      
      })
    
    })

    // it('0204.5_Validate_VisualFields_THIS IS A DEFECT' , () => {
          
    //   // // Visual Fields Label missing , when the event is saved
    //   // cy.fixture("clinicalmanagement.json").then((clinicalmanagement) => {
    //   // cy.get('[data-element-type-name="Glaucoma Overall Plan"]>div>div>div>div>div>ul>li').eq(3).should('be.visible').should('contain', "Visual Fields                : " + clinicalmanagement.Visual_Fields)
      
    //   })
    
    // })


     it('0204.6_Validate_Gonio' , () => {
          
      // Visual Fields Label missing , when the event is saved
      cy.fixture("clinicalmanagement.json").then((clinicalmanagement) => {
      cy.get('[data-element-type-name="Glaucoma Overall Plan"]>div>div>div>div>div>ul>li').eq(4).should('be.visible').should('contain', "Gonio                : " + clinicalmanagement.Gonio)
      
      })

    })


      it('0204.7_Validate_HRT' , () => {
          
        // Visual Fields Label missing , when the event is saved
        cy.fixture("clinicalmanagement.json").then((clinicalmanagement) => {
        cy.get('[data-element-type-name="Glaucoma Overall Plan"]>div>div>div>div>div>ul>li').eq(5).should('be.visible').should('contain', "HRT                : " + clinicalmanagement.HRT)
        
        })

        //[data-element-type-name="Glaucoma Overall Plan"]>div>div>div>div.data-value.cols-11
      
    
    })

    it('0204.8_Validate_Comments' , () => {
          
      // Visual Fields Label missing , when the event is saved
      cy.fixture("clinicalmanagement.json").then((clinicalmanagement) => {
      cy.get('[data-element-type-name="Glaucoma Overall Plan"]>div>div>div>div.data-value.cols-11').should('be.visible').should('contain',clinicalmanagement.Glucoma_Overall_Plan_Comments)
      
      })
    
  
  })


  it('0204.9_Validate_Target_IOP_Right_Eye' , () => {
          
    // Visual Fields Label missing , when the event is saved
    cy.fixture("clinicalmanagement.json").then((clinicalmanagement) => {
    cy.get('[data-element-type-name="Glaucoma Overall Plan"]>div>div+div>div>div>table>tbody>tr>td+td').eq(0).should('be.visible').should('contain',clinicalmanagement.Target_IOP_Right_Eye)
    
    })

  })

    it('0204.10_Validate_Target_IOP_Left_Eye' , () => {
          
      // Visual Fields Label missing , when the event is saved
      cy.fixture("clinicalmanagement.json").then((clinicalmanagement) => {
      cy.get('[data-element-type-name="Glaucoma Overall Plan"]>div>div+div>div>div>table>tbody>tr>td+td').eq(1).should('be.visible').should('contain',clinicalmanagement.Target_IOP_Left_Eye)
      
      })
  

  })


   

   
   
  })
