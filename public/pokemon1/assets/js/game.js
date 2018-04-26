var opening = document.getElementById("opening");
opening.loop = true;
opening.volume = .5;

var enemy = "";
var hero = "";
var pickrando = 0;
var placeholder = "";

function changescreens() {
	document.getElementById("body").innerHTML = "<div id=\"gamearea\"><div id=\"enemystats\"><p id=\"enemyname\"></p><p><span id=\"enemylvl\"></span>&nbsp;&nbsp;&nbsp;<span id=\"enemystatus\"></span></p><div id=\"enemyhpbar\"><p id=\"enemyhpbarfull\"></p></div><p id=\"enemyhp\"></p></div><div id=\"enemyimgdiv\"><img id=\"enemyimg\" src=\"\"></div><div id=\"heroimgdiv\"><img id=\"heroimg\" src=\"\"></div><div id=\"herostats\"><p id=\"heroname\"></p><p><span id=\"herolvl\"></span>&nbsp;&nbsp;&nbsp;<span id=\"herostatus\"></span></p><p id=\"herostatus\"></p><div id=\"herohpbar\"><p id=\"herohpbarfull\"></p></div><p id=\"herohp\"></p></div><div id=\"options\"><ul><li id=\"opt0\">FIGHT</li><li id=\"opt1\">ITEM</li><li id=\"opt2\">QUIT</li><li id=\"opt3\"></li></ul></div></div><audio controls autoplay id=\"music\"><source src=\"pokemon1/assets/music/music.mp3\" type=\"audio/mpeg\"></audio><audio id=\"fight\"><source src=\"pokemon1/assets/sounds/fight.wav\" type=\"audio/wav\"></audio><audio id=\"win\"><source src=\"pokemon1/assets/sounds/megawin.mp3\" type=\"audio/wav\"></audio><audio class=\"pokemonsounds\" id=\"pikachusound\"><source src=\"pokemon1/assets/sounds/pikachusound.mp3\" type=\"audio/mpeg\"></audio><audio class=\"pokemonsounds\" id=\"bulbasaursound\"><source src=\"pokemon1/assets/sounds/bulbasaursound.mp3\" type=\"audio/mpeg\"></audio><audio class=\"pokemonsounds\" id=\"mewsound\"><source src=\"pokemon1/assets/sounds/mewsound.mp3\" type=\"audio/mpeg\"></audio><audio class=\"pokemonsounds\" id=\"growlithesound\"><source src=\"pokemon1/assets/sounds/growlithesound.mp3\" type=\"audio/mpeg\"></audio>";
}

document.getElementById("pikachupick").onclick = function() {
	document.getElementById("pikachusound").play();
	placeholder = function() {
		hero = "Pikachu";
		pickrando = Math.random();
		if (pickrando > .66) {
			enemy = "Bulbasaur";
		}
		else if (pickrando > .33) {
			enemy = "Growlithe";
		}
		else {
			enemy = "Mew";
		}
		changescreens();
		game();
	}
	setTimeout(placeholder, 2000);
}

document.getElementById("bulbasaurpick").onclick = function() {
	document.getElementById("bulbasaursound").play();
	placeholder = function() {
		hero = "Bulbasaur";
		pickrando = Math.random();
		if (pickrando > .66) {
			enemy = "Mew";
		}
		else if (pickrando > .33) {
			enemy = "Growlithe";
		}
		else {
			enemy = "Pikachu";
		}
		changescreens();
		game();
	}
	setTimeout(placeholder, 2000);
}

document.getElementById("mewpick").onclick = function() {
	document.getElementById("mewsound").play();
	placeholder = function () {
		hero = "Mew";
		pickrando = Math.random();
		if (pickrando > .66) {
			enemy = "Bulbasaur";
		}
		else if (pickrando > .33) {
			enemy = "Growlithe";
		}
		else {
			enemy = "Pikachu";
		}
		changescreens();
		game();
	}
	setTimeout(placeholder, 2000);
}

document.getElementById("growlithepick").onclick = function() {
	document.getElementById("growlithesound").play();
	placeholder = function() {
		hero = "Growlithe";
		pickrando = Math.random();
		if (pickrando > .66) {
			enemy = "Bulbasaur";
		}
		else if (pickrando > .33) {
			enemy = "Pikachu";
		}
		else {
			enemy = "Mew";
		}
		changescreens();
		game();
	}
	setTimeout(placeholder, 2000);
}


