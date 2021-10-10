describe('0115.6_Observations_Element_DV', () => {
//Verify that observations section is loaded successfully
 it('0115.6_To validate_Observation_Header' , () => {
    cy.get('[data-element-type-name="Observations"] > header > h3').scrollIntoView().should('be.visible')
    cy.get('[data-element-type-name="Observations"] > header > h3').should('contain', 'Observations')

})    

//Veridy saved data is loaded successfully
it('0115.2_To_Validate_Observation_Element_Data' , () => {
cy.fixture("AddExaminationEvents_History.json").then((addexaminationevents) => {
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
