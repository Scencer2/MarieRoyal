const gallery = document.getElementById('gallery');

// Create list of filenames
const imageList = [];
for (let i = 1; i <= 92; i++) {
  const filename = i < 10 ? `gma0${i}.jpg` : `gma${i}.jpg`;
  imageList.push(filename);
}

// shuffle the images
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

// lightbox open
gallery.addEventListener("click", (e) => {
  if (e.target.classList.contains("gallery-image")) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = e.target.src;
    lightbox.classList.remove("hidden");
  }
});

// lightbox close
document.getElementById("lightbox").addEventListener("click", () => {
  document.getElementById("lightbox").classList.add("hidden");
});

// Audio button
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
