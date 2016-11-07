/* jshint esversion: 6 */ //fixes linter to allow let
/*
	Below is a small script which generates random adventures. There are two
	problems which are marked below with "TODO". Your assignment is to solve
	those TODOs and get this script really up to snuff.
*/

let monsters = [
	"dragon",
	"troll",
	"alien mothership",
	"illithid"
];

let weapons = [
	"deadly dagger",
	"artful axe",
	"skillful swordplay",
	"menacing mace"
];

let actions = [
	"defeated",
	"attacked",
	"ran from",
	"talked to"
];

let heroGender;
if (Math.random() < 0.5) {
	heroGender = "heroine";
} else {
	heroGender = "hero";
}

/*
	TODO: The following three lines of code have a lot of repetition and are
	ripe for turning into a function! Create a function to handle choosing
	a random element from an array instead of doing the math each time.
*/
// var chosenMonster = monsters[Math.floor(Math.random() * monsters.length)];
// var chosenWeapon = weapons[Math.floor(Math.random() * weapons.length)];
// var chosenAction = actions[Math.floor(Math.random() * actions.length)];

function chooseRandom(arr) {
		let i = Math.floor(Math.random() * arr.length);
		return arr[i];
}

let chosenMonster = chooseRandom(monsters);
let chosenWeapon = chooseRandom(weapons);
let chosenAction = chooseRandom(actions);

let output = "Armed with only their " +
	chosenWeapon +
	" our " +
	heroGender +
	" " +
	chosenAction +
	" the evil " +
	chosenMonster +
	"!";

document.getElementById("adventure").innerText = output;

/*
	TODO: Right now the "new adventure!" button doesn't work. Create a function
	to bind to that button so that the user can create a new adventure without
	refreshing the page.
*/

function newAdventure() {
			window.location.reload(); // think this is right

	}
	document.getElementById("new_adventure").onclick = newAdventure;

/*
	Optional: Create several more types of adventures, weapons, actions, etc.

	Optional: Allow the user to interact with the story more than just clicking
	the "new adventure!" button. You'll need to create variables to keep track
	of state.

	Optional (advanced): Use document.location.hash in a way which allows the
	user to bookmark a specific story that they like and return to it later.
*/
