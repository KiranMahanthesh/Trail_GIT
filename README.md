# Plivo_assessment

Overview
The Plivo SMS Automation project demonstrates how to send SMS messages to customers using the Plivo API. The project automates the process of sending SMS based on customer data from a CSV file and verifies the message queue using Plivo’s APIs. The automation is implemented using Cypress with the Cucumber framework.

Project Structure
cypress/: Contains Cypress end-to-end tests.
features/: Contains Cucumber feature files and step definitions for SMS sending.
support/: Contains Cypress support files and configuration.
data/: Contains the customer_message.csv file with customer data.
scripts/: Contains scripts for generating the CSV file and sending SMS.
Prerequisites
Node.js and npm (Node Package Manager)
Cypress
Cucumber
Plivo account with AUTH_ID and AUTH_TOKEN
Setup
1. Clone the Repository
bash
Copy code
git clone https://github.com/KiranMahanthesh/Plivo_assessment.git
cd Plivo_assessment
2. Install Dependencies
Make sure you have Node.js installed. Then, install the necessary dependencies:

bash
Copy code
npm install
3. Configure Plivo API Credentials
Create a configuration file config.js in the cypress/ directory and add your Plivo API credentials:

javascript
Copy code
module.exports = {
  plivo: {
    authId: 'YOUR_PLIVO_AUTH_ID',
    authToken: 'YOUR_PLIVO_AUTH_TOKEN'
  }
};
4. Prepare Data File
Create the customer_message.csv file in the data/ directory with the following content:

csv
Copy code
ID,SourceNumber,DestinationNumber,Message
1,src,dst1,Sending the SMS to customer ID 1
2,src,dst2,Sending the SMS to customer ID 2
3,src,dst3,Sending the SMS to customer ID 3
4,src,dst4,Sending the SMS to customer ID 4
5. Implement Tests
The automation is implemented using Cypress and Cucumber. The test scenarios are described in the .feature files located in the cypress/e2e/ directory. The step definitions are located in the cypress/support/step_definitions/ directory.

Example Feature File
cypress/e2e/send_sms.feature:

gherkin
Copy code
Feature: Send SMS to Customers

  Scenario: Send SMS to specific customer IDs
    Given I have the customer data file "customer_message.csv"
    When I send SMS to customers with IDs "1,3"
    Then the messages should be sent successfully
    And I should be able to verify the message status
6. Run Tests
You can run the tests using Cypress. To execute the feature files with Cucumber:

bash
Copy code
npx cypress run
Or open the Cypress Test Runner:

bash
Copy code
npx cypress open
7. Push Code to GitHub
Ensure you have committed your changes and pushed them to GitHub:

bash
Copy code
git add .
git commit -m "Implement SMS sending automation"
git push origin main
Contributing
Feel free to submit issues, forks, or pull requests. For major changes, please open an issue first to discuss what you would like to change.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
For any questions or feedback, please contact Kiran Mahanthesh.
