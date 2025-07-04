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
    ' kinky ',
    ' poofy',
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
    ' square ',
    ' poofy ',
    ' fluffy ',
    ' spikey ',
    ' curly ',
]

// Hair that hangs in front of your ears, usually excluded from ponytails. Think Inuyasha
var hairTendrils = [
    ' no ',
    ' half total hair length ',
    ' same as hair length '
]

/* The variables contain the value of randomizing the options, like the dice you would roll.
 */
let randomLength = Math.floor(Math.random() * (hairLength.length));
let randomPart = Math.floor(Math.random() * (hairPart.length));
let randomTexture = Math.floor(Math.random() * (hairTexture.length));
let randomFlow = Math.floor(Math.random() * (hairFlow.length));
let randomEnds = Math.floor(Math.random() * (hairEnds.length));
let randomTendrils = Math.floor(Math.random() * (hairTendrils.length));

/* When the variable selects an option, that is then pushed to be applied on each list of options
i.e.  `${Skill[Check Roll]}`
at least thats how i understand it */

return ` This <b>${hairTexture[randomTexture]}</b> hair goes to <b>${hairLength[randomLength]}</b> length with <b>${hairTendrils[randomTendrils]}</b> tendrils.<br>
The flow of the hair <b>${hairFlow[randomFlow]}</b> with <b>${hairEnds[randomEnds]}</b> ends.<br>
And the bangs are <b>${hairPart[randomPart]}</b> parted.<br>`;
}

function hairPlus() {

/* Various types of additional hairs */
var hairPlusNames = [
    'ponytails',
    'buns',
    'puffs',
    'ahoge',
]

/* How large the additional hair is */
var hairPlusSize =[
    'small',
    'medium',
    'big',
]

/* Where does the addition start on the head */
var hairPlusY = [
    'low',
    'mid',
    'high',
]

/* Where the Hair is located around the Head  */
var hairPlusX = [
    'left',
    'right',
    'center',
    'twin',
]

let randomPlusNames = Math.floor(Math.random() * (hairPlusNames.length));
let randomPlusSize = Math.floor(Math.random() * (hairPlusSize.length));
let randomPlusY = Math.floor(Math.random() * (hairPlusY.length));
let randomPlusX = Math.floor(Math.random() * (hairPlusX.length));

return `<br>Optional:<br> The hairstyle also has <b>${hairPlusSize[randomPlusSize]} ${hairPlusY[randomPlusY]} ${hairPlusX[randomPlusX]} ${hairPlusNames[randomPlusNames]}</b> `

/* return ` This <b>${hairTexture[randomTexture]}</b> hair goes to <b>${hairLength[randomLength]}</b> length with <b>${hairTendrils[randomTendrils]}</b> tendrils.<br>
The flow of the hair <b>${hairFlow[randomFlow]}</b> with <b>${hairEnds[randomEnds]}</b> ends.<br>
And the bangs are <b>${hairPart[randomPart]}</b> parted.<br>`; */

}

function newHair() {
	document.getElementById('finalResult').innerHTML = hairStyle() + hairPlus();
}
/*  Still desire to know how to add weighted chances to certain conditions
because the true randomness can be a little chaotic */