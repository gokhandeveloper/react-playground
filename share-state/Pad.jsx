import React from "react";
export default function Pad(props) {
    return <button onClick={()=>props.changeButtonState(props.id)}
                   className={props.buttonData.state}>{props.buttonData.name}</button>;
}
