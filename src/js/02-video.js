import throttle from 'lodash.throttle';

const basicDurPerSec = JSON.parse(localStorage.getItem("videoplayer-current-time"));

if (basicDurPerSec) {
player.setCurrentTime(basicDurPerSec.seconds).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});};

const currentTime = function (durPerSec) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(durPerSec));

};

player.on('timeupdate', throttle(currentTime, 1000));



