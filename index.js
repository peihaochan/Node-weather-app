const request = require('request');

require('dotenv').config()

const getWeather = () => {
    request({
        uri: `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${process.env.APPID}`,
        json: false
        //json format if true, raw data if false
    }, (err, res) => {
        if(err) throw err;
        // comment what the error message is....
        /*

        common fixes: i need to install this, that and the other
        #1 ReferenceError: APP is not defined - APP needs to be APPID or change 

        */
        console.log(res.body);
    })
}

getWeather();