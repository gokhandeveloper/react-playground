import {createRoot} from "react-dom/client";
import Button from "./Button";
import {FaCirclePlus} from "react-icons/fa6";

let text ="Buy Now"

createRoot(document.getElementById("root")!)
    .render(
        <Button className="hey"
            size="lg"
            onClick={click}>
            <FaCirclePlus/> {text}
        </Button>
    )


function click() {console.log("clicked")
}
