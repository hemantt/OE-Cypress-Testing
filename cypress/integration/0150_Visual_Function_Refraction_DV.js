describe('0150_Refraction_Element_DV', () => {
    //Verify that  refraction is loaded successfully
    it('0150.9_To_Validate_Refraction_IsAvailable' , () => {
        cy.get('[data-element-type-name="Refraction"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Refraction"] > header > h3').should('contain' , 'Refraction')
      }) 
    
    //Validate Saved Data for Right Eye is loaded Successfully  
    it('0150.10_To_Validate_Saved_Data_Right_Eye' , () => {
        cy.fixture("AddExaminationEvents_Visual_Functions.json").then((contrastsensitivity) => { 
            
        
        cy.get('[data-element-type-name="Refraction"] > div > div > table > tbody > tr > td ').eq(0).should('be.visible').should('contain', contrastsensitivity.Refraction_Sphere_Right_Eye_Sign + contrastsensitivity.Refraction_Sphere_Right_Eye_1 + contrastsensitivity.Refraction_Sphere_Right_Eye_2 + contrastsensitivity.Refraction_Sphere_Right_Eye_3)
        cy.get('[data-element-type-name="Refraction"] > div > div > table > tbody > tr > td   + td').eq(0).should('be.visible').should('contain', contrastsensitivity.Refraction_Cylinder_Right_Eye_Sign + contrastsensitivity.Refraction_Cylinder_Right_Eye_1 + contrastsensitivity.Refraction_Cylinder_Right_Eye_2 + contrastsensitivity.Refraction_Cylinder_Right_Eye_3)
        cy.get('[data-element-type-name="Refraction"] > div > div > table > tbody > tr > td   + td + td').eq(0).should('be.visible').should('contain', contrastsensitivity.Refraction_Axis_Right_Eye_1 + contrastsensitivity.Refraction_Axis_Right_Eye_2 + contrastsensitivity.Refraction_Axis_Right_Eye_3)
        cy.get('[data-element-type-name="Refraction"] > div > div > table > tbody > tr > td   + td + td + td ').eq(0).should('be.visible').should('contain', contrastsensitivity.Refraction_Type_Right_Eye)
        cy.get('[data-element-type-name="Refraction"]  > div  > div > span').eq(0).should('be.visible').should('contain', contrastsensitivity.Refraction_Comments_Right_Eye)
        })
    }) 
    
    //Validate Saved Data for Left Eye is loaded Successfully  
    it('0150.11_To_Validate_Saved_Data_Left_Eye' , () => {
            cy.fixture("AddExaminationEvents_Visual_Functions.json").then((contrastsensitivity) => {  
            cy.get('[data-element-type-name="Refraction"] > div > div > table > tbody > tr > td ').eq(4).should('be.visible').should('contain', contrastsensitivity.Refraction_Sphere_Left_Eye_Sign + contrastsensitivity.Refraction_Sphere_Left_Eye_1 + contrastsensitivity.Refraction_Sphere_Left_Eye_2 + contrastsensitivity.Refraction_Sphere_Left_Eye_3)
            cy.get('[data-element-type-name="Refraction"] > div > div > table > tbody > tr > td   + td').eq(3).should('be.visible').should('contain', contrastsensitivity.Refraction_Cylinder_Left_Eye_Sign + contrastsensitivity.Refraction_Cylinder_Left_Eye_1 + contrastsensitivity.Refraction_Cylinder_Left_Eye_2 + contrastsensitivity.Refraction_Cylinder_Left_Eye_3)
            cy.get('[data-element-type-name="Refraction"] > div > div > table > tbody > tr > td   + td + td').eq(2).should('be.visible').should('contain', contrastsensitivity.Refraction_Axis_Left_Eye_1 + contrastsensitivity.Refraction_Axis_Left_Eye_2 + contrastsensitivity.Refraction_Axis_Left_Eye_3)
            cy.get('[data-element-type-name="Refraction"] > div > div > table > tbody > tr > td   + td + td + td ').eq(1).should('be.visible').should('contain', contrastsensitivity.Refraction_Type_Left_Eye)
            cy.get('[data-element-type-name="Refraction"]  > div  > div > span').eq(1).should('be.visible').should('contain', contrastsensitivity.Refraction_Comments_Left_Eye)

            })
    })







})