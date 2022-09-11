$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);
let isPlaying = false;
let songIndex = 0;
var data = [
  {
    key: 1,
    name: "Anh sai rồi",
    author: "Sơn Tùng",
    src: "./musics/sontung/asairoi.mp3",
    timeDuration: "4:22",
    img: "./img/sontung/asairoi.jpg",
  },
  {
    key: 2,
    name: "Nàng thơ",
    author: "Amee",
    src: "./musics/amee/nangtho.mp3",
    timeDuration: "4:22",
    img: "./img/amee/nangtho.webp",
  },
  {
    key: 3,
    name: "Đế vương",
    author: "Đình Dũng",
    src: "./musics/dinhdung/devuong.mp3",
    timeDuration: "4:22",
    img: "./img/dinhdung/devuong.jpg",
  },
  {
    key: 4,
    name: "Khuôn mặt đáng thương",
    author: "Sơn Tùng",
    src: "./musics/sontung/khuonmatdangthuong.mp3",
    timeDuration: "4:10",
    img: "./img/sontung/khuonmatdangthuong.webp",
  },
  {
    key: 5,
    name: "Shay nắng",
    author: "Amee",
    src: "./musics/amee/shaynang.mp3",
    timeDuration: "3:28",
    img: "./img/amee/shaynang.jpg",
  },
  {
    key: 6,
    name: "Năm ấy",
    author: "Đức phúc",
    src: "./musics/ducphuc/namay.mp3",
    timeDuration: "4:20",
    img: "./img/ducphuc/namay.jpg",
  },

  {
    key: 7,
    name: "Khuôn mặt đáng thương",
    author: "Sơn Tùng mtp",
    src: "./musics/sontung/khuonmatdangthuong.mp3",
    img: "./img/sontung/khuonmatdangthuong.webp",
    artist: "sontung",
  },
  {
    key: 8,
    name: "Anh sai rồi",
    author: "Sơn Tùng MTP",
    src: "./musics/sontung/asairoi.mp3",
    img: "./img/sontung/asairoi.jpg",
    artist: "sontung",
  },
  {
    key: 9,
    name: "Em của ngày hôm qua",
    author: "Sơn Tùng MTP",
    src: "./musics/sontung/emcuangayhomqua.mp3",
    img: "./img/sontung/emcuangayhomqua.webp",
    artist: "sontung",
  },
  {
    key: 10,
    name: "Lạc trôi",
    author: "Sơn Tùng MTP",
    src: "./musics/sontung/lactroi.mp3",
    img: "./img/sontung/lactroi.jpg",
    artist: "sontung",
  },
  {
    key: 11,
    name: "Nắng ấm xa dần",
    author: "Sơn Tùng MTP",
    src: "./musics/sontung/nangamxadan.mp3",
    img: "./img/sontung/nangamxadan.jfif",
    artist: "sontung",
  },
  {
    key: 12,
    name: "Hãy trao cho anh",
    author: "Sơn Tùng MTP",
    src: "./musics/sontung/haytraochoanh.mp3",
    img: "./img/sontung/haytraochoanh.jpg",
    artist: "sontung",
  },
  {
    key: 13,
    name: "Nàng thơ",
    author: "Amee",
    src: "./musics/amee/nangtho.mp3",
    img: "./img/amee/nangtho.webp",
    artist: "amee",
  },
  {
    key: 14,
    name: "Nói hoặc không nói",
    author: "Amee",
    src: "./musics/amee/noihoackhongnoi.mp3",
    img: "./img/amee/noihoackhongnoi.jpg",
    artist: "amee",
  },
  {
    key: 15,
    name: "Shay nắng",
    author: "Amee",
    src: "./musics/amee/shaynang.mp3",
    img: "./img/amee/shaynang.jpg",
    artist: "amee",
  },
  {
    key: 16,
    name: "Thay mọi cô gái yêu anh",
    author: "Amee",
    src: "./musics/amee/thaymoicogaiiuanh.mp3",
    img: "./img/amee/thaymoicogaiiuanh.jpg",
    artist: "amee",
  },
  {
    key: 17,
    name: "Sao ta ngược lối",
    author: "Đình dũng",
    src: "./musics/dinhdung/saotanguocloi.mp3",
    img: "./img/dinhdung/saotanguocloi.jpg",
    artist: "dinhdung",
  },
  {
    key: 18,
    name: "Câu hẹn câu thề",
    author: "Đình dũng",
    src: "./musics/dinhdung/cauhencauthe.mp3",
    img: "./img/dinhdung/cauhencauthe.jpg",
    artist: "dinhdung",
  },
  {
    key: 19,
    name: "Đừng hẹn kiếp sau",
    author: "Đình dũng",
    src: "./musics/dinhdung/dunghenkiepsau.mp3",
    img: "./img/dinhdung/dunghenkiepsau.jfif",
    artist: "dinhdung",
  },
  {
    key: 20,
    name: "Đế vương",
    author: "Đình Dũng",
    src: "./musics/dinhdung/devuong.mp3",
    img: "./img/dinhdung/devuong.jpg",
    artist: "dinhdung",
  },
  {
    key: 21,
    name: "Khác biệt to lớn",
    author: "Trịnh Thăng Bình",
    src: "./musics/ttbinh/khacbiettolon.mp3",
    img: "./img/ttbinh/khacbiettolon.jpg",
    artist: "ttbinh",
  },
  {
    key: 22,
    name: "Vỡ tan",
    author: "Trịnh Thăng Bình",
    src: "./musics/ttbinh/votan.mp3",
    img: "./img/ttbinh/votan.jpg",
    artist: "ttbinh",
  },
  {
    key: 23,
    name: "Người ấy",
    author: "Trịnh Thăng Bình",
    src: "./musics/ttbinh/nguoiay.mp3",
    img: "./img/ttbinh/nguoiay.jpg",
    artist: "ttbinh",
  },
  {
    key: 24,
    name: "Em ngủ chưa",
    author: "Trịnh Thăng Bình",
    src: "./musics/ttbinh/emnguchua.mp3",
    img: "./img/ttbinh/emnguchua.jpg",
    artist: "ttbinh",
  },
  {
    key: 25,
    name: "Trái đất đẹp nhất khi có em",
    author: "Đức phúc",
    src: "./musics/ducphuc/traidatdepnhatkhicoem.mp3",
    img: "./img/ducphuc/traidatdepnhatkhicoem.jfif",
    artist: "ducphuc",
  },
  {
    key: 26,
    name: "Năm ấy",
    author: "Đức phúc",
    src: "./musics/ducphuc/namay.mp3",
    img: "./img/ducphuc/namay.jpg",
    artist: "ducphuc",
  },
  {
    key: 27,
    name: "Ngày đầu tiên",
    author: "Đức phúc",
    src: "./musics/ducphuc/ngaydautien.mp3",
    img: "./img/ducphuc/ngaydautien.jpg",
    artist: "ducphuc",
  },
  {
    key: 28,
    name: "Gửi ngàn lời yêu",
    author: "Đức phúc",
    src: "./musics/ducphuc/guinganloiyeu.mp3",
    img: "./img/ducphuc/guinganloiyeu.jpg",
    artist: "ducphuc",
  },
];
const convertTime = (timeDuration) => {
  return (
    Math.floor(timeDuration / 60) +
    ":" +
    ("0" + Math.floor(timeDuration % 60)).slice(-2)
  );
};
const convertDuration = (timeDuration) => {
  return (
    Math.floor(timeDuration / 60) +
    " min " +
    Math.floor(timeDuration % 60) +
    " sec"
  );
};

