import React,{useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  let [searchValue, setSearchValue] = useState("")
  return (
    <div className="app">
      <Header setSearchValue={setSearchValue}/>
      <ListingsContainer searchValue={searchValue}/>
    </div>
  );
}

export default App;
