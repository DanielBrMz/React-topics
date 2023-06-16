import React, {useState, useEffect} from 'react'
import Loader from './Loader'
import SongForm from './SongForm'
import SongDetails from './SongDetails'
import { helpHttp } from '../helpers/helpHttp'
import { Track } from '../ts/interfaces/global_interfaces'

const SongSearch = () => {
  const [search, setSearch] = useState<Track | null>(null);
  const [lyrics, setLyrics] = useState<string | null>(null);
  const [bio, setBio] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

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
  }, [search]);

  const handleSearch = (data: Track) => {
    setSearch(data);
  }

  return (
    <div>
        <h2>SongSearch</h2>
        <article className="grid-1-3">
            <SongForm handleSearch={handleSearch}/>
            {loading && <Loader/>}
            {search && !loading && <SongDetails search={search} lyrics={lyrics} bio={bio}/>}
        </article>
    </div>
  )
}

export default SongSearch