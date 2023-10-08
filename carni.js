// JavaScript for adding a hover effect to animal cards
document.addEventListener("DOMContentLoaded", function () {
    const animalCards = document.querySelectorAll(".animal-card");

    // Add a mouseover event listener to each animal card
    animalCards.forEach((card) => {
        card.addEventListener("mouseover", function () {
            this.style.borderColor = "#FFA500"; // Change border color on hover
            this.style.transform = "scale(1.1)"; // Scale up the card on hover
        });

        card.addEventListener("mouseout", function () {
            this.style.borderColor = "#003366"; // Restore border color on mouseout
            this.style.transform = "scale(1)"; // Restore the original scale on mouseout
        });
    });
});
