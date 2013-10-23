var users, lines, route, socket

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

route = {
  forAddingAUser: '/api/user/add',
  forAddingALine: '/api/line/add'
};

socket = {
  on: function (e, callback) {
    var res = {
      users: users,
      lines: lines
    };

    callback(res);
  },
  post: function (path, data, responseCallback) {
    if (path === route.forAddingAUser) {
      users.push(data.name);
      return responseCallback({
        users: users,
        lines: lines
      });
    }
    else if (path === route.forAddingALine) {
      lines.push({
        user: data.name,
        text: data.text
      });
      return responseCallback({
        users: users,
        lines: lines
      });
    }
  }
};
