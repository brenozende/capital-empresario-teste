# CE Test - Web App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.5.

## Development server

Before running the server, install the necessary tools by running the command `npm install`.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Coding details 

Due to the lack of knowledge in backend aspects, some functionalities were not implemented, such as saving changes by using post and put, and delete. To these problems, there was always the same error, mentioning some 'CORS policy'. 

Although there were some difficulties, the project was almost completed, only leaving some details behind and some implementations lacking.

### Implementing details

Bootstrap with JQuery was added to the project to better use the HTML part. Material module from angular was added but later removed because wasn't used. 

Some components were created to separate some functionalities, such as: client-list, client-opportunities and client-edit. These components make requests to the client-service, which make the requests to the backend. Client-service was injected inside the other components' constructors.

client-list: calls client-service to make the request to get all the clients' data from the database and then show on the page.
client-opportunities: calls client-service to make the request to get the opportunities array for one client from the database to show behind this client's details.
client-edit: almost the same as client-opportunities, but it was created to edit the opportunities details and then make the put request to the database, but wasn't fully implemented due to the 'CORS policy' error.