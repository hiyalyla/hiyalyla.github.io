function myFunction(x) {
  x.classList.toggle("change");
} 





window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
    } 