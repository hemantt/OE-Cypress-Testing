describe('0024_Element_Retinoscopy_DV', () => {
   
it('0024.11_To_Check_Retinoscopy section is Available' ,() => {
    cy.get('[data-element-type-name="Retinoscopy"] > header > h3').scrollIntoView().should('be.visible')
    cy.get('[data-element-type-name="Retinoscopy"] > header > h3').should('contain', 'Retinoscopy')
})

it('0024.12_To_Validate-Saved Data_Right_Eye' , () => {
  cy.fixture("contrastsensitivity.json").then((contrastsensitivity) => {
    cy.get('[data-element-type-name="Retinoscopy"] > div > div >  div > div  + div > table > tbody > tr').eq(0).should('be.visible').should('contain', contrastsensitivity.Dilation_Right_Eye)
    cy.get('[data-element-type-name="Retinoscopy"] > div > div >  div > div  + div > table > tbody > tr').eq(1).should('be.visible').should('contain', contrastsensitivity.Right_Working_Distance_Right_Eye)
    cy.get('[data-element-type-name="Retinoscopy"] > div > div >  div > div  + div > table > tbody > tr').eq(2).should('be.visible').should('contain', contrastsensitivity.Right_Eye_Angle_Validation)
    cy.get('[data-element-type-name="Retinoscopy"] > div > div >  div > div  + div > table > tbody > tr').eq(3).should('be.visible').should('contain', contrastsensitivity.Right_Eye_P1_Validation)
    cy.get('[data-element-type-name="Retinoscopy"] > div > div >  div > div  + div > table > tbody > tr').eq(4).should('be.visible').should('contain', contrastsensitivity.Right_Eye_P2_Validation)
    cy.get('[data-element-type-name="Retinoscopy"] > div > div >  div > div  + div > table > tbody > tr').eq(5).should('be.visible').should('contain', contrastsensitivity.Right_Eye_Refraction_Validation)
})



it('0024.13_To_Validate_Saved Data_Left_Eye' , () => {
    cy.fixture("contrastsensitivity.json").then((contrastsensitivity) => {
      cy.get('[data-element-type-name="Retinoscopy"] > div > div >  div > div  + div > table > tbody > tr').eq(6).should('be.visible').should('contain', contrastsensitivity.Dilation_Left_Eye)
      cy.get('[data-element-type-name="Retinoscopy"] > div > div >  div > div  + div > table > tbody > tr').eq(7).should('be.visible').should('contain', contrastsensitivity.Left_Working_Distance_Left_Eye)
      cy.get('[data-element-type-name="Retinoscopy"] > div > div >  div > div  + div > table > tbody > tr').eq(8).should('be.visible').should('contain', contrastsensitivity.Left_Eye_Angle_Validation)
      cy.get('[data-element-type-name="Retinoscopy"] > div > div >  div > div  + div > table > tbody > tr').eq(9).should('be.visible').should('contain', contrastsensitivity.Left_Eye_P1_Validation)
      cy.get('[data-element-type-name="Retinoscopy"] > div > div >  div > div  + div > table > tbody > tr').eq(10).should('be.visible').should('contain', contrastsensitivity.Left_Eye_P2_Validation)
      cy.get('[data-element-type-name="Retinoscopy"] > div > div >  div > div  + div > table > tbody > tr').eq(11).should('be.visible').should('contain', contrastsensitivity.Left_Eye_Refraction_Validation)
  })

})


})

})