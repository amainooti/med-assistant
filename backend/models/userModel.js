const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add name"]
    },
    email: {
        type: String,
        required: [true, "Please add email"]
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
    },
    telephone: {
        type: Number,
        required: [true, "Insert a contact"]
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)