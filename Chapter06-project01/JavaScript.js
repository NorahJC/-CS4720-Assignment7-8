var title = document.getElementsByClassName("required")[0];
var description = document.getElementsByClassName("required")[1];
var checkbox = document.getElementsByClassName("required")[2];

function load() {
    document.getElementById("mainForm").onsubmit = function (event) {

        if (title.value == "" || title.value == null) {
            event.preventDefault();            
            alert("You must fill in the title.");
			title.style.backgroundColor = "red";
        }
        if (description.value == "" || description.value == null) {
            event.preventDefault();
			alert("You must fill in the description.");
			description.style.backgroundColor = "red";
		}
		if (!(checkbox.check)) {	
			event.preventDefault();
            alert("You must accept the software license.");
			document.getElementById("cb").style.backgroundColor = "red";

		}
		
    }

    title.addEventListener("keydown", function () {
        title.style.backgroundColor = "white";
    });

    description.addEventListener("keydown", function () {
        description.style.backgroundColor = "white";
    });
	checkbox.addEventListener("click", function () {
		document.getElementById("cb").style.backgroundColor = "transparent";
    });
}

load();
