var hairLength = [
    ' above ear ',
    ' chin ',
    ' shoulders ',
    ' upper-back ',
    ' mid-back ',
    ' butt ',
    ' knee ',
    ' ankle ',
    ' floor '
]

var hairPart = [
    ' no ',
    ' left ',
    ' center ',
    ' right '
]

var hairTexture = [
    ' straight ',
    ' wavy ',
    ' curly ',
    ' kinky '
]

var hairFlow = [
    ' straight down ',
    ' curving up ',
    ' curving in ',
    ' curving out',
    ' curving up'
]

var hairEnds = [
    ' blunt ',
    ' poofy ',
    ' fluffy ',
    ' spikey '
]

var hairTendrils = [
    ' none ',
    ' half total hair length ',
    ' same as hair length '
]

var hairPlus = [
    ' high twin ponytails ',
    ' mid twin ponytails ',
    ' low twin ponytails ',
    ' high twin buns ',
    ' mid twin buns ',
    ' low twin buns ',
    ' high left ponytail ',
    ' mid left ponytail ',
    ' low left ponytail ',
    ' high center ponytail ',
    ' mid center ponytail ',
    ' low center ponytail ',
    ' high right ponytail ',
    ' mid right ponytail ',
    ' low right ponytail ',
    ' high left bun ',
    ' mid left bun ',
    ' low left bun ',
    ' high center bun ',
    ' mid center bun ',
    ' low center bun ',
    ' high right bun ',
    ' mid right bun ',
    ' low right bun '
]

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
function newBeast() {
    document.getElementById('studyDisplay').innerHTML = beast();
}
