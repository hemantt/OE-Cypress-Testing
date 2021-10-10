//0040_Element_History
describe('0040_Element_History_Scenario#1_DI', () => {
   
  it('0040.01.01_Select_History', () => {
        
    //To get the History element
    cy.get("#js-manage-elements-btn").should('be.visible').click()

    cy.get('body').then((body) => {

      if (body.find('#manage-elements-History[class="added"]').length == 0)
      {
        cy.get("#manage-elements-History").should('be.visible').click()
      }

    })

    cy.get(".blue.hint.cols-full").should('be.visible').click()
  })
  
  it('0040.01.02_To_Validate_History_Section_is_Available', () => {
      //To_Validate_History_Section_is_Available.
      cy.get("[data-element-type-name='History'] > header > h3").scrollIntoView().should('be.visible')
      cy.get("[data-element-type-name='History'] > header > h3").should('be.visible').should('contain',"History")
          
  })  

    
  it('0040.01.03_Add_History', () => {
    cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_History_description").should('be.visible').clear()

    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {
      if(AddExaminationEvents_History.History_Description_Free_Text == "")
      {
        cy.get("#show-add-to-history").should("be.visible").click()
      }
      else
      {
        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_History_description").should('be.visible').clear().type(AddExaminationEvents_History.History_Description_Free_Text)
      }
    })
    
  })
    
  it('0040.01.04_Click_on_History_list_item', () => {
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {
      if(AddExaminationEvents_History.History_Description_Free_Text == "")
      {
        //Click on History list item
        cy.get("[data-element-type-class='OEModule_OphCiExamination_models_Element_OphCiExamination_History'] > div + div > div + div > div > table > tbody > tr > td > div > div > ul").eq(0).get('[data-label=' + '"' + AddExaminationEvents_History.History_History + ', "' + ']').click()
      }
    })
  })
  
       
  it('0040.01.05_Click_on_Eye_list_item', () => {
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {
      if(AddExaminationEvents_History.History_Description_Free_Text == "")
      {
        //Click on Eye list item
        cy.get("[data-element-type-class='OEModule_OphCiExamination_models_Element_OphCiExamination_History'] > div + div > div + div > div + button + div > table > tbody > tr > td + td > div > div > ul > li").eq(1).get('[data-label=' + '"' + AddExaminationEvents_History.History_Eye + ', "' + ']').click()
      }
      
    })
  })
  
       
  it('0040.01.06_Click_on_Duration_list_item', () => {
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {
      if(AddExaminationEvents_History.History_Description_Free_Text == "")
      {
        //Click on Duration list item
        cy.get("[data-element-type-class='OEModule_OphCiExamination_models_Element_OphCiExamination_History'] > div + div > div + div > div > table > tbody > tr > td > div > div > ul").eq(2).get('[data-label=' + '"' + AddExaminationEvents_History.History_Duration + ', "' + ']').click()
      }
    })
  })
  
       
  it('0040.01.07_Click_on_Onset_list_item', () => {
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {
      if(AddExaminationEvents_History.History_Description_Free_Text == "")
      {
        //Click on Onset list item
        cy.get("[data-element-type-class='OEModule_OphCiExamination_models_Element_OphCiExamination_History'] > div + div > div + div > div > table > tbody > tr > td > div > div > ul").eq(3).get('[data-label=' + '"' + AddExaminationEvents_History.History_Onset + ', "' + ']').click()
      }
    })
  })
    
  it('0040.01.08_Click_on_Severity_list_item', () => {
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {
      if(AddExaminationEvents_History.History_Description_Free_Text == "")
      {
        //Click on Severity list item
        cy.get("[data-element-type-class='OEModule_OphCiExamination_models_Element_OphCiExamination_History'] > div + div > div + div > div > table > tbody > tr > td > div > div > ul").eq(4).get('[data-label=' + '"' + AddExaminationEvents_History.History_Severity + ', "' + ']').click()
      }
    })
  })
  
       
  it('0040.01.09_Click_on_Impact_list_item', () => {
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {
      if(AddExaminationEvents_History.History_Description_Free_Text == "")
      {
        //Click on Impact list item
        cy.get("[data-element-type-class='OEModule_OphCiExamination_models_Element_OphCiExamination_History'] > div + div > div + div > div > table > tbody > tr > td > div > div > ul").eq(5).get('[data-label=' + '"' + AddExaminationEvents_History.History_Impact + ', "' + ']').click()
      }
    })
  })
  
       
  it('0040.01.10_Click_on_Phrases_list_item', () => {
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {
      if(AddExaminationEvents_History.History_Description_Free_Text == "")
      {
        //Click on Phrases list item
        cy.get("[data-element-type-class='OEModule_OphCiExamination_models_Element_OphCiExamination_History'] > div + div > div + div > div > table > tbody > tr > td > div > div > ul").eq(6).get('[data-label=' + '"' + AddExaminationEvents_History.History_Phrases + ', "' + ']').click()
      }
    })
  })
    
  it('0040.01.11_Click_on_Click_to_add_button', () => {
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {
      if(AddExaminationEvents_History.History_Description_Free_Text == "")
      {
        //Click on Click to add button.
        cy.get("[data-element-type-name='History'] > div + div > div + div > div + button + div > div + div").contains('Click to add').click()
        cy.wait(2000)
      }
    })
  })

})
