// node.js program for working with MySQL products_db database
// and processing customer orders...  

var mysql = require("mysql");
var inquirer = require("inquirer");

function orderQuantity(product) {
	// console.log('User requests', product);
var prompts = [{
    type: 'input',
    name: 'message',
    default: 'How many units of ' + product + ' would you like?',
    message: 'Enter quantity desired',
}]
require('inquirer').prompt(prompts, function(){})
}

function processOrder(product, quantity = 10) {
  // default quantity entered for initial testing
  console.log('\n\ncheck database and process order or give message');
  // here we check the inventory for the product
  // and do one of two things... place the order and reduce the quantity
  // or give message that there is insufficient quantity to place the order
  // perhaps giving a message such as 'we can accept orders of up to xxx units'
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

// initial version of program has user select product from list
// this brute-force approach can be replaced later
// by routine that asks user to enter product desired as text string
// and for fun... we might add autocompletion for the string
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
        processOrder('soup'); // default order quantity used in testing
        // processOrder('crackers', quantity); 
        break;

      case 'crackers':
        orderQuantity('crackers');
        processOrder('crackers', quantity);
        break;

      case 'cereal':
        orderQuantity('cereal');
        processOrder('cereal', quantity);
        break;

      case 'milk':
        orderQuantity('milk');
        processOrder('milk', quantity);
        break;

      case 'computer':
        orderQuantity('computer');
        processOrder('computer', quantity);
        break;

      case 'phone':
        orderQuantity('phone');
        processOrder(product, quantity);
        break;

      case 'book':
        orderQuantity('phone');
        processOrder(product, quantity);
        break;

      case 'sand':
        orderQuantity('sand');
        processOrder('sand', quantity);
        break;

      case 'baseball':
        orderQuantity('baseball');
        processOrder('baseball', quantity);
        break;

      case 'nuts':
        orderQuantity('nuts');
        processOrder('nuts', quantity);
        break;
    }
  });
};
