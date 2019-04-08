
let moment, coordinatedH, coordinatedM, coordinatedS, clock;

// array of objects containing infos about UTC time offsets
const timeZones = [
    {difference: [-12, 0, 0], tZone: "UTC−12:00", details: "https://en.wikipedia.org/wiki/UTC%E2%88%9212:00"},
    {difference: [-11, 0, 0], tZone: "UTC−11:00", details: "https://en.wikipedia.org/wiki/UTC%E2%88%9211:00"},
    {difference: [-10, 0, 0], tZone: "UTC−10:00", details: "https://en.wikipedia.org/wiki/UTC%E2%88%9210:00"},
    {difference: [-9, -30, 0], tZone: "UTC−09:30", details: "https://en.wikipedia.org/wiki/UTC%E2%88%9209:30"},
    {difference: [-9, 0, 0], tZone: "UTC−09:00", details: "https://en.wikipedia.org/wiki/UTC%E2%88%9209:00"},
    {difference: [-8, 0, 0], tZone: "UTC−08:00", details: "https://en.wikipedia.org/wiki/UTC%E2%88%9208:00"},
    {difference: [-7, 0, 0], tZone: "UTC−07:00", details: "https://en.wikipedia.org/wiki/UTC%E2%88%9207:00"},
    {difference: [-6, 0, 0], tZone: "UTC−06:00", details: "https://en.wikipedia.org/wiki/UTC%E2%88%9206:00"},
    {difference: [-5, 0, 0], tZone: "UTC−05:00", details: "https://en.wikipedia.org/wiki/UTC%E2%88%9205:00"},
    {difference: [-4, 0, 0], tZone: "UTC−04:00", details: "https://en.wikipedia.org/wiki/UTC%E2%88%9204:00"},
    {difference: [-3, -30, 0], tZone: "UTC−03:30", details: "https://en.wikipedia.org/wiki/UTC%E2%88%9203:30"},
    {difference: [-3, 0, 0], tZone: "UTC−03:00", details: "https://en.wikipedia.org/wiki/UTC%E2%88%9203:00"},
    {difference: [-2, 0, 0], tZone: "UTC−02:00", details: "https://en.wikipedia.org/wiki/UTC%E2%88%9202:00"},
    {difference: [-1, 0, 0], tZone: "UTC−01:00", details: "https://en.wikipedia.org/wiki/UTC%E2%88%9201:00"},
    {difference: [0, 0, 0], tZone: "UTC (Universal Coordinated Time)", details: "https://en.wikipedia.org/wiki/UTC%C2%B100:00"},
    {difference: [1, 0, 0], tZone: "UTC+01:00", details: "https://en.wikipedia.org/wiki/UTC%2B01:00"},
    {difference: [2, 0, 0], tZone: "UTC+02:00", details: "https://en.wikipedia.org/wiki/UTC%2B02:00"},
    {difference: [3, 0, 0], tZone: "UTC+03:00", details: "https://en.wikipedia.org/wiki/UTC%2B03:00"},
    {difference: [3, 30, 0], tZone: "UTC+03:30", details: "https://en.wikipedia.org/wiki/UTC%2B03:30"},
    {difference: [4, 0, 0], tZone: "UTC+04:00", details: "https://en.wikipedia.org/wiki/UTC%2B04:00"},
    {difference: [4, 30, 0], tZone: "UTC+04:30", details: "https://en.wikipedia.org/wiki/UTC%2B04:30"},
    {difference: [5, 0, 0], tZone: "UTC+05:00", details: "https://en.wikipedia.org/wiki/UTC%2B05:00"},
    {difference: [5, 30, 0], tZone: "UTC+05:30", details: "https://en.wikipedia.org/wiki/UTC%2B05:30"},
    {difference: [5, 45, 0], tZone: "UTC+05:45", details: "https://en.wikipedia.org/wiki/UTC%2B05:45"},
    {difference: [6, 0, 0], tZone: "UTC+06:00", details: "https://en.wikipedia.org/wiki/UTC%2B06:00"},
    {difference: [6, 30, 0], tZone: "UTC+06:30", details: "https://en.wikipedia.org/wiki/UTC%2B06:30"},
    {difference: [7, 0, 0], tZone: "UTC+07:00", details: "https://en.wikipedia.org/wiki/UTC%2B07:00"},
    {difference: [8, 0, 0], tZone: "UTC+08:00", details: "https://en.wikipedia.org/wiki/UTC%2B08:00"},
    {difference: [8, 45, 0], tZone: "UTC+08:45", details: "https://en.wikipedia.org/wiki/UTC%2B08:45"},
    {difference: [9, 0, 0], tZone: "UTC+09:00", details: "https://en.wikipedia.org/wiki/UTC%2B09:00"},
    {difference: [9, 30, 0], tZone: "UTC+09:30", details: "https://en.wikipedia.org/wiki/UTC%2B09:30"},
    {difference: [10, 0, 0], tZone: "UTC+10:00", details: "https://en.wikipedia.org/wiki/UTC%2B10:00"},
    {difference: [10, 30, 0], tZone: "UTC+10:30", details: "https://en.wikipedia.org/wiki/UTC%2B10:30"},
    {difference: [11, 0, 0], tZone: "UTC+11:00", details: "https://en.wikipedia.org/wiki/UTC%2B11:00"},
    {difference: [12, 0, 0], tZone: "UTC+12:00", details: "https://en.wikipedia.org/wiki/UTC%2B12:00"},
    {difference: [12, 45, 0], tZone: "UTC+12:45", details: "https://en.wikipedia.org/wiki/UTC%2B12:45"},
    {difference: [13, 0, 0], tZone: "UTC+13:00", details: "https://en.wikipedia.org/wiki/UTC%2B13:00"},
    {difference: [14, 0, 0], tZone: "UTC+14:00", details: "https://en.wikipedia.org/wiki/UTC%2B14:00"}
];

