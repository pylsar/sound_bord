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
    
    soundDiv.classList.add('sound__item');
    soundTitle.classList.add('sound__title');

    soundTitle.textContent = sound.title;
    soundDiv.appendChild(soundTitle);

    const playBtn = document.createElement("button");
    playBtn.textContent = "play";
    playBtn.classList.add('sound__btn')
    soundDiv.appendChild(playBtn);

    const player = document.createElement("audio");
    player.setAttribute("src", `./assets/${sound.src}`);
    soundDiv.appendChild(player);

    playBtn.addEventListener("click", () => {
      if(player.currentTime <= player.duration){
        player.currentTime = 0;
      }
      player.play();
    });

    soundsElement.appendChild(soundDiv);
  });
}
