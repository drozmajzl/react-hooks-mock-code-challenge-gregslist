import {React, useState} from "react";

function ListingCard({ listing, handleOnDelete }) {
const[liked, setLiked]=useState(false)

  function handleLike(event){
    setLiked(!liked)
  }

  function handleDelete(event){
    fetch(`http://localhost:6001/listings/${event.target.id}`, {
    method: "DELETE",
  })
    .then((r) => r.json())
    .then(() => handleOnDelete(event.target.id));

  handleOnDelete(event.target.id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {liked ? (
          <button onClick={handleLike} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleLike} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleDelete} id={listing.id} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
