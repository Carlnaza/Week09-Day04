const { model, Schema } = require('mongoose')

const UserSchema = new Schema({ 
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    items: [
        {
            type: Schema.Types.ObjectId,
            ref: 'item'
        }
    ]
})

module.exports = model('user', UserSchema)