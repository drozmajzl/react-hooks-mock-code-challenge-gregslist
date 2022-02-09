import {React, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleOnDelete }) {

  return (
    <main>
      <ul className="cards">
        {listings.map((listing)=>
          <ListingCard 
            key={listing.id} 
            listing={listing} 
            handleOnDelete={handleOnDelete}
            />)}   
      </ul>
    </main>
  );
}

export default ListingsContainer;
