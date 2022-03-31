class dog {
    constructor(name,breed) {
        this.name = name;
        this.breed = breed;
    }
};

let jackodog= new dog("Jacko", "Bitsa");

jackodog;


class Breakfast {
    constructor(food,drink) {
        this.food = food;
        this.drink = drink;
    }
};

class Lunch {
    constructor(salad,soup,drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
};

class Dinner {
    constructor(salad,soup,entree,dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this._dessert = dessert;
    }
}

let test = new Dinner('greens','potato','crab','cake');

console.log(test._dessert);