$('.menu-toggle').on('click', function() {


    $('.menu').toggleClass('open')
    return false

})

$('.menu nav a').on('click', function() {


    $('.menu').toggleClass('open')

})


window.onscroll = function() { myFunction() };

var header = document.querySelector("header");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.remove("header-hidden");
        header.classList.add("sticky");
    } else {
        header.classList.add("header-hidden");
        header.classList.remove("sticky");
    }
}



let xs = []
for (var i = 0; i <= 500; i++) {
    xs.push(i)
}

let t = 0

function animate() {
    let points = xs.map(x => {
        let y = 200 + 10 * Math.sin((x + t) / 15)


        return [x, y]
    })

    let path = "M" + points.map(p => {
        return p[0] + "," + p[1]
    }).join("L")

    document.querySelector(".mountain-path").setAttribute("d", path)

    t += -1

    requestAnimationFrame(animate)
}

animate()