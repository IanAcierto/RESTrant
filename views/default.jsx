const React = require('react');

function Def(html){
  return(
    <html>
      <head>
        <title>Rest-rant</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="/style.css"/>
      </head>
      <body>
        <nav>
          <ul>
              <li><a href='/'>HOME</a></li>
              <li><a href='/places'>PLACES</a></li>
              <li><a href='/places/new'>NEW</a></li> 
          </ul>
        </nav>
        {html.children}
      </body>
    </html>
  )
}

module.exports = Def;
