/*
 * JS fajl za http://Danijel.net
 * verzija: 1.1
 * autor: Danijel Mitrovic
 */

const konzola = document.getElementById("konzola");
const ja = document.getElementById("ja");
const kontakt = document.getElementById("kontakt");
const dugmeKonzole = document.getElementById("dugmeKonzole");

ja.addEventListener("click", function(event) {
	zatvoriKonzolu();
	event.stopPropagation();
});

kontakt.addEventListener("click", function(event) {
	zatvoriKonzolu();
	event.stopPropagation();
});

dugmeKonzole.addEventListener("click", function(event) {
	otvoriKonzolu();
	event.stopPropagation();
});

const otvoriKonzolu = function() {
	if (konzola.classList.contains("konzola-nevidljiva")) {
		konzola.classList.remove("konzola-kaNevidljivosti");
		konzola.classList.remove("konzola-nevidljiva");
		konzola.classList.add("konzola-kaVidljivosti");
		konzola.classList.add("konzola-vidljiva");
	}
}

const zatvoriKonzolu = function() {
	if (konzola.classList.contains("konzola-vidljiva")) {
		konzola.classList.remove("konzola-kaVidljivosti");
		konzola.classList.remove("konzola-vidljiva");
		konzola.classList.add("konzola-kaNevidljivosti");
		konzola.classList.add("konzola-nevidljiva");
	}
}
