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

const randomStr = (length) => {
    var str = ""
    const words = "qwertyuiopasdfghjklzxcvbnm1234567890"

    for(let i = 0; i < length; i++) {
        str += words[random(0, words.length-1)]
    }

    return str
}

const unixStampLeft = (stamp) => {
    let s = stamp % 60;
    stamp = (stamp - s) / 60;

    let m = stamp % 60;
    stamp = (stamp - m) / 60;

    let h = (stamp) % 24;
    let d = (stamp - h) / 24;

    let text = ``;

    if (d > 0) text += Math.floor(d) + " д. ";
    if (h > 0) text += Math.floor(h) + " ч. ";
    if (m > 0) text += Math.floor(m) + " мин. ";
    if (s > 0) text += Math.floor(s) + " с.";

    return text;
}

const rewrite_numbers = (num) => {
    var n = num.toString();
    const regex = /(\d)\s+(?=\d)/g;
    const subst = `$1`;
    return n.replace(regex, subst);
}

export default {
    number_format,
    random,
    nols,
    randomStr,
    unixStampLeft,
    rewrite_numbers
};