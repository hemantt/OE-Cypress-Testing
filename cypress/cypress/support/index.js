// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import "./commands.js"  //  to enable custom commands from tests

const customCommands = require('./commands.js')

module.exports = {   commands: customCommands }

Cypress.Cookies.defaults({
    preserve: ['current_site_id','current_institution_id','OESESSID','YII_CSRF_TOKEN']
}) 
// Alternatively you can use CommonJS syntax:
// require('./commands')
