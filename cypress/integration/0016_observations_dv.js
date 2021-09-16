describe('0016.6_Observations_Element', () => {

 it('0016.6_To validate_Observation Header' , () => {
    cy.get('[data-element-type-name="Observations"] > header > h3').scrollIntoView().should('be.visible')
    cy.get('[data-element-type-name="Observations"] > header > h3').should('contain', 'Observations')

})    

it('0016.2_To_Validate_Observation_Element_Data' , () => {
cy.fixture("addexaminationevents.json").then((addexaminationevents) => {
   cy.get('[data-element-type-name="Observations"] > div > div > div > table >  tbody > tr > td + td > span').eq(0).should('be.visible').should('contain', addexaminationevents.Observation_Taken_At)
   cy.get('[data-element-type-name="Observations"] > div > div > div > table >  tbody > tr > td + td > span').eq(1).should('be.visible').should('contain', addexaminationevents.Observation_Blood_Pressure_mmHg1_mmHg2)
   cy.get('[data-element-type-name="Observations"] > div > div > div > table >  tbody > tr > td + td > span').eq(2).should('be.visible').should('contain', addexaminationevents.Observation_Blood_Glucose)
   cy.get('[data-element-type-name="Observations"] > div > div > div > table >  tbody > tr > td + td > span').eq(3).should('be.visible').should('contain', addexaminationevents.Observation_Weight)
   cy.get('[data-element-type-name="Observations"] > div > div > div > table >  tbody > tr > td + td > span').eq(4).should('be.visible').should('contain', addexaminationevents.Observation_O2Sat)
   cy.get('[data-element-type-name="Observations"] > div > div > div > table >  tbody > tr > td + td > span').eq(5).should('be.visible').should('contain', addexaminationevents.Observation_Hba1c)
   cy.get('[data-element-type-name="Observations"] > div > div > div > table >  tbody > tr > td + td > span').eq(6).should('be.visible').should('contain', addexaminationevents.Observation_Height)
   cy.get('[data-element-type-name="Observations"] > div > div > div > table >  tbody > tr > td + td > span').eq(7).should('be.visible').should('contain', addexaminationevents.Observation_Pulse)
   cy.get('[data-element-type-name="Observations"] > div > div > div > table >  tbody > tr > td + td > span').eq(8).should('be.visible').should('contain', addexaminationevents.Observation_Temperature)
})
})
})
