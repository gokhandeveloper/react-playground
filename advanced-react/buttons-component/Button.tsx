import icons from 'react-icons'
import {FaCirclePlus} from "react-icons/fa6";
export default function Button({children, size, className, ...rest}) {
    return <div> <button 
        className={size =="lg" ? "button-large " +className: "button-small" + className }
        {...rest}>
        {children}</button> </div>
   // return <div> <button> {prop.name}</button> </div>
}
