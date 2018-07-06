var modalAddProduct = document.querySelector(".modal-add-cart");
var buyBtn = document.querySelectorAll(".btn-buy");
var close = modalAddProduct.querySelector(".close-btn");
var continueShop = modalAddProduct.querySelector(".btn-continue");


for (var i = 0; i < buyBtn.length; i++) {
    buyBtn[i].addEventListener("click", function(appearModalAdd) {
        appearModalAdd.preventDefault();
        modalAddProduct.classList.add("modal-show");
    });
}

close.addEventListener("click", function(disappearModal) {
    disappearModal.preventDefault();
    modalAddProduct.classList.remove("modal-show");
});

continueShop.addEventListener("click", function(disappearModal) {
    disappearModal.preventDefault();
    modalAddProduct.classList.remove("modal-show");
});



