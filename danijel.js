/**
 * https://www.danijel.net
 * @version 1.3
 * @author Danijel Mitrovic <mitrovic(@)danijel.net>
 */

const podloga = document.getElementById("podloga");
const konzola = document.getElementById("konzola");
const dugmeKonzole = document.getElementById("dugme-konzole");
const pomoc = document.getElementById("pomoc");
const pomocTekst = document.getElementById("pomoc-tekst");

podloga.addEventListener("click", function(event) {
	ukloniPodlogu();
	zatvoriKonzolu();
	event.stopPropagation();
});

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
