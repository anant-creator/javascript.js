const myObj = {
    name: 'Anant',
    mob: 8979540885,
    location: 'Bareilly',
    job: 'Full Stack Developer',
    birthYear: 1998,
    hasDriversLicence: true,
    calcAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    },
};

const introd = `My name is ${myObj.name} I am ${myObj[`calcAge`]()} years old ${myObj.job},
I lived in ${myObj.location} and ${myObj['hasDriversLicence'] ? 'have' : 'Dont have'} a Driving Licence.`;

console.log(introd);
