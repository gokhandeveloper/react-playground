import React from "react";
import {createRoot} from "react-dom/client";
createRoot(document.getElementById("root")).render(<><Array></Array><ArrayNumber></ArrayNumber><Count></Count> <Out></Out></>);


function Array() {
    const [items, setState]= React.useState([]);
    const item = items.map(item=> <ul> {item} </ul>)
    return <div> <button onClick={click}> Add item</button>
    <p>{item}</p>
    </div>

    function click() {
        setState(oldValue => [...oldValue,"push"])
    }
}


function ArrayNumber() {
    const [array, state] = React.useState([9]);
    let htmlArray = array.map(element => <p>{element}</p>)
    return <div>{[htmlArray]}
        <button onClick={add}></button>
    </div>

    function add() {
        let something = [1];
        //use callback to add to existing value
        state(existingValue=> existingValue.concat(...something));
        //clear old value
       /// state(something);
    }
}

function Out() {
    let [isGoingOut, setState] = React.useState(false);
    let buttonText= isGoingOut ? "Yes" : "no"
    return <button onClick={flip}> {buttonText}</button>
    function flip() {
        setState(function(oldValue) {
            return oldValue != true;
        } );

    }
}

function Count() {
    let number = 10;
    let [numberState,setState] = React.useState(number);
    return <div>
        <p>{numberState}</p>
        <button onClick={decrease}  ></button>
        <button onClick={increase} ></button>
    </div>

    function increase() {
     
        setState(previousCount=> ++previousCount);
        setState(previousCount=> ++previousCount);

    }

    function decrease() {
    
        setState(previousCount=> --previousCount);
      
    }
}

