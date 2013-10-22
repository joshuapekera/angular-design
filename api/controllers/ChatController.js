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

module.exports = {
    
  


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to ChatController)
   */
  _config: {},

  addUser: function (req, res) {
    var param = req.param;

    User.create({
      name: param.name
    }).done(function (err, user) {
      if (err) {
        return res.json({ message: err });
      }

      User.subscribe(req.socket);
      this.publishUpdate();

      return res.json({ user: user });
    });
  },
  addLine: function (req, res) {
    var param = req.param;

    return Line.create({
      user: param.user,
      text: param.text
    }).done(function (err, line) {
      if (err) {
        return res.json({ message: err });
      }

      this.publishUpdate();

      return res.json({
        line: line
      });
    });
  },
  publishUpdate: function () {
    return User.publishCreate({
      users: User.findByConnected(true),
      lines: Line.find().sort('createdAt desc').limit(50)
    });
  }
};
