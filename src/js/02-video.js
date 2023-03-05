import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const throttle = require('lodash.throttle');

const player = new Player('vimeo-player');

player.on('timeupdate', throttle(onProgressTime, 1000));

function onProgressTime({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}

const theme = localStorage.getItem('videoplayer-current-time');

if (theme) {
  player.setCurrentTime(theme);
}
