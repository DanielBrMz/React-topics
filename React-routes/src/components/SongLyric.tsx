import React from 'react'

const SongLyric = ({song, lyrics}: any) => {
  return (
    <section>
        <h3>{song}</h3>
        <blockquote style={{whiteSpace: "pre-wrap"}}>{lyrics}</blockquote>
    </section>
  )
}

export default SongLyric;