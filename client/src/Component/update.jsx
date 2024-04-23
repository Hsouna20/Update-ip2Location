import React, { useState } from 'react';
import { Button, TextInput } from 'flowbite-react';
import axios from 'axios';

const Update = () => {
    const [originalIpFrom, setOriginalIpFrom] = useState('');
    const [originalIpTo, setOriginalIpTo] = useState('');
    const [ipFrom, setIpFrom] = useState('');
    const [ipTo, setIpTo] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [countryName, setCountryName] = useState('');
    const [regionName, setRegionName] = useState('');
    const [cityName, setCityName] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [timeZone, setTimeZone] = useState('');

    const handleSave = async () => {
        try {
            await axios.post('http://localhost:3010/saveinfo', {
                original_ip_from: originalIpFrom,
                original_ip_to: originalIpTo,
                ip_from: ipFrom,
                ip_to: ipTo,
                country_code: countryCode,
                country_name: countryName,
                region_name: regionName,
                city_name: cityName,
                latitude: latitude,
                longitude: longitude,
                zip_code: zipCode,
                time_zone: timeZone
            });
            console.log('Data saved successfully');
        } catch (error) {
            console.error(error);
        }
    };
    const handleDelete = async () => {
        try {
            await axios.delete('http://localhost:3010/deleteinfo', {
                data: {
                    original_ip_from: originalIpFrom,
                    original_ip_to: originalIpTo,
                }
            });
            console.log('Data deleted successfully');
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className='max-w-lg mx-auto p-3 w-full'>
            <h1 className='my-7 text-center font-semibold text-3xl'>Update Database Content</h1>
                <form  className='flex flex-col gap-4'>
            <div>
                <label>Original IP From:</label>
                <TextInput
                    type='text'
                    placeholder='Original Ip From'
                    value={originalIpFrom}
                    onChange={(e) => setOriginalIpFrom(e.target.value)}
                />
            </div>
            <div>
                <label>Modified IP From:</label>
                <TextInput
                    type='text'
                    placeholder='Modified Ip From'
                    value={ipFrom}
                    onChange={(e) => setIpFrom(e.target.value)}
                />
            </div>
            <div>
                <label>Original IP To:</label>
                <TextInput
                    type='text'
                    placeholder='Original Ip To'
                    value={originalIpTo}
                    onChange={(e) => setOriginalIpTo(e.target.value)}
                />
            </div>
            <div>
                <label>Modified IP To:</label>
                <TextInput
                    type='text'
                    placeholder='Modified Ip To'
                    value={ipTo}
                    onChange={(e) => setIpTo(e.target.value)}
                />
            </div>
            <div>
                <label>Country Code:</label>
                <TextInput
                    type='text'
                    placeholder='Country Code'
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                />
            </div>
            <div>
                <label>Country Name:</label>
                <TextInput
                    type='text'
                    placeholder='Country Name'
                    value={countryName}
                    onChange={(e) => setCountryName(e.target.value)}
                />
            </div>
            <div>
                <label>Region Name:</label>
                <TextInput
                    type='text'
                    placeholder='Region Name'
                    value={regionName}
                    onChange={(e) => setRegionName(e.target.value)}
                />
            </div>
            <div>
                <label>City Name:</label>
                <TextInput
                    type='text'
                    placeholder='City Name'
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                />
            </div>
            <div>
                <label>Latitude:</label>
                <TextInput
                    type='text'
                    placeholder='Latitude'
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                />
            </div>
            <div>
                <label>Longitude:</label>
                <TextInput
                    type='text'
                    placeholder='Longitude'
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                />
            </div>
            <div>
                <label>Zip Code:</label>
                <TextInput
                    type='text'
                    placeholder='Zip Code'
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                />
            </div>
            <div>
                <label>Time Zone:</label>
                <TextInput
                    type='text'
                    placeholder='Time Zone'
                    value={timeZone}
                    onChange={(e) => setTimeZone(e.target.value)}
                />
            </div>
            <Button
                type='submit'
                gradientDuoTone='purpleToBlue'
                outline
                onClick={handleSave}
            >
                Update
            </Button>
            <Button
                gradientDuoTone='redToYellow'
                outline
                onClick={handleDelete}
            >
                Delete
            </Button>
            </form>
        </div>
    );
};

export default Update;
