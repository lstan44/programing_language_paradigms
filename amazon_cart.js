/*  Stanley Lalanne
    CS 350 Homework 5
*/

var cart=[
  {"name":"Biscuits", "type":"regular", "category":"food", "price": 2.0},
  {"name":"Monitor", "type":"prime", "category":"tech", "price": 119.99},
  {"name":"Mouse", "type":"prime", "category":"tech", "price": 25.50},
  {"name":"dress", "type":"regular", "category":"clothes", "price": 49.90},

  {"name":"1regular", "type":"regular", "category":"tech", "price": 25.6},
  {"name":"2regular", "type":"regular", "category":"clothes", "price": 39.99},
  {"name":"3regular", "type":"regular", "category":"food", "price": 49.45},

  {"name":"1prime", "type":"prime", "category":"tech", "price": 21.50},
  {"name":"2prime", "type":"prime", "category":"food", "price": 90.00},
  {"name":"3prime", "type":"prime", "category":"clothes", "price": 87.99},
]
// added this function to display the cart in a formatted way
function display(a){
  for(var item of a){
    process.stdout.write(item.name+", "+item.type+ ", "+ item.category +", "+item.price.toFixed(2)+"\n");
  }
  console.log("\n");
}

//check where an item is prime or not
function isPrime(item){
    return item.type== "prime";
}

// return an array of only the prime items
function primeItems(cart){
    return cart.filter(a => isPrime(a));
}
console.log("Here are the prime items:");
display(primeItems(cart));


const _ = require('underscore'); // needed to have support for the reject function

// return an array of the non-prime items
function notPrimeItems(cart){
  return _.reject(cart,isPrime);
}
console.log("Here are the non-prime items:");
display(notPrimeItems(cart));

//function to apply 20% discount to tech items
function applyCoupon(cart){
  return cart.map((item) => {
      if(item.category == 'tech') {
      item.price -= item.price*0.2;
      }
      return item;
    });
}
applyCoupon(cart); //actually apply the discount here
console.log("Here's the cart after coupon is added to tech items:");
display(cart);

//add $2 shipping cost to non-prime items
cart.map(item => {
  if(item.type != "prime"){
    item.price += 2;
  }
});
console.log("Here's the cart after $2 shipping cost is added to non-prime items:");
display(cart);

// add 6% sales tax to all items in the cart
cart.map( item => item.price += item.price*0.06);
console.log("Here's the cart after 6% sales tax is added to all items:");
display(cart);

//calculate the total cost of everything in the cart
function totalCost(cart){
  return cart.reduce((a, item) => {
        return a + item.price;
    }, 0);
}
console.log("Here's the total cost of all the items:")
console.log(totalCost(cart).toFixed(2));

