'use strict';

describe('socket service', function () {
  var lines, users, route, Socket, socket;
  beforeEach(module('ChatApp'));
  beforeEach(inject(function (_route_, _Socket_) {
    route = _route_;
    Socket = _Socket_;
    users = [
      {
        name: 'foo'
      }
    ];

    lines = [
      {
        user: 'foo',
        text: 'bar'
      }
    ];

    socket = {
      post: function (path, data) {
        data = angular.fromJson(data);
        
        if (path === route.forAddingAUser) {
          return angular.toJson({ user: data.name });
        }
        else if (path === route.forAddingALine) {
          lines.push({
            user: data.user,
            text: data.text
          });
          return angular.toJson({
            users: users,
            lines: lines
          });
        }
      }
    };
  }));

  it('should successfully add a user', function () {
    var user = Socket.addUser({
      name: 'bar'
    });

    expect(_(user).isObject()).toBe(true);
    expect(user.hasOwnProperty('name')).toBe(true);
    expect(user.name).toBe('bar');
  });

  it('should successfully add a line', function () {
    var clientLines = Socket.addLine({
      user: 'bar',
      text: 'baz'
    });

    expect(_(clientLines).isArray()).toBe(true);
    expect(clientLines.length).toBe(2);
    expect(clientLines[1].user).toBe('bar');
    expect(clientLines[1].text).toBe('baz');
  });
});
