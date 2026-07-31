var express = require('express');
var router = express.Router();

const axios = require('axios');

router.get('/', async function(req, res) {

    const response = await axios.get("https://dog.ceo/api/breeds/image/random");

    const image = response.data.message;

    res.render('dog', {
        image:image
    });

});

module.exports = router;