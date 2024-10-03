//returns random number between 1 & 100

export function randInt () {
    return Math.floor(Math.random() * 100) + 1;
}

//returns average grade
export function avg (grades) {
    let totalG = 0;
    for (let n of grades) { 
        totalG += n;
    }

    function calc () {
        return (totalG / grades.length).toFixed(2)
    }

    return calc

}

//Reads entire array
export function arrayReader(array) {
    for (let item of array) {
        console.log(item);
    } 
}