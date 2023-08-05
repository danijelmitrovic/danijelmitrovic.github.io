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
	konzola.classList.remove("konzola-kaNevidljivosti");
	konzola.classList.remove("konzola-nevidljiva");
	konzola.classList.add("konzola-kaVidljivosti");
	konzola.classList.add("konzola-vidljiva");
}

const zatvoriKonzolu = function() {
	konzola.classList.remove("konzola-kaVidljivosti");
	konzola.classList.remove("konzola-vidljiva");
	konzola.classList.add("konzola-kaNevidljivosti");
	konzola.classList.add("konzola-nevidljiva");
}
