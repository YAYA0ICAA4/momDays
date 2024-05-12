document.addEventListener('DOMContentLoaded', function () {
    const openLetterButton = document.getElementById('openLetterButton');
    const letter = document.getElementById('letter');
    const animationContainer = document.getElementById('animation');

    openLetterButton.addEventListener('click', function() {
        letter.classList.toggle('opened');
        if (letter.classList.contains('opened')) {
            startRainingLove();
        } else {
            stopRainingLove();
        }
    });
    function startRainingLove() {
        animationContainer.innerHTML = ''; // Clear previous animation
        const loveShapes = document.createElement('div');
        loveShapes.classList.add('love-rain');
        for (let i = 0; i < 20; i++) {
            const love = document.createElement('div');
            love.classList.add('love');
            love.style.left = Math.random() * 100 + 'vw';
            love.style.animationDelay = Math.random() * 5 + 's';
            loveShapes.appendChild(love);
        }
        animationContainer.appendChild(loveShapes);
    }

    function stopRainingLove() {
        animationContainer.innerHTML = ''; // Clear animation when letter is closed
    }
});
`