var Sails = require('sails');
var User = require('./api/models/User');
var chai = require('chai');

var app;

chai.should();

describe('User model', function () {
  beforeEach(function (done) {
    Sails.lift({
      log: { level: 'error' }
    }, function (err, sails) {
      app = sails;
      done(err, sails);
    });
  });

  afterEach(function (done) {
    app.lower(done);
  });

  it('should add a createdAt entry on creation', function () {
    var currentDate = Date.now();
    User.create({ name: 'foo' })
      .done(function (err, user) {
        user.should.have.property('createdAt');
        (user.createdAt instanceof Date).should.equal(true);
        user.createdAt.getFullYear().should.equal(currentDate.getFullYear());
        user.createdAt.getMonth().should.equal(currentDate.getMonth());
        user.createdAt.getDate().should.equal(currentDate.getDate());
        user.createdAt.getHours().should.equal(currentDate.getHours());
      });
  });
});
