// Create a vending machine which takes input of your desired juice/shake and it's quantity and return the output 

function shakeStation(ing, count) {
    let shake;
    switch (ing) {
        case '1':
            shake = `Banana Shake`;
            break;
        case '2':
            shake = `Strawberry Shake`;
            break;
        case '3':
            shake = `chocolate Shake`;
            break;
        case '4':
            shake = `Mango Shake`;
            break;
        default:
            shake = `Sorry we don't have that one`;
    }

    function howMuch(num) {
        const count = num;
    }

    console.log(`Here you go enjoy your treat of ${count} glass of ${shake}.`);
}

function juiceBar(ing, count) {
    let juice;
    switch (ing) {
        case 'a':
            juice = `Orange Juice`;
            break;
        case 'b':
            juice = `Pomegranate Juice`;
            break;
        case 'c':
            juice = `Sugarcane Juice`;
            break;
        case 'd':
            juice = `Apple Juice`;
            break;
        default:
            juice = `Sorry we don't have that one`;
    }

    function howMuch(num) {
        const count = num;
    }

    console.log(`Here you go enjoy your treat of ${count} glass of ${juice}.`);
}

const ingredient = window.prompt('which shake/juice do you want? you can have 1.Banana 2.Strawberry 3.Chocolate 4.Mango \n a.Orange b.Pomegranate c.Sugarcane d.Apple Juice');
const num = window.prompt('How many glasses do you want?');

function selector(fruit, count) {
    switch (fruit) {
        case 'a':
        case 'b':
        case 'c':
        case 'd':
            juiceBar(fruit, count);
            break;
        case '1':
        case '2':
        case '3':
        case '4':
            shakeStation(fruit, count);
            break;
        default:
            console.log(
                'We dont have anything else yet please select from the options only'
            );
    }
}

selector(ingredient, num);
