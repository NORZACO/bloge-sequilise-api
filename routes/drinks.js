
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();





// router.use(bodyParser.json());


const DrinkService = require('../services/drinkService');
const drinkService = new DrinkService();


router.get('/drinks', (req, res) => {
    const drinks = drinkService.getAllDrinks();
    res.json(drinks);
});


router.get('/drinks/:id', (req, res) => {
    const drink = drinkService.getDrinkById(parseInt(req.params.id));
    if (drink) {
        res.json(drink);
    } else {
        res.sendStatus(404);
    }
});

router.post('/drinks', (req, res) => {
    const id = drinkService.addDrink(req.body);
    res.status(201).json({ id });
});

router.delete('/drinks/:id', (req, res) => {
    drinkService.deleteDrink(parseInt(req.params.id));
    res.sendStatus(200);
});





module.exports = router;

