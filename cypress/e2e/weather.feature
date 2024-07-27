Feature: Get weather statistics

  Scenario: Get top N coldest cities
    Given a city dataset "city.csv" exists
    When I fetch weather statistics for cities
    Then I should get the top N coldest cities

  Scenario: Get top N cities with the highest humidity
    Given a city dataset "city.csv" exists
    When I fetch weather statistics for cities
    Then I should get the top N cities with the highest humidity