# A Spring Boot + React.js demo webapp
Demo webapp that uses Spring Boot for the backend and React.js in the frontend

## How to run tests
The test gradle task will use Jest to run the frontend tests, and also execute the JUnit tests for the backend.
```
gradlew test
```

## How to build
The build gradle task will use Webpack to build the JavaScript application bundle, copy it to the appropriate directory
for Spring Boot to be able to serve it, and then build the Spring Boot application.
```
gradlew build
```

## How to run
```
gradlew bootRun
```
