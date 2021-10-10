//const { it } = require("mocha")

//const { it } = require("mocha")

//const { it } = require("mocha")

describe('0275_Corneal_Tomography_Element_DV', () => {
    //Verify that Corneal Tomography element is loaded successfully
    it('0275.15_To_Validate_Corneal_Tomography_Section_IsAvailable' , () => {
        cy.get('[data-element-type-name="Corneal Tomography"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Corneal Tomography"] > header > h3').should('contain', 'Corneal Tomography')
      })
    
    //Validate Right Eye Data is Loaded Successfully
    it('0275.16_To_Validate_Right_Eye_Saved_Data' , () => {
    cy.fixture("AddExaminationEvents_Investigation.json").then((investigation) => {
        cy.get('[data-element-type-name="Corneal Tomography"] > div > div').should('be.visible').should('contain' , investigation.Corneal_Tomography_Tomographer_Device)
        cy.get('[data-element-type-name="Corneal Tomography"] > div  + div > div > table > tbody > tr > td + td').eq(0).should('be.visible').should('contain' ,investigation. Corneal_Tomography_Front_K1_Right_Eye)
        cy.get('[data-element-type-name="Corneal Tomography"] > div  + div > div > table > tbody > tr > td + td').eq(1).should('be.visible').should('contain' , investigation.Corneal_Tomography_Front_K2_Right_Eye)
        cy.get('[data-element-type-name="Corneal Tomography"] > div  + div > div > table > tbody > tr > td + td').eq(2).should('be.visible').should('contain' , investigation.Corneal_Tomography_Quality_Score_Front_Right_Eye)
        cy.get('[data-element-type-name="Corneal Tomography"] > div  + div > div > table > tbody > tr > td + td').eq(3).should('be.visible').should('contain' , investigation.Corneal_Tomography_Back_K1_Right_Eye)
        cy.get('[data-element-type-name="Corneal Tomography"] > div  + div > div > table > tbody > tr > td + td').eq(4).should('be.visible').should('contain' , investigation.Corneal_Tomography_Back_K2_Right_Eye)
    })
    })
    
    //Validate Right Eye Data is Loaded Successfully
    it('0275.17_Validate_Saved_Data_Right_Eye' , () => {
    cy.fixture("AddExaminationEvents_Investigation.json").then((investigation) => {
        cy.get('[data-element-type-name="Corneal Tomography"] > div  + div > div > table > tbody > tr > td + td').eq(5).should('be.visible').should('contain' , investigation.Corneal_Tomography_Quality_Score_Back_Right_Eye)
        cy.get('[data-element-type-name="Corneal Tomography"] > div  + div > div > table > tbody > tr > td + td').eq(6).should('be.visible').should('contain' , investigation.Corneal_Tomography_Kmax_Right_Eye)
        cy.get('[data-element-type-name="Corneal Tomography"] > div  + div > div > table > tbody > tr > td + td').eq(7).should('be.visible').should('contain' , investigation. Corneal_Tomography_Thinnest_Point_Pachymetry_µm_Right_Eye)
        cy.get('[data-element-type-name="Corneal Tomography"] > div  + div > div > table > tbody > tr > td + td').eq(8).should('be.visible').should('contain' , investigation.Corneal_Tomography_BA_Index_Right_Eye)
       cy.get('[data-element-type-name="Corneal Tomography"] > div  + div > div > table > tbody > tr > td + td').eq(10).should('be.visible').should('contain' , investigation.Corneal_Tomography_CL_Removed_Right_Eye)

    })
    })

    //Validate Flourescein Value Right Eye is Displayed Correctly
    it('0275.18 _To_Validate_Flourescein_Right_Eye' , () => {
       cy.fixture("AddExaminationEvents_Investigation.json").then((investigation) => {
    if(investigation.Corneal_Tomography_Flourescein_Validation_Right_Eye == "No")
    {
    cy.get('[data-element-type-name="Corneal Tomography"] > div  + div > div > table > tbody > tr > td + td').eq(9).should('be.visible').should('contain' , investigation.Corneal_Tomography_Flourescein_Validation_Right_Eye)
    }

    if(investigation.Corneal_Tomography_Flourescein_Validation_Right_Eye == "Yes")
    {
    cy.get('[data-element-type-name="Corneal Tomography"] > div  + div > div > table > tbody > tr > td + td').eq(9).should('be.visible').should('contain' , investigation.Corneal_Tomography_Flourescein_Validation_Right_Eye)
    }

   })
   })
   
    //Validate Left Eye Data is Loaded Successfully
    it('0275.19_To_Validate_Left_Eye_Saved_Data' , () => {
    cy.fixture("AddExaminationEvents_Investigation.json").then((investigation) => {
        cy.get('[data-element-type-name="Corneal Tomography"] > div > div').should('be.visible').should('contain' , investigation.Corneal_Tomography_Tomographer_Device)
        cy.get('[data-element-type-name="Corneal Tomography"] > div  + div > div > table > tbody > tr > td + td').eq(11).should('be.visible').should('contain' , investigation.Corneal_Tomography_Front_K1_Left_Eye)
        cy.get('[data-element-type-name="Corneal Tomography"] > div  + div > div > table > tbody > tr > td + td').eq(12).should('be.visible').should('contain' , investigation.Corneal_Tomography_Front_K2_Left_Eye)
        cy.get('[data-element-type-name="Corneal Tomography"] > div  + div > div > table > tbody > tr > td + td').eq(13).should('be.visible').should('contain' , investigation.Corneal_Tomography_Quality_Score_Front_Left_Eye)
        cy.get('[data-element-type-name="Corneal Tomography"] > div  + div > div > table > tbody > tr > td + td').eq(14).should('be.visible').should('contain' , investigation.Corneal_Tomography_Back_K1_Left_Eye)
        cy.get('[data-element-type-name="Corneal Tomography"] > div  + div > div > table > tbody > tr > td + td').eq(15).should('be.visible').should('contain' , investigation.Corneal_Tomography_Back_K2_Left_Eye)
        cy.get('[data-element-type-name="Corneal Tomography"] > div  + div > div > table > tbody > tr > td + td').eq(16).should('be.visible').should('contain' , investigation.Corneal_Tomography_Quality_Score_Back_Left_Eye)

    })
    })
    
    //Validate Left Eye Data is Loaded Successfully
    it('0275.20_Validate_Right_Eye_Saved_Data' , () => {
    cy.fixture("AddExaminationEvents_Investigation.json").then((investigation) => {
        cy.get('[data-element-type-name="Corneal Tomography"] > div  + div > div > table > tbody > tr > td + td').eq(17).should('be.visible').should('contain' , investigation.Corneal_Tomography_Kmax_Left_Eye)
        cy.get('[data-element-type-name="Corneal Tomography"] > div  + div > div > table > tbody > tr > td + td').eq(18).should('be.visible').should('contain' , investigation.Corneal_Tomography_Thinnest_Point_Pachymetry_µm_Left_Eye)
        cy.get('[data-element-type-name="Corneal Tomography"] > div  + div > div > table > tbody > tr > td + td').eq(19).should('be.visible').should('contain' , investigation.Corneal_Tomography_BA_Index_Left_Eye)
        cy.get('[data-element-type-name="Corneal Tomography"] > div  + div > div > table > tbody > tr > td + td').eq(21).should('be.visible').should('contain' , investigation.Corneal_Tomography_CL_Removed_Left_Eye)

    })
    })
     
    //Validate Flourescein Value Left Eye is Displayed Correctly
    it('0275.21 _To_Validate_Flourescein_Left_Eye' , () => {
        cy.fixture("AddExaminationEvents_Investigation.json").then((investigation) => {
    if(investigation.Corneal_Tomography_Flourescein_Validation_Left_Eye == "No")
    {
        cy.get('[data-element-type-name="Corneal Tomography"] > div  + div > div > table > tbody > tr > td + td').eq(20).should('be.visible').should('contain' , investigation.Corneal_Tomography_Flourescein_Validation_Left_Eye)
    }
    
    if(investigation.Corneal_Tomography_Flourescein_Validation_Left_Eye == "Yes")
    {
        cy.get('[data-element-type-name="Corneal Tomography"] > div  + div > div > table > tbody > tr > td + td').eq(20).should('be.visible').should('contain' , investigation.Corneal_Tomography_Flourescein_Validation_Left_Eye)
    }
    
    })
    })













})