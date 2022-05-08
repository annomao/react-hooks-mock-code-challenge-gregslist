import React ,{ useState,useEffect }from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({searchValue}) {
  let[cardsList, setCardsList] = useState([])

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(res=> res.json())
    .then(data =>{
      setCardsList(data)
    })
  },[])

  function handleDeleteCard(deletedCard){
    const updatedCards = cardsList.filter((card) => card.id !== deletedCard.id);
    setCardsList(updatedCards);
  }

  const cardsToDisplay = cardsList.filter((card) => {
    return (card.description.toLowerCase().includes(searchValue.toLowerCase()))
    });

  const renderCards = cardsToDisplay.map((card)=>{
    return <ListingCard card={card} onDelete={handleDeleteCard} key={card.id}/>
    
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
