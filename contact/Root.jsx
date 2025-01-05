import React from "react";
import {createRoot} from "react-dom/client";
import Favourite from "./Favourite";

createRoot(document.getElementById("root")).render(<><Contact></Contact></>);

function getButton(changeFavourite, contact, favIcon) {
    return <button
        onClick={changeFavourite}
        aria-pressed={contact.isFavourite}
        aria-label={contact.isFavourite ? "Remove from favourites" : "Add to favourites "}
    >
        <img
            src={favIcon}
            alt={contact.isFavourite ? "fav icon is filled" : "not filed"}
        />
    </button>;
}

function Contact() {
    
    const [contact, setContact] = React.useState( {
        firstName:"John",
        isFavourite : false
    })
    
    return <div>{contact.firstName}
        {/*{getButton(changeFavourite, contact, favIcon)}*/}
        <Favourite isFavourite={contact.isFavourite} changeFavourite={changeFavourite}></Favourite>
    </div>;
    
   function changeFavourite() {
        setContact(oldContact => {
            //add old contact, override the isFavourite property
                return {...oldContact, isFavourite: !oldContact.isFavourite}
        })
    }
}
