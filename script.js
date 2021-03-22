const keys = document.querySelectorAll('.piano-key');
const white = ['D','F','G','H','J','K','L'];
const black = ['R','T','U','I','O'];
const whiteKeys = document.querySelectorAll(".piano-key.white");
const blackKeys = document.querySelectorAll(".piano-key.sharp");
   

keys.forEach(key => {
    key.addEventListener('click', () => {
        playSound(key)
    })
});


document.addEventListener('keydown', e => {
    const key = e.key
    const whiteKeyIndex = white.indexOf(key)
    const blackKeyIndex = black.indexOf(key)
    if (whiteKeyIndex > -1) playSound(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1) playSound(blackKeys[blackKeyIndex])
    
  })


function playSound (key){
const keyAudio = document.getElementById(key.dataset.note)
keyAudio.currentTime = 0;
keyAudio.play();
}; 

const noteButton = document.querySelector('.btn-notes')
const letterButton = document.querySelector('.btn-letters')
console.log(noteButton)
noteButton.addEventListener('click', (e) =>{
    noteButton.classList.add('btn-active')
    letterButton.classList.remove('btn-active')
    keys.forEach(key=>{
        key.dataset.actual = key.dataset.note

    })
    
})

letterButton.addEventListener('click', (e) =>{
    letterButton.classList.add('btn-active')
    noteButton.classList.remove('btn-active')
    keys.forEach(key=>{
        key.dataset.actual = key.dataset.letter
    })
})



