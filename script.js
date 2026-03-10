function Randint(l, r) {
    return Math.floor(Math.random() * (r - l + 1) + l);
}

function Randfloat(l, r) {
    return Randint(l, r - 1) + Math.random();
}

const body = document.body;
const heart = document.createElement("i");
heart.className = "fa-solid fa-heart";
const colors = ["#e0425f", "#ff8ca1", "#ff4d6d", "#8e0b23", "#a61832"];

for (let i = 0; i <= 50; i++) {
    let cloneHeart = heart.cloneNode();
    const duration = Randfloat(5, 10);
    const delay = Randfloat(1, 10);
    let color = colors[Randint(0, colors.length - 1)];
    cloneHeart.style.color = color;
    cloneHeart.style.filter = `drop-shadow(0 0 2px ${color})`;
    cloneHeart.style.left = Randfloat(0, window.innerWidth) + "px";
    cloneHeart.style.top = Randfloat(0, window.innerHeight) + "px";
    cloneHeart.style.scale = Randfloat(5, 10);
    cloneHeart.style.animation = `fadeIn ${duration}s ${delay}s`;

    cloneHeart.addEventListener("animationend", () => {
        cloneHeart.style.animation = "none";
        color = colors[Randint(0, colors.length - 1)];
        cloneHeart.style.color = color;
        cloneHeart.style.filter = `drop-shadow(0 0 2px ${color})`;
        cloneHeart.style.left = Randfloat(0, window.innerWidth) + "px";
        cloneHeart.style.top = Randfloat(0, window.innerHeight) + "px";
        cloneHeart.style.scale = Randfloat(5, 10);
        setTimeout(() => {
            cloneHeart.style.animation = `fadeIn ${duration}s ${delay}s`;
        }, 1000);
    });
    body.appendChild(cloneHeart);
}

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
