// Here a array of bills is given you have to calculate the tip should be given on it based on the value and return two arrays of all tips and total values.

const billValues = [125, 555, 44];
const tips = [];
const totals = new Array();

const tipCalculator = function (arey, tips, total) {
    for (i = 0; i < arey.length; i++) {
        if (arey[i] >= 50 && arey[i] <= 300) {
            tip = arey[i] * 0.15;
            tips.push(tip);
            total.push((arey[i] += tip));
        } else {
            tip = arey[i] * 0.2;
            tips.push(tip);
            total.push((arey[i] += tip));
        }
    }
    return tips, total;
};

console.log(tipCalculator(billValues, tips, totals));
