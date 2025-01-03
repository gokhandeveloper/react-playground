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
        console.log(email)
    }
}
