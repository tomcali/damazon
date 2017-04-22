// node.js program for working with MySQL products_db database
// and executing customer transactions

var mysql = require("mysql");
var inquirer = require("inquirer");

function orderQuantity(product) {
	console.log('User requests', product);
}

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "damazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

var runSearch = function() {
  inquirer.prompt({
    name: "action",
    type: "list",
    message: "Specify the item from soup to nuts:",
    choices: ['soup', 'crackers', 'cereal', 'milk', 'computer',
      'phone', 'book', 'sand', 'baseball', 'nuts'
    ]
  }).then(function(answer) {

    switch (answer.action) {
      case 'soup':
        orderQuantity('soup');
        break;

      case 'crackers':
        orderQuantity('crackers');
        break;

      case 'cereal':
        orderQuantity('cereal');
        break;

      case 'milk':
        orderQuantity('milk');
        break;

      case 'computer':
        orderQuantity('computer');
        break;

      case 'phone':
        orderQuantity('phone');
        break;

      case 'book':
        orderQuantity('book');
        break;

      case 'sand':
        orderQuantity('sand');
        break;

      case 'baseball':
        orderQuantity('baseball');
        break;

      case 'nuts':
        orderQuantity('nuts');
        break;
    }
  });
};
