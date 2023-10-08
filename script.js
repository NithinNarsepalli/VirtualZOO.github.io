// JavaScript for the hover effect
document.addEventListener("DOMContentLoaded", function() {
    const patternBoxes = document.querySelectorAll(".pattern-box");

    patternBoxes.forEach(box => {
        box.addEventListener("mouseover", function() {
            box.style.backgroundColor = "#333"; // Change to a darker color on hover
        });

        box.addEventListener("mouseout", function() {
            box.style.backgroundColor = ""; // Reset background color on mouseout
        });
    });
});
