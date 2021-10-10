describe('0240_Fundus_Element_DV', () => {
    it('0240.17_To_Validate_Fundus_Section_IsAvailable' , () => {
        cy.get('[data-element-type-name="Fundus"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Fundus"] > header > h3').should('contain', 'Fundus')
    })

    //Validate Right Eye Values Are Loaded Successfully
    it('0240.18_To_Validate_Doodles_Values_Right_Eye' , () => {
        cy.fixture("AddExaminationEvents_Retina.json").then((retina) => {
        cy.get('[data-element-type-name="Fundus"] > header + div > div > div > div + div > div').eq(0).scrollIntoView().should('be.visible').should('contain' ,retina.Fundus_Type_Right_Eye, + "subretinal fluid with lipofuscin with pigment halo with drusen." + "Thickness 100 mm and Margin to optic disc 100 mm." + "Superotemporal retinal detachment (macula on)" + "Round hole 5 o'clock" + "Superotemporal choroidal effusion [1]" + "'U' tear at 11 o'clock")
       })
       })
    //Validate Right Eye Values Are Loaded Successfully    
    it('0240.19_To_Validate_Saved_Data_Values_Right_Eye' ,() => {
        cy.fixture("AddExaminationEvents_Retina.json").then((retina) => {
        cy.get('[data-element-type-name="Fundus"] > header + div > div > div > div + div > div').eq(4).should('be.visible').should('contain' , retina.Fundus_Viterous_Right_Eye_Dropdown1)
        cy.get('[data-element-type-name="Fundus"] > header + div > div > div > div + div > div').eq(4).should('be.visible').should('contain' , retina.Fundus_Viterous_Right_Eye_Dropdown2)
        cy.get('[data-element-type-name="Fundus"] > header + div > div > div > div + div > div').eq(2).should('be.visible').should('contain' ,retina.Fundus_Right_Eye_Comments)
    })
    })
    //Validate Left Eye Values Are Loaded Successfully
    it('0240.20_To_Validate_Doodles_Values_Left_Eye' , () => {
        cy.fixture("AddExaminationEvents_Retina.json").then((retina) => {
        cy.get('[data-element-type-name="Fundus"] > header + div > div > div > div + div > div').eq(5).scrollIntoView().should('be.visible').should('contain' ,retina.Fundus_Type_Left_Eye, + "subretinal fluid with lipofuscin with pigment halo with drusen." + "Thickness 100 mm and Margin to optic disc 100 mm." + "Superotemporal retinal detachment (macula on)" + "Round hole 5 o'clock" + "Superotemporal choroidal effusion [1]" + "'U' tear at 1 o'clock")
       })
       }) 
    //Validate Left Eye Values Are Loaded Successfully
    it('0240.21_To_Validate_Saved_Data_Values_Left_Eye' ,() => {
        cy.fixture("AddExaminationEvents_Retina.json").then((retina) => {
        cy.get('[data-element-type-name="Fundus"] > header + div > div > div > div + div > div').eq(9).should('be.visible').should('contain' , retina.Fundus_Viterous_Left_Eye_Dropdown1)
        cy.get('[data-element-type-name="Fundus"] > header + div > div > div > div + div > div').eq(9).should('be.visible').should('contain' , retina.Fundus_Viterous_Left_Eye_Dropdown2)
        cy.get('[data-element-type-name="Fundus"] > header + div > div > div > div + div > div').eq(7).should('be.visible').should('contain' ,retina.Fundus_Left_Eye_Comments)
    })
    })
    
   






















})  
       
           
       
       
       
      













