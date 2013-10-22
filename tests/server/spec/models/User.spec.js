var Sails = require('sails');
var chai = require('chai');

var app;

chai.should();

before(function (done) {
  Sails.lift({
    log: { level: 'error' }
  }, function (err, sails) {
    app = sails;
    done(err, sails);
  });
});

describe('User model', function (done) {
  it('should add a createdAt entry on creation', function (done) {
    var currentDate = Date.now();
    User.create({ name: 'foo' })
      .done(function (err, user) {
        user.should.have.property('createdAt');
        (user.createdAt instanceof Date).should.equal(true);
        user.createdAt.getFullYear().should.equal(currentDate.getFullYear());
        user.createdAt.getMonth().should.equal(currentDate.getMonth());
        user.createdAt.getDate().should.equal(currentDate.getDate());
        user.createdAt.getHours().should.equal(currentDate.getHours());
        done();
      });
  });
});

after(function (done) {
  app.lower(done);
});
