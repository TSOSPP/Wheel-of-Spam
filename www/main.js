var names = ["Haley", "Josh", "Tebo", "Razzle", "Liz", "Cynonorph", "Jacob", "Our entire bus"];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function random() {
		for (var i = Math.floor((Math.random() * 20) + 1); i >= 0; i--) {
			document.getElementById("text").innerHTML = names[Math.floor(Math.random() * (names.length))];
			await sleep(62.5);
		}
}

window.onload = function() {
	document.getElementById("button").onclick = function(evt) {
		random();
	}
}