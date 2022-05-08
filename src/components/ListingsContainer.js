import React ,{ useState,useEffect }from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  let[cardsList, setCardsList] = useState([])

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(res=> res.json())
    .then(data =>{
      setCardsList(data)
    })
  },[])

  const renderCards = cardsList.map((card)=>{
    return <ListingCard 
    key={card.id} 
    description={card.description} 
    image={card.image} 
    location={card.location}/>
  })
  return (
    <main>
      <ul className="cards">
        {renderCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
