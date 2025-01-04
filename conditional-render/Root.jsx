import React from "react";
import {createRoot} from "react-dom/client";

let heading= {setup: "hello" };

createRoot(document.getElementById("root"))
    .render(<Conditional heading={heading}></Conditional>)

export default function Conditional(props) {
    let [isShown, setShown] = React.useState(false);
    let [notifications, setNotifications] = React.useState(["Hey!"])
    function hideHeadline() {
        setShown(oldValue => !oldValue)
     
    }
    console.log(props);
    console.log(isShown);
    return <div>
        {isShown &&  <h2>{props.heading.setup}</h2>}
        <button onClick={hideHeadline}>{isShown ? "Hide" : "Show"}</button>
        {notifications.length>0 && <p>You have a notification: {notifications}</p>}
        {notifications.length===0 && <p>You have no notification</p>}
    </div>;
}