getTime = () => {
    //instantinates the date
    let now = new Date();

    //converts time to string
    moment = now.toTimeString();

    //gets UTC hours, minutes, seconds
    coordinatedH = now.getUTCHours();
    coordinatedM = now.getUTCMinutes();
    coordinatedS = now.getUTCSeconds();
}

//generates the clock for each time Zone
generateOffsetClock = (ofH, ofM, ofS) => {
    let offsetH = coordinatedH + ofH;
    let offsetM = coordinatedM + ofM;
    let offsetS = coordinatedS + ofS;

    formatClock (offsetH, offsetM, offsetS);
}

//formats the clock
formatClock = (h, m, s) => {
    //adjusts the minutes and hours
    m >= 60 ? (m = m - 60, h ++) : m = m;
    m < 0 ? (m = 60 + m, h --) : m = m;
    h >= 24 ? h = h - 24 : h = h;
    h < 0 ? h = 24 + h : h = h;

    //makes the hours, minutes and seconds in 2 digits format
    h < 10 ? h = "0" + h : h = h;
    m < 10 ? m = "0" + m : m = m;
    s < 10 ? s = "0" + s : s = s;

    clock = `${h}:${m}:${s}`;
}



//displays the local time
populateLocalClock = () => {
    let localClock = `<h2 class = 'timeZone'> Your Local time </h2>
                      <div  class = 'localDigitalClock'> ${moment} </div>`;
    document.getElementById('localTime').innerHTML = localClock;
}

//displays the time around the world according to timeZones
populateWorldClocks = () => {
    //loops over the timeZones array
    for (zone of timeZones) {
        generateOffsetClock (zone.difference[0], zone.difference[1], zone.difference[2]);

        //displays the clocks
        let worldClock = `<div class = 'timeContainer'>
                              <h2 class = 'timeZone'> ${zone.tZone} </h2>
                              <div  class = 'digitalClock'> ${clock} </div>
                              <a class = "details" href = ${zone.details}> Time zone details </a>
                          </div>`;
        document.getElementById('worldTimeContainer').insertAdjacentHTML('beforeend', worldClock);
    };
}

// updates the displayed clocks
updateClocks = () => {
    //updates local clock
    document.querySelector('.localDigitalClock').textContent = moment;

    //updates world updateClocks
    const clocksArr = document.querySelectorAll('.digitalClock');
    for (i = 0; i < clocksArr.length; i++) {
        generateOffsetClock (timeZones[i].difference[0], timeZones[i].difference[1], timeZones[i].difference[2]);
        clocksArr[i].textContent = clock;
    };
}

getTime ();
populateLocalClock();
populateWorldClocks();

// upates the clocks every second
setInterval( () => {
    getTime();
    updateClocks();
}, 1000);
