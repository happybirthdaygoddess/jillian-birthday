// ===============================
// Birthday Letter
// ===============================

const letter = document.getElementById("letter");
const openLetter = document.getElementById("openLetter");
const closeLetter = document.getElementById("closeLetter");

openLetter.addEventListener("click", () => {
    letter.style.display = "block";
});

closeLetter.addEventListener("click", () => {
    letter.style.display = "none";
});

// ===============================
// Background Music
// ===============================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

// Final background volume (15%)
const TARGET_VOLUME = 0.15;

music.volume = 0;

let playing = false;
let fading = false;

// Smooth fade-in
function fadeInMusic() {

    if (playing || fading) return;

    fading = true;

    music.volume = 0;

    music.play().then(() => {

        const fade = setInterval(() => {

            if (music.volume < TARGET_VOLUME) {

                music.volume = Math.min(
                    music.volume + 0.01,
                    TARGET_VOLUME
                );

            } else {

                clearInterval(fade);

                fading = false;

                playing = true;

                musicBtn.textContent = "🔇 Pause Music";

            }

        }, 120);

    }).catch(err => {

        console.log(err);

        fading = false;

    });

}

// Music button
musicBtn.addEventListener("click", () => {

    if (!playing) {

        fadeInMusic();

    } else {

        music.pause();

        playing = false;

        musicBtn.textContent = "🔊 Play Music";

    }

});

// If the music ends (only if loop is removed)
music.addEventListener("ended", () => {

    playing = false;

    musicBtn.textContent = "🔊 Play Music";

});