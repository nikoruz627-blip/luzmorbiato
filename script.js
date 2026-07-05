// ==============================
// PARTÍCULAS FLOTANTES
// ==============================

const particles = document.getElementById("particles");

for (let i = 0; i < 35; i++) {

    const particle = document.createElement("span");

    const size = Math.random() * 8 + 4;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particle.style.left = Math.random() * 100 + "%";

    particle.style.animationDuration =
        (Math.random() * 10 + 8) + "s";

    particle.style.animationDelay =
        (Math.random() * 8) + "s";

    particles.appendChild(particle);

}

// ==============================
// EFECTO SOBRE LA TARJETA
// ==============================

const card = document.querySelector(".card");

document.addEventListener("mousemove", (e) => {

    if (window.innerWidth < 768) return;

    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;

    card.style.transform =
        `rotateY(${-x}deg) rotateX(${y}deg)`;

});

document.addEventListener("mouseleave", () => {

    card.style.transform =
        "rotateY(0deg) rotateX(0deg)";

});

// ==============================
// BOTÓN VIP
// ==============================

const vip = document.querySelector(".vip");

setInterval(() => {

    vip.animate(

        [

            {
                transform: "scale(1)"
            },

            {
                transform: "scale(1.05)"
            },

            {
                transform: "scale(1)"
            }

        ],

        {

            duration: 900

        }

    );

}, 4000);

// ==============================
// APARICIÓN SUAVE
// ==============================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});
