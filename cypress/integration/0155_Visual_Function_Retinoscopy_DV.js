describe('0155_Element_Retinoscopy_DV', () => {
 //To validate Retinoscoopy element      
it('0155.11_To_Check_Retinoscopy section is Available' ,() => {
    cy.get('[data-element-type-name="Retinoscopy"] > header > h3').scrollIntoView().should('be.visible')
    cy.get('[data-element-type-name="Retinoscopy"] > header > h3').should('contain', 'Retinoscopy')
})

//Validate Saved Data Right Eye is loaded successfully
it('0155.12_To_Validate-Saved_Data_Right_Eye' , () => {
  cy.fixture("AddExaminationEvents_Visual_Functions.json").then((contrastsensitivity) => {
    cy.get('[data-element-type-name="Retinoscopy"] > div > div >  div > div  + div > table > tbody > tr').eq(0).should('be.visible').should('contain', contrastsensitivity.Retinoscopy_Dilation_Right_Eye)
    cy.get('[data-element-type-name="Retinoscopy"] > div > div >  div > div  + div > table > tbody > tr').eq(1).should('be.visible').should('contain', contrastsensitivity.Retinoscopy_Right_Working_Distance_Right_Eye)
    cy.get('[data-element-type-name="Retinoscopy"] > div > div >  div > div  + div > table > tbody > tr').eq(2).should('be.visible').should('contain', contrastsensitivity.Retinoscopy_Angle_Right_Eye_1 + contrastsensitivity.Retinoscopy_Angle_Right_Eye_2 + contrastsensitivity.Retinoscopy_Angle_Right_Eye_3)
    cy.get('[data-element-type-name="Retinoscopy"] > div > div >  div > div  + div > table > tbody > tr').eq(3).should('be.visible').should('contain', contrastsensitivity.Retinoscopy_P1_Sign_Right_Eye + contrastsensitivity.Retinoscopy_P1_Value1_Right_Eye + contrastsensitivity.Retinoscopy_P1_Value2_Right_Eye + contrastsensitivity.Retinoscopy_P1_Value3_Right_Eye)
    cy.get('[data-element-type-name="Retinoscopy"] > div > div >  div > div  + div > table > tbody > tr').eq(4).should('be.visible').should('contain', contrastsensitivity.Retinoscopy_P1_Sign_Right_Eye + contrastsensitivity.Retinoscopy_P1_Value1_Right_Eye + contrastsensitivity.Retinoscopy_P1_Value2_Right_Eye + contrastsensitivity.Retinoscopy_P1_Value3_Right_Eye)

    //The following to be used; once the calculation logic is clear
    //cy.get('[data-element-type-name="Retinoscopy"] > div > div >  div > div  + div > table > tbody > tr').eq(5).should('be.visible').should('contain', contrastsensitivity.Retinoscopy_Right_Eye_Refraction_Validation + " " + "/" + " " + contrastsensitivity.Retinoscopy_P2_Sign_Right_Eye + contrastsensitivity.Retinoscopy_Right_Eye_Val+ " " + "x" + " " + contrastsensitivity.Retinoscopy_Angle_Right_Eye_1 + contrastsensitivity.Retinoscopy_Angle_Right_Eye_2 + contrastsensitivity.Retinoscopy_Angle_Right_Eye_3)
})
})

//Validate Saved Data Left Eye is loaded successfully
it('0155.13_To_Validate_Saved_Data_Left_Eye' , () => {
    cy.fixture("AddExaminationEvents_Visual_Functions.json").then((contrastsensitivity) => {
      cy.get('[data-element-type-name="Retinoscopy"] > div > div >  div > div  + div > table > tbody > tr').eq(6).should('be.visible').should('contain', contrastsensitivity.Retinoscopy_Dilation_Left_Eye)
      cy.get('[data-element-type-name="Retinoscopy"] > div > div >  div > div  + div > table > tbody > tr').eq(7).should('be.visible').should('contain', contrastsensitivity.Retinoscopy_Left_Working_Distance_Left_Eye)
      cy.get('[data-element-type-name="Retinoscopy"] > div > div >  div > div  + div > table > tbody > tr').eq(8).should('be.visible').should('contain', contrastsensitivity.Retinoscopy_Angle_Left_Eye_1 + contrastsensitivity.Retinoscopy_Angle_Left_Eye_2 + contrastsensitivity.Retinoscopy_Angle_Left_Eye_3)
      cy.get('[data-element-type-name="Retinoscopy"] > div > div >  div > div  + div > table > tbody > tr').eq(9).should('be.visible').should('contain', contrastsensitivity.Retinoscopy_P1_Sign_Left_Eye + contrastsensitivity.Retinoscopy_P1_Value1_Left_Eye + contrastsensitivity.Retinoscopy_P1_Value2_Left_Eye + contrastsensitivity.Retinoscopy_P1_Value3_Left_Eye)
      cy.get('[data-element-type-name="Retinoscopy"] > div > div >  div > div  + div > table > tbody > tr').eq(10).should('be.visible').should('contain', contrastsensitivity.Retinoscopy_P1_Sign_Left_Eye + contrastsensitivity.Retinoscopy_P1_Value1_Left_Eye + contrastsensitivity.Retinoscopy_P1_Value2_Left_Eye + contrastsensitivity.Retinoscopy_P1_Value3_Left_Eye)
      
      //The following to be used; once the calculation logic is clear
      //cy.get('[data-element-type-name="Retinoscopy"] > div > div >  div > div  + div > table > tbody > tr').eq(11).should('be.visible').should('contain', contrastsensitivity.Retinoscopy_Left_Eye_Refraction_Validation + " " + "/" + " " +  contrastsensitivity.Retinoscopy_P2_Sign_Left_Eye + contrastsensitivity.Retinoscopy_Left_Eye_Val+ " " + "x" + " " + contrastsensitivity.Retinoscopy_Angle_Left_Eye_1 + contrastsensitivity.Retinoscopy_Angle_Left_Eye_2 + contrastsensitivity.Retinoscopy_Angle_Left_Eye_3)
  })

})




})