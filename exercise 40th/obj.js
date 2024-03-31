"use strict";
function make_album(artist, album, track) {
    let object = {
        artist: artist,
        album: album,
    };
    if (track !== undefined) {
        object.track = track;
    }
    return object;
}
let album1 = make_album('Atif Aslam', 'we are pakistani');
console.log(album1);
let album2 = make_album('noori', 'pagal');
console.log(album2);
let album3 = make_album('Asim azhar', 'kabhi me kabhi tum', 23);
console.log(album3);
