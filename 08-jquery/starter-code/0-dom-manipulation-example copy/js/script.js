"use strict";

const url = "http://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "APIKEY"; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work
const activities = {
	teamIn: ['basketball','hockey','volleyball'],
	teamOutWarm: ['softball/baseball','football/soccer','American football','rowing','tennis','volleyball','ultimate frisbee','rugby'],
	teamOutCold: ['hockey'],
	soloIn: ['rock climbing','swimming','ice skating'],
	soloOutWarm: ['rowing','running','hiking','cycling','rock climbing'],
	soloOutCold: ['snowshoeing','downhill skiing','cross-country skiing','ice skating']
}
let state = {};
let category = 'all';

// get weather data when user clicks Forecast button, then add temp & conditions to view
document.querySelector('.forecast-button').addEventListener('click', function(e) {
	e.preventDefault();
//	const location = document.querySelector('#location').value;
	document.querySelector('#location').value = '';
/*
	fetch(url + location + '&appid=' + apiKey).then(function(response) {
		return(response.json());
	}).then(function(response) {
		updateUISuccess(response);
	}).catch(function() {
		updateUIFailure();
	});
*/

	let data = {
		"coord":{
			"lon":-122.42,
			"lat":37.77
		},
		"weather":[
			{
				"id":800,
				"main":"Clear",
				"description":"clear sky",
				"icon":"01d"
			}
		],
		"base":"stations",
		"main":{
			"temp":289.82,
			"pressure":1019,
			"humidity":72,
			"temp_min":288.15,
			"temp_max":291.15
		},
		"visibility":14484,
		"wind":{
			"speed":1.5,
			"deg":190
		},
		"clouds":{
			"all":0
		},
		"dt":1507138500,
		"sys":{
			"type":1,
			"id":392,
			"message":0.0037,
			"country":"US",
			"sunrise":1507126136,
			"sunset":1507167990
		},
		"id":5391959,
		"name":"San Francisco",
		"cod":200
	};
	updateUISuccess(data);
}, false);

// fetched from openweathermap.org


// update list of sports when user selects a different category (solo/team/all)
document.querySelectorAll('.options div').forEach(function(el) {
	el.addEventListener('click', updateActivityList, false);
});

// handle ajax success
function updateUISuccess(response) {
	const degC = response.main.temp - 273.15;
	const degCInt = Math.floor(degC);
	const degF = degC * 1.8 + 32;
	const degFInt = Math.floor(degF);
	state = {
		condition: response.weather[0].main,
		icon: "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png",
		degCInt: Math.floor(degCInt),
		degFInt: Math.floor(degFInt),
		city: response.name
	};

	const into = document.querySelector('.conditions');

	let container = document.createElement('div');
	let cityPara = document.createElement('p');
	cityPara.class = 'city';
	cityPara.textContent = state.city;
	let conditionsPara = document.createElement('p');
	conditionsPara.textContent = state.degCInt + '\u00B0 C / ' + state.degFInt + '\u00B0 F';
	//conditionsPara.textContent = `${state.degCInt}\u00B0 C / ${state.degFInt}\u00B0 F`;
	let iconImage = document.createElement('img');
	iconImage.src = state.icon;
	iconImage.alt = state.condition;
	conditionsPara.appendChild(iconImage);
	container.appendChild(cityPara);
	container.appendChild(conditionsPara);
	if (document.querySelector('.conditions div')) {
		into.replaceChild(container, document.querySelector('.conditions div'));
	} else {
		into.appendChild(container);
	}

	updateActivityList();
}

// handle selection of a new category (team/solo/all) 
function updateActivityList(event) {
	if (event !== undefined && event.target.classList.contains('selected')) {
		// if the 'event' parameter is defined, then a tab has been clicked; if not, then this is the
		//   default case and the view simply needs to be updated
		// if the clicked tab has the class 'selected', then no need to change location of 'selected' class
		//   or change the DOM
		return true;
	} else if (event !== undefined && !event.target.classList.contains('selected')) {
		// if the 'event' parameter is defined, then a tab has been clicked
		// if the clicked tab does not have the class 'selected', then location of 'selected' class must be added
		//   to the clicked element and removed from its siblings
		category = event.target.id;

		document.querySelectorAll('.options div').forEach(function(el) {
			el.classList.remove('selected');
		});

		event.target.classList.add('selected');
	} 

	state.activities = [];
	if (state.condition === "Rain") {
		updateState('In');
	} else if (state.condition === "Snow" || state.degFInt < 50) {
		updateState('OutCold');
	} else {
		updateState('OutWarm');
	}

	function updateState(type) {
		if (category === "solo") {
			state.activities.push(...activities['solo' + type]);
		} else if (category === "team") {
			state.activities.push(...activities['team' + type]);
		} else {
			state.activities.push(...activities['solo' + type]);
			state.activities.push(...activities['team' + type]);
		}
	}

	const into = document.querySelector('.activities');

	let activitiesContainer = document.createElement('div');
	let list = document.createElement('ul');
	state.activities.forEach(function(activity,index) {
		let listItem = document.createElement('li');
		listItem.setAttribute('key', index);
		listItem.textContent = activity;
		list.appendChild(listItem);
	});
	activitiesContainer.appendChild(list);
	if (document.querySelector('.activities div')) {
		into.replaceChild(activitiesContainer, document.querySelector('.activities div'));
	} else {
		into.appendChild(activitiesContainer);
	}

	document.querySelector('.results').classList.add('open');
}

// handle ajax failure
function updateUIFailure() {
	document.querySelector(".conditions").textContent = "Weather information unavailable";
}