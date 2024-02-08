function yesFunc() {
	window.location.href = "./gallery.html";
}
let i = 0;
function noFunc() {
	// console.log("");
	if (i == 0) {
		document.getElementById("no").innerText = "Saram aari Hai Motii tja 🙄🙄 ";
		i = i + 1;
		document.getElementById("no").style.height = "100px";
		document.getElementById("no").style.width = "90px";
	} else if (i == 1) {
		document.getElementById("no").innerText = "Ab toh Yes krle 🙄🙄 ";
		i = i + 1;
		document.getElementById("no").style.height = "80px";
		document.getElementById("no").style.width = "80px";
	} else {
		document.getElementById("no").innerText = "No";
		i = 0;
		document.getElementById("no").style.height = "40px";
		document.getElementById("no").style.width = "60px";
	}
}
