import React from 'react'
import SongArtist from './SongArtist';
import SongLyric from './SongLyric';
import Message from './Message';

const SongDetails = ({search, lyrics, bio}: any) => {
  if(!lyrics || !bio) return null;

  return (
    <>
        {lyrics.error || lyrics.err || lyrics.name === 'AbortError' 
            ? <Message msg={`Error: no existe la canción: '<em>${search.song}</em>'`} bgColor={"#dc3545"}/>
            : <SongLyric title={search.song} lyrics={lyrics.lyrics}/>}
        {bio.artists 
        ? <SongArtist artist={bio.artists[0]}/> 
        : <Message msg={`Error: no existe el intérprete: '<em>${search.artist}</em>'`} bgColor={"#dc3545"}/>}
    </>
  );
}

export default SongDetails;