export function getRandomNumber(min, max) {
    if(min > max){
        [max, min] = [min, max];
    }
    return Math.round(min + Math.random() * (max -min));
}
export function getRandomElement(array) {
    let element = array[Math.floor(Math.random() * array.length)];
    return element;
}
export function getRandomDate(minYear, maxYear) {
    if(minYear > maxYear){
        [maxYear, minYear] = [minYear, maxYear];
    }
    const date = new Date();
    date.setDate(getRandomNumber(1, 28));
    date.setMonth(getRandomNumber(0, 11));
    date.setFullYear(getRandomNumber(minYear, maxYear));
    return date;
}