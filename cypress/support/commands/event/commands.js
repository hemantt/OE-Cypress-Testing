//Clicks the 'Add Event' button in the patient summary screen
Cypress.Commands.add('clickAddEventButton', () => {
    cy.get('button#add-event').click()
})

//Adds an event subspecialty from the dropdown
Cypress.Commands.add('addEventSubspecialty', (subspecialty) => {
    cy.get('select.new-subspecialty').select(subspecialty)
    cy.get('button#js-add-subspecialty-btn').click()
})

//Selects the subspecialty in the event creation dialog. This subspecialty must have been added first
Cypress.Commands.add('selectEventSubspecialty', (subspecialty) => {
    cy.contains(subspecialty).click()
})

//Selects the context in the event creation dialog; a subspecialty must be selected for this
Cypress.Commands.add('selectEventContext', (context) => {
    cy.contains(context).click()
})

//Selects the event type in the event creation dialog; this will close the dialog and redirect to the event
Cypress.Commands.add('selectEventType', (eventType) => {
    cy.contains(eventType).click()
})

//Clicks the create event button and populates the event dialog
Cypress.Commands.add('createEvent', (subspecialty, addSubspecialty, context, eventType) => {
    cy.clickAddEventButton()
    if(addSubspecialty){
        cy.addEventSubspecialty(subspecialty)
    }else{
        cy.selectEventSubspecialty(subspecialty)
    }
    cy.selectEventContext(context)
    cy.selectEventType(eventType)
})

//Clicks the save event button
Cypress.Commands.add('clickSaveEventButton', () => {
    cy.get('button#et_save_footer').click()
})

//Deletes an event from its summary screen, and adds the comment provided
Cypress.Commands.add('deleteEvent', (comment) => {
    cy.get('a#js-delete-event-btn[name="delete_reason"]').click()
    if(comment){
        cy.get('textarea#js-text-area').type(comment)
    }
    cy.get('button#et_deleteevent').click()
})

//Selects the latest event
Cypress.Commands.add('selectLatestEvent', () => {
    cy.get('ul#js-events-by-date > li:first() > a').click()
})

//Deletes the latest event
Cypress.Commands.add('deleteLatestEvent', (comment) => {
    cy.selectLatestEvent()
    cy.deleteEvent(comment)
})