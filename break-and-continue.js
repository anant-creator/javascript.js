// Demonstrate the use of Break and Continue statements in a loop.

const types = [
    'Anant',
    'Gupta',
    'Sharma',
    'Mishra',
    1987,
    2387,
    'Bharadwar',
    true,
    list,
];

for (i = 0; i < types.length; i++) {
    if (typeof types[i] === 'boolean') continue;

    console.log(types[i], typeof types[i]);
}

for (i = 0; i < types.length; i++) {
    if (typeof types[i] === 'number') break;

    console.log(types[i], typeof types[i]);
}
