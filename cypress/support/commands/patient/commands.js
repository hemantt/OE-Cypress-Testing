//Searches for a patient from the main screen of OE
Cypress.Commands.add('searchPatient', (searchTerm) => {
    cy.get('div#oe-search-patient > div.search-patient > input#query').type(searchTerm)
    cy.get('button#js-find-patient').click()
})

//Selects the first result in the current active autocomplete list in the patient form
Cypress.Commands.add('selectFirstAutocompleteResult', () => {
    cy.get('ul.oe-autocomplete:visible li:first a').click()
})

//Populates all fields in the patient form with the supplied values
Cypress.Commands.add('populatePatientForm', (title, firstName, lastName, maidenName, dateOfBirth, patientSource, gender, ethnicGroup, addressType, address1, address2, city, postcode, county, country, phoneNumber, email, id, nhs, deceasedDate, gp, practice, referral, referredTo) => {
    if (title) cy.get('input#Contact_title').type(title)
    cy.get('input#Contact_first_name').type(firstName)
    cy.get('input#Contact_last_name').type(lastName)
    if(maidenName) cy.get('input#Contact_maiden_name').type(maidenName)
    cy.get('input#Patient_dob').type(dateOfBirth)
    cy.clickSelectedInDatePicker()
    cy.get('select#Patient_patient_source').select(patientSource)
    cy.wait(100)//Necessary as OE patient form triggers a soft reload on change of patient source and cypress doesn't like that
    if(gender) cy.get('select#Patient_gender').select(gender)
    if(ethnicGroup) cy.get('select#Patient_ethnic_group_id').select(ethnicGroup)
    if(addressType) cy.get('select#Address_address_type_id').select(addressType)
    if(address1) cy.get('input#Address_address1').type(address1)
    if(address2) cy.get('input#Address_address2').type(address2)
    if(city) cy.get('input#Address_city').type(city)
    if(postcode) cy.get('input#Address_postcode').type(postcode)
    if(county) cy.get('input#Address_county').type(county)
    cy.get('select#Address_country_id').select(country)
    if(phoneNumber) cy.get('input#Contact_primary_phone').type(phoneNumber)
    if(email) cy.get('input#Contact_email').type(email)
    cy.get('input#PatientIdentifier_0_value').type(id)
    if(nhs) cy.get('input#PatientIdentifier_1_value').type(nhs)
    if(deceasedDate)
    {
        cy.get('input#Patient_is_deceased').check()
        cy.get('input#Patient_date_of_death').type(deceasedDate)
        cy.clickSelectedInDatePicker()
    }
    if(gp)
    {
        cy.get('input#autocomplete_gp_id').type(gp)
        cy.selectFirstAutocompleteResult()
    }
    if(practice)
    {
        //Hack included to ensure OE accepts the search term, please remove when OE bug fixed
        //OE will only accept the first word of the search term
        cy.get('input#autocomplete_practice_id').type(practice.split(" ")[0])
        cy.selectFirstAutocompleteResult()
    }
    if(referredTo)
    {
        cy.get('input#autocomplete_user_id').type(referredTo)
        cy.selectFirstAutocompleteResult()
    }
})

//Clicks the button to submit the patient form
Cypress.Commands.add('submitPatientForm', () => {
    cy.contains('Create new patient').click()
})

//Clicks the patient label to navigate to the patient summary screen
Cypress.Commands.add('visitPatientSummaryScreen', () => {
    cy.get('div#oe-patient-details > div.patient-name > a').click()
})

//Opens the add patient form from the dropdown menu, populates the form, and clicks the submit button
Cypress.Commands.add('addPatient', (title, firstName, lastName, maidenName, dateOfBirth, patientSource, gender, ethnicGroup, addressType, address1, address2, city, postcode, county, country, phoneNumber, email, id, nhs, isDeceased, deceasedDate, gp, practice, referral, referredTo) => {
    cy.selectFromNavDropdown('Add Patient')
    cy.populatePatientForm(title, firstName, lastName, maidenName, dateOfBirth, patientSource, gender, ethnicGroup, addressType, address1, address2, city, postcode, county, country, phoneNumber, email, id, nhs, isDeceased, deceasedDate, gp, practice, referral, referredTo)
    cy.submitPatientForm()
})

//Adds a patient given an object, allows patients to be added easily via fixtures
Cypress.Commands.add('addPatientFromObject', (patient) => {
    cy.addPatient(
        patient.title || "",
        patient.firstName,
        patient.lastName,
        patient.maidenName || "",
        patient.dateOfBirth,
        patient.patientSource,
        patient.gender || "",
        patient.ethnicGroup || "",
        patient.addressType || "",
        patient.address1 || "",
        patient.address2 || "",
        patient.city || "",
        patient.postcode || "",
        patient.county || "",
        patient.country,
        patient.phoneNumber,
        patient.email || "",
        patient.id,
        patient.nhs || "",
        patient.deceasedDate || "",
        patient.gp  || "",
        patient.practice || "",
        patient.referredTo || ""
    );
})

//Deletes a patient from the patient summary screen
//Note that currently it's required that a patient has an event for the delete button to appear
//Note that a patient added via a PAS cannot be deleted
Cypress.Commands.add('deletePatient', () => {
    cy.get('button.js-delete-patient').click()
    cy.get('button.js-confirm-delete-patient').click()
})

//Deletes a patient from the patient summary screen, via a request
Cypress.Commands.add('deletePatientByRequest', () => {
    cy.url().then((url) => {
        if(!url.includes('/patient/summary/')){
            throw new Error("This command should only be called from the patient summary screen")
        }
        let urlArray = url.split('/')
        let patientId = urlArray[urlArray.length - 1]
        cy.request('/patient/delete/' + patientId)
    })
})