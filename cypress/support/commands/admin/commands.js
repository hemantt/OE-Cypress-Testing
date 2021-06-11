//Opens the admin screen
Cypress.Commands.add('visitAdminScreen', () => {
    cy.selectFromNavDropdown('Admin')
})

//Expands/collapses a category in the admin screen
Cypress.Commands.add('toggleAdminCategoryExpanded', (category) => {
    cy.get('h3.collapse-group-header').contains(category).click()
})

//Expands all admin categories
Cypress.Commands.add('expandAllAdminCategories', () => {
    cy.get('span.js-expand-all > i.oe-i.plus').click()
})

//Collapses all admin categories
Cypress.Commands.add('collapseAllAdminCategories', () => {
    cy.get('span.js-collapse-all > i.oe-i.minus').click()
})

//Opens admin page with the name provided, given that the page link is visible
Cypress.Commands.add('visitAdminPageByName', (pageName) => {
    cy.get('a').contains(pageName).click()
})

//Creates a user if they don't already exist. 
//The existence checking is unrelaible as many users may have the same name, however this is fit for the original purpose of creating a testing user will all permissions
Cypress.Commands.add('createUserIfDoesntExist', (title, firstName, lastName, email, qualifications, position, grade, registrationCode, globalFirmRights, contexts, consultant, surgeon, roles, loginAuthentications) => {
    //Search may need to be run first if there are enough users to trigger pagination
    //This is not a recommended approach for cypress, however there is no working around the fact that users cannot be deleted.
    //Done in vanilla JS as there is no way to do this in cypress
    cy.get('table > tbody > tr.clickable')
    cy.document().then(($document) => {
        // if(!$document.querySelectorAll(`tr.clickable:has(td:contains('${firstName}')):has(td:contains('${lastName}'))`).length) {
        if(!Cypress.$(`tr.clickable:has(td:contains('${firstName}')):has(td:contains('${lastName}'))`).length) {
            cy.clickAddUser()
            cy.populateUserCreationForm(title, firstName, lastName, email, qualifications, position, grade, registrationCode, globalFirmRights, contexts, consultant, surgeon, roles, loginAuthentications)
            cy.clickSaveUser()
        }
    })
})

//Searches for a user in the users admin page
Cypress.Commands.add('searchForUserInAdminPage', (searchTerm) => {
    cy.get(`tr.clickable:has(td:c   ontains(${firstName})):has(td:contains(${lastName}))`).click()
})

//Selects user in admin page by name
Cypress.Commands.add('selectUserFromAdminPage', (firstName, lastName) => {
    cy.get(`tr.clickable:has(td:contains(${firstName})):has(td:contains(${lastName}))`).click()
})

//Clicks the "Add User" button in the users admin page
Cypress.Commands.add('clickAddUser', () => {
    cy.get('input#et_add.button.large').click()
})

//Populates the add user form with the provided data
Cypress.Commands.add('populateUserCreationForm', (title, firstName, lastName, email, qualifications, position, grade, registrationCode, globalFirmRights, contexts, consultant, surgeon, roles, loginAuthentications) => {
    if(title){
        cy.get('input#User_title').type(title)
    }
    cy.get('input#User_first_name').type(firstName)
    cy.get('input#User_last_name').type(lastName)
    cy.get('input#User_email').type(email)
    if(qualifications){
        cy.get('input#User_qualifications').type(qualifications)
    }
    if(position){
        cy.get('input#User_role').type(position)
    }
    if(grade){
        cy.get('select#User_doctor_grade_id').select(grade)
    }
    if(registrationCode){
        cy.get('input#User_registration_code').type(registrationCode)
    }
    if(globalFirmRights){
        cy.get('input#User_global_firm_rights_0').click()
    }else{
        cy.get('input#User_global_firm_rights_1').click()
        contexts.forEach(context => {
            cy.get('select#User_firms').select(context)
        })
    }
    if(consultant){
        cy.get('input#User_is_consultant_0').click()
    }else{
        cy.get('input#User_is_consultant_1').click()
    }
    if(surgeon){
        cy.get('input#User_is_surgeon_0').click()
    }else{
        cy.get('input#User_is_surgeon_1').click()
    }
    roles.forEach(role => {
        cy.get('select#User_roles').select(role)
    })
    loginAuthentications.forEach(loginAuthentication => {
        cy.clickAddUserAuthentication()
        cy.populateLastUserAuthenticationRow(loginAuthentication.institutionAuthentication, loginAuthentication.loginID, loginAuthentication.password, loginAuthentication.passwordStatus, loginAuthentication.active)
    })
})

//Clicks the "Add User Authentication" button in the create user page
Cypress.Commands.add('clickAddUserAuthentication', () => {
    cy.get('input#add-user-authentication-btn').click()
})

//Populates the last user authentication row in the list with the provided data
Cypress.Commands.add('populateLastUserAuthenticationRow', (institutionAuthentication, loginID, password, passwordStatus, active) => {
    cy.get('table#user-authentications tr:last()').invoke('attr', 'data-key').then((lastRowDataKey) => {
        cy.populateUserAuthenticationRow(lastRowDataKey, institutionAuthentication, loginID, password, passwordStatus, active)
    })
})

//Populates the user authentication row specified by the provided data key with the provided data
Cypress.Commands.add('populateUserAuthenticationRow', (dataKey, institutionAuthentication, loginID, password, passwordStatus, active) => {
    cy.get(`select#UserAuthentication_${dataKey}_institution_authentication_id`).select(institutionAuthentication)
    cy.get(`input#UserAuthentication_${dataKey}_username`).type(loginID)
    cy.get(`input#UserAuthentication_${dataKey}_password`).type(password)
    cy.get(`input#UserAuthentication_${dataKey}_password_repeat`).type(password)
    cy.get(`select#UserAuthentication_${dataKey}_password_status`).select(passwordStatus)
    if(!active){
        cy.get(`input#UserAuthentication_${dataKey}_active`).click()
    }
})

//Clicks the save button in the user page
Cypress.Commands.add('clickSaveUser', () => {
    cy.get('input#et_save').click()
})