let randomNumber = (size) => {
    const number = Math.floor(Math.random() * size);
    return number;
}

let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    let distance = Math.sqrt((diffX * diffX) + (diffY * diffY));
    return distance;
}

let closeDistance = distance => {
    if (distance < 50) {
        return 'Hirviendo'
    } else if (distance < 100) {
        return 'Muy caliente'
    } else if(distance < 150){
        return 'Caliente'
    } else {
        return 'Frio'
    }
}

