describe('Patient tests', () => {
    beforeEach(() => {
      cy.visitSite()
      cy.loginTestUserIfNecessary()
    })
    it('Adds a new patient Mr Test Patient to test all patient fields', () => {
      cy.fixture('patient_spec/all_fields_patient.json').then((fixture) => {
        cy.addPatientFromObject(fixture.patient)
      })
      cy.get('.error').should('not.be.visible')
      cy.contains('Patient, Test (Mr)').should('be.visible')
    })
    it('Navigates home and searches for the patient using First Last', () => {
      cy.searchPatient('Test Patient')
      cy.contains('Patient, Test (Mr)').should('be.visible')
    })
    it('Navigates home and searches for the patient using Last, First', () => {
      cy.searchPatient('Patient, Test')
      cy.contains('Patient, Test (Mr)').should('be.visible')
    })
    it('Navigates home and searches for the patient using NHS number', () => {
      cy.searchPatient('1231231234')
      cy.contains('Patient, Test (Mr)').should('be.visible')
    })
    it('Adds an event for the patient', () => {
      cy.searchPatient('Test Patient')
      cy.createEvent('Glaucoma (GL)', true, 'Glaucoma Clinic', 'Examination')
      cy.removeAllExaminationElements()
      cy.addExaminationElements(['History'])
      cy.populateExaminationHistoryElement('Comment', [])
      cy.clickSaveEventButton()
    })
    after(() => {
      cy.logout()
    })
  })