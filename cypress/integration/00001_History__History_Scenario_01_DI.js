//Test suite for Add Examination Event
describe('001_Element_History_Scenario#1_DI', () => {
    
    
  //Scenario 2# History via Add to History page.
  it('01.01.01_Select_History', () => {
        
    //To get the History element
    cy.get("#js-manage-elements-btn").should('be.visible').click()
    cy.get("#manage-elements-History").should('be.visible').click()
    //click on OK button if prompted to click on same element (History)
    cy.get('body').then(($body) => {
      if($body.find('.secondary.small.confirm.ok').length > 0)
      {
        cy.get(".secondary.small.confirm.ok").should('be.visible').click()
        cy.wait(1000)
        cy.get("#manage-elements-History").should('be.visible').click()
      }
    })
    cy.get(".blue.hint.cols-full").should('be.visible').click()
  })
  
  it('01.01.02__To_Validate_History_Section_is_Available', () => {
      //To_Validate_History_Section_is_Available.
      cy.get("[data-element-type-name='History'] > header > h3").scrollIntoView().should('be.visible')
      cy.get("[data-element-type-name='History'] > header > h3").should('be.visible').should('contain',"History")
          
  })  

    
  it('01.01.03_Validations of Add to history button', () => {
    //Validate and click on Add to history button.
    cy.get("#show-add-to-history").should("be.visible").click()
    
  })
    
  it('01.01.04_Click on History list item', () => {
    cy.fixture("history.json").then((history) => {
      //Click on History list item
      cy.get("[data-element-type-class='OEModule_OphCiExamination_models_Element_OphCiExamination_History'] > div + div > div + div > div > table > tbody > tr > td > div > div > ul").eq(0).should("be.visible").should('contain',history.History).click()
    })
  })
  
       
  it('01.01.05_Click on Eye list item', () => {
    cy.fixture("history.json").then((history) => {
      //Click on Eye list item
      cy.get("[data-element-type-class='OEModule_OphCiExamination_models_Element_OphCiExamination_History'] > div + div > div + div > div > table > tbody > tr > td > div > div > ul").eq(1).should("be.visible").should('contain',history.Eye).click()
      
    })
  })
  
       
  it('01.01.06_Click on Duration list item', () => {
    cy.fixture("history.json").then((history) => {
      //Click on Duration list item
      cy.get("[data-element-type-class='OEModule_OphCiExamination_models_Element_OphCiExamination_History'] > div + div > div + div > div > table > tbody > tr > td > div > div > ul").eq(2).should("be.visible").should('contain',history.Duration).click()
    })
  })
  
       
  it('01.01.07_Click on Onset list item', () => {
    cy.fixture("history.json").then((history) => {
      //Click on Onset list item
      cy.get("[data-element-type-class='OEModule_OphCiExamination_models_Element_OphCiExamination_History'] > div + div > div + div > div > table > tbody > tr > td > div > div > ul").eq(3).should("be.visible").should('contain',history.Onset).click()
    })
  })
    
  it('01.01.08_Click on Severity list item', () => {
    cy.fixture("history.json").then((history) => {
      //Click on Severity list item
      cy.get("[data-element-type-class='OEModule_OphCiExamination_models_Element_OphCiExamination_History'] > div + div > div + div > div > table > tbody > tr > td > div > div > ul").eq(4).should("be.visible").should('contain',history.Severity).click()
    })
  })
  
       
  it('01.01.09_Click on Impact list item', () => {
    cy.fixture("history.json").then((history) => {
      //Click on Impact list item
      cy.get("[data-element-type-class='OEModule_OphCiExamination_models_Element_OphCiExamination_History'] > div + div > div + div > div > table > tbody > tr > td > div > div > ul").eq(5).should("be.visible").should('contain',history.Impact).click()
    })
  })
  
       
  it('01.01.10_Click on Phrases list item', () => {
    cy.fixture("history.json").then((history) => {
      //Click on Phrases list item
      cy.get("[data-element-type-class='OEModule_OphCiExamination_models_Element_OphCiExamination_History'] > div + div > div + div > div > table > tbody > tr > td > div > div > ul").eq(6).should("be.visible").should('contain',history.Phrases).click()
    })
  })
    
  it('01.01.11_Click on Click to add button', () => {
    //Click on Click to add button.
    cy.get("[data-element-type-name='History'] > div + div > div + div > div + button + div > div + div").contains('Click to add').click()
    cy.wait(2000)
  })
     
  
  
})
  