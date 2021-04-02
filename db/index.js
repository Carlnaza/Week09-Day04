module.exports = require('mongoose').connect('mongodb://localhost/user_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
