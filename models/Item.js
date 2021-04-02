const { model, Schema } = require('mongoose')

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    created_by: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
})

module.exports = model('item', ItemSchema)