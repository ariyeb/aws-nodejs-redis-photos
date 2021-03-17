const Axios = require('axios');

const fetchPhotos = async (searchValue) => {
    const flickerKey = process.env.FLICKR_KEY;
    const URL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickerKey}&format=json&nojsoncallback=1&extras=url_m&safesearch=1&text=` + searchValue;
    try {
        const { data } = await Axios.get(URL);
        const photosData = data.photos.photo;

        return photosData.length === 0 ?
            photosData :
            photosData
                .filter(photoData => photoData.url_m != undefined)
                .map(photoData => ({ url: photoData.url_m, alt: photoData.title, id: photoData.id }));
    } catch (err) {
        throw err;
    }
};

module.exports = fetchPhotos;