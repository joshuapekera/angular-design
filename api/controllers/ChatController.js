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

      req.listen(1);
      User.introduce(req.socket, 1);
      this.publishUpdate(req);

      var self = this;

      req.socket.on('disconnect', function () {
        user.destroy(function () {
          self.publish(req);
        });
      });

      return res.json({
        users: User.findByConnected(true),
        lines: Line.find().sort('createdAt desc').limit(50)
      });
    });
  },
  addLine: function (req, res) {
    var param = req.param;
    console.log(param);

    return Line.create({
      user: param.user,
      text: param.text
    }).done(function (err, line) {
      if (err) {
        return res.json({ message: err });
      }

      this.publishUpdate(req);

      return res.json({
        users: User.findByConnected(true),
        lines: Line.find().sort('createdAt desc').limit(50)
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
