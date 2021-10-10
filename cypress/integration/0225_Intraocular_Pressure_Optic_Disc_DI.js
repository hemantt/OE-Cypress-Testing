//Test script for Optic_Disc element
describe('0225_Optic_Disc_Element_DI', () => {

//Add the Optic_Disc element
    it('0225.1_To_Add_Optic_Disc_Element' , () => {
      cy.get("#js-manage-elements-btn").should('be.visible').click()

      cy.get('body').then((body) => {
    
          if (body.find('#manage-elements-Optic-Disc[class="added"]').length == 0)
          {
            cy.get('#manage-elements-Optic-Disc').should('be.visible').click()
          }
    
      })
    
      cy.get(".blue.hint.cols-full").should('be.visible').click()

    })

//Verify that Optic_Disc  element is loaded successfully
    it('0225.2_To_Validate_Optic_Disc_Section_IsAvailable' , () => {
      cy.get('[data-element-type-name="Optic Disc"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Optic Disc"] > header > h3').should('contain', 'Optic Disc')
    })
//To select Mode dropdown
it('0225.3_To_Select_Right_Eye_Mode_From_Dropdown',()  => {
  cy.fixture("AddExaminationEvents_Intraocular_Pressure.json").then((intraocularpressure) => {
// Case when Basic is selected 
if (intraocularpressure.Optic_Disc_Mode_Right_Eye=="Basic")  {
  cy.get('[data-element-type-name="Optic Disc"] > div + div > div > div > div > div > div+ div > div + div > div + div > div > div > select').eq(0).select(intraocularpressure.Optic_Disc_Mode_Right_Eye)
  cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_OpticDisc_right_cd_ratio_id').select(intraocularpressure.Optic_disc_CD_Ratio_Right_Eye)
}
//Case when Expert is selected
if (intraocularpressure.Optic_Disc_Mode_Right_Eye=="Expert")  {
  cy.get('#right_opticdisc_mode').select(intraocularpressure.Optic_Disc_Mode_Right_Eye)
  cy.get('[data-element-type-name="Optic Disc"] > div + div > div > div > div > div > div+ div > div + div > div + div  > div > div + div > span').eq(0).should('be.visible').contains(intraocularpressure.Optic_Disc_CD_Ratio)
}
})
})
//To_Add_Vertical_Diameter
it('0225.4_To_Add_Vertical_Diameter' , () => {
  cy.fixture("AddExaminationEvents_Intraocular_Pressure.json").then((intraocularpressure) => {
    cy.get('[data-element-type-name="Optic Disc"] > div + div > div > div > div > div > div + div > div + div > div + div > div > div  + div  + div > div > div > input').eq(0).should('be.visible').clear().type(intraocularpressure.Optic_Disc_Vertical_Diameter_Right_Eye)
  cy.get('[data-element-type-name="Optic Disc"] > div + div > div > div > div > div > div + div > div + div > div + div > div > div  + div  + div > div > div  > div > select').eq(0).select(intraocularpressure.Optic_Disc_mm_Lense_Right_Eye)
  })
  })
// To select First doodle for Right Eye
it('0225.5_To_Add_Right_Eye_Doodle1' , () => {
  cy.get('[data-element-type-name="Optic Disc"] > header > h3').scrollIntoView().should('be.visible')
  cy.get('#eyedrawwidget_right_355 > div > ul > li > a > i.ed-i.icon-ed-PeripapillaryAtrophy').should('be.visible').click()
  cy.fixture("AddExaminationEvents_Intraocular_Pressure.json").then((intraocularpressure) => {
//To Verify if chosen doddle is populating correctly in the dropdown           
  cy.get('[data-element-type-name="Optic Disc"] > div + div > div > div > div > div > div + div > div > div > select').eq(0).should('be.visible').select(intraocularpressure.Optic_Disc_Selected_Doddel1_Right_Eye)   
  })
  })
// To select Second doodle for Right Eye
it('0225.6_To_Add_Right_Eye_Doodle2' , () => {
  cy.get('[data-element-type-name="Optic Disc"] > header > h3').scrollIntoView().should('be.visible')
  cy.get('#eyedrawwidget_right_355 > div > ul > li + li > a > i.ed-i.icon-ed-DiscPallor').should('be.visible').click()
  cy.fixture("AddExaminationEvents_Intraocular_Pressure.json").then((intraocularpressure) => {
//To Verify if chosen doddle is populating correctly in the dropdown           
    cy.get('[data-element-type-name="Optic Disc"] > div + div > div > div > div > div > div + div > div > div > select').eq(0).should('be.visible').select(intraocularpressure.Optic_Disc_Selected_Doddel2_Right_Eye)   
  })
  })

// To select Third doodle for Right Eye
it('0225.7_To_Add_Right_Eye_Doodle3' , () => {
  cy.get('[data-element-type-name="Optic Disc"] > header > h3').scrollIntoView().should('be.visible')
  cy.get('#eyedrawwidget_right_355 > div > ul > li + li + li > a > i.ed-i.icon-ed-DiscHaemorrhage').should('be.visible').click()
  cy.fixture("AddExaminationEvents_Intraocular_Pressure.json").then((intraocularpressure) => {
//To Verify if chosen doddle is populating correctly in the dropdown           
    cy.get('[data-element-type-name="Optic Disc"] > div + div > div > div > div > div > div + div > div > div > select').eq(0).should('be.visible').select(intraocularpressure.Optic_Disc_Selected_Doddel3_Right_Eye)   
  })
  })
// To select Fourth doodle for Right Eye
it('0225.8_To_Add_Right_Eye_Doodle4' , () => {
  cy.get('[data-element-type-name="Optic Disc"] > header > h3').scrollIntoView().should('be.visible')
  cy.get('#eyedrawwidget_right_355 > div > ul > li + li + li + li > a > i.ed-i.icon-ed-NerveFibreDefect').should('be.visible').click()
  cy.fixture("AddExaminationEvents_Intraocular_Pressure.json").then((intraocularpressure) => {
//To Verify if chosen doddle is populating correctly in the dropdown           
  cy.get('[data-element-type-name="Optic Disc"] > div + div > div > div > div > div > div + div > div > div > select').eq(0).should('be.visible').select(intraocularpressure.Optic_Disc_Selected_Doddel4_Right_Eye)   
  })
  })

// To select Fifth doodle for Right Eye
it('0225.9_To_Add_Right_Eye_Doodle5' , () => {
  cy.get('[data-element-type-name="Optic Disc"] > header > h3').scrollIntoView().should('be.visible')
  cy.get('#eyedrawwidget_right_355 > div > ul > li + li + li + li  + li > a > i.ed-i.icon-ed-OpticDiscPit').should('be.visible').click()
  cy.fixture("AddExaminationEvents_Intraocular_Pressure.json").then((intraocularpressure) => {
//To Verify if chosen doddle is populating correctly in the dropdown           
  cy.get('[data-element-type-name="Optic Disc"] > div + div > div > div > div > div > div + div > div > div > select').eq(0).should('be.visible').select(intraocularpressure.Optic_Disc_Selected_Doddel5_Right_Eye)   
  })
  })
//To add Right Eye Comments
it('0225.10_To_add_Optic_Disc_Right_Eye_Comments' , () => {
  cy.fixture("AddExaminationEvents_Intraocular_Pressure.json").then((intraocularpressure) => {
  cy.get('[data-element-type-name="Optic Disc"] > div + div > div > div > div > div > div + div > div + div > div + div > div > div  > textarea').eq(0).should('be.visible').clear().type(intraocularpressure.Optic_Disc_Comments_Right_Eye)
  })
  })

//To select Mode dropdown Left Eye
it('0225.11_To_Select_Left_Eye_Mode_From_Dropdown',()  => {
  cy.fixture("AddExaminationEvents_Intraocular_Pressure.json").then((intraocularpressure) => {
// Case when Basic is selected 
if (intraocularpressure.Optic_Disc_Mode_Left_Eye=="Basic")  {
  cy.get('[data-element-type-name="Optic Disc"] > div + div > div + div > div > div  > div > div + div > div + div > div + div > div > div > select').eq(0).select(intraocularpressure.Optic_Disc_Mode_Left_Eye)
  cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_OpticDisc_left_cd_ratio_id').select(intraocularpressure.Optic_disc_CD_Ratio_Left_Eye)
}
//Case when Expert is selected
if (intraocularpressure.Optic_Disc_Mode_Left_Eye=="Expert")  {
  cy.get('#right_opticdisc_mode').select(intraocularpressure.Optic_Disc_Mode_Left_Eye)
  cy.get('[data-element-type-name="Optic Disc"] > div + div > div + div > div > div > div > div + div > div + div > div + div > div > div + div > span').should('be.visible').contains(intraocularpressure.Optic_Disc_CD_Ratio)
}
})
})  

//To_Add_Vertical_Diameter
it('0225.12_To_Add_Vertical_Left_Eye_Diameter' , () => {
  cy.fixture("AddExaminationEvents_Intraocular_Pressure.json").then((intraocularpressure) => {
  cy.get('[data-element-type-name="Optic Disc"] > div + div > div + div > div > div > div > div + div > div + div > div + div > div >  div + div + div > div > div > input').should('be.visible').clear().type(intraocularpressure.Optic_Disc_Vertical_Diameter_Left_Eye)
  cy.get('[data-element-type-name="Optic Disc"] > div + div > div + div > div > div > div > div + div > div + div > div + div > div >  div + div + div > div > div  + div > div > select').select(intraocularpressure.Optic_Disc_mm_Lense_Left_Eye)
  })
  })

// To select First doodle for Left Eye
it('0225.13_To_Add_Left_Eye_Doodle1' , () => {
  cy.get('[data-element-type-name="Optic Disc"] > header > h3').scrollIntoView().should('be.visible')
  cy.get('[data-element-type-name="Optic Disc"] > div + div > div + div > div > div > div > div > ul > li > a > i.ed-i.icon-ed-PeripapillaryAtrophy').should('be.visible').click()
  cy.fixture("AddExaminationEvents_Intraocular_Pressure.json").then((intraocularpressure) => {
//To Verify if chosen doddle is populating correctly in the dropdown           
  cy.get('[data-element-type-name="Optic Disc"] > div + div > div + div > div > div > div > div + div > div > div > select').should('be.visible').select(intraocularpressure.Optic_Disc_Selected_Doddel1_Left_Eye)   
  })
  })

// To select Second doodle for Left Eye
it('0225.14_To_Add_Left_Eye_Doodle2' , () => {
  cy.get('[data-element-type-name="Optic Disc"] > header > h3').scrollIntoView().should('be.visible')
  cy.get('[data-element-type-name="Optic Disc"] > div + div > div + div > div > div > div > div > ul > li + li > a > i.ed-i.icon-ed-DiscPallor').should('be.visible').click()
  cy.fixture("AddExaminationEvents_Intraocular_Pressure").then((intraocularpressure) => {
//To Verify if chosen doddle is populating correctly in the dropdown           
    cy.get('[data-element-type-name="Optic Disc"] > div + div > div + div > div > div > div > div + div > div > div > select').should('be.visible').select(intraocularpressure.Optic_Disc_Selected_Doddel2_Left_Eye)   
  })
  })


// To select Third doodle for Left Eye
it('0225.15_To_Add_Left_Eye_Doodle3' , () => {
  cy.get('[data-element-type-name="Optic Disc"] > header > h3').scrollIntoView().should('be.visible')
  cy.get('[data-element-type-name="Optic Disc"] > div + div > div + div > div > div > div > div > ul > li + li + li > a > i.ed-i.icon-ed-DiscHaemorrhage').should('be.visible').click()
  cy.fixture("AddExaminationEvents_Intraocular_Pressure").then((intraocularpressure) => {
//To Verify if chosen doddle is populating correctly in the dropdown           
    cy.get('[data-element-type-name="Optic Disc"] > div + div > div + div > div > div > div > div + div > div > div > select').should('be.visible').select(intraocularpressure.Optic_Disc_Selected_Doddel3_Left_Eye)   
  })
  })

// To select Fourth doodle for Left Eye
it('0225.16_To_Add_Left_Eye_Doodle4' , () => {
  cy.get('[data-element-type-name="Optic Disc"] > header > h3').scrollIntoView().should('be.visible')
  cy.get('[data-element-type-name="Optic Disc"] > div + div > div + div > div > div > div > div > ul > li + li + li + li > a > i.ed-i.icon-ed-NerveFibreDefect').should('be.visible').click()
  cy.fixture("AddExaminationEvents_Intraocular_Pressure").then((intraocularpressure) => {
//To Verify if chosen doddle is populating correctly in the dropdown           
  cy.get('[data-element-type-name="Optic Disc"] > div + div > div + div > div > div > div > div + div > div > div > select').should('be.visible').select(intraocularpressure.Optic_Disc_Selected_Doddel4_Left_Eye)   
  })  
  })

// To select Fifth doodle for Left Eye
it('0225.17_TO_Add_Left_Eye_Doodle5' , () => {
  cy.get('[data-element-type-name="Optic Disc"] > header > h3').scrollIntoView().should('be.visible')
  cy.get('[data-element-type-name="Optic Disc"] > div + div > div + div > div > div > div > div > ul > li + li + li + li + li > a > i.ed-i.icon-ed-OpticDiscPit').should('be.visible').click()
  cy.fixture("AddExaminationEvents_Intraocular_Pressure").then((intraocularpressure) => {
//To Verify if chosen doddle is populating correctly in the dropdown           
  cy.get('[data-element-type-name="Optic Disc"] > div + div > div + div > div > div > div > div + div > div > div > select').should('be.visible').select(intraocularpressure.Optic_Disc_Selected_Doddel5_Left_Eye)   
  })
  })

//To add Left Eye Comments
it('0225.18_To_add_Left_Eye_Comments' , () => {
  cy.fixture("AddExaminationEvents_Intraocular_Pressure").then((intraocularpressure) => {
  cy.get('[data-element-type-name="Optic Disc"] > div + div > div + div > div > div > div > div + div > div + div > div + div > div > div > textarea').should('be.visible').clear().type(intraocularpressure.Optic_Disc_Comments_Left_Eye)
  })
  })





})












































































