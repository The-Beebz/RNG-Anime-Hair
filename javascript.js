function hairStyle(){

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
    ' not ',
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
    ' curves upward ',
    ' curves in ',
    ' curves outward',
    ' curves down '
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
    ' no ',
    ' half total hair length ',
    ' same as hair length '
]

var randomLength = Math.floor(Math.random() * (hairLength.length));
var randomPart = Math.floor(Math.random() * (hairPart.length));
var randomTexture = Math.floor(Math.random() * (hairTexture.length));
var randomFlow = Math.floor(Math.random() * (hairFlow.length));
var randomEnds = Math.floor(Math.random() * (hairEnds.length));
var randomTendrils = Math.floor(Math.random() * (hairTendrils.length));
// var randomPlus = Math.floor(Math.random() * (hairPlus.length));

/* ${hairLength[randomLength]}
${hairPart[randomPart]}
${hairTexture[randomTexture]}
${hairFlow[randomFlow]}
${hairEnds[randomEnds]}
${hairTendrils[randomTendrils]}
${hairPlus[randomPlus]} */

return ` This <b>${hairTexture[randomTexture]}</b> hair goes to <b>${hairLength[randomLength]}</b> length with <b>${hairTendrils[randomTendrils]}</b> tendrils.<br>
The flow of the hair <b>${hairFlow[randomFlow]}</b> with <b>${hairEnds[randomEnds]}</b> ends.<br>
And the bangs are <b>${hairPart[randomPart]}</b> parted.<br>`;

}

function newHair() {
	document.getElementById('finalResult').innerHTML = hairStyle();
}


/* // Basic hairstyle additions theres definitely a better way to do this but have mercy for now
* I know how to fix this now!!
* Make seperate vars for high/low, twin/center, ponytail buns duh! ill fix this abomination later though lol
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
]; */