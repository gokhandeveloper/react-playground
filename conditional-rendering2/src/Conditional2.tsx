import React from "react";

export default function Conditional2(props:any) {

    const [notifications, setNotifications] = React.useState([...props.messages]);

    return <div>
        <p>{presentMessageCount()}</p>
    </div>

    function  presentMessageCount() {
      if(notifications.length===0 ){
          return "You are all caught up";
      } 
      if(notifications.length===1) {
         return "You have 1 unread message";
      }
      if(notifications.length>1) {
          return "You have " + notifications.length + " unread messages";
      }
    }
}