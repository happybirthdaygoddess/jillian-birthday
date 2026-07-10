// Letter
const letter = document.getElementById("letter");

document.getElementById("openLetter").onclick = function () {
    letter.style.display = "block";
};

document.getElementById("closeLetter").onclick = function () {
    letter.style.display = "none";
};

// Music
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

// Start music after the first click anywhere on the page
document.addEventListener(
    "click",
    () => {
        if (!playing) {
            music.play().then(() => {
                playing = true;
                musicBtn.textContent = "🔇 Pause Music";
            }).catch(err => {
                console.log("Music couldn't start:", err);
            });
        }
    },
    { once: true }
);

// Toggle music button
musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();
        musicBtn.textContent = "🔇 Pause Music";

    } else {

        music.pause();
        musicBtn.textContent = "🔊 Play Music";

    }

});
