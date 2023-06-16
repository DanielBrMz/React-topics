import React from 'react'
import SongTableRow from './SongTableRow'
import { SavedSong } from '../ts/interfaces/global_interfaces'

const SongTable = ({mySongs, handleDeleteSong}: {mySongs:Array<SavedSong>, handleDeleteSong:(id: number)=>unknown}): JSX.Element => {
  return (
    <div>
        <h3>Mis Canciones favoritas</h3>
        <table>
            <thead>
                <tr>
                    <th colSpan={2}>Artista</th>
                    <th>Canción</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {mySongs.length > 0 ? (mySongs.map((el: SavedSong, index: number) => <SongTableRow key={index} el={el} handleDeleteSong={handleDeleteSong} id={index}/>)) :(<tr><td colSpan={4}>Sin Canciones</td></tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default SongTable