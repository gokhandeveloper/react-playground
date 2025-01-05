import React from "react";
import buttonData from "/buttonData"
import Pad from "./Pad";

export default function App() {
    const [buttons, changeButtonState] = React.useState(buttonData);
    function toggle(buttonId) {
        changeButtonState(oldValue => {
            return oldValue.map(button =>  {
                if(button.id===buttonId) {
                    return {...button, state: button.state==="on"? "off" : "on"};
                } 
                    return button;
            });

        });
    }

    function renderButtons() {
       return  buttons.map(button => {
           if(button!=undefined) {
               return <Pad changeButtonState={toggle}
                           id={button.id}
                           key={button.id}
                           buttonData = {button} ></Pad>
           }

       });

    }

    return renderButtons();
}