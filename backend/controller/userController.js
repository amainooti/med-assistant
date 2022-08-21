
const User = require("../models/userModel")


// controller for users data

// @method: GET
const getUser = async (req, res)=>{
    const user = await User.find()
    res.status(200).json(user)
}

// @method: POST
const setUser = async (req, res)=>{

    // const user = await User.create({
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password,
    //     telephone: req.body.telephone
    // })
    res.status(200).json({message: "Testing user"})
}

// @method: PUT
const updateUser = (req, res)=>{
    res.status(200).json({
        message: `Updating user data ${req.params.id}`
    })
}

// @method: DELETE
const deleteUser = (req, res)=>{
    res.status(200).json({
        message: `Deleting user data ${req.params.id}`
    })
}


module.exports = {
    getUser,
    setUser,
    updateUser,
    deleteUser
}