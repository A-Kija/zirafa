console.log('Labas, Džiesai (JS)');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const namas = ['Petras', 'Lina', 'Bebras', 'Bobikas', 'Leopardas', 'Sima', 'Rima'];

// console.table(namas[2]);

namas[0] = 'Barsukas';

console.table(namas);

for (let i = 0; i < namas.length; i++) {
    // console.table(namas[i]);
}

/*
let moneta;
do {
    moneta = rand(0, 1) ? 'S' : 'H';
    console.log(moneta);
} while(moneta != 'H');

let pinigai = rand(50, 250);
while(pinigai <= 200) {
    const uzdirbta = rand(10, 20);
    pinigai = pinigai + uzdirbta;
    console.log('dirbu', pinigai);
}
*/

//DEKLARACIJA KODO PARASYMAS
const sayHello1 = () => {
    const a = 7 + 8;
    // console.log('gavau:', a);
}

// ISKVIETIMAS PARASYTO KODO NAUDOJIMAS
sayHello1();
sayHello1();



const sayHello2 = (b, c) => {
    const a = b + c;
    // console.log('gavau:', a);
}

sayHello2(5, 1);
sayHello2(9, 2);

const sayHello3 = (b, c) => {
    const a = b + c;
    return a;
}

let rez = sayHello3(10, 21);
// console.log(rez);

const sayHello4 = b => {
    const a = b * 5;
    return a;
}

rez = sayHello4(5);
// console.log(rez);


const sayHello5 = b => b * 5;

rez = sayHello5(5);
// console.log(rez);

const sayHello6 = (b, c) => b * c;
rez = sayHello6(5, 8);
// console.log(rez);


const asNaudojuCallBacka = (callback, b, c) => {
    const a = callback(b, c);
    return a;
}

rez = asNaudojuCallBacka(sayHello6, 6, 10);
// console.log(rez);

// const manoFun = (el, index) => {
//     console.log(index, el);
// }

// namas.forEach(manoFun);

// namas.forEach((el, i) => {
//     console.log(el, i)
// });

// namas.forEach(e => console.log(e.length));


// const fm = namas.forEach((e, i) => console.log(e.length * (i + 1)));

// salyga ? yes : no


// const mm = namas.map(e => e[0] == 'B' ? e.length : e);

// const mm = namas.filter(e => e[0] != 'B' ).map(e => e.length);

namas.sort((a, b) => {
    console.log(a, b);
    if (a[2] > b[2]) return 1;
    if (a[2] < b[2]) return -1;
    return 0;

    // return rand(0, 10) - rand(0, 10);

})

const mm = namas.map(e => e.length).filter(e => e > 4 ).sort((a, b) => b - a);

console.table(mm);


const red = namas.reduce((p, n) => p + ' *** ' + n, '---------');

console.table(red);