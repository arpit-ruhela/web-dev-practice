var main = document.querySelector(".main")
var button = document.querySelector("button")

button.addEventListener("click", function(){
    var arr = ["hello i am Arpit","i am BCA student","sheryians is best","i am developer","i am fromm uttar pradesh"]

    var a = Math.floor( Math.random()*arr.length)

    var h1 = document.createElement('h1')

    h1.innerHTML = arr[a]

    h1.style.position = 'absolute'

    var x = Math.floor(Math.random()*80)
    var y = Math.floor(Math.random()*80)
    var rot = Math.floor(Math.random()*360)
    var scl =Math.floor(Math.random()*3)

    var c1 = Math.floor(Math.random()*256)
    var c2 = Math.floor(Math.random()*256)
    var c3 = Math.floor(Math.random()*256)

    h1.style.left = x+"%"
    h1.style.top = y+"%"
    h1.style.color = `rgb(${c1},${c2},${c3})`
    h1.style.rotate = rot +"deg"
    h1.style.scale = scl

    main.appendChild(h1)

})