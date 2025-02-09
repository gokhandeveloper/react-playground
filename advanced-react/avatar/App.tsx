import React from "react";
import {createRoot} from "react-dom/client";
import {IoPersonCircle} from "react-icons/io5"

function Avatar({src, alt, children}) {
    const colorList= Array.of("navy", "pink", "red", "blue", "green")
    const randomColor =
        colorList.find((value, index) => 
            index==Math.round(Math.random()* colorList.length));
    const randomBackgroundStyle = {
        'backgroundColor': randomColor
    }

    return (<>
        { src && <div className="avatar">
            <img src={src} alt={alt}/>
        </div> }

        {children && <div className="avatar avatar-letters" 
                                style={randomBackgroundStyle} >
             <p>{children}</p>
        </div> }

        {children===undefined &&
            src === undefined &&
            <div className="avatar avatar-icon" style={randomBackgroundStyle}>
                <IoPersonCircle />
        </div> }

    </>);
}

createRoot(document.getElementById("root")!)
    .render(<>
        <Avatar src="./avatar-ai.jpg" alt="iamgename"/>
        <Avatar>BZ</Avatar>
        <Avatar/>
    </>);

