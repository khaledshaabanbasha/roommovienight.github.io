const player = document.getElementById('player-container');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const stopBtn = document.getElementById('stop-btn');

playBtn.addEventListener('click', () => {
	player.play();
});

pauseBtn.addEventListener('click', () => {
	player.pause();
});

stopBtn.addEventListener('click', () => {
	player.pause();
	player.currentTime = 0;
});
