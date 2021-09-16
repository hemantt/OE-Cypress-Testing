describe('018_Visual_Function__Pupils_DV', () => {

  it('18.01__To_Validate_Pupils_Section_is_Available', () => {
    //To_Validate_Pupils_Section_is_Available.
    cy.get("[data-element-type-name='Pupils'] > header > h3").scrollIntoView().should('be.visible')
    cy.get("[data-element-type-name='Pupils'] > header > h3").should('be.visible').should('contain',"Pupils")
    cy.wait(700)
    })
  
    
  it('18.02__To_Validate_Pupils_Data_is_Available_of_Right_side', () => {
    cy.fixture("visualfunctions.json").then((visualfunctions) => {
      cy.get("[data-element-type-name='Pupils'] > div > div > table > tbody > tr > td + td > ul > li").eq(0).should('be.visible').should('contain',visualfunctions.pupils_list_items_R)
      
                   
      })
  })

  it('18.03__To_Validate_Pupils_Data_is_Available_of_Left_side', () => {
    cy.fixture("visualfunctions.json").then((visualfunctions) => {
      cy.get('[data-element-type-name="Pupils"] > div > div + div > table > tbody > tr > td + td > ul > li').should('be.visible').eq(0).should('contain',visualfunctions.pupils_list_items_L)
      
             
      })
  })
})