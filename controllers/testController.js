exports.myFunction = (req, res) => {
    res.render('hello', {
        name: req.params.name,
        title: "TheTitle"
    });
};