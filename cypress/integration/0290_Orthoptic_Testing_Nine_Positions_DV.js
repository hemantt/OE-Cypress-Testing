//const { it } = require("mocha")

describe('0290_Nine_Positions_Element_DV', () => {
    //Verify that Nine Positions element is loaded successfully
    it('0290.10_To_Validate_Nine Positions_Section_IsAvailable' , () => {
        cy.get('[data-element-type-name="Nine Positions"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Nine Positions"] > header > h3').should('contain', 'Nine Positions')
      })
    
    //Validate The Added Readings are Loaded Successfully 
    it('0290.11_To_Validate_Readings' , () => {
    cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('[data-element-type-name="Nine Positions"] > div > div > div + div > div > ul > li').eq(0).should('be.visible').should('contain' , orthoptictesting.Nine_Positions_Position_DV)
        cy.get('[data-element-type-name="Nine Positions"] > div > div > div + div > div > ul > li').eq(1).should('be.visible').should('contain' ,  "CHP: " + orthoptictesting.Nine_Positions_CHP_DV)
        cy.get('[data-element-type-name="Nine Positions"] > div > div > div + div > div > ul > li').eq(2).should('be.visible').should('contain' , orthoptictesting.Nine_Positions_Checkbox)

    })
    })

    //Validate Added DVD Values is Saved Successfully
    it('0290.12_Validate_DVD_Values' , () => {
    cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
       cy.get('[data-element-type-name="Nine Positions"] > div > div > div + div  > div + div > table > tbody > tr > td ').eq(0).should('be.visible').should('contain' , orthoptictesting.Nine_Positions_DVD_Left)
       cy.get('[data-element-type-name="Nine Positions"] > div > div > div + div  > div + div > table > tbody > tr > td + td').eq(0).should('be.visible').should('contain' , orthoptictesting.Nine_Positions_DVD_Right)

    })
    })
    
