const envelope = document.querySelector(".envelope");

envelope.addEventListener("click", () => {
    if (envelope.classList.contains("envelope-open")) {
        envelope.classList.remove("envelope-open");
        envelope.classList.add("envelope-close");
    } else {
        envelope.classList.remove("envelope-close");
        envelope.classList.add("envelope-open");
    }
});
