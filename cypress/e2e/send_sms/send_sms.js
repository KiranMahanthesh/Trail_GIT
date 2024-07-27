import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const { createCustomerMessageCSV, readCustomerData } = require('../../support/utils');
const axios = require('axios');

Given('a customer data set {string} exists', (filename) => {
  createCustomerMessageCSV();
});

When('I send SMS to customer IDs {string}', async (ids) => {
  const idArray = ids.split(',').map(id => id.trim()).filter(id => id); // Remove empty strings
  const customerData = await readCustomerData(idArray);

  customerData.forEach(async (customer) => {
    const messageBody = {
      src: customer.SourceNumber,
      dst: customer.DestinationNumber,
      text: customer.Message,
    };

    try {
      const response = await axios.post('https://api.plivo.com/v1/Account/{auth_id}/Message/', messageBody, {
        auth: {
          username: process.env.PLIVO_AUTH_ID, // Use environment variables
          password: process.env.PLIVO_AUTH_TOKEN
        }
      });

      if (response.status === 202) {
        cy.writeFile('cypress/fixtures/result.txt', `Message to ${customer.ID} queued successfully\n`, { flag: 'a+' });
      }
    } catch (error) {
      cy.writeFile('cypress/fixtures/result.txt', `Message to ${customer.ID} failed with error: ${error.message}\n`, { flag: 'a+' });
    }
  });
});

Then('the messages should be queued successfully', () => {
  cy.readFile('cypress/fixtures/result.txt').then((content) => {
    expect(content).to.contain('queued successfully');
  });
});

Then('no messages should be sent', () => {
  cy.readFile('cypress/fixtures/result.txt').then((content) => {
    expect(content).to.be.empty;
  });
});
