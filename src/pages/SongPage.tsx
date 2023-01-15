import React from 'react'
import SongDetails from '../components/SongDetails'
import { useParams } from 'react-router-dom';

const SongPage = ({mySongs}: any):JSX.Element => {
    const {id} = useParams();

    let {search, lyric, bio} = mySongs[parseInt(id!)];

   return (
        <>
            {search ? <SongDetails search={search} lyric={lyric} bio={bio} />: <h3>nada</h3> }
        </>
    );

}

export default SongPage