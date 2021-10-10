//onst { it } = require("mocha")

//const { it } = require("mocha")

//const { it } = require("mocha")

describe('0110_Contacts_Element_DV', () => {
    //Verify that contacts section is loaded successfully
    it('0110.6_To_Check_Contacts_Section_IsAvailable' ,() => {
        cy.get('[data-element-type-name="Contacts"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Contacts"] > header > h3').should('be.visible').should('contain', 'Contacts')
      
    })
    //To validate saved data - commenting on purpose
    /*it('0110.7_To_Validate_Already_Given_Contact' , () => {
        cy.get('[data-element-type-name="Contacts"] > div > div > div > table > tbody > tr > td').eq(0).should('be.visible').should('contain' , 'General Practitioner')
        cy.get('[data-element-type-name="Contacts"] > div > div > div > table > tbody > tr > td + td').eq(0).should('be.visible').should('contain' , 'Dr A Who')
        cy.get('[data-element-type-name="Contacts"] > div > div > div > table > tbody > tr > td + td + td + td').eq(0).should('be.visible').should('contain' , '01234567890')


    }) */
    
    //Validate added contacts loaded successfully
    it('0110.7_To_Validate_Given_Contact' , () => {
        cy.fixture("AddExaminationEvents_History.json").then((addexaminationevents) => {
        if(addexaminationevents.Contact_Type_Search_Add_Contact== "Miss Jing Straw (Consultant Ophthalmologist)")
        {
            
            cy.get('[data-element-type-name="Contacts"] > div > div > div > table > tbody > tr  + tr > td').eq(0).should('be.visible').should('contain' , addexaminationevents.Contacts_Type_Add)
            cy.get('[data-element-type-name="Contacts"] > div > div > div > table > tbody > tr  + tr > td + td').eq(0).should('be.visible').should('contain' , addexaminationevents.Contact_Type_Search_Add_Contact_DV)
            cy.get('[data-element-type-name="Contacts"] > div > div > div > table > tbody > tr > td + td + td + td').eq(0).should('be.visible').should('contain' , addexaminationevents.Contacts_Phone_Num)
            
        }
        if(addexaminationevents.Contact_Type_Search_Add_Contact== "Add a new contact:")
        {}
    
    })
    
    })
    
    //Validate saved commments
    it('0110.8_To_Validate_Contacts_Comments' , () => {
    cy.fixture("AddExaminationEvents_History.json").then((addexaminationevents) => {
        cy.get('[data-element-type-name="Contacts"] > div > div > div > table > tbody > tr  + tr > td + td + td + td + td + td').eq(0).should('be.visible').should('contain' , addexaminationevents.Contacts_Comments)

    })
    })





})

