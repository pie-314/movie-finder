import MovieCard from "../components/MovieCard";
import React, { useState } from "react";


function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    {id:1, title: "John Wick",release_date:"2020"},
    {id:2, title: "Avatar 2",release_date:"2024"},
    {id:3, title: "A Beautiful Mind",release_date:"2000"},
  ]
  const handleSearch = () => {
    alert(searchQuery);
  }

  return(
  <div className = "home">
    <form onSubmit= {handleSearch} className="search-form">
    <input type="text" 
          placeholder="Search for movies..." 
          className="search-input" 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)}
    />
    <button type="submit" className="search-button">Search</button>
    </form>
    <div className = "movies-card">
      {movies.map(
          (movie) =>
            movie.title.toLowerCase().includes(searchQuery) && (
              <MovieCard movie={movie} key={movie.id}/>
            )
        )}
    </div>
  </div>
  )
}

export default Home 
