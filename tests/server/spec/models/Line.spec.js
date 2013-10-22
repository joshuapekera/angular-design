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
    Line.create({ name: 'foo' })
      .done(function (err, line) {
        line.should.have.property('createdAt');
        (line.createdAt instanceof Date).should.equal(true);
        line.createdAt.getFullYear().should.equal(currentDate.getFullYear());
        line.createdAt.getMonth().should.equal(currentDate.getMonth());
        line.createdAt.getDate().should.equal(currentDate.getDate());
        line.createdAt.getHours().should.equal(currentDate.getHours());
        done();
      });
  });
});

after(function (done) {
  app.lower(done);
});
