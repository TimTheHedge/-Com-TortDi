const carusel_1 = document.querySelector(".carusel-1");
const carusel_2 = document.querySelector(".carusel-2");
const carusel_3 = document.querySelector(".carusel-3");

const caruselArr = [carusel_1, carusel_2, carusel_3];

let i = 0;

function executeEveryFiveSeconds() {
	setInterval(function() {
		if (i <= 2) {
			console.log(i);
			caruselArr[i].style.display = "none";
			if (i == 2) {
				i = -1;
			}
			caruselArr[i+1].style.display = "flex";
			i++;
		}

		console.log("Executing");
	}, 10000);
}

executeEveryFiveSeconds();
