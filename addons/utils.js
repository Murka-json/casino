const number_format = (number) => {
    number = Math.trunc(number);

    return (number)
        .toLocaleString()
        .replace(/,/g, ' ')
        .replace(/\./g, ',');
};

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const nols = (num) => {
    if (num < 10) return ('0' + num)
    if (num > 9) return (num)
}

export default {
    number_format,
    random,
    nols
};