const renderTime = (timeDuration, timeCurrent) => {
  $(".player-duration").textContent = convertTime(timeDuration || "00:00");
  $(".player-remaining").textContent = convertTime(timeCurrent);
  //
  const progress = $("#progress-bar");
  progress.max = timeDuration;
  progress.value = timeCurrent;
};
const resetTime = () => {
  $(".player-duration").textContent = "0:00";
  $(".player-remaining").textContent = "0:00";
  //
  const progress = $("#progress-bar");
  progress.max = "0";
  progress.value = "0";
}; //

const waves = `
  <div id='container'>  
    <span></span>  
    <span></span>  
    <span></span>  
    <span></span>  
  </div>
`;
const template = ({ number, name, author, timeDuration = "" }) => {
  return `
    <div class="music-item" data-key="${number}">
      <p class="music-number">
        <span class="active">${number}</span>
        <i class="fa fa-play active"></i>
      </p>
      <div class="music-name">
        <span class="highlight-name">${name}</span>
        <span class="author">${author}</span>
      </div>
      <p class="music-time">${timeDuration}</p>
    </div>
  `;
};
const clearWaves = () => {
  $$("#container").forEach((item) => {
    // item.classList.remove("active");
    item.parentNode.removeChild(item);
  });
};
const displayWaves = () => {
  if (!isPlaying) {
    return;
  }
  clearWaves();
  $$(".music-item").forEach((item) => {
    if (+item.dataset.key === songIndex + 1) {
      item.querySelector(".music-number").innerHTML = "";
      item.insertAdjacentHTML("beforeend", waves);
      // $("#container").classList.add("active");
    }
  });
};
const firstRenderLocal = () => {
  if (localStorage.length > 0) {
    return;
  }
  data &&
    data.length > 0 &&
    data.forEach((item) => {
      const { key } = item;
      localStorage.setItem(key, JSON.stringify(false));
    });
};
const renderListsMusic = () => {
  const listMusic = $(".music-list");
  data &&
    data.length > 0 &&
    data.forEach((music, index) => {
      const { key, name, author, timeDuration } = music;
      const html = template({ number: key, name, author, timeDuration });
      listMusic.insertAdjacentHTML("beforeend", html);
    });
};
const displayTime = () => {
  const song = $("#song");
  const timeDuration = song.duration;
  const author = song.dataset.author;
  if (!timeDuration) return;
  $(".music-media-author").innerHTML = `<span>${author}</span>`;
  $(".music-info-author").innerHTML = `
    <span>${author}</span>
    <span>${convertDuration(timeDuration)}</span>
  `;
};
const renderHeart = (key = 9999) => {
  const keyLocal = JSON.parse(localStorage.getItem(key));
  if (!keyLocal) {
    $(".music-heart").innerHTML = `<i class="fa-regular fa-heart"></i>`;
  } else {
    $(
      ".music-heart"
    ).innerHTML = `<i class="fa-solid fa-heart heart-active"></i>`;
  }
};

