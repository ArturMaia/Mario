const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');

const jump=() =>{
    mario.classList.add('jump');
    setTimeout(()=>{
        mario.classList.remove('jump');
    }, 500);
}
document.addEventListener('keydown',jump);

const loop = setInterval(()=>{
    const tuboPosicao =tubo.offsetLeft;
    const marioPosicao = +window.getComputedStyle(mario).bottom.replace('px','');
    if(tuboPosicao<=120 && tuboPosicao >0 && marioPosicao < 90){
        tubo.style.animation='none';
        tubo.style.left=`${tuboPosicao}px`;
        mario.style.animation='none';
        mario.style.bottom=`${marioPosicao}px`;

        mario.src='./assets/img/game-over.png';
        mario.style.width='75px'
        mario.style.marginLeft='50px'

        clearInterval(loop);
    }

},10);