// Here we have two arrays representing the temperature of a place you have to merge them and find the temperature amplitude(The difference between the min and max temperature from it).

const arr1 = [-2, 5, 6, 8, -7, 4, 12, 19];
const arr2 = [-3, 7, 4, 9, 12, 6, -9, 5];

function tempamp(r1, r2) {
    const arr = r1.concat(r2);

    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        const amp = arr[i];
        if (typeof amp != 'number') continue;
        else if (amp > max) max = amp;
        else if (amp < min) min = amp;
    }
    console.log(max, min);
    return max - min;
}

const answer = tempamp(arr1, arr2);
console.log(answer);
