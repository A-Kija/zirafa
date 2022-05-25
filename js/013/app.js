console.log('Labas, Džiesai (JS)');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const namas = ['Petras', 'Lina', 'Bebras'];

console.table(namas[2]);

namas[0] = 'Barsukas';

console.table(namas);

for (let i = 0; i < namas.length; i++) {
    console.table(namas[i]);
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
    console.log('gavau:', a);
}

// ISKVIETIMAS PARASYTO KODO NAUDOJIMAS
sayHello1();
sayHello1();



const sayHello2 = (b, c) => {
    const a = b + c;
    console.log('gavau:', a);
}

sayHello2(5, 1);
sayHello2(9, 2);

const sayHello3 = (b, c) => {
    const a = b + c;
    return a;
}

let rez = sayHello3(10, 21);
console.log(rez);

const sayHello4 = b => {
    const a = b * 5;
    return a;
}

rez = sayHello4(5);
console.log(rez);


const sayHello5 = b => b * 5;

rez = sayHello5(5);
console.log(rez);