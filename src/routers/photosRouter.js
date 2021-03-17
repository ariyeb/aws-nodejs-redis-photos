const express = require('express');
const fetchPhotos = require('../utils/flickrFetcher');

const router = new express.Router();

router.get('/search-photos/:searchValue', async (req, res) => {
    try {
        const photosData = await fetchPhotos(req.params.searchValue);
        res.send(photosData);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;