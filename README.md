# angular-design
### A chat client demo

## About

This demo's purpose is for creating a chat client while harnessing the power of [AngularJS](http://angularjs.org), while integrating with Socket.io via [Sails.js](http://sailsjs.org).

## Overview - step-03

This step did not complete all of the tasks outlined in `step-02`, but it does build out the Node.js server

*   The models are created
*   The chat controller for all apis related to chat was created
    *    `addUser` and `addLine` methods were added for updating all connected sockets with the current users and lines, respectively
    *    This implementation leaves it to the client to display the updated text appropriately

This is a little bit more complex, but simple as far as a server-side app goes.  The controller actions are json-only apis, but they control the behavior of all of the sockets connected to the app.

The controller makes use of some helper extensions to Socket.io via Sails, namely `request.listen`, `Model.introduce`, and `Model.publish`.

The raw socket is exposed via `req.socket`, and so this app takes advantage of Socket.io's heartbeat api to catch when a user disconnects from the socket (whether it be due to connection issues, or closing of the web browser), and update the user list in chat appropriately for all other users.

## Tasks

We need to finally update the client-side app to take advantage of the backend.

*   Need to create a prompt to create a user at the beginning
*   Need to send text across the socket
*   Need to respond to text being received from the socket & update the UI appropriately

## Steps to accomplish tasks

### Client-side

*   Have the app initialize with a modal prompt asking for the user name
*   Create unit tests for `Socket` service on the client, which serves as a wrapper for the app's interaction with Socket.io
*   Create service for interacting with socket.io

Go to [step-04](https://github.com/wesleycho/angular-design/tree/step-04) to see the solution!
