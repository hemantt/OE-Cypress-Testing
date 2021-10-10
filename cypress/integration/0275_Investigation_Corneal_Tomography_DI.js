//const { it } = require("mocha")const { it } = require("mocha")

//const { it } = require("mocha")


//Test script for Corneal Tomography element
describe('0275_Corneal_Tomography_Element_DI', () => {

    //Add the Corneal Tomography_ element
        it('0275.1_To_Add_Corneal_Tomography_Element' , () => {
            cy.get("#js-manage-elements-btn").should('be.visible').click()

            cy.get('body').then((body) => {
          
                if (body.find('#manage-elements-Corneal-Tomography[class="added"]').length == 0)
                {
                    cy.get('#manage-elements-Corneal-Tomography').should('be.visible').click()
                }
          
            })
          
            cy.get(".blue.hint.cols-full").should('be.visible').click()

        })
    
    //Verify that Corneal Tomography element is loaded successfully
        it('0275.2_To_Validate_Corneal_Tomography_Section_IsAvailable' , () => {
          cy.get('[data-element-type-name="Corneal Tomography"] > header > h3').scrollIntoView().should('be.visible')
          cy.get('[data-element-type-name="Corneal Tomography"] > header > h3').should('contain', 'Corneal Tomography')
        })
    
    //Verify Right Eye Labels 
        it('0275.3_To_Validate_Right_Eye_Labels_Are_Loaded_Successfully' , () => {
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div > div > label').should('be.visible').should('contain' , 'Tomographer Device:')
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div  + div > div > div  > div > table > tbody > tr > td > label').eq(0).should('be.visible').should('contain' ,'Front K1:')
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div  + div > div > div  > div > table > tbody > tr > td > label').eq(1).should('be.visible').should('contain' ,'Front K2:')
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div  + div > div > div  > div > table > tbody > tr > td > label').eq(2).should('be.visible').should('contain' ,'Quality Score - Front:')
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div  + div > div > div  > div > table > tbody > tr > td > label').eq(3).should('be.visible').should('contain' ,'Kmax:')
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div  + div > div > div  > div > table > tbody > tr > td > label').eq(4).should('be.visible').should('contain' ,'Thinnest Point Pachymetry (µm)')
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div  + div > div > div  > div > table > tbody > tr > td > label').eq(5).should('be.visible').should('contain' ,'B-A Index:')
        })
    //Verify Right Eye Labels 
        it('0275.4_To_Validate_Right_Eye_Labels_Loaded_Successfully' , () => {
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div  + div > div > div  > div > table > tbody > tr > td > label').eq(6).should('be.visible').should('contain' ,'Back K1:')
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div  + div > div > div  > div > table > tbody > tr > td > label').eq(7).should('be.visible').should('contain' ,'Back K2:')
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div  + div > div > div  > div > table > tbody > tr > td > label').eq(8).should('be.visible').should('contain' ,'Quality Score - Back:')
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div  + div > div > div  > div > table > tbody > tr > td > label').eq(9).should('be.visible').should('contain' ,'Flourescein:')
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div  + div > div > div  > div > table > tbody > tr > td > label').eq(10).should('be.visible').should('contain' ,'CL Removed?:')
        })
    //Verify Right Eye Radiobuttons
        it('0275.5_To_Validate_Radiobuttons' , () => {
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div  + div > div > div  > div > table + table > tbody > tr + tr  + tr + tr > td + td > div > label').eq(0).should('be.visible').should('contain' , 'No')
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div  + div > div > div  > div > table + table > tbody > tr + tr  + tr + tr > td + td > div > label').eq(1).should('be.visible').should('contain' , 'Yes')
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div + div > div > div > a + div > table > tbody >  tr > td > div > label > input').eq(0).should('be.visible').should('be.checked')
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div + div > div > div > a + div > table > tbody >  tr > td > div > label > input').eq(1).should('be.visible').should('not.be.checked')
        })
        
    //Verify Left Eye Labels
        it('0275.6_To_Validate_Left_Eye_Labels_Are_Loaded_Successfully' , () => {
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div  + div > div > div  > div > table > tbody > tr > td > label').eq(11).should('be.visible').should('contain' ,'Front K1:')
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div  + div > div > div  > div > table > tbody > tr > td > label').eq(12).should('be.visible').should('contain' ,'Front K2:')
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div  + div > div > div  > div > table > tbody > tr > td > label').eq(13).should('be.visible').should('contain' ,'Quality Score - Front:')
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div  + div > div > div  > div > table > tbody > tr > td > label').eq(14).should('be.visible').should('contain' ,'Kmax:')
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div  + div > div > div  > div > table > tbody > tr > td > label').eq(15).should('be.visible').should('contain' ,'Thinnest Point Pachymetry (µm)')
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div  + div > div > div  > div > table > tbody > tr > td > label').eq(16).should('be.visible').should('contain' ,'B-A Index:')
        })
    //Verify Left Eye Labels
        it('0275.7_To_Validate_Left_Eye_Labels_Loaded_Successfully' , () => {

           cy.get('[data-element-type-name="Corneal Tomography"] > div + div  + div > div > div  > div > table > tbody > tr > td > label').eq(17).should('be.visible').should('contain' ,'Back K1:')
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div  + div > div > div  > div > table > tbody > tr > td > label').eq(18).should('be.visible').should('contain' ,'Back K2:')
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div  + div > div > div  > div > table > tbody > tr > td > label').eq(19).should('be.visible').should('contain' ,'Quality Score - Back:')
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div  + div > div > div  > div > table > tbody > tr > td > label').eq(20).should('be.visible').should('contain' ,'Flourescein:')
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div  + div > div > div  > div > table > tbody > tr > td > label').eq(21).should('be.visible').should('contain' ,'CL Removed?:')

        })
    //Verify Right Eye Radiobuttons    
        it('0275.8_To_Validate_Radiobuttons' , () => {
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div  + div > div > div  > div > table + table > tbody > tr + tr  + tr + tr > td + td > div > label').eq(2).should('be.visible').should('contain' , 'No')
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div  + div > div > div  > div > table + table > tbody > tr + tr  + tr + tr > td + td > div > label').eq(3).should('be.visible').should('contain' , 'Yes')
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div + div > div > div > a + div > table > tbody >  tr > td > div > label > input').eq(2).should('be.visible').should('be.checked')
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div + div > div > div > a + div > table > tbody >  tr > td > div > label > input').eq(3).should('be.visible').should('not.be.checked')

        })

    //Add Details to Corneal Tomography Right Eye
        it('0275.9_To_Add_Right_Eye_Details' , () => {
        cy.fixture("AddExaminationEvents_Investigation.json").then((investigation) => {
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div > div > select').should('be.visible').select(investigation.Corneal_Tomography_Tomographer_Device)
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div + div > div > div > div > table > tbody > tr > td > div > input').eq(0).should('be.visible').clear().type(investigation.Corneal_Tomography_Front_K1_Right_Eye)
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div + div > div > div > div > table > tbody > tr > td > div > input').eq(1).should('be.visible').clear().type(investigation.Corneal_Tomography_Front_K2_Right_Eye)
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div + div > div > div > div > table > tbody > tr  + tr + tr > td + td > div > select').eq(0).should('be.visible').select(investigation.Corneal_Tomography_Quality_Score_Front_Right_Eye)
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div + div > div > div > div > table > tbody > tr > td > div > input').eq(2).should('be.visible').clear().type(investigation.Corneal_Tomography_Kmax_Right_Eye)
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div + div > div > div > div > table > tbody > tr > td > div > input').eq(3).should('be.visible').clear().type(investigation.Corneal_Tomography_Thinnest_Point_Pachymetry_µm_Right_Eye)

        })
    })
    
    //Add Details to Corneal Tomography Right Eye
        it('0275.10_To_Add_Right_Eye_Details' , () => {
        cy.fixture("AddExaminationEvents_Investigation.json").then((investigation) => {
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div + div > div > div > div > table > tbody > tr > td > div > input').eq(4).should('be.visible').clear().type(investigation.Corneal_Tomography_BA_Index_Right_Eye)
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div + div > div > div > div > table > tbody > tr > td > div > input').eq(5).should('be.visible').clear().type(investigation.Corneal_Tomography_Back_K1_Right_Eye)
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div + div > div > div > div > table > tbody > tr > td > div > input').eq(6).should('be.visible').clear().type(investigation.Corneal_Tomography_Back_K2_Right_Eye)
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div + div > div > div > div > table > tbody > tr  + tr + tr > td + td > div > select').eq(1).should('be.visible').select(investigation.Corneal_Tomography_Quality_Score_Back_Right_Eye)
           cy.get('[data-element-type-name="Corneal Tomography"] > div + div + div > div > div > div > table > tbody > tr  + tr + tr > td + td > div > select').eq(2).should('be.visible').select(investigation.Corneal_Tomography_CL_Removed_Right_Eye)
        
        
        })
    }) 
    
    //For Radiobuttons Right Eye

        it('0275.11_To_Add_Right_Eye_Radiobutton' , () => {
        cy.fixture("AddExaminationEvents_Investigation.json").then((investigation) => {
            if(investigation.Corneal_Tomography_Flourescein_Validation_Right_Eye == "No")
            {
                  cy.get('[data-element-type-name="Corneal Tomography"] > div + div + div > div > div > a + div > table > tbody >  tr > td > div > label > input').eq(0).should('be.visible').click()
            }
            
            if(investigation.Corneal_Tomography_Flourescein_Validation_Right_Eye == "Yes")
            {
                  cy.get('[data-element-type-name="Corneal Tomography"] > div + div + div > div > div > a + div > table > tbody >  tr > td > div > label > input').eq(1).should('be.visible').click()
                 
            }

        })
    
    })    

    //Add Details to Corneal Tomography Left Eye
        it('0275.12_To_Add_Left_Eye_Details' , () => {
        cy.fixture("AddExaminationEvents_Investigation.json").then((investigation) => {
            cy.get('[data-element-type-name="Corneal Tomography"] > div + div + div > div > div > div > table > tbody > tr > td > div > input').eq(8).should('be.visible').clear().type(investigation.Corneal_Tomography_Front_K1_Left_Eye)
            cy.get('[data-element-type-name="Corneal Tomography"] > div + div + div > div > div > div > table > tbody > tr > td > div > input').eq(9).should('be.visible').clear().type(investigation.Corneal_Tomography_Front_K2_Left_Eye)
            cy.get('[data-element-type-name="Corneal Tomography"] > div + div + div > div > div > div > table > tbody > tr  + tr + tr > td + td > div > select').eq(3).should('be.visible').select(investigation.Corneal_Tomography_Quality_Score_Front_Left_Eye)
            cy.get('[data-element-type-name="Corneal Tomography"] > div + div + div > div > div > div > table > tbody > tr > td > div > input').eq(10).should('be.visible').clear().type(investigation.Corneal_Tomography_Kmax_Left_Eye)
            cy.get('[data-element-type-name="Corneal Tomography"] > div + div + div > div > div > div > table > tbody > tr > td > div > input').eq(11).should('be.visible').clear().type(investigation.Corneal_Tomography_Thinnest_Point_Pachymetry_µm_Left_Eye)
        })
    })    
    
    
   //Add Details to Corneal Tomography Left Eye
        it('0275.13_To_Add_Left_Eye_Details' , () => {
        cy.fixture("AddExaminationEvents_Investigation.json").then((investigation) => {
            cy.get('[data-element-type-name="Corneal Tomography"] > div + div + div > div > div > div > table > tbody > tr > td > div > input').eq(12).should('be.visible').clear().type(investigation.Corneal_Tomography_BA_Index_Left_Eye)
            cy.get('[data-element-type-name="Corneal Tomography"] > div + div + div > div > div > div > table > tbody > tr > td > div > input').eq(13).should('be.visible').clear().type(investigation.Corneal_Tomography_Back_K1_Left_Eye)
            cy.get('[data-element-type-name="Corneal Tomography"] > div + div + div > div > div > div > table > tbody > tr > td > div > input').eq(14).should('be.visible').clear().type(investigation.Corneal_Tomography_Back_K2_Left_Eye)
            cy.get('[data-element-type-name="Corneal Tomography"] > div + div + div > div > div > div > table > tbody > tr  + tr + tr > td + td > div > select').eq(4).should('be.visible').select(investigation.Corneal_Tomography_Quality_Score_Back_Left_Eye)
            cy.get('[data-element-type-name="Corneal Tomography"] > div + div + div > div > div > div > table > tbody > tr  + tr + tr > td + td > div > select').eq(5).should('be.visible').select(investigation.Corneal_Tomography_CL_Removed_Left_Eye)
        })
    })


    //For Radiobuttons Left Eye

        it('0275.14_To_Add_Left_Eye_Radiobutton' , () => {
        cy.fixture("AddExaminationEvents_Investigation.json").then((investigation) => {
            if(investigation.Corneal_Tomography_Flourescein_Validation_Left_Eye == "No")
{
      cy.get('[data-element-type-name="Corneal Tomography"] > div + div + div > div > div > a + div > table > tbody >  tr > td > div > label > input').eq(2).should('be.visible').click()
}

    if(investigation.Corneal_Tomography_Flourescein_Validation_Left_Eye == "Yes")
{
      cy.get('[data-element-type-name="Corneal Tomography"] > div + div + div > div > div > a + div > table > tbody >  tr > td > div > label > input').eq(3).should('be.visible').click()
     
}
    })

})    




        
        
        
        
        
        
        
        
        
        
        
        
        
        
        






















})        