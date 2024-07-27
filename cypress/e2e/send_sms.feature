Feature: Send SMS using Plivo Messaging API

  Scenario Outline: Send SMS based on customer input
    Given a customer data set "customer_message.csv" exists
    When I send SMS to customer IDs <ids>
    Then the messages should be queued successfully

    Examples:
      | ids    |
      | 1      |
      | 1,4    |
      | 2,3,4  |

  Scenario: Send SMS with empty IDs
    Given a customer data set "customer_message.csv" exists
    When I send SMS to customer IDs ""
    Then no messages should be sent

  Scenario: Send SMS with non-existent IDs
    Given a customer data set "customer_message.csv" exists
    When I send SMS to customer IDs "5"
    Then no messages should be sent
