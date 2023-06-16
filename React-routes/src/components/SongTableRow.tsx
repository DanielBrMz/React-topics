import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { SavedSong } from '../ts/interfaces/global_interfaces';

const SongTableRow = ({id, el, handleDeleteSong}: {id: number, el: SavedSong, handleDeleteSong: (id: number) => unknown}) => {
    let {search, bio} = el;
    let avatar = bio.artists[0].strArtistThumb;
    let navigate: NavigateFunction = useNavigate();
    let avatarStyle: object = {
        width: "auto",
        height: "40px"
    }
    console.log(el);
  return (
    <tr>
        <td><img style={avatarStyle} src={avatar} alt={search!.artist} /></td>
        <td>{search!.artist}</td>
        <td>{search!.song}</td>
        <td>
            <button onClick={() => navigate(`${id}`)}>Ver</button>
            <button onClick={() => handleDeleteSong(id)}>Eliminar</button>
        </td>
    </tr>
  )
}

export default SongTableRow