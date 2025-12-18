var main=document.querySelector('.main');
var mainpiano=document.querySelector('.main-pianobox');
var aud=new Audio('./mixkit-hard-single-key-press-in-a-laptop-2542.wav');


const keys = document.querySelectorAll(
  '.bblock1,.bblock2,.bblock3,.bblock4,.ablock1,.ablock2,.ablock3,.binner1,.binner2,.binner3,.ainner1,.ainner2'
);

function playSound(key) {
  const audio = new Audio('./mixkit-hard-single-key-press-in-a-laptop-2542.wav');
  audio.currentTime = 0;
  audio.play();

  key.classList.add('active');
  setTimeout(() => key.classList.remove('active'), 120);
}

keys.forEach(key => {
  key.addEventListener('click', () => playSound(key));
});

document.addEventListener('keydown', (e) => {
  const key = [...keys].find(k => k.innerText === e.key.toUpperCase());
  if (key) playSound(key);
});
