module.exports = function reverse (n) {
    let sign = (n < 0) ? -1 : 1;
    return  +([...[n*sign].toString()].reverse().join(''));
}