//Validate Saved Ocular Movement is Displayed Correctly
it('0290.13_Validate_Ocular_Movements' , () => {
    cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
if(orthoptictesting.Nine_Positions_Checkbox == "Wong supine positive")
{
    cy.get('[data-element-type-name="Nine Positions"] > div > div > div + div  > div + div > table > tbody  > tr + tr > td > div').eq(0).should('be.visible').should('contain' , orthoptictesting.Nine_Positions_Horizontal_Angle1 + orthoptictesting.Nine_Positions_Horizontal_Angle2 + orthoptictesting.Nine_Positions_Horizontal_X_Deviation_Id)
    cy.get('[data-element-type-name="Nine Positions"] > div > div > div + div  > div + div > table > tbody  > tr + tr > td > div').eq(0).should('be.visible').should('contain' , orthoptictesting.Nine_Positions_Vertical_Angle1 + orthoptictesting.Nine_Positions_Vertical_Angle2 + orthoptictesting.Nine_Positions_Vertical_Prism_Position)
    cy.get('[data-element-type-name="Nine Positions"] > div > div > div + div  > div + div > table > tbody  > tr + tr > td + td ').eq(0).should('be.visible').should('contain' , orthoptictesting.Nine_Positions_Movement_Ids)

    cy.get('[data-element-type-name="Nine Positions"] > div > div > div + div  > div + div > table > tbody  > tr + tr > td + td  + td + td').eq(0).should('be.visible').should('contain' , orthoptictesting.Nine_Positions_Movement_Ids)
    cy.get('[data-element-type-name="Nine Positions"] > div > div > div + div  > div + div > table > tbody  > tr + tr > td + td  + td + td + td').eq(0).should('be.visible').should('contain' , orthoptictesting.Nine_Positions_Horizontal_Angle1 + orthoptictesting.Nine_Positions_Horizontal_Angle2 + orthoptictesting.Nine_Positions_Horizontal_X_Deviation_Id)
    cy.get('[data-element-type-name="Nine Positions"] > div > div > div + div  > div + div > table > tbody  > tr + tr > td + td  + td + td + td').eq(0).should('be.visible').should('contain' , orthoptictesting.Nine_Positions_Vertical_Angle1 + orthoptictesting.Nine_Positions_Vertical_Angle2 + orthoptictesting.Nine_Positions_Vertical_Prism_Position)
    cy.get('[data-element-type-name="Nine Positions"] > div > div > div + div  > div + div > table > tbody  > tr + tr > td + td  + td + td + td + td').eq(0).should('be.visible').should('contain' , orthoptictesting.Nine_Positions_Movement_Ids)
    cy.get('[data-element-type-name="Nine Positions"] > div > div > div + div  > div + div > table > tbody  > tr + tr > td + td  + td + td + td + td + td + td').should('be.visible').should('contain' ,orthoptictesting.Nine_Positions_Movement_Ids)

    cy.get('[data-element-type-name="Nine Positions"] > div > div > div + div  > div + div > table > tbody  > tr + tr > td + td  + td + td + td + td + td + td + td').eq(0).should('be.visible').should('contain' , orthoptictesting.Nine_Positions_Horizontal_Angle1 + orthoptictesting.Nine_Positions_Horizontal_Angle2 + orthoptictesting.Nine_Positions_Horizontal_E_Deviation_Id)
    cy.get('[data-element-type-name="Nine Positions"] > div > div > div + div  > div + div > table > tbody  > tr + tr > td + td  + td + td + td + td + td + td + td').eq(0).should('be.visible').should('contain' , orthoptictesting.Nine_Positions_Vertical_Angle1 + orthoptictesting.Nine_Positions_Vertical_Angle1 + orthoptictesting.Nine_Positions_Vertical_Prism_Position)

    cy.get('[data-element-type-name="Nine Positions"] > div > div > div + div  > div + div > table > tbody  > tr + tr  + tr > td > div ').eq(0).should('be.visible').should('contain' ,  orthoptictesting.Nine_Positions_Horizontal_Angle1 + orthoptictesting.Nine_Positions_Horizontal_Angle2 + orthoptictesting.Nine_Positions_Horizontal_E_Deviation_Id)
    cy.get('[data-element-type-name="Nine Positions"] > div > div > div + div  > div + div > table > tbody  > tr + tr  + tr > td > div ').eq(0).should('be.visible').should('contain' , orthoptictesting.Nine_Positions_Vertical_Angle1 + orthoptictesting.Nine_Positions_Vertical_Angle1 + orthoptictesting.Nine_Positions_Vertical_Prism_Position)
    cy.get('[data-element-type-name="Nine Positions"] > div > div > div + div  > div + div > table > tbody  > tr + tr  + tr > td + td').eq(0).should('be.visible').should('contain' ,orthoptictesting.Nine_Positions_Movement_Ids)
    cy.get('[data-element-type-name="Nine Positions"] > div > div > div + div  > div + div > table > tbody  > tr + tr  + tr > td + td + td').should('be.visible').should('contain' ,orthoptictesting.Nine_Positions_Movement_Ids)

    cy.get('[data-element-type-name="Nine Positions"] > div > div > div + div  > div + div > table > tbody  > tr + tr  + tr > td + td + td + td').should('be.visible').should('contain' ,  orthoptictesting.Nine_Positions_Horizontal_Angle1 + orthoptictesting.Nine_Positions_Horizontal_Angle2 + orthoptictesting.Nine_Positions_Horizontal_E_Deviation_Id)
    cy.get('[data-element-type-name="Nine Positions"] > div > div > div + div  > div + div > table > tbody  > tr + tr  + tr > td + td + td + td').should('be.visible').should('contain' , orthoptictesting.Nine_Positions_Vertical_Angle1 + orthoptictesting.Nine_Positions_Vertical_Angle1 + orthoptictesting.Nine_Positions_Vertical_Prism_Position)
    cy.get('[data-element-type-name="Nine Positions"] > div > div > div + div  > div + div > table > tbody  > tr + tr  + tr > td + td + td + td + td').eq(0).should('be.visible').should('contain' ,orthoptictesting.Nine_Positions_Movement_Ids)
    cy.get('[data-element-type-name="Nine Positions"] > div > div > div + div  > div + div > table > tbody  > tr + tr  + tr > td + td + td + td + td + td').eq(0).should('be.visible').should('contain' ,orthoptictesting.Nine_Positions_Movement_Ids)

    cy.get('[data-element-type-name="Nine Positions"] > div > div > div + div  > div + div > table > tbody  > tr + tr  + tr > td + td + td + td + td + td + td').eq(0).should('be.visible').should('contain' ,  orthoptictesting.Nine_Positions_Horizontal_Angle1 + orthoptictesting.Nine_Positions_Horizontal_Angle2 + orthoptictesting.Nine_Positions_Horizontal_E_Deviation_Id)
    cy.get('[data-element-type-name="Nine Positions"] > div > div > div + div  > div + div > table > tbody  > tr + tr  + tr > td + td + td + td + td + td + td').eq(0).should('be.visible').should('contain' , orthoptictesting.Nine_Positions_Vertical_Angle1 + orthoptictesting.Nine_Positions_Vertical_Angle1 + orthoptictesting.Nine_Positions_Vertical_Prism_Position)

}

if(orthoptictesting.Nine_Positions_Checkbox == "Full Ocular Movement")
{

    if(orthoptictesting.Nine_Positions_Position_DV == "Glasses")
    {
    cy.get('[data-element-type-name="Nine Positions"] > div > div > div + div > div > ul > li').eq(0).should('be.visible').should('contain' , orthoptictesting.Nine_Positions_Position_DV)
    }
    if(orthoptictesting.Nine_Positions_Position_DV == "No glasses")
    {
    cy.get('[data-element-type-name="Nine Positions"] > div > div > div + div > div > ul > li').eq(0).should('be.visible').should('contain' , orthoptictesting.Nine_Positions_Position_DV)
    }
    cy.get('[data-element-type-name="Nine Positions"] > div > div > div + div > div > ul > li').eq(1).should('be.visible').should('contain' ,  "CHP: " + orthoptictesting.Nine_Positions_CHP_DV)
    cy.get('[data-element-type-name="Nine Positions"] > div > div > div + div > div > ul > li').eq(2).should('be.visible').should('contain' , orthoptictesting.Nine_Positions_Checkbox)
}


})
})
           

    


})
