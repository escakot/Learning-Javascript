var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

  // printPlaylists: function () {
  //   for (let playlist in library.playlists)
  //   {
  //     let p = this.playlists[playlist];
  //     console.log(`${p.id}: ${p.name} - ${p.tracks.length} tracks`);
  //   }
  // }
  printPlaylists: function ()
  {
    for (let key in library.playlists) {
      let p = this.playlists[key];
      console.log(`${p.id}: ${p.name} - ${p.tracks.length} tracks`);
    }
  },
// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

  printTracks: function ()
  {
    for (let track in library.tracks)
    {
      let t = this.tracks[track];
      console.log(`${t.id}: ${t.name} by ${t.artist} (${t.album})`)
    }
  },

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

  printPlaylist: function (playlistId)
  {
    let p = this.playlists[playlistId];
    console.log(`${p.id}: ${p.name} - ${p.tracks.length} tracks`);
    for (var track of p.tracks)
    {
      let t = this.tracks[track];
      console.log(`${t.id}: ${t.name} by ${t.artist} (${t.album})`)
    }
  },

// adds an existing track to an existing playlist

  addTrackToPlaylist: function (trackId, playlistId)
  {
    this.playlists[playlistId].tracks.push(trackId);
  },


// generates a unique id
// (use this for addTrack and addPlaylist)

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },


  // adds a track to the library

  addTrack: function (name, artist, album)
  {
    let id;
    do {
      id = "t" + this.uid();
    } while (this.tracks[id]);

    this.tracks[id] =
    {
      id,
      name,
      artist,
      album
    }
  },
// adds a playlist to the library

  addPlaylist: function (name) {
    let id;
    do {
      id = "p" + this.uid();
    } while (this.tracks[id]);

    this.playlists[id] =
    {
      id,
      name,
      tracks: []
    }
  },

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

  printSearchResults: function(query) {
    var regex = new RegExp(this.escapeRegExp(query), 'i');
    for (let key in this.tracks)
    {
      let t = this.tracks[key];
      if (t.name.match(regex) || t.artist.match(regex) || t.album.match(regex))
      {
        this.printTrack(key);
      }
    }
  },

  printTrack: function (trackId)
  {
    let t = this.tracks[trackId];
    console.log(`${t.id}: ${t.name} by ${t.artist} (${t.album})`)
  },

  escapeRegExp: function(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }
}
