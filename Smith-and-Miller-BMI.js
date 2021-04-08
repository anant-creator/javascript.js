// Create two human objects with their physical properties to compare them with their Body Mass Index(BMI)


const miller = {
    name: 'Mark Miller',
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        this.MarkBMI = this.weight / (this.height * this.height);
        return this.MarkBMI;
    },
};

const smith = {
    name: 'John Smith',
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        this.JohnBMI = this.weight / (this.height * this.height);
        return this.JohnBMI;
    },

    compare: function (other) {
        this.calcBMI();
        other.calcBMI();
        const higher =
            this.JohnBMI > other.MarkBMI
                ? console.log(
                      `${this.name}'s BMI ${this.JohnBMI} is higher than ${other.name}'s ${other.MarkBMI} BMI`
                  )
                : console.log(
                      `${this.name}'s BMI ${this.JohnBMI} is higher than ${other.name}'s ${other.MarkBMI} BMI`
                  );
        return higher;
    },
};

smith.compare(miller);
