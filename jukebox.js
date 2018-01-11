// function Jukebox(song){
//
// }


function Song (title, currentTime, songLink){
	this.title = title;
	this.currentTime = currentTime;
	this.songLink = songLink;
}
counter = 0;
song1 = new Song("Pretty Wings", 0, "PrettyWings.mp3");

song2 = new Song("Sweet Lady", 0, "SweetLady.mp3");

song3 = new Song("My Goodies", 0, "MyGoodies.mp3");

song4 = new Song("Let it Go", 0, "LetItGo.mp3")

song5 = new Song("Uptown Funk", 0, "UptownFunk.mp3")
var songList = [song1, song2, song3, song4, song5];

function playAudio(){
	var x = document.getElementById("audio")
	x.load();
	displaySong(songList[counter]);
	x.play();

}
function pauseAudio(){
	var x = document.getElementById("audio")
	x.pause();
}

function displaySong(song){
	document.getElementById("currentSong").innerText = song.title;
}

function skipAhead(){
	counter++;
		if(counter>songList.length){
			counter = 0; 
		}
	document.getElementById("audioDiv").innerHTML = "<audio id = \"audio\" src=\"" + songList[counter].songLink + "\"></audio>"
	// displaySong(songList[counter]);
	playAudio();



}
function skipBack(){
	counter--;
	if(counter<0){
		counter = songList.length-1;
	}
	document.getElementById("audioDiv").innerHTML = "<audio id = \"audio\" src=\"" + songList[counter].songLink + "\"></audio>"
	// displaySong(songList[counter]);
	playAudio();
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
// console.log(songList[counter].songLink)

