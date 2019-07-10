'use strict';


function LyricsService () {
    this.baseUrl = 'https://api.lyrics.ovh/v1/'
}


LyricsService.prototype.getSong = async function (artist, song) {

    var response = await fetch(`${this.baseUrl}${artist}/${song}/`);
    var data = await response.json();

    console.log(data)
    return data; 
}

var lyricsServiceInstance = new LyricsService(); 


