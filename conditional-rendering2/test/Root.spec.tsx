import React from "react";
import Conditional2 from "../src/Conditional2";
import {render, screen} from "@testing-library/react";

it("unread message 0 means you are all caught up", () =>{
    render(<Conditional2 messages={[]}></Conditional2>);
    let text = "You are all caught up";
    let message =  screen.queryAllByText(text);
    expect(message[0]).toBeVisible();
    expect(message[0].textContent).toEqual(text);
});

it("1 message means You have 1 message", () =>{
    let messages = ["message"];
    render(<Conditional2 messages={[...messages]}></Conditional2>);
    let text =  "You have 1 unread message";
    let message =  screen.queryAllByText(text);
    expect(message[0]).toBeVisible();
    expect(message[0].textContent).toEqual(text);
});

it("Multiple messages shows the count", () =>{
    let messages = ["message","message2"];
    render(<Conditional2 messages={[...messages]}></Conditional2>);
    let text =  "You have "+ messages.length +" unread messages";
    let message =  screen.queryAllByText(text);
    expect(message[0]).toBeVisible();
    expect(message[0].textContent).toEqual(text);
});