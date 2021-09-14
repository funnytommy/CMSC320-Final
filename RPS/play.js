(
    document.getElementById('playButton').addEventListener('click', (event) => {
        event.target.classList.add('moveUp')
        let box = document.getElementById('gamePlayer')
        box.style.transform = "translateY(0)"
    })

)();