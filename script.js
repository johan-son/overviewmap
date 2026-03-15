//let numButtonClicks = 0;
//function buttonClicked() {
//    numButtonClicks = numButtonClicks + 1;
//    document.getElementById("mainDiv").textContent =
//        "Button Clicked times: " + numButtonClicks;
//}

  function myFunction() {
  var x = document.getElementById("toggleable");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
  


}
