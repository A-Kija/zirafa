function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


console.log('------------------------------------------');


let kibiras5 = 0;


for (let i = 0; i < 20; i++) {

    if (i == 7 || i == 13) {
        continue;
    }

    let siuksliu = rand(5, 105);
    kibiras5 = kibiras5 + siuksliu;
}

console.log(kibiras5);


console.log('------------------------------------------');


let kibiras6 = 0;


for (let i = 0; i < 20; i = i + 3) {

    let siuksliu = rand(5, 105);
    kibiras6 = kibiras6 + siuksliu;
}

console.log(kibiras6);


console.log('------------------------------------------');

for (let i = 19; i >= 0; i--) {
    console.log(i);
}