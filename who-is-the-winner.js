// Here you have the scores of two teams you have to get the average score of them and then compare to find out who is the winner. and if the winner team average is not twice
// more than the other team then both will lose.

const average = (pt1, pt2, pt3) => (pt1 + pt2 + pt3) / 3;

const avgdolphin = average(44, 23, 71);
const avgkoala = average(65, 64, 49);

function footballWinner(avg1, avg2) {
    if (avgdolphin >= avgkoala * 2) {
        console.log(`Dolphins are the winners!`);
    } else if (avgkoala > avgdolphin * 2) {
        console.log(`Koala's are the winners!`);
    } else {
        console.log(`Both were loosers!`);
    }
}

footballWinner(avgdolphin, avgkoala);
