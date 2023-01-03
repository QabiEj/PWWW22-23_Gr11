var myVideo = document.getElementById("video1"); 
function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
  myVideo.pause(); 
   
} 

function makeBig() { 
    myVideo.width = 1200; 
  
} 

function makeSmall() { 
    myVideo.width = 600; 

} 

function makeNormal() { 
    myVideo.width = 800; 

} 

