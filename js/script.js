const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 30,
        depth: 300,
        modifier: 10,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
})


const acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

const btn=document.querySelector(".acc-btn button")
btn.addEventListener("click",()  =>{
    document.querySelector(".acc-modal").style.display = "block"

})
const close=document.querySelector(".acc-modal-bg-square-close")
close.addEventListener("click",()  =>{
    document.querySelector(".acc-modal").style.display = "none"
})