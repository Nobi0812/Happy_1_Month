// ==========================================
// FLOATING HEARTS
// ==========================================

const heartsContainer = document.getElementById("hearts");


// Create a heart
function createHeart() {

    if (!heartsContainer) {
        return;
    }


    const heart = document.createElement("span");

    heart.classList.add("heart");


    // Random heart symbol
    const heartSymbols = [
        "❤",
        "♡",
        "♥",
        "💕"
    ];

    heart.textContent =
        heartSymbols[
            Math.floor(
                Math.random() *
                heartSymbols.length
            )
        ];


    // Random horizontal position
    heart.style.left =
        Math.random() * 100 + "vw";


    // Random size
    const size =
        12 +
        Math.random() * 22;

    heart.style.fontSize =
        size + "px";


    // Random animation speed
    const speed =
        5 +
        Math.random() * 6;

    heart.style.animationDuration =
        speed + "s";


    // Random transparency
    heart.style.opacity =
        0.25 +
        Math.random() * 0.5;


    // Add the heart to the page
    heartsContainer.appendChild(
        heart
    );


    // Remove it after animation
    setTimeout(() => {

        heart.remove();

    }, (speed + 1) * 1000);
}


// Create hearts repeatedly
setInterval(
    createHeart,
    600
);


// Create some hearts immediately
for (
    let i = 0;
    i < 10;
    i++
) {

    setTimeout(
        createHeart,
        i * 200
    );
}
// ==========================================
// MEMORY VIDEO CAROUSEL
// ==========================================

const memoryCards = document.querySelectorAll(".memory-video");

let currentMemory = 0;

function moveMemoryCards() {

    const total = memoryCards.length;

    if (total === 0) {
        return;
    }

    memoryCards.forEach((card, index) => {

        let position =
            (index - currentMemory + total) % total;

        if (position === 0) {

            // CENTER
            card.style.transform =
                "translate3d(0, 0, 180px) rotateY(0deg) rotateZ(0deg) scale(1.08)";

            card.style.zIndex = "10";
            card.style.opacity = "1";
            card.style.filter = "brightness(1)";

        }

        else if (position === 1) {

            // RIGHT
            card.style.transform =
                "translate3d(300px, -20px, 0) rotateY(-18deg) rotateZ(5deg) scale(.9)";

            card.style.zIndex = "5";
            card.style.opacity = ".9";
            card.style.filter = "brightness(.75)";

        }

        else if (position === 2) {

            // BACK
            card.style.transform =
                "translate3d(0, 230px, -180px) rotateY(0deg) rotateZ(-3deg) scale(.78)";

            card.style.zIndex = "2";
            card.style.opacity = ".65";
            card.style.filter = "brightness(.5)";

        }

        else {

            // LEFT
            card.style.transform =
                "translate3d(-300px, -20px, 0) rotateY(18deg) rotateZ(-5deg) scale(.9)";

            card.style.zIndex = "5";
            card.style.opacity = ".9";
            card.style.filter = "brightness(.75)";
        }

    });
}


// Put the cards into their starting positions
moveMemoryCards();


// Move every 2 seconds
setInterval(() => {

    currentMemory++;

    if (currentMemory >= memoryCards.length) {
        currentMemory = 0;
    }

    moveMemoryCards();

}, 2000);

// ==========================================
// OUR STORY POPUP
// ==========================================

