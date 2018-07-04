var writeUs = document.querySelector(".btn-write-us");
var modal = document.querySelector(".modal-write-us");
var close = modal.querySelector(".close-btn");

writeUs.addEventListener("click", function(appearModal) {
    appearModal.preventDefault();
    modal.classList.add("modal-show");
});

close.addEventListener("click", function(disappearModal) {
    disappearModal.preventDefault();
    modal.classList.remove("modal-show");
});