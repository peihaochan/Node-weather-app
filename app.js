// USING PROMISIFT BY MODULE (INCLUDE ENV.)

const request = require('request');
const {promisify} = require('util');

// const APPID = 'eb40a205bf713ac9c6b287a42403cbbf';
require('dotenv').config() //www.npmjs.com/package/dotenv

const promisifiedRequest = promisify(request);

const getWeather = async () => {
    let data = await promisifiedRequest({
        uri: `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${process.env.APPID}`,
        json: true
    })
    console.log(data.body)
}

getWeather();

