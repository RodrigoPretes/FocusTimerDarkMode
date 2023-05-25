const selectBackground = document.querySelector('.background');
const svgSelector = document.querySelectorAll('.changeColor');
const buttonLight = document.querySelector('.light');
const buttonDark = document.querySelector('.dark');
const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus');
const buttonLess = document.querySelector('.less');
const Tree = document.querySelector('.tree');
const Rain = document.querySelector('.rain');
const Market = document.querySelector('.market');
const Fire = document.querySelector('.fire');
const buttonTree = document.querySelector('.buttonTree');
const buttonRain = document.querySelector('.buttonRain');
const buttonMarket = document.querySelector('.buttonMarket');
const buttonFire = document.querySelector('.buttonFire');
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const controlsTimer = document.getElementById('controls')
const cards = document.getElementById('cards')

const volumeBar = document.querySelectorAll('.volume');

export {
  selectBackground,
  svgSelector,
  buttonLight,
  buttonDark,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonPlus,
  buttonLess,
  Tree,
  Rain,
  Market,
  Fire,
  buttonTree,
  buttonRain,
  buttonMarket,
  buttonFire,
  minutesDisplay,
  secondsDisplay,
  controlsTimer,
  cards,
  volumeBar
}