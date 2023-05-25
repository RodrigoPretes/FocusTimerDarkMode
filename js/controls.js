
export default function Controls({
  selectBackground,
  svgSelector,
  buttonLight,
  buttonDark,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonPlus,
  buttonLess,
  buttonTree,
  buttonRain,
  buttonMarket,
  buttonFire,
  controlsTimer,
  cards,
  volumeBar
}){

function reset(){
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
}

function play(){
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
}
function pause() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
}
function modeDark(){
  selectBackground.classList.add('dark')
  selectBackground.classList.remove('sun')
  buttonDark.classList.remove('hide')
  buttonLight.classList.add('hide')
}
function modeLight(){
  selectBackground.classList.remove('dark')
  selectBackground.classList.add('sun')
  buttonDark.classList.add('hide')
  buttonLight.classList.remove('hide')
}

  return{
    reset,
    play, 
    pause,
    modeDark,
    modeLight,
  }
}