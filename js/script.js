var writeUs = document.querySelector(".btn-write-us");
var modal = document.querySelector(".modal-write-us");
var close = document.querySelectorAll(".modal .close-btn");

writeUs.addEventListener("click", function(appearModal) {
    appearModal.preventDefault();
    modal.classList.add("modal-show");
});

close.addEventListener("click", function(appearModal) {
    appearModal.preventDefault();
    modal.classList.remove("modal-show");
});