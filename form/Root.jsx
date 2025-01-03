import React from "react";
import {createRoot} from "react-dom/client";

createRoot(document.getElementById("root")).render(<><Form></Form></>);

function Form() {
    return <div><h1>Sign up</h1>
        {/*by default it is set to get method*/}

        {/*you can use onsubmit but it is declarative* there is a better way in react 19/}
        {/*<form onSubmit={submit} method="post">*/}
        <form action={signup}>

            {/*different way associating label with email*/}
            {/*<label> Email:*/}
            {/*    <input type="email" name="email" placeholder="gokhan@someemailservice.com"/>*/}
            {/*</label>*/}

            <label htmlFor="email"> Email: </label>
            <input type="email" name="email" placeholder="gokhan@someemailservice.com"/>
            <label htmlFor="password ">Password: </label>
            <input type={"password"} name={"password"} placeholder={"Enter your password here"}/>

            <label htmlFor="description"></label>
            <textarea id="description" name="description" defaultValue="this is default"></textarea>

            {/*//name setting to same means user only selects 1 radio (instead of all of them*/}
            <label>
                <input defaultChecked={true} id="married" type="radio" name="status" value="Married"/>
                Married
            </label>

            <label>
                <input id="single" type="checkbox" name="status" value="Single"/>
                Single
            </label>
            <p>Languages</p>
            <label>
                <input defaultChecked={true} id="java" type="checkbox" name="lang" value="Java"/>
                Java
            </label>

            <label>
                <input id="js" type="checkbox" name="lang" value="Javscript"/>
                Javscript
            </label>

            <p><label htmlFor="color">Favourite color</label>
                <select id="cl" name="cl-option" defaultValue="" required>
                    <option value="" disabled>Choose a color</option>
                    <option>yellow</option>
                    <option>red</option>
                    <option>blue</option>
                </select>
            </p>

            {/*acts like submit input type*/}
            <button>Submit</button>

        </form>

    </div>

    function submit(event) {
        event.preventDefault();
        const formElement = event.currentTarget;
        const formData = new FormData(formElement);
        const email = formData.get("email");
        console.log(email)
        formElement.reset();
    }

    //better way of doing it (instead of getting it from event
    function signup(formData) {
        const email = formData.get("email");
        const password = formData.get("password");
        const status = formData.get("status");
        //checbox returns multiple
        const lang = formData.getAll("lang");
        const clOption = formData.get("cl-option");
        console.log(formData)
        console.log(email)
        console.log(status)
      
        console.log(clOption)

        //grab everything instead of individually using get/gelall
        //this doesnt have the checkbox data-it includes only single checkbox data
       console.log(Object.fromEntries(formData))
       
        const allFormData = {
            ...Object.fromEntries(formData),
            lang : formData.getAll("lang")
        }
        console.log(allFormData)
    }
}
