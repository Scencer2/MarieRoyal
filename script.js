const gallery = document.getElementById('gallery');

// Create list of filenames (gma01.jpg to gma82.jpg)
const imageList = [];
for (let i = 1; i <= 82; i++) {
  const filename = i < 10 ? `gma0${i}.jpg` : `gma${i}.jpg`;
  imageList.push(filename);
}

// Shuffle the array using Fisher-Yates (modern and reliable)
for (let i = imageList.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [imageList[i], imageList[j]] = [imageList[j], imageList[i]];
}

// Create and display each image
imageList.forEach(filename => {
  const img = document.createElement("img");
  img.src = `images/${filename}`;
  img.alt = `Grandma photo`;
  img.classList.add("gallery-image");
  gallery.appendChild(img);
});

// Handle lightbox open
gallery.addEventListener("click", (e) => {
  if (e.target.classList.contains("gallery-image")) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = e.target.src;
    lightbox.classList.remove("hidden");
  }
});

// Handle lightbox close
document.getElementById("lightbox").addEventListener("click", () => {
  document.getElementById("lightbox").classList.add("hidden");
});

// Audio button logic
const playButtons = document.querySelectorAll(".play-button");
let currentAudio = null;

playButtons.forEach(button => {
  button.addEventListener("click", () => {
    const audioSrc = button.getAttribute("data-audio");

    // Stop any current audio
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Create and play new audio
    currentAudio = new Audio(audioSrc);
    currentAudio.play();
  });
});



