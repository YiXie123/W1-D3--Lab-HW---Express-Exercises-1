const express = require('express');
const app = express();
const port = 3000;

// function range(start, end) {
//     return Array(end - start + 1).fill().map((_, idx) => start + idx)
//   }

var number_of_bottles = range(1, 99); 
console.log(number_of_bottles)


app.get('/', function (req, res) {
    res.send(
        '<h1>99 Bottles of beer on the wall!</h1>'
        `<a href="http://localhost:3000/98">take one down, pass it around</a>`);
  });

  app.get("/:number_of_bottles", (req, res) => {
    if (req.params.number_of_bottles>0) {
      res.send(
        number_of_bottles=number_of_bottles-1
        "<H1>Hey, " + req.params.number_of_bottles + " Bottles of beer on the wall.</H1>"
        `<a href="http://localhost:3000/:number_of_bottles">take one down, pass it around</a>`
      );
    } else {
      res.send('<a href="http://localhost:3000/">Please restart</a>');
    }
  });

app.listen(port,() => {
    console.log('listening on port' , port);
});