const storyMessages = {

    1: {
    title: "Where It All Began ❤️",
    message: "Hi Ali, alam ko masyado mabilis kung paano tayo nagkakilala. Unang pasok mo pa nga lang sa Discord, binalagbag mo na agad ako HAHAHA. That time, I found you interesting na. And sa pangalawang pasok mo naman sa DC, inaasar na nila tayo nun, and yes, aaminin ko na medyo nahuhook na ako sa'yo nun. Pero wala kasi akong lakas mag-first move kaya nun, and yung mga jokes na binibitawan nila is sinasabayan ko lang. Pero di ko naman akalain na kaya ko pala mag-first move sa'yo. Nasa isip ko pa nga nun, 'Baka wala naman akong chance sa kanya, bat magcha-chat pa ako?' Pero that one chat led to where we are now. Dahil sa'yo, bumalik ang saya ko, Ali, and I'm thankful for that. I love you always, my ASAWA KO / ALI KO. ❤️"
},

    2: {
    title: "Getting to Know Each Other 💕",
    message: "Um, dito hindi ko naman na masyado pahahabain. Pero sa lahat ng mga pinagdaanan mo, sa mga flaws mo, sa mga struggles mo, at sa marami pang bagay, tanggap ko lahat 'yan. Wala ako sa position na i-judge ka. Sabi ko sa sarili ko na ayoko nang mangyari ulit sa'yo yung mga bagay na nakasakit sa'yo. Yes, you are brave, pero hindi nila alam kung gaano ka ka-fragile. And I promise na hindi ako mawawala sa'yo. Alam mo naman 'yan eh. Kahit ilang beses ko pang ulitin sa'yo 'yan, hindi ako magsasawa. I promise to love you forever. Yes, hindi natin alam kung anong pwedeng mangyari in the future, pero ayoko nang kumilala ulit. Pagod na ako. I just want you, and I love you so much, My Ali. ❤️"
},

    3: {
    title: "The Moments We Shared 🌸",
    message: "Super happy ako kasi nakakasama kita, nakakapag-gala tayo, at nagagawa natin yung mga bagay na gusto nating gawin together. And thankful ako kasi binigyan ako ni Lord ng isang Ashley Mae Buentipo. More journeys to come and more adventures sana. Sana madala kita soon sa ibang bansa, sana makapag-travel tayo together. I love you so much, my Ali. ❤️"
},

    4: {
    title: "More Memories Ahead ✨",
    message: "This is just the beginning of our story, and I hope it lasts forever. Marami pa tayong gagawin na memories soon, and I can't wait to see them all. I love you, Ali. ❤️"
},

};


function openStory(number) {

    const popup = document.getElementById("storyPopup");

    const title =
        document.getElementById("storyPopupTitle");

    const message =
        document.getElementById("storyPopupMessage");


    title.textContent =
        storyMessages[number].title;

    message.textContent =
        storyMessages[number].message;


    popup.classList.add("show");
}


function closeStory() {

    const popup =
        document.getElementById("storyPopup");

    popup.classList.remove("show");
}

// ==========================================
// PAGE TRANSITION
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll(".nav-links a");

    links.forEach(link => {

        link.addEventListener("click", function (event) {

            const destination = this.getAttribute("href");

            // Ignore empty links
            if (!destination || destination === "#") {
                return;
            }

            event.preventDefault();

            // Add transition effect
            document.body.classList.add("page-leaving");

            // Open the selected page
            setTimeout(() => {
                window.location.href = destination;
            }, 500);

        });

    });

});

// ==========================================
// ENVELOPE OPENING
// ==========================================

function openEnvelope() {

    const envelope = document.getElementById("envelope");

    if (!envelope) {
        return;
    }

    envelope.classList.toggle("open");

}
// ==========================================
// LOVE ENVELOPE → LOVE WINDOW
// ==========================================

function openLoveMessage() {

    const envelope =
        document.getElementById("loveEnvelope");

    const hint =
        document.getElementById("envelopeHint");

    const loveWindow =
        document.getElementById("loveWindow");


    if (!envelope || !loveWindow) {
        return;
    }


    // Open envelope

    envelope.classList.add("open");

    hint.classList.add("hide");


    // Show LOVE window after envelope animation

    setTimeout(() => {

        loveWindow.classList.add("show");

    }, 650);

}
// ==========================================
// CLOSE LOVE MESSAGE
// ==========================================

function closeLoveMessage() {

    const envelope =
        document.getElementById("loveEnvelope");

    const hint =
        document.getElementById("envelopeHint");

    const loveWindow =
        document.getElementById("loveWindow");

    if (!envelope || !loveWindow) {
        return;
    }

    // Close the LOVE window

    loveWindow.classList.remove("show");

    // Bring the envelope back

    setTimeout(() => {

        envelope.classList.remove("open");

        hint.classList.remove("hide");

    }, 500);

}
// ==========================================
// FULL PHOTO VIEWER
// ==========================================

function openPhoto(src) {

    const viewer =
        document.getElementById("photoViewer");

    const photo =
        document.getElementById("fullPhoto");

    if (!viewer || !photo) {
        return;
    }

    photo.src = src;

    viewer.classList.add("show");
}


function closePhoto() {

    const viewer =
        document.getElementById("photoViewer");

    if (!viewer) {
        return;
    }

    viewer.classList.remove("show");

}