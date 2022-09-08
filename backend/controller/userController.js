
const User = require("../models/userModel")
// controller for users data

// @method: GET
const getUser = async (req, res) => {
    try {
        const user = await User.find()
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}

// @method: POST
const setUser = async (req, res) => {    // name, telephone, hospital
    // const { name, telephone, hospital } = req.body
    // try {
    //     const createUSer = await User.insertMany([name, telephone, hospital])
    //     res.status(201).json(createUSer)
    // } catch (error) {
    //     res.status(401).json({ message: error.message })
    // }
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