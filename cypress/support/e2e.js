// ***********************************************************
// This example support/e2e.js is processed and
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
//https://www.youtube.com/watch?v=69SFwgWHUig&list=PLUDwpEzHYYLvA7QFkC1C0y0pDPqYS56iU&index=1&pp=iAQB
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
 require('cypress-xpath');
 require ('cypress-iframe');
 require('@4tw/cypress-drag-drop');
 import 'cypress-mochawesome-reporter/register';
