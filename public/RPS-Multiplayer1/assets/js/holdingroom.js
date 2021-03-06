//initializes Firebase
$(document).ready(function() {

var config = {
    apiKey: "AIzaSyBl08B4TCLkqZuE_tzpEs-qjs7Vn69U6-k",
    authDomain: "rpsgame-5f63e.firebaseapp.com",
    databaseURL: "https://rpsgame-5f63e.firebaseio.com",
    storageBucket: "rpsgame-5f63e.appspot.com",
    messagingSenderId: "603451137166"
};

firebase.initializeApp(config);

var database = firebase.database();

//when window closes, everything resets
window.onunload = function() {
	event.preventDefault();
	database.ref().on("value", function(snapshot) {
		if (snapshot.val().playerInfo.numPlayers !== "2") {
			database.ref("playerInfo").set({
				name1: "nobody",
				name2: "nobody",
				score1: 0,
				score2: 0,
				numPlayers: "0"
			});
		}
	});
}

//when there are two players registered in Firebase, game.html opens
database.ref().on("value", function(snapshot) {
	if (snapshot.val().playerInfo.numPlayers == "2") {
		location.replace("/game");
	}
});
});