import{
  volumeBar
} from "./elements.js"
export default function(){

  const buttonPressTree = new Audio("https://drive.google.com/file/d/1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA/view");
  const buttonPressRain = new Audio("https://drive.google.com/file/d/1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2/view");
  const buttonPressMarket = new Audio("https://drive.google.com/file/d/1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA/view");
  const buttonPressFire = new Audio("https://drive.google.com/file/d/1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA/view");

  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  buttonPressTree.loop = true;
  buttonPressRain.loop = true;
  buttonPressMarket.loop = true;
  buttonPressFire.loop = true;

  const audio = [new Audio("./sounds/Floresta.wav"),new Audio("./sounds/Chuva.wav"),new Audio("./sounds/Cafeteria.wav"),new Audio("./sounds/Lareira.wav")];

  function Play(song){
    song.play();
    song.loop = true;
    volumeBar[0].addEventListener('change', function(){
      audio[0].volume = Number(volumeBar[0].value);
    })
    volumeBar[1].addEventListener('change', function(){
      audio[1].volume = Number(volumeBar[1].value);
    })
    volumeBar[2].addEventListener('change', function(){
      audio[2].volume = Number(volumeBar[2].value);
    })
    volumeBar[3].addEventListener('change', function(){
      audio[3].volume = Number(volumeBar[3].value);
    })
  }
  function Stop(song){
    song.pause();
    song.currentTime = 0;
  }
 
  function pressButtonTree(){
    buttonPressTree.play();
    buttonPressRain.pause();
    buttonPressMarket.pause();
    buttonPressFire.pause();
  }
  function pressButtonRain(){
    buttonPressTree.pause();
    buttonPressRain.play();
    buttonPressMarket.pause();
    buttonPressFire.pause();
  }
  function pressButtonMarket(){
    buttonPressTree.pause();
    buttonPressRain.pause();
    buttonPressMarket.play();
    buttonPressFire.pause();
  }
  function pressButtonFire(){
    buttonPressTree.pause();
    buttonPressRain.pause();
    buttonPressMarket.pause();
    buttonPressFire.play();
  }
  function pressButton(){
    buttonPressAudio.play();
  }
  function timeEnd() {
    kitchenTimer.play()
  }

  return{
    audio,
    Play,
    Stop,
    pressButtonFire,
    pressButtonMarket,
    pressButtonRain,
    pressButtonTree,
    pressButton,
    timeEnd
  }
}