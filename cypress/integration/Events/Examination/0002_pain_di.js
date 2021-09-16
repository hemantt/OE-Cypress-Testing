//Test suite for Add Examination Event
describe('0002_Element_Pain_DI', () => {
    
    
       it('0002.1_Select_Pain_Element', () => {

        //To get the Pain element
        cy.get("#js-manage-elements-btn").should('be.visible').click()
        cy.get("#manage-elements-Pain").should('be.visible').click()
        cy.get(".blue.hint.cols-full").should('be.visible').click()
       }) 
        
    //To validate Pain element     
    it('0002.2_To_Check_Pain section is Available' ,() => {
        cy.get('[data-element-type-name="Pain"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Pain"] > header > h3').should('contain', 'Pain')
    })

    //To validate text-headers element     
    it('0002.3_To_Check_Text_Headers_Available' ,() => {
        cy.get('#pain-entries-table > thead > tr > :nth-child(2)').should('be.visible').should('contain' , '0')
        cy.get('#pain-entries-table > thead > tr > :nth-child(3)').should('be.visible').should('contain' , '1')
        cy.get('#pain-entries-table > thead > tr > :nth-child(4)').should('be.visible').should('contain' , '2')
        cy.get('#pain-entries-table > thead > tr > :nth-child(5)').should('be.visible').should('contain' , '3')
        cy.get('thead > tr > :nth-child(6)').should('be.visible').should('contain' , '4')
        cy.get('thead > tr > :nth-child(7)').should('be.visible').should('contain' , '5')
        cy.get('thead > tr > :nth-child(8)').should('be.visible').should('contain' , '6')
        cy.get('thead > tr > :nth-child(9)').should('be.visible').should('contain' , '7')
        cy.get('thead > tr > :nth-child(10)').should('be.visible').should('contain' , '8')
        cy.get('thead > tr > :nth-child(11)').should('be.visible').should('contain' , '9')
        cy.get('thead > tr > :nth-child(12)').should('be.visible').should('contain' , '10')
        cy.get('thead > tr > :nth-child(14)').should('be.visible').should('contain' , 'Date')
        cy.get('thead > tr > :nth-child(15)').should('be.visible').should('contain' , 'Time')
        cy.get('thead > tr > :nth-child(16)').should('be.visible').should('contain' , 'Comments')
    })

    //To validate both Emozis
    it('0002.4_To_Check_Both_Emozis_Available' ,() => {
        cy.get('.oe-i.happy.medium.no-click').should('be.visible')
        cy.get('.oe-i.crying.medium.no-click').should('be.visible')
    })

    //To validate the presence of all radio-buttons
    it('0002.5_To_Check_Radiobuttons' ,() => {
        cy.get(':nth-child(2) > .highlight > #pain-radio').should('be.visible')
        cy.get(':nth-child(3) > .highlight > #pain-radio').should('be.visible')
        cy.get(':nth-child(4) > .highlight > #pain-radio').should('be.visible')
        cy.get(':nth-child(5) > .highlight > #pain-radio').should('be.visible')
        cy.get(':nth-child(6) > .highlight > #pain-radio').should('be.visible')
        cy.get(':nth-child(7) > .highlight > #pain-radio').should('be.visible')
        cy.get(':nth-child(8) > .highlight > #pain-radio').should('be.visible')
        cy.get(':nth-child(9) > .highlight > #pain-radio').should('be.visible')
        cy.get(':nth-child(10) > .highlight > #pain-radio').should('be.visible')
        cy.get(':nth-child(11) > .highlight > #pain-radio').should('be.visible')
    })


    //To validate radio-buttons lables
    it('0002.6_To_Check_Radio_Buttons_Lables' ,() => {
       cy.get ('[data-element-type-name="Pain"] > div + div > div > table > tbody > tr > td + td > label').eq(0).should('be.visible').should('contain' , '0')
       cy.get('[data-element-type-name="Pain"] > div + div > div > table > tbody > tr > td + td > label').eq(1).should('be.visible').should('contain' , '1')
       cy.get('[data-element-type-name="Pain"] > div + div > div > table > tbody > tr > td + td > label').eq(2).should('be.visible').should('contain' , '2')
       cy.get('[data-element-type-name="Pain"] > div + div > div > table > tbody > tr > td + td > label').eq(3).should('be.visible').should('contain' , '3')
       cy.get('[data-element-type-name="Pain"] > div + div > div > table > tbody > tr > td + td > label').eq(4).should('be.visible').should('contain' , '4')
       cy.get('[data-element-type-name="Pain"] > div + div > div > table > tbody > tr > td + td > label').eq(5).should('be.visible').should('contain' , '5')
       cy.get('[data-element-type-name="Pain"] > div + div > div > table > tbody > tr > td + td > label').eq(6).should('be.visible').should('contain' , '6')
       cy.get('[data-element-type-name="Pain"] > div + div > div > table > tbody > tr > td + td > label').eq(7).should('be.visible').should('contain' , '7')
       cy.get('[data-element-type-name="Pain"] > div + div > div > table > tbody > tr > td + td > label').eq(8).should('be.visible').should('contain' , '8')
       cy.get('[data-element-type-name="Pain"] > div + div > div > table > tbody > tr > td + td > label').eq(9).should('be.visible').should('contain' , '9')
       cy.get('[data-element-type-name="Pain"] > div + div > div > table > tbody > tr > td + td > label').eq(10).should('be.visible').should('contain', '10')
    }) 
    
    //To select radio button 
    it('0002.7_To_Select_Pain_Radio_Button' , () => {
        cy.fixture("addexaminationevents.json").then((addexaminationevents) => {
        cy.get('[data-element-type-name="Pain"] > div > div  > table >  tbody >  tr > td   + td ').eq(4).contains(addexaminationevents.Pain_Button).click()
    }) 
    })
   //To add date and Time
    it('0002.8_To_Add the Date_and_Time' , () => {
      cy.get('[data-element-type-name="Pain"] > div > div > table > tbody > tr >td  + td + td + td + td + td + td + td + td + td + td  + td + td + td  > input').eq(0).should('be.visible')
      cy.fixture("addexaminationevents.json").then((addexaminationevents) => {
       cy.get('[data-element-type-name="Pain"] > div > div > table > tbody > tr >td  + td + td + td + td + td + td + td + td + td + td  + td + td + td  > input').eq(1).should('be.visible').clear().type(addexaminationevents.Pain_Time)
      })    
    
    }) 

    //To add comments
    it('0002.9_To_add_Comments' , () => {
       cy.get('[data-element-type-name="Pain"] > div > div > table > tbody > tr >td  + td + td + td + td + td + td + td + td + td + td  + td + td + td > div > button').should('be.visible').click()
     cy.fixture("addexaminationevents.json").then((addexaminationevents) => {
       cy.get('[data-element-type-name="Pain"] > div > div > table > tbody > tr >td  + td + td + td + td + td + td + td + td + td + td  + td + td + td > div > div  > div > textarea ').should('be.visible').clear().type(addexaminationevents.Pain_Comments)
    
     })

    }) 


    //To click at the plus (+) button to add a pain record
    it('0002.10_To_Click_Add_Button_To_Add_A_Pain_Record' , () => {    
        cy.get('#add-new-pain-row-btn').should('be.visible').click()
    })

})





