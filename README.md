# angular-design
### A chat client demo

## About

This demo's purpose is for creating a chat client while harnessing the power of [AngularJS](http://angularjs.org), while integrating with Socket.io via [Sails.js](http://sailsjs.org).

## Overview - step-01

A couple of things changed from the initial state.

*   The HTML was simplified to take advantage of Angular in accordance with DRY (Don't Repeat Yourself)
*   Wrote a unit test for the `send` action
*   Wrote a preliminary implementation of the `send` action in order to pass the unit test

The app did not break, and it adds a new line!  In addition, a simple unit test for the controller is available for perusing.

However, the app does not add a user name when text is sent.  It still isn't dynamic, since any other user who opens up the web page would only see the static content, the two lines with hardcoded data that was moved to the client-side controller.

## Tasks

This app needs to have more functionality on the client, as well as more functionality on the server, for syncing all clients with the current text.

*   Need to add a user when text is sent
*   Need to send text across the socket
*   Need to respond to text being received from the socket & update the UI appropriately

## Steps to accomplish tasks

### Client-side

*   Added in a hardcoded username
*   Refactor unit test to test for the correct username being sent in `sendLine()`
*   Refactor `sendLine()` to add in the username
*   Create service for interacting with socket.io
*   Add unit test to test socket functionality - mock the service for interacting with the socket for the `sendLine()` test
*   Write unit tests for service that interacts with sockets
*   Make the unit tests pass

### Server-side

*   Write unit tests for websocket API
*   Implement websocket api

Go to [step-03](https://github.com/wesleycho/angular-design/tree/step-03) to see the solution!
