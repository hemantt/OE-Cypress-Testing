//Adds an examination element by name
Cypress.Commands.add('addExaminationElements', (elementNames) => {
    cy.openManageExaminationElementsDialog()
    elementNames.forEach(elementName => {
        cy.addExaminationElementFromDialog(elementName)
    });
    cy.closeManageExaminationElementsDialog()
})

//Opens the Manage Elements dialog in an examination event
Cypress.Commands.add('openManageExaminationElementsDialog', () => {
    cy.get('div#js-manage-elements-btn').click()
})

//Opens the Manage Elements dialog in an examination event
Cypress.Commands.add('closeManageExaminationElementsDialog', () => {
    cy.get('nav#manage-elements-nav div.close-icon-btn > button').click()
})

//Selects an element by name from the manage elements dialog
Cypress.Commands.add('addExaminationElementFromDialog', (elementName) => {
    let processedElementName = elementName.replace(' ', '-')
    cy.get(`nav#manage-elements-nav ul.element-list > li#manage-elements-${processedElementName}`).click()
})

//Populates an examination history element using provided data
Cypress.Commands.add('populateExaminationHistoryElement', (comment, adderOptions) => {
    cy.get('textarea#OEModule_OphCiExamination_models_Element_OphCiExamination_History_description').type(comment)
})

//Removes every examination element by clicking every element trash icon on the page
Cypress.Commands.add('removeAllExaminationElements', () => {
    cy.get('span.js-remove-element > i.oe-i.trash-blue').each(($trashbtn) => {
        cy.wrap($trashbtn).click()
    })
})