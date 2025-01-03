import React from "react";
import {createRoot} from "react-dom/client";
import favFilled from "./fav-filled.png"
import fav from "./fav-not-filled.png"

createRoot(document.getElementById("root")).render(<><Contact></Contact></>);

function Contact() {
    
    const [contact, setContact] = React.useState( {
        firstName:"John",
        isFavourite : false
    })

    let favIcon =  contact.isFavourite ? favFilled : fav
    return <div>{contact.firstName}
        <button 
            onClick={changeFavourite}
            aria-pressed={contact.isFavourite}
            aria-label={contact.isFavourite ? "Remove from favourites" : "Add to favourites "}
        >
            <img 
                src={favIcon}
                alt={contact.isFavourite? "fav icon is filled": "not filed"}
            />
        </button>
    </div>;
    
    function changeFavourite() {
        setContact(oldContact => {
            //add old contact, override the isFavourite property
                return {...oldContact, isFavourite: !oldContact.isFavourite}
        })
    }
}
