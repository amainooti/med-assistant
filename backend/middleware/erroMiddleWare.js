const { stack } = require("../routes/userRoute");

const errorHandler = (err, req, res, next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode);

    res.json({
        message: err.message,
        stack: err.stack
    })
}

module.exports = {
    errorHandler
}