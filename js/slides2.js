document.write("<div class='w3-content w3-display-container'>");
for(var i = 1; i < 4; ++i)
    document.write("<img class='mySlides' src='images/photos2017/0" + i + ".jpg' style='width:100%; height:445px'>")
document.write("</div>")

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {
		slideIndex = 1;
	} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}
