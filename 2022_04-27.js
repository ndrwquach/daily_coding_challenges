//https://www.codewars.com/kata/5f70c883e10f9e0001c89673/solutions/javascript

const flip = (d, a) => a.sort((x, y) => d === 'R' ? x - y : y - x);