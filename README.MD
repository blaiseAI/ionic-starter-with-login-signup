# Ionic Starter Template:

This starter template provides a simple login and registration system using Angular and a fake API from https://reqres.in. The fake API allows you to test the functionality of the login and registration system without the need for a real API.

## Getting Started

To get started with this template, follow these steps:

## 1. Clone the repository to your local machine:

```
git clone https://github.com/blaiseAI/ionic-starter-with-login-signup.git
```

## 2. Install the dependencies:

```
npm install
```

## 3. Start the development server:

```
ng serve
```

4. Navigate to http://localhost:8100/ in your browser to see the login and registration pages.

## Features

This starter template includes the following features:

- Login page with email and password inputs and a submit button.
- Registration page with first name, last name, email, and password inputs and a submit button.
- Form validation with error messages for invalid inputs.
- Authentication service to handle login and registration requests.
- Interceptor to add the authorization header to API requests.
- Guard to prevent unauthorized access to protected routes.
- Routing to navigate between login, registration, and protected pages.

## Technologies Used

This starter template uses the following technologies:

- Ionic Framework
- Angular
- RxJS
- TypeScript
- Fake API from https://reqres.in

## Usage

## Login

The login functionality is implemented using the /api/login endpoint from the Reqres API. To log in, use the following credentials:

```
Email: eve.holt@reqres.in
Password: cityslicka
```

## Signup

The signup functionality is implemented using the /api/register endpoint from the Reqres API. To sign up, use any valid email address and a password of your choice.

## API

## Login

Endpoint: `/api/login`

Request:

```json
{
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
}
```

Response:

```json
{
  "token": "QpwL5tke4Pnpja7X4"
}
```

## Signup

Endpoint: `/api/register`

Request:

```json
{
  "email": "john.doe@example.com",
  "password": "password"
}
```

Response:

```json
{
  "id": 4,
  "token": "QpwL5tke4Pnpja7X4"
}
```

> Note: The credentials used in the example requests for the fake API from reqres.in are pre-defined and hardcoded, and therefore not validated in any way. This is because reqres.in is a mock API used for testing and development purposes, and is not intended for production use. In a real-world application, user credentials would need to be validated on both the client-side and server-side to ensure the security of user data.

## Contributing

Contributions are welcome! To contribute, simply fork this repository, make your changes, and submit a pull request.

# License

This starter template is licensed under the MIT license.