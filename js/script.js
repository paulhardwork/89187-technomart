var writeUs = document.querySelector(".btn-write-us");
var modalWriteUs = document.querySelector(".modal-write-us");
var close = modalWriteUs.querySelector(".close-btn");
var form = modalWriteUs.querySelector("form");
var userName = modalWriteUs.querySelector("input[type='text'][name='name']");
var mail = modalWriteUs.querySelector("input[type='email']");
var mainText = modalWriteUs.querySelector("textarea");

writeUs.addEventListener("click", function(appearModal) {
    appearModal.preventDefault();
    modalWriteUs.classList.add("modal-show");
    userName.focus();
});

close.addEventListener("click", function(disappearModal) {
    disappearModal.preventDefault();
    modalWriteUs.classList.remove("modal-show");
    modalWriteUs.classList.remove("modal-error");
});

form.addEventListener("submit", function(check) {
    if (!userName.value || !mail.value || !mainText.value) {
        check.preventDefault();
        modalWriteUs.classList.remove("modal-error");
        modalWriteUs.offsetWidth = modalWriteUs.offsetWidth;
        modalWriteUs.classList.add("modal-error");
    }
});






