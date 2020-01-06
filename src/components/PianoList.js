import React, { useState } from 'react'

export default () => {
  const [movies, setMovies] = useState([
    'Alien',
    'Predator',
    'Alien Vs. Predator',
  ])
  const [input, setInput] = useState('')
  return (
    <div>
      {movies.map(movie => (
        <h2>{movie}</h2>
      ))}
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        type="text"
      />
      <button
        onClick={() => {
          setMovies([...movies, input])
          setInput('')
        }}
      >
        Add Movie
      </button>
    </div>
  )
}
