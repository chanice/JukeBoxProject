
function Song (title, songLink, id){
	this.title = title;
	this.songLink = songLink;
	this.id = id;
}
counter = 0;

song1 = new Song("Pretty Wings","PrettyWings.mp3", 'pw');


song2 = new Song("Sweet Lady","SweetLady.mp3", 'sl');


song3 = new Song("My Goodies","MyGoodies.mp3", 'mg');


song4 = new Song("Let it Go","LetItGo.mp3", 'lg');

song5 = new Song("Uptown Funk","UptownFunk.mp3", 'uf');
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

	displaySong(songList[counter]);
	getCurrSong(songList[(counter-1)], songList[counter]);

	playAudio();
	// getCurrSong();
}

function getCurrSong(prevSong, currSong){
	document.getElementById("current").innerText = prevSong.title;
	document.getElementById(prevSong.id).style.color = "white";

	document.getElementById("current").innerText = currSong.title;
	document.getElementById(currSong.id).style.color = "#58B560";
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
