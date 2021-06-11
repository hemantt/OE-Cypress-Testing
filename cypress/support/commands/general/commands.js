//Navigates to the openeyes URL provided in the configuration file
Cypress.Commands.add('visitSite', () => {
    cy.visit("/")
})

//Logs in using the username and password provided
Cypress.Commands.add('login', (username, password) => {
    cy.contains('Login').click()
    cy.url().should('include', 'login')
    cy.get('#LoginForm_username').type(username)
    cy.get('#LoginForm_password').type(password)
    cy.contains('Login').click()
})

//Logs in the test user
Cypress.Commands.add('loginTestUser', () => {
    cy.login('tester', 'Cypress123!')
})

//Logs in only if on the login screen. This is a workaround for OE rediecting to login screen sometimes
Cypress.Commands.add('loginTestUserIfNecessary', () => {
    cy.document().then(($document) => {
        if(Cypress.$('div.oe-login').length) {
            cy.login('tester', 'Cypress123!')
        }
    })
})

//Logs out using logout button
Cypress.Commands.add('logout', () => {
    cy.get('a#js-logout-btn').click()
})

//Navigates to the OE home page
Cypress.Commands.add('navigateHome', () => {
    cy.get('a#js-home-btn').click()
})

//Navigates to the worklist page
Cypress.Commands.add('navigateToWorklist', () => {
    cy.get('li.oe-nav-btn > a.icon-btn[href*="/worklist/view"]').click()
})

//Pins or unpins the hotlist
Cypress.Commands.add('toggleHotlist', () => {
    cy.get('a#js-nav-hotlist-btn').click()
})

//Selects an item by name from the navigation dropdown using the label provided
Cypress.Commands.add('selectFromNavDropdown', (itemLabel) => {
    cy.get('a#js-nav-shortcuts-btn').trigger('mouseover')
    cy.get('div#js-nav-shortcuts-subnav ul li a').contains(itemLabel).click()
})

//Clicks the selected day in a date picker to close it
Cypress.Commands.add('clickSelectedInDatePicker', () => {
    cy.get('div.pickmeup:visible > div.pmu-instance > div.pmu-days > div.pmu-selected.pmu-button').click()
})

//Navigate to the next page in a paginated table
Cypress.Commands.add('navigateToNextPage', () => {
    cy.get('div.pagination > a.oe-i.arrow-right-bold').click()
})

//Navigate to the previous page in a paginated table
Cypress.Commands.add('navigateToPreviousPage', () => {
    cy.get('div.pagination > a.oe-i.arrow-left-bold').click()
})

//Selects an item from an adder dialog given the column name
Cypress.Commands.add('selectFromAdderDialogByColumnName', (columnName, itemName) =>{
    //This needs to be created, but stands here as an example and placeholder
})

//Selects an item from an adder dialog given the column index (zero indexed)
Cypress.Commands.add('selectFromAdderDialogByColumnIndex', (columnIndex, itemName) =>{
    //This needs to be created, but stands here as an example and placeholder
})