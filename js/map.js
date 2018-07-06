var openMap = document.querySelector(".map-popup-hyper");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".close-btn");

openMap.addEventListener("click", function(appearModal) {
    appearModal.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(disappearModal) {
    disappearModal.preventDefault();
    mapPopup.classList.remove("modal-show");
});
