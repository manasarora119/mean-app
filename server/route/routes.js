var express = require('express');
var router = express.Router();
const Item = require('../model/shopingItem');
var fs = require("fs");

router.get('/items', (req, res, next) => {

    Item.find((err, items) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(items);
        }
    })

});

router.post('/item', (req, res, next) => {
    console.log(req.body);
    let newItem = new Item({
        itemName: req.body.itemName,
        itemQuantity: req.body.itemQuantity,
        itemBought: req.body.itemBought,
    })
    newItem.save((err, item) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json({ msg: 'inserted successfully' })
            console.log('inserted successfully');
        }
    });
});


router.delete('/item/:id', (req, res, next) => {
    Item.remove({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result)
        }
    })
});


router.put('/item/:id', (req, res, next) => {
    Item.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            itemName: req.body.itemName,
            itemQuantity: req.body.itemQuantity,
            itemBought: req.body.itemBought,
        }
    }, { new: true }, function (err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result)
        }


    });

});

module.exports = router;