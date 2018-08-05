var express = require('express');
var router = express.Router();
const Item = require('../model/shopingItem');
var express = require('express');
var fs = require("fs");

var loginController =require('../controllers/login');
var dataController =require('../controllers/items');

var bcrypt = require('bcrypt');

router.post('/login', loginController.login)
 router.post('/signup', loginController.signup)

 router.delete('/signup/:id', loginController.deleteUser)
router.get('/items', dataController.getData)
router.post('/item', dataController.postData)
router.delete('/item/:id', dataController.deleteData)
router.put('/item/:id', dataController.editData)



// router.delete('/item/:id', (req, res, next) => {
//     Item.remove({ _id: req.params.id }, (err, result) => {
//         if (err) {
//             res.json(err)
//         }
//         else {
//             res.json(result)
//         }
//     })
// });


// router.put('/item/:id', (req, res, next) => {
//     Item.findOneAndUpdate({ _id: req.params.id }, {
//         $set: {
//             itemName: req.body.itemName,
//             itemQuantity: req.body.itemQuantity,
//             itemBought: req.body.itemBought,
//         }
//     }, { new: true }, function (err, result) {
//         if (err) {
//             res.json(err);
//         } else {
//             res.json(result)
//         }


//     });

// });

module.exports = router;