function game() {
function clearactions() {
	opt0.onclick = function() {
	}
	opt1.onclick = function() {
	}		
	opt2.onclick = function() {
	}		
	opt3.onclick = function() {
	}
}

var music = document.getElementById("music");
music.loop = true;
music.volume = .3;

var enemyname = document.getElementById("enemyname");
var enemylvl = document.getElementById("enemylvl");
var enemystatus = document.getElementById("enemystatus");
var enemyhpbarfull = document.getElementById("enemyhpbarfull");
var enemyhp = document.getElementById("enemyhp");
var enemyimg = document.getElementById("enemyimg");
var heroname = document.getElementById("heroname");
var herolvl = document.getElementById("herolvl");
var herostatus = document.getElementById("herostatus");
var herohpbarfull = document.getElementById("herohpbarfull");
var herohp = document.getElementById("herohp");
var heroimg = document.getElementById("heroimg");
var fight = document.getElementById("fight");
var options = document.getElementById("options");
var move1 = "";
var fight = document.getElementById("fight");
var win = document.getElementById("win");
var rando = 0;
var pikachusound = document.getElementById("pikachusound");
var mewsound = document.getElementById("mewsound");
var bulbasaursound = document.getElementById("bulbasaursound");
var growlithesound = document.getElementById("growlithesound");

function paralyzehero() {
	rando = Math.random();
	if (rando < .25 && enemy.status == "") {
		placeholder = function() {		
			enemy.status = "paralyzed";
			enemystatus.textContent = "paralyzed";
			opt0.textContent = enemy.name + " is paralyzed";
			opt1.textContent = "and can't move!";
			opt2.textContent = "";
			opt3.textContent = "";
		}
		setTimeout(placeholder, 2000);
		setTimeout(enemymove, 4000);
	}
	else {
		setTimeout(enemymove, 2000);
	}
}

function paralyzeenemy() {
	rando = Math.random();
	if (rando < .25 && hero.status == "") {
		placeholder = function() {		
			hero.status = "paralyzed";
			herostatus.textContent = "paralyzed";
			opt0.textContent = hero.name + " is paralyzed";
			opt1.textContent = "and can't move!";
			opt2.textContent = "";
			opt3.textContent = "";
		}
		setTimeout(placeholder, 2000);
		setTimeout(options, 4000);
	}
	else {
		setTimeout(options, 2000);
	}
}

function burnhero() {
	rando = Math.random();
	if (rando < .4 && enemy.status == "") {
		placeholder = function() {		
			enemy.status = "burned";
			enemystatus.textContent = "burned";
			opt0.textContent = enemy.name + " is burned!";
			opt1.textContent = "";
			opt2.textContent = "";
			opt3.textContent = "";
		}
		setTimeout(placeholder, 2000);
		setTimeout(options, 4000);
	}
	else {
		setTimeout(options, 2000);
	}
}

function burnenemy() {
	rando = Math.random();
	if (rando < .4 && enemy.status == "") {
		placeholder = function() {		
			hero.status = "burned";
			herostatus.textContent = "burned";
			opt0.textContent = hero.name + " is burned!";
			opt1.textContent = "";
			opt2.textContent = "";
			opt3.textContent = "";
		}
		setTimeout(placeholder, 2000);
		setTimeout(options, 4000);
	}
	else {
		setTimeout(options, 2000);
	}
}

function tacklehero() {
		enemy.hpnow = enemy.hpnow - 5 + enemy.defense - hero.attack;
		enemyhp.textContent = "HP " + enemy.hpnow + "/" + enemy.hptotal;
		enemyhpbarfull.style.width = enemy.hpnow / enemy.hptotal * 100 + "%";
		setTimeout(enemymove, 2000);
}

function tackleenemy() {
		hero.hpnow = hero.hpnow - 5 + hero.defense - enemy.attack;
		herohp.textContent = "HP " + hero.hpnow + "/" + hero.hptotal;
		herohpbarfull.style.width = hero.hpnow / hero.hptotal * 100 + "%";
		setTimeout(options, 2000);
}


function tailwhiphero() {
	if (enemy.defense > 0) {
		enemy.defense--;
		opt1.textContent = enemy.name + "'s defense is lowered!";
	}
	else {
		opt1.textContent = "It had no effect!";
	}
	setTimeout(enemymove, 2000);
}

function tailwhipenemy() {
	if (hero.defense > 0) {
		hero.defense--;
		opt1.textContent = hero.name + "'s defense is lowered!";
		setTimeout(options, 2000);
	}
	else {
		opt1.textContent = "It had no effect!";
		setTimeout(options, 2000);
	}
}

function electricshockhero() {
	enemy.hpnow = enemy.hpnow - 10 + enemy.defense - hero.attack;
	if (enemy.type == "water" || enemy.type == "flying") {
		enemy.hpnow = enemy.hpnow - 3;
		opt1.textContent = "It's super effective!";
	}
	if (enemy.type == "steel") {
		enemy.hpnow = enemy.hpnow + 6;
		opt1.textContent = "It's barely effective.";
	}
	enemyhp.textContent = "HP " + enemy.hpnow + "/" + enemy.hptotal;
	enemyhpbarfull.style.width = enemy.hpnow / enemy.hptotal * 100 + "%";
	paralyzehero();
}

function electricshockenemy() {
	hero.hpnow = hero.hpnow - 10 + hero.defense - enemy.attack;
	if (hero.type == "water" || hero.type == "flying") {
		hero.hpnow = hero.hpnow - 3;
		opt1.textContent = "It's super effective!";
	}
	if (hero.type == "steel") {
		hero.hpnow = hero.hpnow + 6;
		opt1.textContent = "It's barely effective.";
	}
	herohp.textContent = "HP " + hero.hpnow + "/" + hero.hptotal;
	herohpbarfull.style.width = hero.hpnow / hero.hptotal * 100 + "%";
	paralyzeenemy();
}

function psychichero() {
	enemy.hpnow = enemy.hpnow - 10 + enemy.defense - hero.attack;
	if (enemy.type == "fighting" || enemy.type == "poison") {
		enemy.hpnow = enemy.hpnow - 3;
		opt1.textContent = "It's super effective!";
	}
	else if (enemy.type == "steel" || enemy.type == "psychic") {
		enemy.hpnow = enemy.hpnow + 3;
		opt1.textContent = "It's not very effective.";
	}
	else if (enemy.type == "dark") {
		enemy.hpnow = enemy.hpnow + 6;
		opt1.textContent = "It's barely effective.";
	}
	enemyhp.textContent = "HP " + enemy.hpnow + "/" + enemy.hptotal;
	enemyhpbarfull.style.width = enemy.hpnow / enemy.hptotal * 100 + "%";
	setTimeout(enemymove, 2000);
}

function psychicenemy() {
	hero.hpnow = hero.hpnow - 10 + hero.defense - enemy.attack;
	if (hero.type == "fighting" || hero.type == "poison") {
		hero.hpnow = hero.hpnow - 3;
		opt1.textContent = "It's super effective!";
	}
	else if (hero.type == "steel" || hero.type == "psychic") {
		hero.hpnow = hero.hpnow + 3;
		opt1.textContent = "It's not very effective.";
	}
	else if (hero.type == "dark") {
		hero.hpnow = hero.hpnow + 6;
		opt1.textContent = "It's barely effective.";
	}
	herohp.textContent = "HP " + hero.hpnow + "/" + hero.hptotal;
	herohpbarfull.style.width = hero.hpnow / hero.hptotal * 100 + "%";
	setTimeout(options, 2000);
}

function hypnosishero() {
	rando = Math.random();
	placeholder = function() {
		opt0.textContent = enemy.name + " fell asleep!";
		enemystatus.textContent = "sleeping";
	}
	if (rando < .5 && enemy.status == "") {
		enemy.status = "sleeping";
		setTimeout(placeholder, 2000);
	}
	else {
		placeholder = function() {
			opt0.textContent = "But it didn't work!";
		}
		setTimeout(placeholder, 2000);
	}
	setTimeout(enemymove, 4000);
}

function hypnosisenemy() {
	rando = Math.random();
	placeholder = function() {
		opt0.textContent = hero.name + " fell asleep!";
		herostatus.textContent = "sleeping";
	}
	if (rando < .5 && hero.status == "") {
		hero.status = "sleeping";
		setTimeout(placeholder, 2000);
	}
	else {
		placeholder = function() {
			opt0.textContent = "But it didn't work!";
		}
		setTimeout(placeholder, 2000);
	}
	setTimeout(options, 4000);
}

function vinewhiphero() {
	enemy.hpnow = enemy.hpnow - 7 + enemy.defense - hero.attack;
	if (enemy.type == "ground" || enemy.type == "rock" || enemy.type == "water") {
		enemy.hpnow = enemy.hpnow - 3;
		opt1.textContent = "It's super effective!";
	}
	if (enemy.type == ("flying" || "poison" || "bug" || "steel" || "fire" || "grass" || "dragon")) {
		enemy.hpnow = enemy.hpnow + 3;
		opt1.textContent = "It's not very effective.";
	}
	enemyhp.textContent = "HP " + enemy.hpnow + "/" + enemy.hptotal;
	enemyhpbarfull.style.width = enemy.hpnow / enemy.hptotal * 100 + "%";
	setTimeout(enemymove, 2000);
} 

function vinewhipenemy() {
	hero.hpnow = hero.hpnow - 7 + hero.defense - enemy.attack;
	if (hero.type == "ground" || hero.type == "rock" || hero.type == "water") {
		hero.hpnow = hero.hpnow - 3;
		opt1.textContent = "It's super effective!";
	}
	if (hero.type == ("flying" || "poison" || "bug" || "steel" || "fire" || "grass" || "dragon")) {
		hero.hpnow = hero.hpnow + 3;
		opt1.textContent = "It's not very effective.";
	}
	herohp.textContent = "HP " + hero.hpnow + "/" + hero.hptotal;
	herohpbarfull.style.width = hero.hpnow / hero.hptotal * 100 + "%";
	setTimeout(options, 2000);
} 

function emberhero() {
	enemy.hpnow = enemy.hpnow - 10 + enemy.defense - hero.attack;
	if (enemy.type == "bug" || enemy.type == "steel" || enemy.type == "grass" || enemy == "ice") {
		enemy.hpnow = enemy.hpnow - 3;
		opt1.textContent = "It's super effective!";
	}
	if (enemy.type == ("rock" || "fire" || "water" || "dragon")) {
		enemy.hpnow = enemy.hpnow -3;
		opt1.textContent = "It's not very effective.";
	}
	burnhero();
	enemyhp.textContent = "HP " + enemy.hpnow + "/" + enemy.hptotal;
	enemyhpbarfull.style.width = enemy.hpnow / enemy.hptotal * 100 + "%";
	setTimeout(enemymove, 2000);
}

function emberenemy() {
	hero.hpnow = hero.hpnow - 10 + hero.defense - enemy.attack;
	if (hero.type == ("bug" || "steel" || "grass" || "ice")) {
		hero.hpnow = hero.hpnow - 3;
		opt1.textContent = "It's super effective!";
	}
	if (hero.type == ("rock" || "fire" || "water" || "dragon")) {
		hero.hpnow = hero.hpnow -3;
		opt1.textContent = "It's not very effective.";
	}
	burnenemy();
	herohp.textContent = "HP " + hero.hpnow + "/" + hero.hptotal;
	herohpbarfull.style.width = hero.hpnow / hero.hptotal * 100 + "%";
	setTimeout(options, 2000);
}

function potioneffect() {
	opt0.textContent = "You used a potion!";
	hero.hpnow = hero.hpnow + 20;
	if (hero.hpnow > hero.hptotal) {
		opt1.textContent = hero.name + " recovered " + (hero.hptotal - hero.hpnow + 20) + "HP!";
		hero.hpnow = hero.hptotal;
		herohp.textContent = "HP " + hero.hpnow + "/" + hero.hptotal;
		herohpbarfull.style.width = hero.hpnow / hero.hptotal * 100 + "%";
	}
	else if (hero.hpnow <= hero.hptotal) {
		herohp.textContent = "HP " + hero.hpnow + "/" + hero.hptotal;
		herohpbarfull.style.width = hero.hpnow / hero.hptotal * 100 + "%";
		opt1.textContent = hero.name + " recovered 20HP!";
	}
	opt2.textContent = "";
	opt3.textContent = "";
	clearactions();
	setTimeout(enemymove, 2000);
}

function antidoteeffect() {
	opt0.textContent = "You used an antidote!"
	if (hero.status == "poisoned"){
		hero.status = "";
		opt1.textContent = hero.name + " is no longer poisoned!";
	}
	else {
		opt1.textContent = "It had no effect!";
	}
	opt2.textContent = "";
	opt3.textContent = "";
	clearactions();
	setTimeout(enemymove, 2000);
}

var Pikachu = {name: "Pikachu", type: "electric", status: "", lvl: 10, hpnow: 60, hptotal: 60, defense: 3, attack: 2, sound: pikachusound, frontimg: "pokemon1/assets/images/pikachufront.png", backimg: "pokemon1/assets/images/pikachuback.png", moves: [{name: "Tackle", effecthero: function() {tacklehero()}, effectenemy: function() {tackleenemy()}}, {name: "Tail Whip", effecthero: function() {tailwhiphero()}, effectenemy: function() {tailwhipenemy()}}, {name: "Electric Shock", effecthero: function() {electricshockhero()}, effectenemy: function() {electricshockenemy()}}, ""]}

var Mew = {name: "Mew", type: "psychic", status: "", lvl: 15, hpnow: 75, hptotal: 75, defense: 3, attack: 2, sound: mewsound, frontimg: "pokemon1/assets/images/mewfront.png", backimg: "pokemon1/assets/images/mewback.png", moves: [{name: "Tackle", effecthero: function() {tacklehero()}, effectenemy: function() {tackleenemy()}}, {name: "Tail Whip", effecthero: function() {tailwhiphero()}, effectenemy: function() {tailwhipenemy()}}, {name: "Psychic", effecthero: function() {psychichero()}, effectenemy: function() {psychicenemy()}}, {name: "Hypnosis", effecthero: function() {hypnosishero()}, effectenemy: function() {hypnosisenemy()}}]}

var Bulbasaur = {name: "Bulbasaur", type: "grass", status: "", lvl: 13, hpnow: 80, hptotal: 80, defense: 4, attack: 2, sound: bulbasaursound, frontimg: "pokemon1/assets/images/bulbasaurfront.png", backimg: "pokemon1/assets/images/bulbasaurback.png", moves: [{name: "Tackle", effecthero: function() {tacklehero()}, effectenemy: function() {tackleenemy()}}, {name: "Tail Whip", effecthero: function() {tailwhiphero()}, effectenemy: function() {tailwhipenemy()}}, {name: "Vine Whip", effecthero: function() {vinewhiphero()}, effectenemy: function() {vinewhipenemy()}}, ""]}

var Growlithe = {name: "Growlithe", type: "fire", status: "", lvl: 17, hpnow: 90, hptotal: 90, defense: 3, attack: 3, sound: growlithesound, frontimg: "pokemon1/assets/images/growlithefront.png", backimg: "pokemon1/assets/images/growlitheback.png", moves: [{name: "Tackle", effecthero: function() {tacklehero()}, effectenemy: function() {tackleenemy()}}, {name: "Tail Whip", effecthero: function() {tailwhiphero()}, effectenemy: function() {tailwhipenemy()}}, {name: "Ember", effecthero: function() {emberhero()}, effectenemy: function() {emberenemy()}}, ""]}

var potion = {name: "Potion", effect: function() {potioneffect()}};

var antidote = {name: "Antidote", effect: function() {antidoteeffect()}};

var items = [{item: potion, num: 2}, {item: antidote, num: 1}];

if (hero == "Pikachu") {
	hero = Pikachu;
	if (enemy == "Mew") {
		enemy = Mew;
	}
	else if (enemy == "Growlithe") {
		enemy = Growlithe;
	}
	else {
		enemy = Bulbasaur;
	}
}

if (hero == "Mew") {
	hero = Mew;
	if (enemy == "Pikachu") {
		enemy = Pikachu;
	}
	else if (enemy == "Growlithe") {
		enemy = Growlithe;
	}
	else {
		enemy = Bulbasaur;
	}
}

if (hero == "Bulbasaur") {
	hero = Bulbasaur;
	if (enemy == "Pikachu") {
		enemy = Pikachu;
	}
	else if (enemy == "Growlithe") {
		enemy = Growlithe;
	}
	else {
		enemy = Mew;
	}
}

if (hero == "Growlithe") {
	hero = Growlithe;
	if (enemy == "Pikachu") {
		enemy = Pikachu;
	}
	else if (enemy == "Bulbasaur") {
		enemy = Bulbasaur;
	}
	else {
		enemy = Mew;
	}
}

function randomizer() {
	random = Math.floor(Math.random() * 4);
	if (enemy.moves[random] == "") {
		randomizer();
	}
}

function lose() {
	opt0.textContent = "YOU LOSE!";
	opt1.textContent = "";
	opt2.textContent = "";
	opt3.textContent = "";
	music.pause();
	opt0.onclick = function() {
	}
	opt1.onclick = function() {
	}		
	opt2.onclick = function() {
	}		
	opt3.onclick = function() {
	}
}

function enemymove() {
	if (enemy.hpnow <= 0) {
		opt0.textContent = "YOU WIN!";
		opt1.textContent = "";
		opt2.textContent = "";
		opt3.textContent = "";
		win.play();
		music.pause();
	}
	else if (enemy.status == "paralyzed") {
		random = Math.random();
		if (random < .35) {
			opt0.textContent = enemy.name + " is no longer";
			opt1.textContent = "paralyzed!";
			opt2.textContent = "";
			opt3.textContent = "";
			enemy.status = "";
			enemystatus.textContent = "";
			setTimeout(enemymove, 2000);
		}
		else {
			opt0.textContent = enemy.name + " is paralyzed";
			opt1.textContent = "and can't move!";
			opt2.textContent = "";
			opt3.textContent = "";
			setTimeout(options, 2000);
		}
	}
	else if (enemy.status == "poisoned") {
			opt0.textContent = enemy.name + " is poisoned";
			opt1.textContent = "and took damage!";
			opt2.textContent = "";
			opt3.textContent = "";
			enemy.hpnow = enemy.hpnow - 2;
			enemyhp.textContent = "HP " + enemy.hpnow + "/" + enemy.hptotal;
			enemyhpbarfull.style.width = enemy.hpnow / enemy.hptotal * 100 + "%";
			placeholder = function () {
				randomizer();
				opt0.textContent = enemy.name + " used " + enemy.moves[random].name + "!";
				opt1.textContent = "";
				opt2.textContent = "";
				opt3.textContent = "";
				enemy.moves[random].effect();
				if (hero.hpnow < 0) {
					hero.hpnow = 0;
					herohp.textContent = "HP " + hero.hpnow + "/" + hero.hptotal;
					herohpbarfull.style.width = hero.hpnow / hero.hptotal * 100 + "%";
				}
				if (hero.hpnow == 0) {
					setTimeout(lose, 2000);
				}
			}
			setTimeout (placeholder, 2000);	
	}
	else if (enemy.status == "sleeping") {
		random = Math.random();
		if (random < .35) {
			opt0.textContent = enemy.name + " is no longer";
			opt1.textContent = "asleep!";
			opt2.textContent = "";
			opt3.textContent = "";
			enemy.status = "";
			enemystatus.textContent = "";
			setTimeout(enemymove, 2000);
		}
		else {
			opt0.textContent = enemy.name + " is asleep!";
			opt1.textContent = "";
			opt2.textContent = "";
			opt3.textContent = "";
			setTimeout(options, 2000);
		}
	}
	else if (enemy.status == "burned") {
			opt0.textContent = enemy.name + " is burned";
			opt1.textContent = "and took damage!";
			opt2.textContent = "";
			opt3.textContent = "";
			enemy.hpnow = enemy.hpnow - 2;
			enemyhp.textContent = "HP " + enemy.hpnow + "/" + enemy.hptotal;
			enemyhpbarfull.style.width = enemy.hpnow / enemy.hptotal * 100 + "%";
			placeholder = function () {
				randomizer();
				opt0.textContent = enemy.name + " used " + enemy.moves[random].name + "!";
				opt1.textContent = "";
				opt2.textContent = "";
				opt3.textContent = "";
				enemy.moves[random].effectenemy();
				if (hero.hpnow < 0) {
					hero.hpnow = 0;
					herohp.textContent = "HP " + hero.hpnow + "/" + hero.hptotal;
					herohpbarfull.style.width = hero.hpnow / hero.hptotal * 100 + "%";
				}
				if (hero.hpnow == 0) {
					setTimeout(lose, 2000);
				}
			}
			setTimeout (placeholder, 2000);
	}
	else if (enemy.status == "frozen") {
		random = Math.random();
		if (random < .20) {
			opt0.textContent = enemy.name + " is no longer";
			opt1.textContent = "frozen!";
			opt2.textContent = "";
			opt3.textContent = "";
			enemy.status = "";
			enemystatus.textContent = "";
			setTimeout(enemymove, 2000);
		}
		else {
			opt0.textContent = enemy.name + " is frozen";
			opt1.textContent = "and can't move!";
			opt2.textContent = "";
			opt3.textContent = "";
			setTimeout(options, 2000);
		}
	}
	else {
		randomizer();
		enemy.sound.play();
		opt0.textContent = enemy.name + " used " + enemy.moves[random].name + "!";
		opt1.textContent = "";
		opt2.textContent = "";
		opt3.textContent = "";
		enemy.moves[random].effectenemy();
		if (hero.hpnow < 0) {
			hero.hpnow = 0;
			herohp.textContent = "HP " + hero.hpnow + "/" + hero.hptotal;
			herohpbarfull.style.width = hero.hpnow / hero.hptotal * 100 + "%";
		}
		if (hero.hpnow == 0) {
			setTimeout(lose, 2000);
		}
	}
}

function domove(x) {
	clearactions();
	if (hero.status == "paralyzed") {
		random = Math.random();
		if (random < .35) {
			opt0.textContent = hero.name + " is no longer";
			opt1.textContent = "paralyzed!";
			opt2.textContent = "";
			opt3.textContent = "";
			hero.status = "";
			herostatus.textContent = "";
			setTimeout("domove("+x+")", 2000);
		}
		else {
			opt0.textContent = hero.name + " is paralyzed";
			opt1.textContent = "and can't move!";
			opt2.textContent = "";
			opt3.textContent = "";
			setTimeout(enemymove, 2000);
		}
	}
	else if (hero.status == "poisoned") {
			opt0.textContent = hero.name + " is poisoned";
			opt1.textContent = "and took damage!";
			opt2.textContent = "";
			opt3.textContent = "";
			hero.hpnow = hero.hpnow - 2;
			herohp.textContent = "HP " + hero.hpnow + "/" + hero.hptotal;
			herohpbarfull.style.width = hero.hpnow / hero.hptotal * 100 + "%";
			placeholder = function () {
				fight.play();
				opt0.textContent = hero.name + " used " + hero.moves[x].name + "!";
				opt1.textContent = "";
				opt2.textContent = "";
				opt3.textContent = "";
				hero.moves[x].effecthero();
				if (enemy.hpnow < 0) {
					enemy.hpnow = 0;
					enemyhp.textContent = "HP " + enemy.hpnow + "/" + enemy.hptotal;
					enemyhpbarfull.style.width = enemy.hpnow / enemy.hptotal * 100 + "%";
				}
				setTimeout (enemymove, 2000);
			}
			setTimeout (placeholder, 2000);	
	}
	else if (hero.status == "sleeping") {
		random = Math.random();
		if (random < .35) {
			opt0.textContent = hero.name + " is no longer";
			opt1.textContent = "asleep!";
			opt2.textContent = "";
			opt3.textContent = "";
			hero.status = "";
			herostatus.textContent = "";
			setTimeout("domove("+x+")", 2000);
		}
		else {
			opt0.textContent = hero.name + " is asleep!";
			opt1.textContent = "";
			opt2.textContent = "";
			opt3.textContent = "";
			setTimeout(enemymove, 2000);
		}
	}
	else if (hero.status =="burned") {
			opt0.textContent = hero.name + " is burned";
			opt1.textContent = "and took damage!";
			opt2.textContent = "";
			opt3.textContent = "";
			hero.hpnow = hero.hpnow - 2;
			herohp.textContent = "HP " + hero.hpnow + "/" + hero.hptotal;
			herohpbarfull.style.width = hero.hpnow / hero.hptotal * 100 + "%";
			placeholder = function () {
				fight.play();
				opt0.textContent = hero.name + " used " + hero.moves[x].name + "!";
				opt1.textContent = "";
				opt2.textContent = "";
				opt3.textContent = "";
				hero.moves[x].effecthero();
				if (enemy.hpnow < 0) {
					enemy.hpnow = 0;
					enemyhp.textContent = "HP " + enemy.hpnow + "/" + enemy.hptotal;
					enemyhpbarfull.style.width = enemy.hpnow / enemy.hptotal * 100 + "%";
				}
				setTimeout (enemymove, 2000);
			}
			setTimeout (placeholder, 2000);
	}
	else if (hero.status == "frozen") {
		random = Math.random();
		if (random < .20) {
			opt0.textContent = hero.name + " is no longer";
			opt1.textContent = "frozen!";
			opt2.textContent = "";
			opt3.textContent = "";
			hero.status = "";
			herostatus.textContent = "";
			setTimeout("domove("+x+")", 2000);
		}
		else {
			opt0.textContent = hero.name + " is frozen";
			opt1.textContent = "and can't move!";
			opt2.textContent = "";
			opt3.textContent = "";
			setTimeout(enemymove, 2000);
		}
	}
	else {
		hero.sound.play();
		opt0.textContent = hero.name + " used " + hero.moves[x].name + "!";
		opt1.textContent = "";
		opt2.textContent = "";
		opt3.textContent = "";
		hero.moves[x].effecthero();
		if (enemy.hpnow < 0) {
			enemy.hpnow = 0;
			enemyhp.textContent = "HP " + enemy.hpnow + "/" + enemy.hptotal;
			enemyhpbarfull.style.width = enemy.hpnow / enemy.hptotal * 100 + "%";
		}
	}
}

enemyname.textContent = enemy.name;
enemylvl.textContent = "Level: " + enemy.lvl;
enemyhp.textContent = "HP " + enemy.hpnow + "/" + enemy.hptotal;
enemyimg.src = enemy.frontimg;
enemyhpbarfull.style.width = enemy.hpnow / enemy.hptotal * 100 + "%";

heroname.textContent = hero.name;
herolvl.textContent = "Level: " + hero.lvl;
herohp.textContent = "HP " + hero.hpnow + "/" + hero.hptotal;
heroimg.src = hero.backimg;
herohpbarfull.style.width = hero.hpnow / hero.hptotal * 100 + "%";

var options = function() {
	opt0.textContent = "FIGHT";
	opt1.textContent = "ITEMS";
	opt2.textContent = "QUIT";
	opt0.onclick = function() {
		opt0.textContent = hero.moves[0].name;
		opt0.onclick = function() {
			domove(0);
		}	
		if (hero.moves[1] !== "") {
			opt1.textContent = hero.moves[1].name;
			opt1.onclick = function () {
				domove(1);
			}
		}
		else {
			opt1.textContent = "";
		}
		if (hero.moves[2] !== "") {
			opt2.textContent = hero.moves[2].name;
			opt2.onclick = function () {
				domove(2);
			}
		}
		else {
			opt2.textContent = "";
		}
		if (hero.moves[3] !== "") {
			opt3.textContent = hero.moves[3].name;
			opt3.onclick = function () {
				domove(3);
			}
		}
		else {
			opt3.textContent = "";
		}
	}
	opt1.onclick = function() {
		opt0.textContent = items[0].item.name + " " + items[0].num;
		if (items[0].num > 0) {
			opt0.onclick = function() {
				items[0].num--;
				items[0].item.effect();
			}
		}
		opt1.textContent = items[1].item.name + " " + items[1].num;
		if (items[0].num > 0) {
			opt1.onclick = function() {
				items[1].num--;
				items[1].item.effect();
			}
		}
		opt2.textContent = "";
		opt3.textContent = "";
	}		
	opt2.onclick = function() {
	}		
	opt3.onclick = function() {
	}
}

options();
}