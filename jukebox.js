function Jukebox(song){

}


function Song (title, currentTime, songLink){
	this.title = title;
	this.currentTime = currentTime;
	this.songLink = songLink;
};
counter = 0; 
song1 = new Song("PrettyWings", 0, "PrettyWings.mp3")

song2 = new Song("Sweet Lady", 0, "SweetLady.mp3")

song3 = new Song("MyGoodies", 0, "MyGoodies.mp3")

var songList = [song1, song2, song3]

var x = document.getElementById("audio")
function playAudio(){
	x.play();

}
function pauseAudio(){
	x.pause();
}

function displaySong(song){
	document.getElementById("currentSong").innerText = song.title;
}
displaySong(song1)
console.log()

function skipAhead(){
	counter++;
	document.getElementById("audio").innerHTML = "<audio controls id = 'audio'> <source src=\"" + songList[counter].songLink + "></audio>"
}




var duration;
var music = document.getElementById('playhead');
music.addEventListener("timeupdate", timeUpdate, false);

function timeUpdate() {
	var playPercent = 100 * (music.currentTime / duration);
	playhead.style.marginLeft = playPercent + "%";
}

// Gets audio file duration
music.addEventListener("canplaythrough", function () {
	duration = music.duration;
}, false);

//Makes timeline clickable
timeline.addEventListener("click", function (event) {
	moveplayhead(event);
	music.currentTime = duration * clickPercent(event);
}, false);
