const cookie=require('cookie');
exports.authentication=function(request, response) {
        let is_login = false;
        let cookies = {};
        if (request.headers.cookie) {
          cookies = cookie.parse(request.headers.cookie);
        }
        if (cookies.id === "hyunsooklm" && cookies.password === "kimhs1019@") {
          is_login = true;
        }
        return is_login;
      }
exports.auth_UI=function(request, response) {
        if (exports.authentication(request, response)) {
          return `<h2><a href="/logout">logout</a></h2>`;
        }
        else {
          return `<h2><a href="/login">login</a></h2>`;
        }
      }