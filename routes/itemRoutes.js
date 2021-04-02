const router = require('express').Router()
const { Item, User } = require('../models')

// CREATE one item
router.post('/items/:user_id', (req, res) => {
    // let newItem = {
    //     name: req.body.name,
    //     created_by: req.params.id
    // }

    // Create new item
    Item.create({
        name: req.body.name,
        created_by: req.params.user_id
    })
        .then(item => {
            // Find a user by it's ID then update and PUSH new item._id to the USER
            User.findByIdAndUpdate(req.params.user_id, {
                $push: {
                    items: item._id
                }
            })
                .then(() => {
                    res.sendStatus(200)
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
})

module.exports = router