const { Schema, model, Schematypes } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            Unique: true,
            required: true,
            trim: true
        },
        // email: {
        //     type: String,
        //     required: true,
        //     unique: true
        // },
        password: {
            type: String,
            required: true
        }
    }
)
const User = model('User', userSchema);
module.exports = User;