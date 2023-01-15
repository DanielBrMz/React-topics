import React, {useState, useEffect} from 'react'
import Loader from './Loader'
import SongForm from './SongForm'
import SongDetails from './SongDetails'
import { helpHttp } from '../helpers/helpHttp'
import { SavedSong, Track } from '../ts/interfaces/global_interfaces'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SongTable from './SongTable'
import SongPage from '../pages/SongPage'

const mySongsInit: Array<SavedSong> = JSON.parse(localStorage.getItem('mySongs')!) || [];

const SongSearch = () => {
  const [search, setSearch] = useState<Track | null>(null);
  const [lyrics, setLyrics] = useState<string | null>(null);
  const [bio, setBio] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [mySongs, setMySongs] = useState<Array<SavedSong>>(mySongsInit)

  useEffect(() => {
    if(search === null) return;

    const fetchData = async () => {
        let {artist, song} = search;

        const artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
        const songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

        setLoading(true);

        let [artistResponse, songResponse] = await Promise.all([helpHttp().get(artistUrl), helpHttp().get(songUrl)]);

        setBio(artistResponse);
        setLyrics(songResponse);
        setLoading(false);
    }

    fetchData();

    localStorage.setItem('mySongs', JSON.stringify(mySongs));
    console.log(localStorage.getItem('mySongs'))
  }, [search, mySongs]);

  const handleSearch = (data: Track):void => {
    setSearch(data);
  }

  const handleSaveSong = ():void => {
    let currentSong: SavedSong = {search, lyrics, bio};
    let songs: Array<SavedSong> = [...mySongs, currentSong];

    setMySongs(songs);
    setSearch(null);
    localStorage.setItem('mySongs', JSON.stringify(songs));
  }

  const handleDeleteSong = (id: number):unknown => {
    let isDelete = window.confirm(`¿Estás seguro de eliminar la canción ${mySongs[id].search?.song}?`);

    if(isDelete){
      let songs = mySongs.filter((el: SavedSong, index: number) => index !== id);
      setMySongs(songs);
      localStorage.setItem('mySongs', JSON.stringify(songs));
    }

    return {};
  }


  return (
    <div>
        <HashRouter>
          <header>
            <h2>SongSearch</h2>
            <Link to="/">Home</Link>
            <Link to="/songs">Songs</Link>
          </header>
          {loading && <Loader/>}
          <article className="grid-1-2">
            <Routes>
              <Route path="/songs">
                <Route path="" element={
                  <>
                    <SongForm handleSearch={handleSearch} handleSaveSong={handleSaveSong}/>
                    <SongTable mySongs={mySongs} handleDeleteSong={handleDeleteSong}/>
                    {search && !loading && <SongDetails search={search} lyrics={lyrics} bio={bio}/>}
                  </>}/>
                  <Route path="/songs/:id" element={<SongPage mySongs={mySongs}/>}/>
              </Route>
              <Route path="/*" element={<h2>404 Not Found</h2>}/>
            </Routes>
          </article>
        </HashRouter>
    </div>
  )
}

export default SongSearch