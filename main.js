import './style.css'


const soundsElement = document.querySelector(".sounds");

(async () => {
  const sounds = await getSounds();
  addSounds(sounds);
})();

async function getSounds() {
  const response = await fetch("./sounds.json");
  const json = await response.json();
  // console.log(json);
  return json;
}

function addSounds(sounds) {
  sounds.forEach((sound) => {
    const soundDiv = document.createElement("div");
    const soundTitle = document.createElement("h2");
    soundTitle.textContent = sound.title;
    soundDiv.appendChild(soundTitle);

    const playBtn = document.createElement("button");
    playBtn.textContent = "play";
    soundDiv.appendChild(playBtn);

    const player = document.createElement("audio");
    player.setAttribute("src", `assets/${sound.src}`);
    soundDiv.appendChild(player);

    playBtn.addEventListener("click", () => {
      player.play();
    });

    soundsElement.appendChild(soundDiv);
  });
}
