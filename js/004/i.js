function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


console.log('------------1-------------');
for (let i = 0; i < 11; i++) {
    console.log(i * 10 + 100);
}

console.log('------------2-------------');
let double = 0;
for (let i = 0; i < 10; i++) {
    let random = rand(5, 15);
    console.log(random);
    if (random > 9) {
        double++;
    }
}
console.log('Dviženkliai:', double);

console.log('------------3-------------');
let sum = 0;
for (let i = 0; i < 10; i++) {
    let random = rand(5, 15);
    console.log(random);
    sum = sum + random;
}
console.log('Vidurkis:', sum / 10);

console.log('------------4-------------');
let it4 = 0;
let random4;
do {
    it4++;
    random4 = rand(10, 50);
} while (random4 != 13 && random4 != 33 && random4 != 43);
console.log(random4, it4);


console.log('------------5-------------');
let times = 0;
let it5 = 0;
while (times != 3) {
    it5++;
    let random = rand(10, 20);
    if (random == 17) {
        times++;
    }
}
console.log(times, it5);


console.log('------------5+-------------');
let timesPlus = 0;
let it5Plus = 0;
while (timesPlus != 3) {
    it5Plus++;
    let random = rand(10, 20);
    // console.log(random);
    if (random == 17) {
        timesPlus++;
    } else {
        timesPlus = 0;
    }
}
console.log(timesPlus, it5Plus);

let arr = [];

for (let i = 0; i < 100; i++) {
    arr.push(rand(0, 100));
}


for (let i = 0; i < 5; i++) {
    arr.push(rand(0, 100));
}


for (let i = 0; i < 5; i++) {
    arr.push(-5);
}


for (let i = 0; i < 5; i++) {
    arr.unshift(-10);
}


for (let i = 0; i < 5; i++) {
    arr.pop();
}


for (let i = 0; i < 5; i++) {
    arr.shift();
}

arr.splice(9, 10);

console.table(arr);


// arr.splice(4, 1, 0);




for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        arr.splice(i, 1, 0);
        // arr[i] = 0; analogiska
    }
}

console.table(arr);

const a = [4, 0, 5, 0, 0, 3, 5, 0, 4, 4, 4, 1, 3, 4, 1, 0, 0, 0, 0, 0];

sum = 0;
for (let i = 0; i < a.length; i++) {
    sum += a[i];
}


a.sort((c, b) => b - c);
console.log(a)
console.log('Vidurkis:', sum / a.length);