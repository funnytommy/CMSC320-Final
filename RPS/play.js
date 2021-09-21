
document.getElementById('playButton').addEventListener('click', (event) => {
    event.target.classList.add('moveUp')
    setTimeout(() => event.target.classList.add('stayUp'), 3000)
    let box = document.getElementById('gamePlayer')
    box.classList.add('moveUpBox')
    setTimeout(() => { box.style.transform = "translateY(0px)" }, 3000)

})

window.addEventListener('resize', () => changeLayout)
let playButton = document.getElementById("playButton")
let gamePlayer = document.getElementById("gamePlayer")
function changeLayout() {
    console.log("innerheight: " + window.innerHeight)
    console.log("innerWidth: " + window.innerWidth)
    if (window.innerHeight > window.innerWidth) {
        console.log("We're in portrait mode")
        // viewing from phone or tablet.
        playButton.classList.remove("pb_landscape")
        playButton.classList.add("pb_portrait")

        gamePlayer.classList.remove("gp_landscape")
        gamePlayer.classList.add("gp_portrait")


    } else {
        console.log("We're in landscape mode")
        // viewing from some sort of desktop.
        playButton.classList.add("pb_landscape")
        playButton.classList.remove("pb_portrait")

        gamePlayer.classList.add("gp_landscape")
        gamePlayer.classList.remove("gp_portrait")

    }
}

changeLayout();
