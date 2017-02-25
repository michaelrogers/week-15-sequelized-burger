const express = require('express');
const router = express.Router();

//Import Burger model to access ORM methods
const Models = require('../models');

//Define router
let hbsObject = {};
router.get('/', (req, res) => {
    Models.Burger.findAll({}).then((data) => {
        if (data.length > 0) {
            let dataValuesArray = [];
            data.map( row => dataValuesArray.push(row.dataValues));
            console.log(dataValuesArray);
            hbsObject.burger = dataValuesArray;
        }
        res.render('index', hbsObject);
    });
});

router.post('/', (req, res) => {
    if (req.body.burger_name.length > 1) {
        Models.Burger.create({
            'burger_name': req.body.burger_name
        }).then(() => res.redirect('/'));
    } else () => res.end();
});

router.put('/:id', (req, res) => {
    // Devour the Burger
    Models.Burger.update(
        { devoured: true },
     {
        where: {
            id: req.params.id
        }
    }).then(() => res.redirect('/'));
});

router.delete('/:id', (req, res) => {
    Models.Burger.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => res.redirect('/'));
});

module.exports = router;