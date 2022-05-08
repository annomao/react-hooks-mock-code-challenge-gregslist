import React,{ useState } from "react";

function ListingCard({card, onDelete}) {
  const {description,
    image = "https://via.placeholder.com/300x300",
    location,} = card

  let[like, setLike] = useState(false)

  function handleLikeClick(){
    setLike(()=> like = !like)
  }

  function handleDeleteClick(){
    fetch(`http://localhost:6001/listings/${card.id}`,{
      method:"DELETE"
    })
    .then(res => res.json())
    .then(()=>{
      onDelete(card)
    })
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {like ? (
          <button className="emoji-button favorite active" onClick={handleLikeClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleLikeClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
