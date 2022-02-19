document.addEventListener("keydown", (e) => {
  if (e.code === "KeyA") {
    playAudio("A", "Sounds/A.mp3");
  } else if (e.code === "KeyS") {
    playAudio("S", "Sounds/S.mp3");
  } else if (e.code === "KeyD") {
    playAudio("D", "Sounds/D.mp3");
  } else if (e.code === "KeyF") {
    playAudio("F", "Sounds/F.mp3");
  } else if (e.code === "KeyG") {
    playAudio("G", "Sounds/G.mp3");
  } else if (e.code === "KeyH") {
    playAudio("H", "Sounds/H.mp3");
  } else if (e.code === "KeyJ") {
    playAudio("J", "Sounds/J.mp3");
  }

  //neam zvuci za klucojte podolu

  //     else if (e.code === "KeyW") {
  //     console.log("W key was pressed");
  //   } else if (e.code === "KeyE") {
  //     console.log("E key was pressed");
  //   } else if (e.code === "KeyT") {
  //     console.log("T key was pressed");
  //   } else if (e.code === "KeyY") {
  //     console.log("Y key was pressed");
  //   } else if (e.code === "KeyU") {
  //     console.log("U key was pressed");
  //   }
});

function playAudio(key, path) {
  const sound = new Audio("" + path);
  sound.volume = 0.1;
  console.log(key + " key was pressed");
  sound.play();
}

// const keySoundMap = {
//   KeyA: "Sounds/A.mp3",
//   KeyS: "Sounds/S.mp3",
//   KeyD: "Sounds/D.mp3",
//   KeyF: "Sounds/F.mp3",
//   KeyG: "Sounds/G.mp3",
//   KeyH: "Sounds/H.mp3",
//   KeyJ: "Sounds/J.mp3",
//   KeyW: "Sounds/W.mp3",
//   KeyE: "Sounds/E.mp3",
//   KeyT: "Sounds/T.mp3",
//   KeyY: "Sounds/Y.mp3",
//   KeyU: "Sounds/U.mp3",
// };

// // 1. ne zakomentirvaj kod nepotrebno
// // 2. koristi javascript objects

// document.addEventListener("keydown", (e) => {
//   playAudio(e.code, keySoundMap[e.code]);
// });

// function playAudio(key, path) {
//   const sound = new Audio("" + path);
//   sound.volume = 0.1;
//   console.log(key + " key was pressed");
//   sound.play().catch((err) => {
//     console.log("error file not found!");
//   });
// }
