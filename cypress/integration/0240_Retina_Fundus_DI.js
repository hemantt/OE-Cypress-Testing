//Test script for Fundus element
describe('0240_Fundus_Element_DI', () => {

    //Add the Fundus element
    it('0240.1_To_Add_Fundus_Element' , () => {
        cy.get("#js-manage-elements-btn").should('be.visible').click()

        cy.get('body').then((body) => {
      
            if (body.find('#manage-elements-Fundus[class="added"]').length == 0)
            {
                cy.get('#manage-elements-Fundus').should('be.visible').click()
            }
      
        })
      
        cy.get(".blue.hint.cols-full").should('be.visible').click()

    })

    //Verify that Fundus element is loaded successfully
    it('0240.2_To_Validate_Fundus_Section_IsAvailable' , () => {
        cy.get('[data-element-type-name="Fundus"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Fundus"] > header > h3').should('contain', 'Fundus')
    })

    //To select First Eye doodle
    it('0240.3_To_Add_First_Right_Eye_Doodle' , () => {
        cy.get('[data-element-type-name="Fundus"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('#eyedrawwidget_right_430 > div > ul > li > a > i.ed-i.icon-ed-RRD').should('be.visible').click()
        cy.fixture("AddExaminationEvents_Retina.json").then((retina) => {
    //To Verify if chosen doddle is populating correctly in the dropdown
        cy.get('[data-element-type-name="Fundus"] > div + div > div > div > div > div > div + div > div > div > select').eq(0).should('be.visible').select(retina.Fundus_Doodle_1_Right_Eye)
        })
    })
    
    //To select Second Eye doodle
    it('0240.4_To_Add_Second_Right_Eye_Doodle' , () => {
        cy.get('[data-element-type-name="Fundus"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('#eyedrawwidget_right_430 > div > ul > li + li > a > i.ed-i.icon-ed-ChoroidalNaevusMelanoma').should('be.visible').click()
        cy.fixture("AddExaminationEvents_Retina.json").then((retina) => {
    //To Verify if chosen doddle is populating correctly in the dropdown
        cy.get('[data-element-type-name="Fundus"] > div + div > div > div > div > div > div + div > div > div > select').eq(0).should('be.visible').select(retina.Fundus_Doodle_2_Right_Eye)

    //To add and Verify values in the popup window
        cy.get('[data-element-type-name="Fundus"] > div + div > div > div > div > div > div + div > div > div > div   > div > div > label + select').should('be.visible').select(retina.Fundus_Type_Right_Eye)
        cy.get('[data-element-type-name="Fundus"] > div + div > div > div > div > div > div + div > div > div > div   > div > div >  input').eq(0).should('be.visible').clear().type(retina.Fundus_Thickness_Right_Eye)
        cy.get('[data-element-type-name="Fundus"] > div + div > div > div > div > div > div + div > div > div > div   > div > div >  input').eq(1).should('be.visible').clear().type(retina.Fundus_Margin_To_Optic_Disc_Right_Eye)
        cy.get('[data-element-type-name="Fundus"] > div + div > div > div > div > div > div + div > div > div > div   > div > div >  input').eq(2).should('be.visible').click()
        cy.get('[data-element-type-name="Fundus"] > div + div > div > div > div > div > div + div > div > div > div   > div > div >  input').eq(3).should('be.visible').click()
        cy.get('[data-element-type-name="Fundus"] > div + div > div > div > div > div > div + div > div > div > div   > div > div >  input').eq(4).should('be.visible').click()
        cy.get('[data-element-type-name="Fundus"] > div + div > div > div > div > div > div + div > div > div > div   > div > div >  input').eq(5).should('be.visible').click()
    })
    })
    //To select Third Eye doodle
    it('0240.5_To_Add_Third_Right_Eye_Doodle' , () => {
        cy.get('[data-element-type-name="Fundus"] > header > h3').scrollIntoView().should('be.visible')
       cy.get('#eyedrawwidget_right_430 > div > ul > li + li + li > a > i.ed-i.icon-ed-ChoroidalEffusion').should('be.visible').click()
       cy.fixture("AddExaminationEvents_Retina.json").then((retina) => {
    //To Verify if chosen doddle is populating correctly in the dropdown
       cy.get('[data-element-type-name="Fundus"] > div + div > div > div > div > div > div + div > div > div > select').eq(0).should('be.visible').select(retina.Fundus_Doodle_3_Right_Eye)
    })
    })
    //To select Fourth Eye doodle
    it('0240.6_To_Add_Fourth_Right_Eye_Doodle' , () => {
        cy.get('[data-element-type-name="Fundus"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('#eyedrawwidget_right_430 > div > ul > li + li + li + li  > a > i.ed-i.icon-ed-UTear').should('be.visible').click()
        cy.fixture("AddExaminationEvents_Retina.json").then((retina) => {
    //To Verify if chosen doddle is populating correctly in the dropdown
        cy.get('[data-element-type-name="Fundus"] > div + div > div > div > div > div > div + div > div > div > select').eq(0).should('be.visible').select(retina.Fundus_Doodle_4_Right_Eye)
    })
    })
    //To select Fifth Eye doodle
    it('0240.7_To_Add_Fifth_Right_Eye_Doodle' , () => {
        cy.get('[data-element-type-name="Fundus"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('#eyedrawwidget_right_430 > div > ul > li + li + li + li   + li > a > i.ed-i.icon-ed-RoundHole').should('be.visible').click()
        cy.fixture("AddExaminationEvents_Retina.json").then((retina) => {
    //To Verify if chosen doddle is populating correctly in the dropdown
        cy.get('[data-element-type-name="Fundus"] > div + div > div > div > div > div > div + div > div > div > select').eq(0).should('be.visible').select(retina.Fundus_Doodle_5_Right_Eye)
    })
    })


    //To select Viterous Dropdown values
    it('0240.8_To_Select_Viterous_Dropdown_Values_' , () => {
        cy.fixture("AddExaminationEvents_Retina.json").then((retina) => {
        cy.get('[data-element-type-name="Fundus"] > div + div > div > div > div  > div > div + div > div + div > div + div > div > div > div > div + div > div  > div > select').eq(0).should('be.visible').select(retina.Fundus_Viterous_Right_Eye_Dropdown1)   
        cy.get('[data-element-type-name="Fundus"] > div + div > div > div > div  > div > div + div > div + div > div + div > div > div > div > div + div > div  > div > select').eq(0).should('be.visible').select(retina.Fundus_Viterous_Right_Eye_Dropdown2)
        })
    })

    it('0240.9_To_Add_Right_Eye_Comments' , () => {
        cy.fixture("AddExaminationEvents_Retina.json").then((retina) => {
        cy.get('[data-element-type-name="Fundus"] >  div + div > div > div > div > div > div + div > div + div > div + div  > div   > div + textarea').eq(0).should('be.visible').clear().type(retina.Fundus_Right_Eye_Comments)
    })
    }) 

    //********To add Left Eye details************************
   
    //To select First Eye doodle
    it('0240.10_To_Add_First_Left_Eye_Doodle' , () => {
        cy.get('[data-element-type-name="Fundus"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Fundus"] > div + div > div + div > div  > div > div > div > ul > li > a > i.ed-i.icon-ed-RRD').scrollIntoView().should('be.visible').click()
        cy.fixture("AddExaminationEvents_Retina.json").then((retina) => {
    //To Verify if chosen doddle is populating correctly in the dropdown
        cy.get('[data-element-type-name="Fundus"] > div + div > div > div > div > div > div + div > div > div > select').eq(1).should('be.visible').select(retina.Fundus_Doodle_1_Left_Eye)
        })
    })
    
    //To select Second Eye doodle
    it('0240.11_To_Add_Second_Left_Eye_Doodle' , () => {
        cy.get('[data-element-type-name="Fundus"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Fundus"] > div  + div > div + div > div > div > div > div > ul > li + li > a > i.ed-i.icon-ed-ChoroidalNaevusMelanoma').scrollIntoView().should('be.visible').click()
        cy.fixture("AddExaminationEvents_Retina.json").then((retina) => {
    //To Verify if chosen doddle is populating correctly in the dropdown
        cy.get('[data-element-type-name="Fundus"] > div + div > div > div > div > div > div + div > div > div > select').eq(1).should('be.visible').select(retina.Fundus_Doodle_2_Left_Eye)
    
    //To add and Verify values in the popup window
        cy.get('[data-element-type-name="Fundus"] > div + div > div > div > div > div > div + div > div > div > div   > div > div > label + select').should('be.visible').select(retina.Fundus_Type_Left_Eye)
        cy.get('[data-element-type-name="Fundus"] > div + div > div > div > div > div > div + div > div > div > div   > div > div >  input').eq(0).should('be.visible').clear().type(retina.Fundus_Thickness_Left_Eye)
        cy.get('[data-element-type-name="Fundus"] > div + div > div > div > div > div > div + div > div > div > div   > div > div >  input').eq(1).should('be.visible').clear().type(retina.Fundus_Margin_To_Optic_Disc_Left_Eye)
        cy.get('[data-element-type-name="Fundus"] > div + div > div > div > div > div > div + div > div > div > div   > div > div >  input').eq(2).should('be.visible').click()
        cy.get('[data-element-type-name="Fundus"] > div + div > div > div > div > div > div + div > div > div > div   > div > div >  input').eq(3).should('be.visible').click()
        cy.get('[data-element-type-name="Fundus"] > div + div > div > div > div > div > div + div > div > div > div   > div > div >  input').eq(4).should('be.visible').click()
        cy.get('[data-element-type-name="Fundus"] > div + div > div > div > div > div > div + div > div > div > div   > div > div >  input').eq(5).should('be.visible').click()
        })
    })    
    //To select Third Eye doodle
    it('0240.12_To_Add_Third_Left_Eye_Doodle' , () => {
        cy.get('[data-element-type-name="Fundus"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Fundus"] > div  + div > div + div > div > div > div > div > ul > li + li  + li > a > i.ed-i.icon-ed-ChoroidalEffusion').scrollIntoView().should('be.visible').click()
        cy.fixture("AddExaminationEvents_Retina.json").then((retina) => {
     //To Verify if chosen doddle is populating correctly in the dropdown
        cy.get('[data-element-type-name="Fundus"] > div + div > div > div > div > div > div + div > div > div > select').eq(1).should('be.visible').select(retina.Fundus_Doodle_3_Left_Eye)
     })
     })

    //To select Fourth Eye doodle
    it('0240.13_To_Add_Fourth_Left_Eye_Doodle' , () => {
        cy.get('[data-element-type-name="Fundus"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Fundus"] > div  + div > div + div > div > div > div > div > ul > li + li  + li  + li > a > i.ed-i.icon-ed-UTear').scrollIntoView().should('be.visible').click()
        cy.fixture("AddExaminationEvents_Retina.json").then((retina) => {
    //To Verify if chosen doddle is populating correctly in the dropdown
        cy.get('[data-element-type-name="Fundus"] > div + div > div > div > div > div > div + div > div > div > select').eq(1).should('be.visible').select(retina.Fundus_Doodle_4_Left_Eye)
    })
    })
    
    //To select Fifth Eye doodle
    it('0240.14_To_Add_Fifth_Left_Eye_Doodle' , () => {
        cy.get('[data-element-type-name="Fundus"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Fundus"] > div  + div > div + div > div > div > div > div > ul > li + li  + li  + li  + li > a > i.ed-i.icon-ed-RoundHole').scrollIntoView().should('be.visible').click()
        cy.fixture("AddExaminationEvents_Retina.json").then((retina) => {
    //To Verify if chosen doddle is populating correctly in the dropdown
        cy.get('[data-element-type-name="Fundus"] > div + div > div > div > div > div > div + div > div > div > select').eq(1).should('be.visible').select(retina.Fundus_Doodle_5_Left_Eye)
    })
    })
    
     //To select Viterous Dropdown values
     it('0240.15_To_Select_Viterous_Dropdown_Values_Left_Eye' , () => {
        cy.fixture("AddExaminationEvents_Retina.json").then((retina) => {
        cy.get('[data-element-type-name="Fundus"] > div + div > div > div > div  > div > div + div > div + div > div + div > div > div > div > div + div > div  > div > select').eq(1).should('be.visible').select(retina.Fundus_Viterous_Left_Eye_Dropdown1)   
        cy.get('[data-element-type-name="Fundus"] > div + div > div > div > div  > div > div + div > div + div > div + div > div > div > div > div + div > div  > div > select').eq(1).should('be.visible').select(retina.Fundus_Viterous_Left_Eye_Dropdown2)
        })
    })

    it('0240.16_To_Add_Left_Eye_Comments' , () => {
        cy.fixture("AddExaminationEvents_Retina.json").then((retina) => {
        cy.get('[data-element-type-name="Fundus"] >  div + div > div > div > div > div > div + div > div + div > div + div  > div   > div + textarea').eq(1).should('be.visible').clear().type(retina.Fundus_Left_Eye_Comments)
        })
    }) 

})
