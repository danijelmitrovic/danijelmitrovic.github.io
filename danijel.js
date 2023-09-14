/*
 * JS fajl za https://Danijel.net
 * verzija: 1.2
 * autor: Danijel Mitrovic
 */

const podloga = document.getElementById("podloga");
const konzola = document.getElementById("konzola");
const ja = document.getElementById("ja");
const kontakt = document.getElementById("kontakt");
const dugmeKonzole = document.getElementById("dugme-konzole");
const pomoc = document.getElementById("pomoc");
const pomocTekst = document.getElementById("pomoc-tekst");

podloga.addEventListener("click", function(event) {
	ukloniPodlogu();
	zatvoriKonzolu();
	event.stopPropagation();
});

// ja.addEventListener("click", function(event) {
// 	zatvoriKonzolu();
// 	event.stopPropagation();
// });

// kontakt.addEventListener("click", function(event) {
// 	zatvoriKonzolu();
// 	event.stopPropagation();
// });

dugmeKonzole.addEventListener("click", function(event) {
	prikaziPodlogu();
	otvoriKonzolu();
	ugasiPomoc();
	event.stopPropagation();
});

const otvoriKonzolu = function() {
	konzola.classList.add("konzola-vidljiva");
}

const zatvoriKonzolu = function() {
	konzola.classList.remove("konzola-vidljiva");
}

const prikaziPodlogu = function() {
	podloga.classList.add("podloga-vidljiva");
}

const ukloniPodlogu = function() {
	podloga.classList.remove("podloga-vidljiva");
}

const ugasiPomoc = function() {
	if (!pomoc.classList.contains("pomoc-ugasena") && !pomocTekst.classList.contains("pomoc-ugasena")) {
		pomoc.classList.add("pomoc-ugasena");
		pomocTekst.classList.add("pomoc-ugasena");
	}
}
