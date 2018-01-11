
function Song (title, currentTime, songLink, id){
	this.title = title;
	this.currentTime = currentTime;
	this.songLink = songLink;
	this.id = id;
}
counter = 0;
song1 = new Song("PrettyWings", 0, "PrettyWings.mp3", 'pw');

song1 = new Song("Pretty Wings", 0, "PrettyWings.mp3", 'pw');


song2 = new Song("Sweet Lady", 0, "SweetLady.mp3", 'sl');


song3 = new Song("My Goodies", 0, "MyGoodies.mp3", 'mg');


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

	displaySong(songList[counter]);
<<<<<<< HEAD
	getCurrSong(songList[(counter-1)],songList[counter]);
=======
	getCurrSong(songList[counter]);

	playAudio();



}
function skipBack(){
	counter--;
	if(counter<0){
		counter = songList.length-1;
	}
	document.getElementById("audioDiv").innerHTML = "<audio id = \"audio\" src=\"" + songList[counter].songLink + "\"></audio>"
	// displaySong(songList[counter]);

>>>>>>> 1e7a077d08eb3c435cdcfa75f80afd9a21a6630a
	playAudio();
	getCurrSong();
}

<<<<<<< HEAD
function getCurrSong(prevSong, currSong){
	document.getElementById("current").innerText = prevSong.title;
	document.getElementById(prevSong.id).style.color = "white";

	document.getElementById("current").innerText = currSong.title;
	document.getElementById(currSong.id).style.color = "#58B560";
=======

function getCurrSong(song){
	document.getElementById("current").innerText = song.title;
	document.getElementById(song.id).style.fontSize = "20px";
>>>>>>> 1e7a077d08eb3c435cdcfa75f80afd9a21a6630a


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


}

// console.log(songList[counter].songLink)
