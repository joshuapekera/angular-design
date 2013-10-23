'use strict';

describe('socket service', function () {
  var route, Socket;
  beforeEach(module('ChatApp'));
  beforeEach(inject(function (_route_, _Socket_) {
    route = _route_;
    Socket = _Socket_;
  }));

  it('should successfully add a user', function () {
    Socket.addUser({
      name: 'bar'
    }).then(function (res) {
      expect(_(res.users).isArray()).toBe(true);
      expect(res.users.length).toBe(2);
      expect(res.users[1].name).toBe('bar');
    });
  });

  it('should successfully add a line', function () {
    Socket.addLine({
      user: 'bar',
      text: 'baz'
    }).then(function (res) {
      expect(_(res.users).isArray()).toBe(true);
      expect(res.users.length).toBe(1);
      expect(res.users[0].name).toBe('foo');
      expect(_(res.lines).isArray()).toBe(true);
      expect(res.lines.length).toBe(2);
      expect(res.lines[1].user).toBe('bar');
      expect(res.lines[1].text).toBe('baz');
    });
  });
});
