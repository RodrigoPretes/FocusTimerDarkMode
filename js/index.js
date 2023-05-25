import Timer from "./timer.js"
import Sound from "./sounds.js"
import Controls from "./controls.js"
import {
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
  controlsTimer,
  cards,
} from "./elements.js"


const controls = Controls({
  selectBackground,
  svgSelector,
  buttonLight,
  buttonDark,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonPlus,
  Tree,
  Rain,
  Market,
  Fire,
  buttonLess,
  buttonTree,
  buttonRain,
  buttonMarket,
  buttonFire,
  controlsTimer,
  cards,
})

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const sound = Sound()

const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  resetControls: controls.reset
})

buttonLight.addEventListener('click',function(){
  controls.modeDark();
  for(let i =0; i< svgSelector.length; i++){
    svgSelector[i].classList.add('changeColorNow')
  }
  Tree.classList.toggle('darks')
  Rain.classList.toggle('darks')
  Market.classList.toggle('darks')
  Fire.classList.toggle('darks')
})
buttonDark.addEventListener('click',function(){
  controls.modeLight();
  for(let i =0; i< svgSelector.length; i++){
    svgSelector[i].classList.remove('changeColorNow')
    }
  Tree.classList.toggle('darks')
  Rain.classList.toggle('darks')
  Market.classList.toggle('darks')
  Fire.classList.toggle('darks')
})

buttonPlay.addEventListener('click', function() {
  controls.play();
  timer.countdown();
  sound.pressButton();
})

buttonPause.addEventListener('click', function() {
  controls.pause();
  timer.hold();
  sound.pressButton();
})

buttonStop.addEventListener('click',function(){
  controls.reset();
  timer.reset();
  sound.pressButton();
})
buttonPlus.addEventListener('click',function(){
  timer.plusMinutes5();
  sound.pressButton();
})
buttonLess.addEventListener('click',function(){
  timer.lessMinutes5();
  sound.pressButton();
})
buttonTree.addEventListener('click',function(){
  buttonTree.classList.toggle('active');
  Tree.classList.toggle('active');
  buttonTree.className === 'buttonTree' ? sound.Stop(sound.audio[0]):sound.Play(sound.audio[0])
})
buttonRain.addEventListener('click',function(){
  buttonRain.classList.toggle('active');
  Rain.classList.toggle('active');
  buttonRain.className === 'buttonRain' ? sound.Stop(sound.audio[1]):sound.Play(sound.audio[1])
})
buttonMarket.addEventListener('click',function(){
  buttonMarket.classList.toggle('active');
  Market.classList.toggle('active');
  buttonMarket.className === 'buttonMarket' ? sound.Stop(sound.audio[2]):sound.Play(sound.audio[2])
})
buttonFire.addEventListener('click',function(){
  buttonFire.classList.toggle('active');
  Fire.classList.toggle('active');
  buttonFire.className === 'buttonFire' ? sound.Stop(sound.audio[3]):sound.Play(sound.audio[3])
})




