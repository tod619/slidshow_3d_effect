let x = 0;

const rotate = () => {

    const cubes = document.querySelectorAll('.cube');
    Array.from(cubes).forEach(cube => {
        cube.style.transform = `rotateY(${x}deg)`

    });

}

// Left Arrow
document.querySelector('.left-arrow').addEventListener('click', () => {

    x += 90;
    rotate();




});

// Right Arrow
document.querySelector('.right-arrow').addEventListener('click', () => {

    x -= 90;
    rotate();

});