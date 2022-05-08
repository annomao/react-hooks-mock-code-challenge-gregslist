import React from "react";
import Search from "./Search";

function Header({setSearchValue}) {

  function handleSearch(searchWords){
    setSearchValue(searchWords)
  }
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={handleSearch}/>
    </header>
  );
}

export default Header;
