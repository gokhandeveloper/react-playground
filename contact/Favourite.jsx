import React from "react";
import favFilled from "./fav-filled.png"
import fav from "./fav-not-filled.png"
export default function Favourite(props) {
    let favIcon =  props.isFavourite ? favFilled : fav
    return <button
         onClick={props.changeFavourite}
        aria-pressed={props.isFavourite}
        aria-label={props.isFavourite ? "Remove from favourites" : "Add to favourites "}
    >
        <img
            src={favIcon}
            alt={props.isFavourite ? "fav icon is filled" : "not filed"}
        />
    </button>;
}