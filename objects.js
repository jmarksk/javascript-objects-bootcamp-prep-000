var playlist = {beatles: "revolution"}


function updatePlaylist(playlist, artist, song) {
  playlist [artist] = song
  return playlist

}

function removeFromPlaylist(artist, song){
  var playlist = delete playlist.artist
  return playlist;
}
