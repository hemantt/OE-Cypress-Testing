describe('0125_Visual_Function__Pupils_DV', () => {

  it('0125.17__To_Validate_Pupils_Section_is_Available', () => {
    //To_Validate_Pupils_Section_is_Available.
    cy.get("[data-element-type-name='Pupils'] > header > h3").scrollIntoView().should('be.visible')
    cy.get("[data-element-type-name='Pupils'] > header > h3").should('be.visible').should('contain',"Pupils")
    cy.wait(700)
    })
  
    
  it('0125.18__To_Validate_Pupils_Data_is_Available_of_Right_side', () => {
    cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {
      cy.get("[data-element-type-name='Pupils'] > div > div > table > tbody > tr > td + td > ul > li").eq(0).should('be.visible').should('contain',AddExaminationEvents_Visual_Functions.Pupils_ListItems_R)
      
                   
      })
  })

  it('0125.19__To_Validate_Pupils_Data_is_Available_of_Left_side', () => {
    cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {
      cy.get('[data-element-type-name="Pupils"] > div > div + div > table > tbody > tr > td + td > ul > li').should('be.visible').eq(0).should('contain',AddExaminationEvents_Visual_Functions.Pupils_ListItems_L)
      
             
      })
  })
})