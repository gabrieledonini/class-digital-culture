var animals = ["img/catt.png", "img/hotdog.png"]
var count = 0

window.addEventListener('mousemove', function(event) {

    var img = document.createElement('img')
    img.src = animals[count]
    img.style.left = event.clientX + 'px'
    img.style.top = event.clientY + 'px'
    document.body.appendChild(img)


    setTimeout(function() {
        document.body.removeChild(img)
    }, 2000)

})

window.addEventListener('click', function() {
    if (count >= animals.length - 1) {
        count = 0
    } else {
        count++  
    }
})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

window.addEventListener('keydown', function() {
    document.body.style.background = getRandomColor()
})