# angular-design
### A chat client demo

## About

This demo's purpose is for creating a chat client while harnessing the power of [AngularJS](http://angularjs.org), while integrating with Socket.io via [Sails.js](http://sailsjs.org).

## Overview - step-01

This branch lays out the foundation for a brand new Sails project created via `sails new angular-design --linker`, with some modifications.

*   The assets specified for the asset manager are specifically enumerated in the Gruntfile - this is to naively control load order
*   `MainController` is created to handle the default root route `'/'` - this is in the event we want to process any default actions
*   `bower.json` & `.bowerrc` are created in order to best leverage use of [Bower](http://bower.io) for client-side libraries with dependency management
*   Client-side libraries used:
    *   [Bootstrap](http://getbootstrap.com)
        *   Popular and powerful CSS framework
        *   Supports [LESS](http://lesscss.org), the CSS preprocessor
        *   Not including JS portion
            *   Heavy dependency on [jQuery](http://jquery.org)
            *   Excellent alternative for this project (see below)
    *   [Font Awesome](http://fortawesome.github.io/Font-Awesome/)
            *   Awesome set of icons provided as fonts that synergizes with Twitter Bootstrap well
    *   [Lo-dash](http://lodash.com)
        *   Awesome lightweight utility belt of methods that make JavaScript much better to develop in
    *   [AngularJS](http://angularjs.org)
        *   Awesome client-side JavaScript framework
        *   Facilitates code organization in an excellent manner
        *   Uses HTML to describe the DOM, avoiding polluting HTML with template-specific helpers that are tied to the templating framework
        *   Built in a modular fashion, making it easy to create reusable modules, widgets, etc.
    *   [Angular UI Bootstrap](http://angular-ui.github.io/bootstrap/)
        *   Rewrite of Bootstrap's JavaScript as an Angular plugin
        *   Requires no jQuery! (can save ~80-90 KB!)
        *   Adds additional features not present in default Bootstrap
            *   Ratings
            *   Datepicker
            *   Timepicker
        *   Integrates excellently with Angular
*   `views/main/index.ejs` used for default view
    *   Contains default HTML frame for the chat application
    *   Has no dynamic functionality currently
*   `assets/linker/main.less` is the main stylesheet
    *   Contains basic stylings so that the main view looks sensible for a chat application
