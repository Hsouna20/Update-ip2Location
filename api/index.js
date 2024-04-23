const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const LocationModel = require('./model/adress');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/updateDatabase").then(
    () => {
        console.log('MongoDb is connected');
    }).catch(err => {
        console.log(err);
    });

app.get('/getinfo', async (req, res) => {
    const { original_ip_from, original_ip_to } = req.query;

    try {
        const location = await LocationModel.findOne({
            ip_from: original_ip_from,
            ip_to: original_ip_to
        });

        if (location) {
            res.json({ result: location });
        } else {
            res.json({ result: 'No information found for this IP address range.' });
        }
    } catch (error) {
        console.error('Error querying database:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/saveinfo', async (req, res) => {
    const { original_ip_from, original_ip_to, ip_from, ip_to, country_code, country_name, region_name, city_name, latitude, longitude, zip_code, time_zone } = req.body;

    try {
        // Build the update object with provided fields
        const updateFields = {};
        if (ip_from) updateFields.ip_from = ip_from;
        if (ip_to) updateFields.ip_to = ip_to;
        if (country_code) updateFields.country_code = country_code;
        if (country_name) updateFields.country_name = country_name;
        if (region_name) updateFields.region_name = region_name;
        if (city_name) updateFields.city_name = city_name;
        if (latitude) updateFields.latitude = latitude;
        if (longitude) updateFields.longitude = longitude;
        if (zip_code) updateFields.zip_code = zip_code;
        if (time_zone) updateFields.time_zone = time_zone;

        // Update or insert the document based on original_ip_from and original_ip_to
        const filter = { ip_from: original_ip_from, ip_to: original_ip_to };
        const options = { upsert: true, new: true };
        const result = await LocationModel.findOneAndUpdate(filter, updateFields, options);

        res.status(200).send('Data saved successfully');
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).send('Internal server error');
    }
});

app.delete('/deleteinfo', async (req, res) => {
    const { original_ip_from, original_ip_to } = req.body;

    try {
        await LocationModel.deleteOne({
            ip_from: original_ip_from,
            ip_to: original_ip_to
        });

        console.log('Data deleted successfully');
        res.status(200).send('Data deleted successfully');
    } catch (error) {
        console.error('Error deleting data:', error);
        res.status(500).send('Internal server error');
    }
});



app.listen(3010, () => {
    console.log("server is running on port 3010");
});