const renderInfo = ({ name, author, src, img, key }) => {
  renderHeart(key);
  $(".music-info-name").textContent = name;
  $(".music-media-name").textContent = name;
  $$("#avatar").forEach((avatar) => {
    avatar.setAttribute("src", img);
  });
  $("#song").src = src;
  $("#song").dataset.author = author;
};

const firstRender = () => {
  const { name, author, src, img, key } = data.find(Boolean);
  renderInfo({ name, author, src, img, key });
  songIndex = key - 1;
  setInterval(displayTime, 500);
};

const setIconPlay = (className) => {
  $$(".player-play").forEach((item) => {
    item.classList = className;
  });
};

const resetItem = () => {
  $$(".music-item").forEach((item) => {
    item.style.backgroundColor = "";
    item.querySelector(".music-number").innerHTML = `
      <span class="active">${item.dataset.key}</span>
      <i class="fa fa-play active"></i>
    `;
  });
};
const handleClick = (e) => {
  console.log("moblie click");
  clearWaves();
  resetItem();
  if (+e.target.dataset.key === songIndex + 1) {
    clearWaves();
    e.target.querySelector(
      ".music-number"
    ).innerHTML = `<i class="fa fa-play click-play"></i>`;
    isPlaying = true;
    handlePlay();
  } else {
    e.target.style.backgroundColor = "hsla(0, 0%, 100%, 0.1)";
    e.target.querySelector(
      ".music-number"
    ).innerHTML = `<i class="fa fa-play click-play"></i>`;
    displayWaves();
  }
};

const handleDoubleClick = (e) => {
  clearWaves();
  resetItem();

  //
  e.target.querySelector(
    ".music-number"
  ).innerHTML = `<i class="player-play fa-solid fa-pause"></i>`;

  const keyMusic = +e.target.dataset.key;
  songIndex = keyMusic - 1;
  const musicItem = data.filter((item) => item.key === keyMusic);
  const { name, author, src, img, key } = musicItem[0];
  renderInfo({ name, author, src, img, key });
  isPlaying = false;
  handlePlay();
};

const playMusicByIndex = (index) => {
  const { name, author, src, img, key } = data[index];
  renderInfo({ name, author, src, img, key });
  isPlaying = false;
  handlePlay();
};
// handle change music
const handleChangeMusic = (target) => {
  if (target === 1) {
    resetItem();
    songIndex++;
    if (songIndex > data.length - 1) {
      songIndex = 0;
    }
    playMusicByIndex(songIndex);
    displayWaves();
  } else {
    resetItem();
    songIndex--;
    if (songIndex < 0) {
      songIndex = data.length - 1;
    }
    playMusicByIndex(songIndex);
    displayWaves();
  }
};
// const active name by index
const activeNameByIndex = () => {
  // highlight-name
  $$(".music-item").forEach((item, index) => {
    if (index === songIndex) {
      console.log(index);
      item.querySelector(".highlight-name").classList.add("active-highlight");
    } else {
      item
        .querySelector(".highlight-name")
        .classList.remove("active-highlight");
    }
  });
};

