const musicList = [
    {
        title: "Big Dawgs",
        artist: "Hanumankind x Kalmi",
        duration: "3:10",
        likes: 340,
        views: 12000,
        file: "mp3/Big Dawgs.mp3",
        cover: "img/Big Dawgs.jpg",
    },
    {
        title: "November Has Come",
        artist: "Gorilaaz ft. MF DOOM",
        duration: "2:45",
        likes: 8800,
        views: 3200000,
        file: "mp3/November Has Come.mp3",
        cover: "img/November Has Come.jpg",
    },
    {
        title: "Lonely Day",
        artist: "System of a Down",
        duration: "2:47",
        likes: 12000,
        views: 5000000,
        file: "mp3/Lonely Day.mp3",
        cover: "img/Lonely Day.jpg",
    },
    {
        title: "Scar Tissue",
        artist: "Red Hot Chili Peppers",
        duration: "3:35",
        likes: 25000,
        views: 1000000,
        file: "mp3/Scar Tissue.mp3",
        cover: "img/Scar Tissue.jpg",
    },
    {
        title: "Without Me",
        artist: "Eminem",
        duration: "4:50",
        likes: 30000,
        views: 10000000,
        file: "mp3/Without Me.mp3",
        cover: "img/Without Me.jpg",
    },
    {
        title: "Wonderwall - Remastered",
        artist: "Oasis",
        duration: "4:18",
        likes: 15000,
        views: 5000000,
        file: "mp3/Wonderwall - Remastered.mp3",
        cover: "img/Wonderwall - Remastered.jpg",
    },
    {
        title: "Dirty Harry",
        artist: "Gorillaz x Bootie Brown",
        duration: "3:50",
        likes: 7000,
        views: 2000000,
        file: "mp3/Dirty Harry.mp3",
        cover: "img/November Has Come.jpg",
    },
    {
        title: "The Less I Know The Better",
        artist: "Tame Impala",
        duration: "3:36",
        likes: 20000,
        views: 8000000,
        file: "mp3/The Less I Know The Better.mp3",
        cover: "img/The Less I Know The Better.jpg",
    },
    {
        title: "Take Me Out",
        artist: "Franz Ferdinand",
        duration: "3:57",
        likes: 18000,
        views: 6000000,
        file: "mp3/Take Me Out.mp3",
        cover: "img/Take Me Out.jpg",
    },
    {
        title: "Seven Nation Army",
        artist: "The White Stripes",
        duration: "3:52",
        likes: 25000,
        views: 9000000,
        file: "mp3/Seven Nation Army.mp3",
        cover: "img/Seven Nation Army.jpg",
    }
];

const container = document.getElementById("musicList");
const audio = document.getElementById("audioPlayer");

let currentBtn = null;

musicList.forEach((song) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${song.cover}" alt="${song.title}">
    <div class="song-title">${song.title}</div>
    <div class="artist">${song.artist}</div>
    <div class="details">
      <span>❤️ ${song.likes}</span>
      <span>👁️ ${song.views}</span>
    </div>
    <div class="controls">
      <span>⏱ ${song.duration}</span>
      <br />
      <button class="play-btn" data-file="${song.file}">▶Play</button>
    </div>
  `;

  container.appendChild(card);
});

container.addEventListener("click", function (e) {
  if (e.target.classList.contains("play-btn")) {
    const file = e.target.getAttribute("data-file");
    if (audio.src.includes(file) && !audio.paused) {
      audio.pause();
      e.target.textContent = "▶Play";
    } else {
      audio.src = file;
      audio.play();
      audio.style.display = "block";
      const allButtons = document.querySelectorAll(".play-btn");
      allButtons.forEach((btn) => (btn.textContent = "▶Play"));
      e.target.textContent = "⏸Pause";
      currentBtn = e.target;
    }
  }
});

audio.addEventListener("ended", () => {
  if (currentBtn) {
    currentBtn.textContent = "▶Play";
  }
});


audio.addEventListener("ended", () => {
    if (currentBtn) {
        currentBtn.textContent = "▶Play";
    }
});