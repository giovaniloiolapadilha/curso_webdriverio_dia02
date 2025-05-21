Feature: Basic search

  Scenario: Busca simples
    Given I open the url 
    When I search by "falcon"
    Then the first product is "Falcon Heavy"
    And the second product is "Falcon 9"