// handle play
const handlePlay = () => {
  const song = $("#song");
  if (!isPlaying) {
    setIconPlay("player-play fa-solid fa-pause");
    console.log("play");
    setTimeout(() => {
      song.play();
    }, 200);
    activeNameByIndex();

    setInterval(() => {
      renderTime(song?.duration, song.currentTime);
      // displayTime();
      if (song.ended) {
        setIconPlay("player-play fa-solid fa-play");
        resetTime();
        isPlaying = false;
        handleChangeMusic(1);
      }
    }, 500);
    isPlaying = true;
  } else {
    console.log("pause");
    clearWaves();
    resetItem();
    song.pause();
    setIconPlay("player-play fa fa-play");
    isPlaying = false;
  }
};

const handleHeart = () => {
  const key = songIndex + 1;
  const keyLocal = JSON.parse(localStorage.getItem(key));
  localStorage.setItem(key, JSON.stringify(!keyLocal));
  renderHeart(key);
};

const handleVolume = (e) => {
  $("#song").volume = +e.target.value / 100;
  if ($("#song").volume === 0) {
    $(".volume-icon").innerHTML = `<i class='bx bx-volume-mute' ></i>`;
  } else if ($("#song").volume > 0 && $("#song").volume < 1) {
    $(".volume-icon").innerHTML = `<i class='bx bx-volume-low' ></i>`;
  } else {
    $(".volume-icon").innerHTML = `<i class='bx bx-volume-full' ></i>`;
  }
};
window.addEventListener("load", () => {
  // const progress = $("#progress-bar");

  // render data
  firstRenderLocal();
  renderListsMusic();
  firstRender();

  // handle click item
  const musicLists = $$(".music-item");

  // mobile touchend
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    // check one touch in mobile
    let touchTime = 0;
    musicLists &&
      musicLists.length > 0 &&
      musicLists.forEach((item) => {
        item.addEventListener("touchend", (e) => {
          touchTime++;
          if (touchTime === 1) {
            setTimeout(() => {
              if (touchTime === 1) {
                handleClick(e);
              } else {
                handleDoubleClick(e);
              }
              touchTime = 0;
            }, 300);
          }
        });
      });

    // musicLists &&
    //   musicLists.length > 0 &&
    //   musicLists.forEach((item, index) => {
    //     // add event double touch
    //     let touchtime = 0;
    //     item.addEventListener("touchstart", function (e) {
    //       if (touchtime == 0) {
    //         // set first click
    //         touchtime = new Date().getTime();
    //       } else {
    //         if (new Date().getTime() - touchtime < 500) {
    //           // double click
    //           // clear event click
    //           item.removeEventListener("click", handleClick);
    //           if (e.target.matches(".music-item")) {
    //             handleDoubleClick(e);
    //           }
    //           console.log("double click");
    //           touchtime = 0;
    //         } else {
    //           // not double click
    //           touchtime = new Date().getTime();
    //           // clear event double click
    //           item.removeEventListener("dblclick", handleDoubleClick);

    //           if (e.target.matches(".music-item")) {
    //             handleClick(e);
    //           }
    //         }
    //       }
    //     });
    //   });
  } else {
    musicLists &&
      musicLists.length > 0 &&
      musicLists.forEach((item, index) => {
        item.addEventListener("click", handleClick);
        item.addEventListener("dblclick", handleDoubleClick);
      });
  }

  // handle play
  $$("#play-button").forEach((item) => {
    item.addEventListener("click", function (e) {
      handlePlay();
      displayWaves();
      // if (item.matches(".main-button") && $("#song").ended) {
      //   handleChangeMusic(1);
      // }
    });
  });
  // handle progress
  $("#progress-bar").addEventListener("input", () => {
    $("#song").currentTime = $("#progress-bar").value;
    isPlaying = false;
    handlePlay();
  });
  // handle next
  $(".player-next").addEventListener("click", () => {
    handleChangeMusic(1);
  });
  // handle prev
  $(".player-prev").addEventListener("click", () => {
    handleChangeMusic(-1);
  });
  // handle click heart
  $(".music-heart").addEventListener("click", () => {
    handleHeart();
  });
  // handle change volume
  $("#volume-bar").addEventListener("input", handleVolume);
});
