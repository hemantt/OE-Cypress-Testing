describe('0225_Optic_Disc_Element_DV', () => {
    //Verify that Optic_Disc  element is loaded successfully
    it('0225.19_To_Validate_Optic_Disc _Section_IsAvailable' , () => {
        cy.get('[data-element-type-name="Optic Disc"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Optic Disc"] > header > h3').should('contain', 'Optic Disc')
      })
    
    //Validate Saved Data Right Eye
    it('0225.12_To_Validate_Saved_Data_Right_Eye' , () => {
         cy.get('[data-element-type-name="Optic Disc"] > div > div > div > div > div + div > div ').eq(0).should('be.visible').should('contain' , "Significant peri-papillary atrophy, maximum temporally\n" + "Acquired pit of optic nerve\n" + "Disc pallor at 11 o'clock\n" + "Disc haemorrhage at 7 o'clock\n" + "Nerve fibre layer defect at 7 o'clock")
     })
     

    //Validate Right Eye Comments Loaded Successfully
    it('0225.20_To_Validate_Comments_Right_Eye' , () => {
        cy.fixture("AddExaminationEvents_Intraocular_Pressure.json").then((intraocularpressure) => {
            cy.get('[data-element-type-name="Optic Disc"] > header > h3').scrollIntoView().should('be.visible')
            cy.get('[data-element-type-name="Optic Disc"] > div > div > div > div > div + div > div ').eq(1).should('be.visible').should('contain' ,intraocularpressure.Optic_Disc_Comments_Right_Eye)
        })
    })
     
    //Validate CD Ratio Right Eye
    it('0225.21_To_Validate_CD_Ratio_Right_Eye' , () => {
        cy.fixture("AddExaminationEvents_Intraocular_Pressure.json").then((intraocularpressure) => {

        if(intraocularpressure.Optic_Disc_Mode_Right_Eye == "Basic")
        {
            cy.get('[data-element-type-name="Optic Disc"] > div > div > div > div > div + div > div').eq(3).should('be.visible').should('contain' ,intraocularpressure.Optic_disc_CD_Ratio_Right_Eye)    
        
        }

        if(intraocularpressure.Optic_Disc_Mode_Right_Eye == "Expert")
        {
            cy.get('[data-element-type-name="Optic Disc"] > div > div > div > div > div + div > div').eq(3).should('be.visible').should('contain', 'Not checked')
        
        }    
        
        })
    
    })
       
    //Validate Vertical Dismeter Right Eye
    it('0225.22_To_Validate_Vertical_Diameter_Right_Eye' , () => {
        cy.get('[data-element-type-name="Optic Disc"] > header > h3').scrollIntoView().should('be.visible')

        cy.fixture("AddExaminationEvents_Intraocular_Pressure.json").then((intraocularpressure) => {
            cy.get('[data-element-type-name="Optic Disc"] > div > div > div > div > div + div > div + div + div + div + div + div').eq(0).should('be.visible').should('contain' , intraocularpressure.Optic_Disc_Vertical_Diameter_Right_Eye + " mm")
            cy.get('[data-element-type-name="Optic Disc"] > div > div > div > div > div + div > div + div + div + div + div + div').eq(0).should('be.visible').should('contain' , "(lens " + intraocularpressure.Optic_Disc_mm_Lense_Right_Eye + ")")
        })
    })
    
    //Validate Saved Data Left Eye
    it('0225.23_To_Validate_Saved_Data_Left_Eye' , () => {
        cy.get('[data-element-type-name="Optic Disc"] > div > div > div > div > div + div > div ').eq(6).should('be.visible').should('contain' , "Significant peri-papillary atrophy, maximum temporally\n" + "Acquired pit of optic nerve\n" + "Disc pallor at 2 o'clock\n" + "Disc haemorrhage at 5 o'clock\n" + "Nerve fibre layer defect at 5 o'clock")
    })
    
    //Validate Left Eye Comments Loaded Successfully
    it('0225.24_To_Validate_Comments_Left_Eye' , () => {
        cy.fixture("AddExaminationEvents_Intraocular_Pressure.json").then((intraocularpressure) => {
            cy.get('[data-element-type-name="Optic Disc"] > div > div > div > div > div + div > div ').eq(7).should('be.visible').should('contain' , intraocularpressure.Optic_Disc_Comments_Left_Eye)    
        })
    })
    
    //Validate CD Ratio Left Eye
    it('0225.25_To_Validate_CD_Ratio_Left_Eye' , () => {
        cy.fixture("AddExaminationEvents_Intraocular_Pressure.json").then((intraocularpressure) => {
        if(intraocularpressure.Optic_Disc_Mode == "Basic")
        {
            cy.get('[data-element-type-name="Optic Disc"] > div > div > div > div > div + div > div').eq(9).should('be.visible').should('contain' , intraocularpressure.Optic_disc_CD_Ratio_Left_Eye)    
        
        }
        if(intraocularpressure.Optic_Disc_Mode == "Expert")
        {
            cy.get('[data-element-type-name="Optic Disc"] > div > div > div > div > div + div > div').eq(9).should('be.visible').should('contain', 'Not checked')
        
        }    
        
        
        
    })
    })
    //Validate Vertical Dismeter Left Eye
    it('0225.26_To_Validate_Vertical_Diameter_Left_Eye' , () => {
        cy.get('[data-element-type-name="Optic Disc"] > header > h3').scrollIntoView().should('be.visible')

        cy.fixture("AddExaminationEvents_Intraocular_Pressure.json").then((intraocularpressure) => {
            cy.get('[data-element-type-name="Optic Disc"] > div > div > div > div > div + div > div + div + div + div + div + div').eq(1).should('be.visible').should('contain' , intraocularpressure.Optic_Disc_Vertical_Diameter_Left_Eye + " mm")
            cy.get('[data-element-type-name="Optic Disc"] > div > div > div > div > div + div > div + div + div + div + div + div').eq(1).should('be.visible').should('contain' , "(lens " + intraocularpressure.Optic_Disc_mm_Lense_Left_Eye + ")")
        })
    })

})    

    