import {React, useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const[listings, setListings]=useState([])
  const[allListings, setAllListings]=useState([])
  
  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then((res)=>res.json())
      .then((l)=>{
        setListings(l)
        setAllListings(l)
      })
  }, []);

  function handleOnDelete(item){
    const newItem = parseInt(item, 10);
    const newDisplay = listings.filter((listing) => listing.id !== newItem)
    setListings(newDisplay)
    setAllListings(newDisplay)
  }

  function onSubmit(search){
    const newDisplay = allListings.filter((listing) => listing.description.toLowerCase().includes(search.toLowerCase()))
    setListings(newDisplay)
  }

  return (
    <div className="app">
      <Header onSubmit={onSubmit}/>
      <ListingsContainer 
        listings={listings}
        handleOnDelete={handleOnDelete}
        />
    </div>
  );
}

export default App;
