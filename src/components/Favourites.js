import React from "react";
import "./Favourites.css";
import { useHistory } from "react-router-dom";

function Favourites(prop){
    const history = useHistory();
    const {location} = prop
    console.group("location", location.state)
    return(
    <div>
        <h2>This is the Favourites Page.</h2>
        <div className="favPage">
        {
            location.state.map((item)=><h2>{item}</h2>)
        }
        </div>
    </div>
)};

export default Favourites;