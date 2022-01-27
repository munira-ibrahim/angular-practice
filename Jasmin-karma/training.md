# Unit testing in Angular
- TDD - Test Driven Development
- BDD - Behaviour Driven Development

    ## Angular testing tools
        - Jasmin - testing framework for javascript 
        - karma  - web server thet executes test code
        - Protractor - for E2E testing

- command :
```
ng test
ng test --include "<spec ts file path>"
```

# Three formula of testing(AAA)
- Arrange
- Action -  Actual result from development functionality
- Assert - Test result

# Structure of test case file
1. describe()  ---> create test suit (Collection of test-cases)
2. Method Name : it()  ---> create test case
3. Parameters :  
    a. string ---> test case title
    b. callback(arrow function) ---> code to perform testing (AAA)
