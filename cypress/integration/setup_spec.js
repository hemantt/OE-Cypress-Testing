describe('Setup', () => {
    before(() => {
        cy.visitSite()
        cy.login('admin', 'admin')
    })
    it("Creates the user needed for testing if it doesn't already exist", () => {
      cy.visitAdminScreen()
      cy.visitAdminPageByName('Users')
      cy.createUserIfDoesntExist(
        'Mr',
        'Cypress',
        'Tester',
        'cy@test.com',
        'Tester',
        'Tester',
        'Consultant',
        'TESTER',
        true,
        [],
        true,
        true,
        [ 	
            'API access',
            'Add patient',
            'Advanced Search',
            'Advanced Search Superuser',
            'Audit',
            'CXL Dataset',
            'Clerical CVI',
            'Clinical CVI',
            'Create Disorder',
            'Create GP',
            'Create Practice',
            'Create Trial',
            'Delete Patient',
            'Edit',
            'Edit Payload Processor',
            'Edit theatre session',
            'Institution Admin',
            'Institution Audit',
            'NOD Export',
            'Optom co-ordinator',
            'Patient Merge',
            'Patient Merge Request',
            'Patient Tickets',
            'Patient Tickets admin',
            'Prescribe',
            'Print',
            'Print Prescription',
            'Report',
            'ReportsAnyInstitution',
            'Schedule operation',
            'Service Manager',
            'Super schedule operation',
            'Trial User',
            'User',
            'View GP',
            'View Practice',
            'View clinical',
            'admin'
        ],
        [
            {
                institutionAuthentication: 'LOCAL authentication for The Monachs Trust. [Institution: Default]',
                loginID: 'tester',
                password: 'Cypress123!',
                passwordStatus: 'Current Password',
                active: true
            }
        ]
      )
      cy.logout()
      cy.login('tester', 'Cypress123!')
    })
    after(() => {
        cy.logout()
    })
  })