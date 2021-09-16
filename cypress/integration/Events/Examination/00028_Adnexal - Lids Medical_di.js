//Test suite for Add Examination Event
describe('28_Adnexal - Lids Medical_DI', () => {
    
    //27_Adnexal - Lids Surgical".
    it('28.01_Adnexal - Lids Medical', () => {
  
        //To get the Adnexal - Lids Surgical Page
        cy.get("#js-manage-elements-btn").should('be.visible').click()
        cy.get("#manage-elements-Lids-Medical").should('be.visible').click()
        cy.get(".blue.hint.cols-full").should('be.visible').click()

        //Verify Page title "Lids Medical".
        cy.get('[data-element-type-name="Lids Medical"] > header > h3').scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Lids Medical'] > header > h3").should('contain','Lids Medical')
        //cy.get("#element-content > div + section + section > header > h3").should('include.text','Lids Medical')
     })
    
    it('28.02 comments in No abnormality Textbox at Right & Left side', () => {
        cy.fixture("adnexal.json").then((adnexal) => {
            //Type comments in "No abnormality" Textbox at Right side.
            cy.get("#OEModule_OphCiExamination_models_MedicalLids_right_comments").clear().type(adnexal.Lids_Medical_Commentbox_R)

            //Type comments in "No abnormality" Textbox at Left side.
            cy.get("#OEModule_OphCiExamination_models_MedicalLids_left_comments").clear().type(adnexal.Lids_Medical_Commentbox_L)
            })
  
        })
    
    it('28.03_CLick on "Palpebral Conjunctivitis" button from Right side', () => {
        
            //CLick on "Palpebral Conjunctivitis" button from Right side.
            cy.get("#PalpebralConjunctivitisright_447").click()
        })
  
    it('28.04_Selct Value from type & Hyperaemia Dropdowns from Right side', () => {
            cy.fixture("adnexal.json").then((adnexal) => {
                //Selct Value from type Dropdown from Right side.
                cy.get("#ed_canvas_edit_right_447_type_control").select(adnexal.type_R)

                //Selct Value from Hyperaemia Dropdown from Right side
                cy.get("#ed_canvas_edit_right_447_hyperaemia_control").select(adnexal.Hyperaemia_R)
            })
         })
      
    it('28.05_CLick on "Palpebral Conjunctivitis" button from Left side', () => {
        
            //CLick on "Palpebral Conjunctivitis" button from Left side.
            cy.get("#PalpebralConjunctivitisleft_447").click()
     })

    it('28.06_Selct Value from type & Hyperaemia Dropdowns from Left side', () => {
        cy.fixture("adnexal.json").then((adnexal) => {
            //Selct Value from type Dropdown from Left side.
            cy.get("#ed_canvas_edit_left_447_type_control").select(adnexal.type_L)
  
            //Selct Value from Hyperaemia Dropdown from Left side
            cy.get("#ed_canvas_edit_left_447_hyperaemia_control").select(adnexal.Hyperaemia_L)
  
        })
     })

    
  })
  