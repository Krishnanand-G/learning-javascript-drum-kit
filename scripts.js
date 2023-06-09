window.addEventListener('keydown', function(e)
{
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if(!audio) return; // stop the function from running all together
    audio.currentTime = 0; //revind to start
    audio.play();

    key.classList.add('playing')
});


function removeTransition(e) {
    console.log(e);
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
    console.log(e.propertyName);
}

const keys = document.querySelectorAll('.key');      
keys.forEach( key => key.addEventListener('transitionend', removeTransition));
