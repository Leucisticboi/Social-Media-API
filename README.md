# Social-Media-API

## Description
As a social media startup, I want an API for my social network that uses a NoSQL database so that my website can handle large amounts of unstructured data.

## Table of Contents

[Description](#description)

[Acceptance Criteria](#acceptance-criteria)

[Installation](#installation)

[Usage](#usage)

[Walkthrough Video](#walkthrough-video)

[License](#license)

[Questions](#questions)

## Acceptance Criteria
### Given a social network API:

* When I enter the command to invoke the application

    Then my server is started and the Mongoose models are synced to the MongoDB database

* When I open API GET routes in Insomnia for users and thoughts

    Then the data for each of these routes is displayed in formatted JSON

* When I test API POST, PUT, and DELETE routes in Insomnia

    Then I am able to successfully create, update, and delete users and thoughts in my database

* When I test API POST and DELETE routes in Insomnia

    Then I am able to successfully create and delete reactions to thoughts and add and remove friends to a user's friend list

## Installation
Clone this repository from [GitHub](https://github.com/Leucisticboi/Social-Media-API)

## Usage
Open the application in your local IDE. Use the command `npm i` in your CLI, then `npm start`. The application will now be running.

Open Insomnia for testing. 

To access user data: use the URL `http://localhost:3001/api/users`

To add/remove friend data: use the URL `http://localhost:3001/api/users/(user _id)/friends`

To access thought data: use the URL `http://localhost:3001/api/thoughts`

To add/remove thought data: use the URL `http://localhost:3001/api/thoughts/(thought _id)/reactions`

For POST, PUT, and DELETE routes, you will need to create a JSON body to send to the server. Reference the [walkthrough video](#walkthrough-video) below for inspiration.

## Walkthrough Video
[Walkthrough Video](https://drive.google.com/file/d/1BZ303hBUg0yYeSPuCiRjtribBJOze6A4/view)

## License
[MIT](https://choosealicense.com/licenses/mit/)

A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

## Questions

For any questions:

[LeucisticBoi's' Github Profile](https://github.com/Leucisticboi)

`Email: robert.henderson0597@gmail.com`