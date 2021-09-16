describe('0025_Refraction_Element_Dv', () => {
    it('0025.9_To_Validate_Refraction_isAvailable' , () => {
        cy.get('[data-element-type-name="Refraction"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Refraction"] > header > h3').should('contain' , 'Refraction')
      }) 
    
    it('0025.10_To_Validate-Saved Data_Right_Eye' , () => {
        cy.fixture("contrastsensitivity.json").then((contrastsensitivity) => {  
        cy.get('[data-element-type-name="Refraction"] > div > div > table > tbody > tr > td ').eq(0).should('be.visible').should('contain', contrastsensitivity.Sphere_Validation_Right_Eye)
        cy.get('[data-element-type-name="Refraction"] > div > div > table > tbody > tr > td   + td').eq(0).should('be.visible').should('contain', contrastsensitivity.Cylinder_Validation_Right_Eye)
        cy.get('[data-element-type-name="Refraction"] > div > div > table > tbody > tr > td   + td + td').eq(0).should('be.visible').should('contain', contrastsensitivity.Axis_Validation_Right_Eye)
        cy.get('[data-element-type-name="Refraction"] > div > div > table > tbody > tr > td   + td + td + td ').eq(0).should('be.visible').should('contain', contrastsensitivity.Refraction_Type_Right_Eye)
        cy.get('[data-element-type-name="Refraction"]  > div  > div > span').eq(0).should('be.visible').should('contain', contrastsensitivity.Refraction_Comments_Right_Eye)
        })
    })    
    it('0025.11_To_Validate-Saved Data_Left_Eye' , () => {
            cy.fixture("contrastsensitivity.json").then((contrastsensitivity) => {  
            cy.get('[data-element-type-name="Refraction"] > div > div > table > tbody > tr > td ').eq(4).should('be.visible').should('contain', contrastsensitivity.Sphere_Validation_Left_Eye)
            cy.get('[data-element-type-name="Refraction"] > div > div > table > tbody > tr > td   + td').eq(3).should('be.visible').should('contain', contrastsensitivity.Cylinder_Validation_Left_Eye)
            cy.get('[data-element-type-name="Refraction"] > div > div > table > tbody > tr > td   + td + td').eq(2).should('be.visible').should('contain', contrastsensitivity.Axis_Validation_Left_Eye)
            cy.get('[data-element-type-name="Refraction"] > div > div > table > tbody > tr > td   + td + td + td ').eq(1).should('be.visible').should('contain', contrastsensitivity.Refraction_Type_Left_Eye)
            cy.get('[data-element-type-name="Refraction"]  > div  > div > span').eq(1).should('be.visible').should('contain', contrastsensitivity.Refraction_Comments_Left_Eye)

            })
    })







})