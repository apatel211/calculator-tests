Feature: Open Calculator

  Scenario Outline: Open Calculator
    Given I Able to see Calculator 
    When I have entered "<number1>" and "<number2>" into the calculator
    And I click on subsctraction 


     Examples:
    | number1 | number2 |
    | 4 | 5 |

