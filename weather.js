const weather = document.querySelector('.js-weather');

const API_KEY = '3ea0151eb126e8fc6d507096df4f0e91';
const COORDS = 'coords';

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function (res) {
        return (res.json());
    }).then(function (json) {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerHTML = `${temperature} @ ${place}`
    })
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    // latitude(위도)
    console.log(position);
    const latitude = position.coords.latitude;
    //longitude(경도);
    const longitude = position.coords.longitude;
    const coordsObj = {
        //객체와 key이름이 같다면 밑에도 방법도 가능.
        // latitude: latitude,
        // longitude: longitude
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log('Cant access geo location');
}

function askForCoords() {
    //위치 얻는 방법.
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords() {
    const loadedCords = localStorage.getItem(COORDS);
    if (loadedCords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCords)
        // console.log(parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}
init();