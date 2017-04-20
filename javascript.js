console.log('Hello, what are you doing looking in here?');

var total=0;
var newElement=document.createElement('div');
newElement.style.color='teal';
newElement.style.backgroundcolor='orange';
newElement.style.width='600px';
newElement.style.height='600px';
document.body.appendChild(newElement);
var tax=0.06;
var taxTotal=0;
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
    price: 21999.99,
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

  var name1=document.createElement('p');
  name1.innerText =obj.name;
  newElement.appendChild(name1);


  var name1=document.createElement('p');
  name1.innerText =obj.price;
  newElement.appendChild(name1);

  total += obj.price;
  if (obj.tax===true) {

   taxTotal += obj.price*tax;
  };
});

var name1=document.createElement('p');
name1.innerText ='Your total is $'+total.toFixed(2);
newElement.appendChild(name1);

var name1=document.createElement('p');
name1.innerText ='Your total tax is $'+taxTotal.toFixed(2);
newElement.appendChild(name1);


console.log(name);
console.log('Your total is $' + total.toFixed(2));
console.log('Your tax is $' + taxTotal.toFixed(2));
