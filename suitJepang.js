// ! Menentukan pilihan komputer
function getPilihanKumputer() {
  const comp = Math.random();
  if (comp < 0.34) return "gunting";
  if (comp >= 0.34 && comp < 0.67) return "batu";
  return "kertas";
}

// ! Menentukan hasil / rules
function getHasil(comp, player) {
  if (player == comp) return "SERI";
  if (player == "gunting") return comp == "kertas" ? "MENANG" : "KALAH";
  if (player == "batu") return comp == "gunting" ? "MENANG" : "KALAH";
  if (player == "kertas") return comp == "batu" ? "MENANG" : "KALAH";
}

// Pilihan Gunting
const pilihGunting = document.querySelector(".gunting");
pilihGunting.addEventListener("click", function () {
  const pilihanKumputer = getPilihanKumputer();
  const pilihanPlayer = pilihGunting.className;
  const hasil = getHasil(pilihanKumputer, pilihanPlayer);

  const imgKomputer = document.querySelector(".komputer");
  imgKomputer.setAttribute("src", "assets/" + pilihanKumputer + ".png");

  const info = document.querySelector(".info");
  info.innerHTML = hasil;
});


// putar komputer
function putar () {
    const imgKomputer = document.querySelector(".komputer");
    const gambar = ["gunting", "batu", "kertas"];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgKomputer.setAttribute("src", "assets/" + gambar[i++] + ".png");
        if (i == gambar.length) i = 0;
    }, 100)
}




// Menentukan pilihan
const pilihanPlayer = document.querySelectorAll("li img");
pilihanPlayer.forEach(function (pilih) {
  pilih.addEventListener("click", function () {
    const pilihanKumputer = getPilihanKumputer();
    const pilihanPlayer = pilih.className;
    const hasil = getHasil(pilihanKumputer, pilihanPlayer);

    putar()

    setTimeout(function () {
        const imgKomputer = document.querySelector(".komputer");
        imgKomputer.setAttribute("src", "assets/" + pilihanKumputer + ".png");
    
        const info = document.querySelector(".info");
        info.innerHTML = hasil;
    }, 1000);

  });
});

// Pilihan Batu
// const pilihBatu = document.querySelector(".batu");
// pilihBatu.addEventListener ("click", function () {
//     const pilihanKumputer = getPilihanKumputer();
//     const pilihanPlayer = pilihBatu.className;
//     const hasil = getHasil(pilihanKumputer, pilihanPlayer);

//     const imgKomputer = document.querySelector(".komputer");
//     imgKomputer.setAttribute("src", "assets/" + pilihanKumputer + ".png");

//     const info = document.querySelector(".info");
//     info.innerHTML = hasil;
// });

// // Pilihan Kertas
// const pilihKertas = document.querySelector(".kertas");
// pilihKertas.addEventListener ("click", function () {
//     const pilihanKumputer = getPilihanKumputer();
//     const pilihanPlayer = pilihKertas.className;
//     const hasil = getHasil(pilihanKumputer, pilihanPlayer);

//     const imgKomputer = document.querySelector(".komputer");
//     imgKomputer.setAttribute("src", "assets/" + pilihanKumputer + ".png");

//     const info = document.querySelector(".info");
//     info.innerHTML = hasil;
// });
