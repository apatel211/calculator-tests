Feature: Open Calculator

  Scenario Outline: Open Calculator
    Given I Able to see Calculator 
    When I have entered "<number1>" and "<number2>" into the calculator, Substraction 
    Then Calculator state has changed after substration  
    And Click on "CE" to clear the value 
    When I have entered "<number1>" and "<number2>" into the calculator, Division 
    Then Calculator state has changed after division
    And Click on "CE" to clear the value 

     Examples:
    | number1 | number2 |
    | 10 | 2 |

