describe('0016_Observations_Element', () => {


    //Add the observations elements
    it('0016.1_To_add_Observations_Element' , () => {
        cy.get("#js-manage-elements-btn").should('be.visible').click()
        cy.get('#manage-elements-Observations').should('be.visible').click()
        cy.get('.blue').should('be.visible').click()
    })

    //Verify that observations section is loaded successfully
    it('0016.2_To_Validate_Observations_Section_isAvailable' , () => {
        cy.get('[data-element-type-name="Observations"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Observations"] > header > h3').should('contain', 'Observations')
    
    })

    //To Validate observation headers by clicking on add button
    it('0016.3_To_check_Text_Headers_Field' , () => {
        //cy.get('.data-value.not-recorded.left').should('have.text' , 'No entries recorded')
        cy.get('#add-observation-btn').should("be.enabled").click()
        cy.get('.data-group > .cols-full > tbody > :nth-child(1) > :nth-child(1) > label').should('contain' , ' Taken At ')
        cy.get('.data-group > .cols-full > tbody > :nth-child(2) > :nth-child(1) > label').should('contain' , 'Blood Pressure (mmHg/mmHg)')
        cy.get('.data-group > .cols-full > tbody > :nth-child(3) > :nth-child(1) > label').should('contain' , 'Blood Glucose (mmol/l)')
        cy.get(':nth-child(4) > :nth-child(1) > label').should('contain' , 'Weight (kg)')
        cy.get(':nth-child(2) > table.cols-full > tbody > :nth-child(1) > :nth-child(1) > label').should('contain' , 'O2 Sat (air)')
        cy.get(':nth-child(2) > table.cols-full > tbody > :nth-child(2) > :nth-child(1) > label').should('contain' , 'Hba1c (mmol/mol)')
        cy.get(':nth-child(2) > table.cols-full > tbody > :nth-child(3) > :nth-child(1) > label').should('contain' , 'Height (cm)')
        cy.get(':nth-child(1) > [colspan="2"] > label').should('contain' , 'Pulse (bpm)')
        cy.get(':nth-child(2) > [colspan="2"] > label').should('contain' , 'Temperature (°C)')
        cy.get(':nth-child(3) > [colspan="2"] > label').should('contain' , 'BMI')
    
    })  

    it('0016.4_To_add_observation' , () => {
       
    //To type the data in theobservation section as mentioned in the addexaminationevents filec
     cy.fixture("addexaminationevents.json").then((addexaminationevents) => {
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Observations_entries_0_taken_at').should('be.visible').clear().type(addexaminationevents.Observation_Taken_At)
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Observations_entries_0_blood_pressure_systolic').should('be.visible').clear().type(addexaminationevents.Observation_Blood_Pressure_mmHg1)
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Observations_entries_0_blood_pressure_diastolic').should('be.visible').clear().type(addexaminationevents.Observation_Blood_Pressure_mmHg2)
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Observations_entries_0_blood_glucose').should('be.visible').clear().type(addexaminationevents.Observation_Blood_Glucose)
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Observations_entries_0_weight').should('be.visible').clear().type(addexaminationevents.Observation_Weight)
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Observations_entries_0_o2_sat').should('be.visible').clear().type(addexaminationevents.Observation_O2Sat)
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Observations_entries_0_hba1c').should('be.visible').clear().type(addexaminationevents.Observation_Hba1c)
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Observations_entries_0_height').should('be.visible').clear().type(addexaminationevents.Observation_Height)
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Observations_entries_0_pulse').should('be.visible').clear().type(addexaminationevents.Observation_Pulse)
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_Observations_entries_0_temperature').should('be.visible').clear().type(addexaminationevents.Observation_Temperature)
        }) 
    })

    //To verify BMI
    it('16.5_To verify_BMI' , () => {
        cy.get(':nth-child(3) > [colspan="2"] > label').should('be.visible')
        cy.get('.bmi-container').should('be.visible')

    })
})


