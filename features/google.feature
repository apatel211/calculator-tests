Feature: Open Calculator

  Scenario Outline: Open Calculator
    When I Able to see Calculator 
    When I have entered "<number1>" and "<number2>" into the calculator, Substraction 
    Then subsctraction value is 
    And Click on "CE" to clear the value 
    When I have entered "<number1>" and "<number2>" into the calculator, Division 
    Then Division value is
    And Click on "CE" to clear the value 

     Examples:
    | number1 | number2 |
    | 10 | 2 |

