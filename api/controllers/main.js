var MainController = {
  index: function (req, res) {
    return res.view({
      title: 'AngularJS & Sails.js Chat Demo'
    });
  }
};

module.exports = MainController;
