var writeUs = document.querySelector(".btn-write-us");
var modalWriteUs = document.querySelector(".modal-write-us");
if (modalWriteUs) {
    var close = modalWriteUs.querySelector(".close-btn");
    var form = modalWriteUs.querySelector("form");
    var userName = modalWriteUs.querySelector("input[type='text'][name='name']");
    var mail = modalWriteUs.querySelector("input[type='email']");
    var mainText = modalWriteUs.querySelector("textarea");
}

var openMap = document.querySelector(".map-popup-hyper");
var mapPopup = document.querySelector(".modal-map");
if (mapPopup) {
    var mapClose = mapPopup.querySelector(".close-btn");
}

var modalAddProduct = document.querySelector(".modal-add-cart");
var buyBtn = document.querySelectorAll(".btn-buy");
if (modalAddProduct) {
    var closeAdd = modalAddProduct.querySelector(".close-btn");
    var continueShop = modalAddProduct.querySelector(".btn-continue");
}

if (openMap && mapPopup) {
    openMap.addEventListener("click", function(appearModal) {
    appearModal.preventDefault();
    mapPopup.classList.add("modal-show");
    });

mapClose.addEventListener("click", function(disappearModal) {
    disappearModal.preventDefault();
    mapPopup.classList.remove("modal-show");
    });
}

if(writeUs && modalWriteUs) {
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
}

for (var i = 0; i < buyBtn.length; i++) {
    buyBtn[i].addEventListener("click", function(appearModalAdd) {
        appearModalAdd.preventDefault();
        modalAddProduct.classList.add("modal-show");
    });
}

closeAdd.addEventListener("click", function(disappearModal) {
    disappearModal.preventDefault();
    modalAddProduct.classList.remove("modal-show");
});

continueShop.addEventListener("click", function(disappearModal) {
    disappearModal.preventDefault();
    modalAddProduct.classList.remove("modal-show");
});







