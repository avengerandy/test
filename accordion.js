let accordion = {
    binding: function (element) {
        let cardBody = element.parentNode.nextElementSibling;
        if (cardBody.style.display === "none") {
            cardBody.style.display = "block";
            return;
        }
        cardBody.style.display = "none";
    }
}
