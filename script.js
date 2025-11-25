let sounds = [
    "key1.mp3",
    "key2.mp3",
    "key3.mp3",
    "key4.mp3",
    "key5.mp3",
    "key6.mp3",
    "key7.mp3",
    "key8.mp3",
    "key9.mp3",
    "key10.mp3",
    "key11.mp3",
    "key12.mp3",
    "key13.mp3",
    "key14.mp3",
    "key15.mp3",
    "key16.mp3",
    "key17.mp3",
    "key18.mp3",
    "key19.mp3",
    "key20.mp3",
];

let audio = new Audio();

document.body.addEventListener("keydown", function (key) {
  if (key.code === "KeyW") {
    audio.src = "./sounds/key9.mp3";
    audio.play();
    document.getElementById("keyw").classList.add("active");
  }
  if (key.code === "KeyA") {
    audio.src = "./sounds/key2.mp3";
    audio.play();
    document.getElementById("keya").classList.add("active");
  }

  if (key.code === "KeyS") {
    audio.src = "./sounds/key1.mp3";
    audio.play();
    document.getElementById("keys").classList.add("active");
  }

  if (key.code === "KeyD") {
    audio.src = "./sounds/key3.mp3";
    audio.play();
    document.getElementById("keyd").classList.add("active");
  }


  if (key.code === "KeyF") {
    audio.src = "./sounds/key4.mp3";
    audio.play();
    document.getElementById("keyf").classList.add("active");
  }

  if (key.code === "KeyG") {
    audio.src = "./sounds/key5.mp3";
    audio.play();
    document.getElementById("keyg").classList.add("active");
  }

  if (key.code === "KeyH") {
    audio.src = "./sounds/key6.mp3";
    audio.play();
    document.getElementById("keyh").classList.add("active");
  }

  if (key.code === "KeyJ") {
    audio.src = "./sounds/key7.mp3";
    audio.play();
    document.getElementById("keyj").classList.add("active");
  }

  if (key.code === "KeyK") {
    audio.src = "./sounds/key8.mp3";
    audio.play();
    document.getElementById("keyk").classList.add("active");
  }

  if (key.code === "KeyL") {
    audio.src = "./sounds/key10.mp3";
    audio.play();
    document.getElementById("keyl").classList.add("active");
  }

  if (key.code === "KeyZ") {
    audio.src = "./sounds/key11.mp3";
    audio.play();
    document.getElementById("keyz").classList.add("active");
  }

  if (key.code === "KeyX") {
    audio.src = "./sounds/key12.mp3";
    audio.play();
    document.getElementById("keyx").classList.add("active");
  }

  if (key.code === "KeyC") {
    audio.src = "./sounds/key13.mp3";
    audio.play();
    document.getElementById("keyc").classList.add("active");
  }
  if (key.code === "KeyV") {
    audio.src = "./sounds/key14.mp3";
    audio.play();
    document.getElementById("keyv").classList.add("active");
  }

if (key.code === "KeyB") {
    audio.src = "./sounds/key15.mp3";
    audio.play();
    document.getElementById("keyb").classList.add("active");
  }

if (key.code === "KeyQ") {
    audio.src = "./sounds/key16.mp3";
    audio.play();
    document.getElementById("keyq").classList.add("active");
  }
if (key.code === "KeyE") {
    audio.src = "./sounds/key17.mp3";
    audio.play();
    document.getElementById("keye").classList.add("active");
  }

if (key.code === "KeyR") {
    audio.src = "./sounds/key18.mp3";
    audio.play();
    document.getElementById("keyr").classList.add("active");
  }
if (key.code === "KeyT") {
    audio.src = "./sounds/key19.mp3";
    audio.play();
    document.getElementById("keyt").classList.add("active");
  }

if (key.code === "KeyY") {
    audio.src = "./sounds/key20.mp3";
    audio.play();
    document.getElementById("keyy").classList.add("active");
  }




})

document.body.addEventListener("keyup", function (key) {
  if (key.code === "KeyW") {
    document.getElementById("keyw").classList.remove("active");
  }
  if (key.code === "KeyA") {
    document.getElementById("keya").classList.remove("active");
  }
  if (key.code === "KeyS") {
    document.getElementById("keys").classList.remove("active");
  }
  if (key.code === "KeyD") {
    document.getElementById("keyd").classList.remove("active");
  }
  if (key.code === "KeyF") {
    document.getElementById("keyf").classList.remove("active");
  }
  if (key.code === "KeyG") {
    document.getElementById("keyg").classList.remove("active");
  }
  if (key.code === "KeyH") {
    document.getElementById("keyh").classList.remove("active");
  }
  if (key.code === "KeyJ") {
    document.getElementById("keyj").classList.remove("active");
  }
  if (key.code === "KeyK") {
    document.getElementById("keyk").classList.remove("active");
  }
  if (key.code === "KeyL") {
    document.getElementById("keyl").classList.remove("active");
  }
  if (key.code === "KeyQ") {
    document.getElementById("keyq").classList.remove("active");
  }
  if (key.code === "KeyE") {
    document.getElementById("keye").classList.remove("active");
  }
  if (key.code === "KeyR") {
    document.getElementById("keyr").classList.remove("active");
  }
  if (key.code === "KeyT") {
    document.getElementById("keyt").classList.remove("active");
  }
  if (key.code === "KeyY") {
    document.getElementById("keyy").classList.remove("active");
  }
  if (key.code === "KeyZ") {
    document.getElementById("keyz").classList.remove("active");
  }
  if (key.code === "KeyX") {
    document.getElementById("keyx").classList.remove("active");
  }
  if (key.code === "KeyC") {
    document.getElementById("keyc").classList.remove("active");
  }
  if (key.code === "KeyV") {
    document.getElementById("keyv").classList.remove("active");
  }
  if (key.code === "KeyB") {
    document.getElementById("keyb").classList.remove("active");
  }
  })