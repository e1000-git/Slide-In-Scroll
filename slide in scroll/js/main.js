function myfunction() {
    if (window.scrollY < 730) {
        document.querySelector("#img1").className = "img1";
    } else if (window.scrollY < 1130 && window.scrollY >= 730) {
        document.querySelector("#img1").className = "slide1";
    } else if (window.scrollY < 1230 && window.scrollY >= 1130) {
        document.querySelector("#img1").className = "img1";
        document.querySelector("#img2").className = "img2"
    } else if (window.scrollY < 1630 && window.scrollY >= 1230) {
        document.querySelector("#img2").className = "slide2"
    } else if (window.scrollY < 1730 && window.scrollY >= 1630) {
        document.querySelector("#img2").className = "img2";
        document.querySelector("#img3").className = "img3";
        document.querySelector("#img4").className = "img4";
    } else if (window.scrollY < 2230 && window.scrollY >= 1730) {
        document.querySelector("#img3").className = "slide3";
        document.querySelector("#img4").className = "slide4";
    } else if (window.scrollY < 2530 && window.scrollY >= 2230) {
        document.querySelector("#img3").className = "img3";
        document.querySelector("#img4").className = "img4";
        document.querySelector("#img5").className = "img5";
    } else if (window.scrollY < 2930 && window.scrollY >= 2530) {
        document.querySelector("#img5").className = "slide5";
    } else { document.querySelector("#img5").className = "img5"; }
}