const WIDTH = 700;
const HEIGHT = 400;

let target = {
    x: randomNumber(WIDTH),
    y: randomNumber(HEIGHT)
}

let $map = document.querySelector('#map');
let $distance = document.querySelector('#distance');
let clicks = 0;

$map.addEventListener('click', function (e) {
    clicks++;
    let distance = getDistance(e, target)
    let distanceHint = closeDistance(distance);
    $distance.innerHTML = `<h2>${distanceHint}</h2>`;
    
    if (distance < 20) {
        alert(`¡Has encontrado el tesoro en ${clicks} clicks!`);
        location.reload();
    }
})