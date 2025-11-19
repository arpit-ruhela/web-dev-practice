var img = document.querySelector("#mainimg")
var like = document.querySelector("#love")

img.addEventListener('dblclick', function (){
    like.style.opacity = "1"
    like.style.transform = ' translate(-50%, -50%) scale(1) rotate(0deg)'

    setTimeout(() => {
        like.style.transform = ' translate(-50%, -300%) scale(1) rotate(0deg)'
    }, 800);

    setTimeout(() => {
        like.style.opacity = "0"
        like.style.transform = ' translate(-50%, -300%) scale(1) rotate(0deg)'
    }, 1000);

    setTimeout(() => {
        like.style.transform = ' translate(-50%, -50%) scale(1) rotate(0deg)'
    }, 1200);

})
