const radomPosition = () =>{
    const screen = {
        x: window.innerWidth,
        y: window.innerHeight
    }

    var randomX = Math.random() *(screen.x -1000)
    var randomY = Math.random() *(screen.y -1000)

    return({x: randomX, y: randomY})
}


var button =document.querySelector("#butin")

button.addEventListener("mouseover", () =>{
    const randomPosition = radomPosition()
    button.style.position = "absolute"
    button.style.transform = `translate(${randomPosition.x}px, ${randomPosition.y}px)`
    console.log(button.style)
})


console.log(button)

var button2 = document.querySelector("#yes")

button2.addEventListener("click", () =>{
    alert("Você aceitou agora vc é minha Ficante Tô esperando o beijo 😚")
})
