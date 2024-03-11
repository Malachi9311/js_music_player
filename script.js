let progress = document.getElementById('progress');
let song = document.getElementById('song');
let cntlIcon = document.getElementById('cntlIcon');

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

const playPause = () => {
    if (cntlIcon.classList.contains("fa-pause")) {
        song.pause();
        cntlIcon.classList.remove("fa-pause");
        cntlIcon.classList.add("fa-play");
    }else{
        song.play();
        cntlIcon.classList.add("fa-pause");
        cntlIcon.classList.remove("fa-play");
    }
}