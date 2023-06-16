import React from 'react'

const SongArtist = ({artist}: any): JSX.Element => {
  return (
    <section>
        <h3>{artist.strArtist}</h3>
        <img src={artist.strArtistThumb} alt={artist.strArtist} />
        <p>{artist.intBornYear} - {artist.inDiedYear || "Presente"}</p>
        <p>{artist.strCountry}</p>
        <p>{artist.strGenre} - {artist.strStyle}</p>
        <a href={`https://${artist.strWebsite}`} target="_blank" rel="noopener noreferrer">Sitio Web</a>
        <p>{artist.strBiographyES || artist.strBiographyEN}</p>
    </section>
  )
}

export default SongArtist;