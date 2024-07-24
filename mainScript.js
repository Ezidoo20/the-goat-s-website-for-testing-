const homeButton = document.getElementById("homeButton");
const contactButton = document.getElementById("contactButton");
const aboutButton = document.getElementById("aboutButton");
const galleryButton = document.getElementById("galleryButton");

const topBarButton = document.getElementById("topBarButton");

var galleryButtonPressed = false;
var aboutButtonPressed = false;
var homeButtonPressed = false;
var contactButtonPressed = false;


galleryButton.addEventListener("mouseover", function(event){
	galleryButtonPressed = true;
});
galleryButton.addEventListener("mouseleave", function(event){
	galleryButtonPressed = false;
});

homeButton.addEventListener("mouseover", function(event){
	homeButtonPressed = true;
});
homeButton.addEventListener("mouseleave", function(event){
	homeButtonPressed = false;
});
contactButton.addEventListener("mouseover", function(event){
	contactButtonPressed = true;
});
contactButton.addEventListener("mouseleave", function(event){
	contactButtonPressed = false;
});

aboutButton.addEventListener("mouseover", function(event){
	aboutButtonPressed = true;
});
aboutButton.addEventListener("mouseleave", function(event){
	aboutButtonPressed = false;
});


(function frame(){
	if (galleryButtonPressed){
		galleryButton.style.background = "#d08080";
	}
	else {
		galleryButton.style.background = "#702020";
	}
	if (homeButtonPressed){
		homeButton.style.background = "#d08080";
	}
	else {
		homeButton.style.background = "#702020";
	}
	if (contactButtonPressed){
		contactButton.style.background = "#d08080";
	}
	else {
		contactButton.style.background = "#702020";
	}
	if (aboutButtonPressed){
		aboutButton.style.background = "#d08080";
	}
	else {
		aboutButton.style.background = "#702020";
	}
	
	requestAnimationFrame(frame);
})()