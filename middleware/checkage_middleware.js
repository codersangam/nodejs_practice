module.exports = checkage = (req, res, next) => {
    if (!req.query.age) {
        res.send("Please provide age query.")
    }
    else if (req.query.age < 18) {
        res.send("You are not allowed to visit website")
    }
    next();
}