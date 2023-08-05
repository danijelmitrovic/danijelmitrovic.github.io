document.getElementById("ja").addEventListener("click", function(event) {
	zatvoriKonzolu();
	event.stopPropagation();
});

document.getElementById("kontakt").addEventListener("click", function(event) {
	zatvoriKonzolu();
	event.stopPropagation();
});

document.getElementById("dugmeKonzole").addEventListener("click", function(event) {
	otvoriKonzolu();
	event.stopPropagation();
});

const konzola = document.getElementById("konzola");

const otvoriKonzolu = function() {
	konzola.classList.remove("console-toInvisibility");
	konzola.classList.remove("console-invisible");
	konzola.classList.add("console-toVisibility");
	konzola.classList.add("console-visible");
}

const zatvoriKonzolu = function() {
	konzola.classList.remove("console-toVisibility");
	konzola.classList.remove("console-visible");
	konzola.classList.add("console-toInvisibility");
	konzola.classList.add("console-invisible");
}
