module.exports = {
  HTML: function (title, list, body, control, authentication, auth_UI) {
    if (authentication) {
      return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${auth_UI}
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
    }
    else {
      return `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
      <h1><a href="/">WEB</a></h1>
      ${auth_UI}
      ${body}
      </body>
      </html>
      `;
    }

  }, list: function (filelist) {
    var list = '<ul>';
    var i = 0;
    while (i < filelist.length) {
      list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
      i = i + 1;
    }
    list = list + '</ul>';
    return list;
  }
}
