
function Song (title, currentTime, songLink, id){
	this.title = title;
	this.currentTime = currentTime;
	this.songLink = songLink;
	this.id = id;
}
counter = 0;
song1 = new Song("PrettyWings", 0, "PrettyWings.mp3", 'pw');

song2 = new Song("Sweet Lady", 0, "SweetLady.mp3", 'sl');

song3 = new Song("MyGoodies", 0, "MyGoodies.mp3", 'mg');

var songList = [song1, song2, song3];

function playAudio(){
	var x = document.getElementById("audio")
	x.load();
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
	document.getElementById("audioDiv").innerHTML = "<audio id = \"audio\" src=\"" + songList[counter].songLink + "\"></audio>"
	displaySong(songList[counter]);
	getCurrSong(songList[counter]);
	playAudio();
	getCurrSong();
}

function getCurrSong(song){
	document.getElementById("current").innerText = song.title;
	document.getElementById(song.id).style.fontSize = "20px";

}

// console.log(songList[counter].songLink)
