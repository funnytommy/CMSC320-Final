
document.getElementById('playButton').addEventListener('click', (event) => {
    event.target.classList.add('moveUp')
    setTimeout(() => event.target.classList.add('stayUp'), 3000)
    let box = document.getElementById('gamePlayer')
    box.classList.add('moveUpBox')
    setTimeout(() => { box.style.transform = "translateY(0px)" }, 3000)

})
