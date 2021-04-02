const router = require('express').Router()
const { User } = require('../models')

// GET one user
router.get('/user/:id', (req, res) => {
    // Find the user by its ID
    User.findById(req.params.id)
    // Populate all data reference by the item
        .populate({
            // Object property 'items'
                path: 'items',
            // Model of item
                model: 'item'
            })
        .then(user => res.json(user))
        .catch(err => console.log(err))
})

// GET all users
router.get('/users', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => console.log(err))
})

// CREATE one user
router.post('/user', (req, res) => {
    User.create(req.body)
        .then(() => {
            res.sendStatus(200)
        })
        .catch(err => console.log(err))
})

module.exports = router