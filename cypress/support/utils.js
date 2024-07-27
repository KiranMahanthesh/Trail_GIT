const fs = require('fs');
const csv = require('csv-parser');

// Function to create a CSV file with customer messages
function createCustomerMessageCSV() {
  // Define the CSV data
  const data = `ID,SourceNumber,DestinationNumber,Message
1,src,dst1,Sending the SMS to customer ID 1
2,src,dst2,Sending the SMS to customer ID 2
3,src,dst3,Sending the SMS to customer ID 3
4,src,dst4,Sending the SMS to customer ID 4`;

  // Write the data to a CSV file
  fs.writeFileSync('cypress/fixtures/customer_message.csv', data);
}

// Function to read data from the CSV file based on provided IDs
function readCustomerData(ids) {
  return new Promise((resolve, reject) => {
    const results = [];
    // Read and parse the CSV file
    fs.createReadStream('cypress/fixtures/customer_message.csv')
      .pipe(csv())
      .on('data', (data) => {
        // Check if the current data's ID is in the provided list
        if (ids.includes(data.ID)) {
          results.push(data);
        }
      })
      .on('end', () => {
        resolve(results);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

// Export the functions to be used in other parts of the project
module.exports = { createCustomerMessageCSV, readCustomerData };
