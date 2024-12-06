function beast() {
var amounthead =[
	'1',
	'2',
	'3'
];
var amount =[ 
	'no',
	'1',
	'2',
	'3',
	'4',
	'6',
	'8'
];
var animal =[
'Alpaca',
'Unicorn',
'Pegasus',
'Bat',
'Bear',
'Cow',
'Goat',
'Deer',
'Dog',
'Wolf',
'Fox',
'Cat',
'Lion',
'Tiger',
'Hedgehog',
'Badger',
'Otter',
'Rabbit',
'Rat',
'Red Panda',
'Panda',
'Skunk',
'Squirrel',
'Spider',
'Scorpion'
];
var randomAmountH = Math.floor(Math.random() * (amounthead.length));
var randomAmount2 = Math.floor(Math.random() * (amount.length));
var randomAmount3 = Math.floor(Math.random() * (amount.length));
var randomAmount4 = Math.floor(Math.random() * (amount.length));
var randomAnimal1 = Math.floor(Math.random() * (animal.length));
var randomAnimal2 = Math.floor(Math.random() * (animal.length));
var randomAnimal3 = Math.floor(Math.random() * (animal.length));
var randomAnimal4 = Math.floor(Math.random() * (animal.length));
var randomAnimal5 = Math.floor(Math.random() * (animal.length));
return `This beast has ${amounthead[randomAmountH]} heads, ${amount[randomAmount2]} arms, ${amount[randomAmount3]} legs and ${amount[randomAmount4]} tails. <br><br>

The heads are that of the ${animal[randomAnimal1]}<br>
The body is that of the ${animal[randomAnimal2]}<br>
The arms are that of the ${animal[randomAnimal3]}<br>
The legs are that of the ${animal[randomAnimal4]}<br>
The tails are that of the ${animal[randomAnimal5]}<br>
`;
}
function newBeast() {
	document.getElementById('studyDisplay').innerHTML = beast();
}