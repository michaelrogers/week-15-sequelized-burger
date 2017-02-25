const express = require('express');
const router = express.Router();

//Import burger model to access ORM methods
const burger = require('../models/burger.js');

//Define router
let hbsObject = {};
router.get('/', (req, res) => {
    burger.selectAll((data) => {
        hbsObject.burger = data;
        res.render('index', hbsObject);
    });
});

router.post('/', (req, res) => {
    console.log(req.body)
    burger.insertOne(
        ['burger_name'],
        [req.body.burger_name],
        () => res.redirect('/')
    );
});

router.put('/:id', (req, res) => {
    burger.updateOne(
        ['id', 'burger_name', 'devoured'],
        [req.params.id, req.body.burger_name, 1],
        'id', req.params.id,
        () => res.redirect('/')
    );
});

router.delete('/:id', (req, res) => {
    burger.deleteOne(
        'id', req.params.id,
        () => res.redirect('/')
    )
})

module.exports = router;