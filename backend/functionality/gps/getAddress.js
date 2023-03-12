const axios = require("axios");

async function getAddress(lat, long) {

    let address = "None";
    
    try {
        const response = await axios({
            method: "GET",
            url: `https://forward-reverse-geocoding.p.rapidapi.com/v1/reverse?lat=${lat}&lon=${long}&polygon_threshold=0.0`,
            headers: {
                "X-RapidAPI-Key": "<RETRACTED>"
            }
        })
        
        try {
            address = response.data.address.postcode;
        } catch (err) {}

        address ? address = address: address = "None";

    } catch (err) {}

    return address;
}

module.exports = { getAddress }