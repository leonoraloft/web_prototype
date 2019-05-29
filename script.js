window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);

    document.querySelector("#menuknapluk").addEventListener("click", toggleMenuOff);

}

function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");
    document.querySelector("#forside").classList.toggle("hidden");
    document.querySelector("header").classList.toggle("hidden");
}

function toggleMenuOff() {
    console.log("toggleMenuOff");
    document.querySelector("#menu").classList.toggle("hidden");
    document.querySelector("#forside").classList.toggle("hidden");
    document.querySelector("header").classList.toggle("hidden");
}
