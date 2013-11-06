/**
 * ChatController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

var Q = require('q');

var ChatController = {
    
  


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to ChatController)
   */
  _config: {},

  addUser: function (req, res) {
    var param;
    param = req.param;

    return User.create({
      name: param('user')
    }).done(function (err, user) {
      if (err) {
        return res.json({ message: err });
      }

      req.listen(1);
      User.introduce(req.socket, 1);
      ChatController.publishUpdate(req);

      req.socket.on('disconnect', function () {
        user.destroy();
      });

      var userList, chatLog;

      return Q.all([getUserList(), getChatLog()]).done(function () {
        return res.json({
          users: userList,
          lines: chatLog
        });
      });
    });
  },
  addLine: function (req, res) {
    var param;
    param = req.param;

    return Line.create({
      user: param('user'),
      text: param('text')
    }).done(function (err, line) {
      if (err) {
        return res.json({ message: err });
      }

      ChatController.publishUpdate(req);

      var userList, chatLog;

      return Q.all([getUserList(), getChatLog()]).done(function () {
        return res.json({
          users: userList,
          lines: chatLog
        });
      });
    });
  },
  publishUpdate: function (req) {
    return User.publish(req, [{ id: 1 }],
      {
        users: User.findByConnected(true),
        lines: Line.find().sort('createdAt desc').limit(50)
      });
  }
};

function getUserList () {
  return Q.fbind(function () {
    User.findByConnected(true).exec(function (err, users) {
      userList = users;
    });
  });
}

function getChatLog () {
  return Q.fbind(function () {
    Line.find().sort('createdAt desc').limit(50).exec(function (err, data) {
      chatLog = data;
    });
  });
}

module.exports = ChatController;
