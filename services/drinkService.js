const fs = require('fs');

class DrinkService {
    constructor() {
        this.drinks = [];
        this.loadDrinks();
    }

    loadDrinks() {
        const rawData = fs.readFileSync('data/drinks.json');
        this.drinks = JSON.parse(rawData);
    }


    saveDrinks() {
        const jsonData = JSON.stringify(this.drinks, null, 2);
        fs.writeFileSync('data/drinks.json', jsonData);
    }

    getAllDrinks() {
        return this.drinks;
    }

    getDrinkById(id) {
        return this.drinks.find((drink) => drink.id === id);
    }

    addDrink(drink) {
        const id = this.drinks.length + 1;
        this.drinks.push({ id, ...drink });
        this.saveDrinks();
        return id;
    }

    deleteDrink(id) {
        const index = this.drinks.findIndex((drink) => drink.id === id);
        if (index !== -1) {
            this.drinks.splice(index, 1);
            this.saveDrinks();
        }
    }
}

module.exports = DrinkService;
