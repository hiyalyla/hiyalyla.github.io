function myFunction() {
    var x = document.getElementById("myMenu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}



window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});