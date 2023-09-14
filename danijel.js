/*
 * JS fajl za https://Danijel.net
 * verzija: 1.2
 * autor: Danijel Mitrovic
 */

const konzola = document.getElementById("konzola");
const ja = document.getElementById("ja");
const kontakt = document.getElementById("kontakt");
const dugmeKonzole = document.getElementById("dugme-konzole");
const pomoc = document.getElementById("pomoc");
const pomocTekst = document.getElementById("pomoc-tekst");

ja.addEventListener("click", function(event) {
	toggleKonzolu();
	event.stopPropagation();
});

kontakt.addEventListener("click", function(event) {
	toggleKonzolu();
	event.stopPropagation();
});

dugmeKonzole.addEventListener("click", function(event) {
	toggleKonzolu();
	ugasiPomoc();
	event.stopPropagation();
});

const toggleKonzolu = function() {
	konzola.classList.toggle("konzola-vidljiva");
}

const ugasiPomoc = function() {
	if (!pomoc.classList.contains("pomoc-ugasena") && !pomocTekst.classList.contains("pomoc-ugasena")) {
		pomoc.classList.add("pomoc-ugasena");
		pomocTekst.classList.add("pomoc-ugasena");
	}
}
