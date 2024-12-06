// How far down the body CAN the hair reach
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

// Where the hair is 'split' when it comes to bangs
var hairPart = [
    ' no ',
    ' left ',
    ' center ',
    ' right '
]

// The intensity of curling to the hair
var hairTexture = [
    ' straight ',
    ' wavy ',
    ' curly ',
    ' kinky '
]

// What direction do hair 'chunks' follow
var hairFlow = [
    ' straight down ',
    ' curving up ',
    ' curving in ',
    ' curving out',
    ' curving up'
]

// The shape of the end of a hair 'chunk'
var hairEnds = [
    ' blunt ',
    ' poofy ',
    ' fluffy ',
    ' spikey '
]

// Hair that hangs in front of your ears, usually excluded from ponytails. Think Inuyasha
var hairTendrils = [
    ' none ',
    ' half total hair length ',
    ' same as hair length '
]

// Basic hairstyle additions theres definitely a better way to do this but have mercy for now
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
// reference for my old way of hardcoding randomizing...
// var randomAnimal5 = Math.floor(Math.random() * (animal.length));

// the result I meant to spit out
/* return `This beast has ${amounthead[randomAmountH]} heads, ${amount[randomAmount2]} arms, ${amount[randomAmount3]} legs and ${amount[randomAmount4]} tails. <br><br>

The heads are that of the ${animal[randomAnimal1]}<br>
The body is that of the ${animal[randomAnimal2]}<br>
The arms are that of the ${animal[randomAnimal3]}<br>
The legs are that of the ${animal[randomAnimal4]}<br>
The tails are that of the ${animal[randomAnimal5]}<br>
`; */

// how I would ultimately print the selected rng results
/* function newBeast() {
    document.getElementById('studyDisplay').innerHTML = beast();
}
 */ 