// Find the age of people with the birthyear given in array

const birthYears = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = birthYears.length - 1; i >= 0; i--) {
    ages.push(2021 - birthYears[i]);
}

console.log(ages);
