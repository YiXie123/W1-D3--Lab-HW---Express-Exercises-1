const express = require('express');
const app = express();

// app.get('/greeting', function (req, res) {
//   res.send('<h1>Hello, stranger!</h1>');
// });

// app.get("/greeting/:name?", (req, res) => {
//     if (req.params.name) {
//       res.send(
//         "<H1>Sup, " + req.params.name + "! It's so great to see you!</H1>"
//       );
//     } else {
//       res.send("<H1>Hello, Stranger</H1>");
//     }
//   });

// app.listen(3000, function () {
//   console.log('Listening on port 3000');
// });
// "Greeting express application created."


// const tips = ['$23', '$35', '$500',  "$7"];

// app.get('/tip', (req, res) => {
//   res.send(`
//     <h1>Check your tips!</h1>
//   `);
// });

// sum function
// function getArraySum(a){
//     var total=0;
//     for(var i in a) { 
//         total += a[i];
//     }
//     return total;
// }

// percentage function
// function percentage(a) {
//     var percent=0;
//     for(var i in a) { 
//         percent= (100 * a[i]) / getArraySum(a)
//     }
//     return total;
//  } 

// app.get('/total', (req, res) => {
//     res.send(tips[req.params.getArraySum]);
// });

// app.get('/percentage', (req, res) => {
//     res.send(tips[req.params.percentage]);
// });

// app.listen(3000, function () {
//     console.log('Listening on port 3000');
// });
// "Tip Calculator express application created."(not working yet)


// const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
// app.get('/magic', function (req, res) {
//     res.send('<h1>Ask Magic 8 ball any question</h1>');
//   });
  
//   app.get("/magic/:question+%20?", (req, res) => {
//       if (req.params.question) {
//         res.send(
//             let htmlResponse = "";
//             for(let i = 0; i< answers.length; i++) {
//                 htmlResponse += "<h1>" + answers[i] + "</h1>";
//             } );
//         } else {
//         res.send("<H1>No Comment</H1>");
//       }
//     });
  
//   app.listen(3000, function () {
//     console.log('Listening on port 3000');
//   });

//   "Magic 8 Ball express application created."(not working yet)