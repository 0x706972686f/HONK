var topBeak = document.getElementById('topbeak');
var btmBeak = document.getElementById('bottombeak');
var honkLines = document.getElementById('honks');
var honk = document.getElementById('audio');

document.body.addEventListener('click', function(){
        topBeak.classList.add('honk')
        btmBeak.classList.add('honk')
        honkLines.classList.add('honk')
        if (honk.paused) {
          honk.play();
        }else{
          honk.currentTime = 0
          honk.play();
        }
        
      
        setTimeout(function(){
          topBeak.classList.remove('honk')
          honkLines.classList.remove('honk')
          btmBeak.classList.remove('honk')
        }, 300)
  
});