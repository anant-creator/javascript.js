// Make a function which rolls a dice until you got a 6 in it.
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(
        `You got a ${dice}, You should have to roll the dice again until you got 6`
    );
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log(`Yay you got a six Game Over go to sleep!`);
    }
}
