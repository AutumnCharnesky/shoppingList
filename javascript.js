console.log('hello');

var total=0;
var tax=0.06;
var shoppingList=[
{
    name: 'cat food',
    price: 5.99,
    tax: true
  },
  {
    name: 'cat litter',
    price: 7.89,
    tax: true
  },
  {
    name: 'mouse toy',
    price: 1.99,
    tax: true
  },
  {
    name: 'blanket',
    price: 20.99,
    tax: true
  },
  {
    name: 'elephant',
    price: 10238.94,
    tax: true
  },
  {
    name: 'peanuts',
    price: 2.99,
    tax: false
  },
  {
    name: 'bananas',
    price: 1.79,
    tax: false
  },
  {
    name: 'scratching post',
    price: 11.29,
    tax: true
  },
  {
    name: 'computer mouse',
    price: 20.99,
    tax: true
  },
  {
    name: 'jumbo tissues pack',
    price: 13.33,
    tax: true
  }
];

shoppingList.forEach(function(obj) {
  console.log(obj.name);
  console.log(obj.price);
  console.log(obj.tax);

  total += obj.price;

  function MULTIPLY(price, tax) {
    if (obj.tax===true) {
     console.log(price*tax);
   } else {
     console.log(price);
   }
    var product=MULTIPLY(price, tax);
  };
});

console.log(name);
console.log(total);
console.log(tax);
