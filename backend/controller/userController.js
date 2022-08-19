
// controller for users data

// @method: GET
const getUser = (req, res)=>{
    res.status(200).json({
        message: "Fetching user data..."
    })
}
const setUser = (req, res)=>{
    res.status(200).json({
        message: "Setting user data..."
    })
}
const updateUser = (req, res)=>{
    res.status(200).json({
        message: `Updating user data ${req.params.id}`
    })
}
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