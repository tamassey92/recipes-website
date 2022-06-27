import React from "react";

function Search({handleRecSearch}) {

  return (
    <div className="searchbar" style={{ display: "flex", justifyContent: "center", alignItems: "center",}} >
      <input type="text" id="standard-basic" label="search recipes" variant="standard" onChange={handleRecSearch} />
    </div>
  )
}

export default Search;