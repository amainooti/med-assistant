

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
        message: "Updating user data..."
    })
}
const deleteUser = (req, res)=>{
    res.status(200).json({
        message: "Deleting user data..."
    })
}


module.exports = {
    getUser,
    setUser,
    updateUser,
    deleteUser
}