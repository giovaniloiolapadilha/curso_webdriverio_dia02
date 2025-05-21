@gettext
Feature: using getText

  Scenario: Pesquisar pelo nome do primeiro item do blog
    Given I open the url 
    When I go to blog menu
    And I search by the title of the first item in the blog
    Then I can see no products found message 

  Scenario: Pesquisar pelo nome do primeiro item do blog
    Given I open the url 
    When I go to Promotions menu
    And I search by the title of the first product tittle in the blog
    Then I can the button add to cart

   
