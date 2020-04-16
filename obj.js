let cityfirst = {
    name: 'Vinnitsya',
    population: 370834,
    getName() {
        console.log(`City ${this.name}`);
    },
    exportStr() {
        console.log(`City ${this.name}, population = ${this.population}\n`);
    },
};
let citysecond = {
    name: 'Lugansk',
    population: 403938,
    getName() {
        console.log(`City ${this.name}`);
    },
    exportStr() {
        console.log(`City ${this.name}, population = ${this.population}\n`);
    },
};

cityfirst.getName();
citysecond.getName();

cityfirst.exportStr();
citysecond.exportStr();
