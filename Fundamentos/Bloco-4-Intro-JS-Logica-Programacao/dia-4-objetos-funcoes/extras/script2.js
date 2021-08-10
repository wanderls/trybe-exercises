let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};

for (let index in names){
console.log('Ola ' + names[index]);
}

console.log(' ');

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let index2 in car){
  console.log(index2, car[index2]);
}