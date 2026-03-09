function Randint(l, r) {
    return Math.floor(Math.random() * (r - l + 1) + l);
}

function Randfloat(l, r) {
    return Randint(l, r - 1) + Math.random();
}

const body = document.body;
const heart = document.createElement("i");
heart.className = "fa-solid fa-heart";
const color = ["#e0425f", "#ea4362", "#ff4d6d", "#8e0b23", "#a61832"];

for (let i = 0; i <= 40; i++) {
    let cloneHeart = heart.cloneNode();
    const timeDrop = Randfloat(5, 10);
    const scale = Randfloat(5, 10);
    cloneHeart.style.color = color[Randint(0, color.length - 1)];
    cloneHeart.style.left = Randint(0, window.innerWidth) + "px";
    cloneHeart.style.top = Randint(-window.innerHeight, 0) + "px";
    cloneHeart.style.scale = scale;
    cloneHeart.style.animation = `drop ${timeDrop}s infinite`;
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
