

const Item = require('../model/shopingItem');
var express = require('express');
var fs = require("fs");

exports.getData =  (req, res, next) => {
    Item.find((err, items) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(items);
        }
    })
};

exports.postData = (req, res, next) => {
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
}

exports.deleteData = (req, res, next) => {
    Item.remove({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result)
        }
    })
}
exports.editData = (req, res, next) => {
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
}

