const request = require('request');
const argv = require('yargs').argv;


let apiKey ='bb537bd9470f6de5ff037bb63a716394';
let city = argv.c;
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`



	

request(url, function (err, respone, body) {
	if(err){
		console.log('error:',error);
	}
	else{
		var weather = JSON.parse(body);
		if(!argv.c){
			console.log('Please enter City Name');
		}
		else{
			let message = `It's ${weather.main.temp} degree Celsius in ${city}`
			console.log(message);
		}
		
	}	

});

