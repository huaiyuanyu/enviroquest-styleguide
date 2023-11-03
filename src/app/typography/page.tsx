"use client"

import { useState } from "react";

export default function Typography () {

    const lorem = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

    const headerFontDescription = ""
    const bodyFontDescription = ""

    const [font, setFont] = useState("flex w-full font-header");
    const [button1, setButtonOne] = useState("font-header px-5 bg-gray-400");
    const [button2, setButtonTwo] = useState("font-body px-5");
    const [text, setText] = useState(lorem);

    function handleClick (e:any) {
        const value = e.target.value;
        const text = "flex w-full " + value;
        const name = e.target.name;

        if(name == "header") {
            setButtonOne("font-header px-5 bg-gray-400");
            setButtonTwo("font-body px-5");
        } else {
            setButtonOne("font-header px-5");
            setButtonTwo("font-body px-5 bg-gray-400");
        }

        setFont(text);
    }

    return (
        <div className="mt-[50px]">
            <h1 className="text-4xl mb-4">Typography Info</h1>
            <div className="flex flex-row text-2xl ml-3">
                <button className={button1} value="font-header" name="header" onClick={handleClick}>
                    Abril Fatface
                </button>
                <button className={button2} value="font-body" name="body" onClick={handleClick}>
                    Open Sans
                </button>
            </div>
            <div className="p-4">
                <p className="text-l">
                    {text}
                </p>
            </div>
            <div className={font}>
                <div className="w-4/6 bg-gray-400 h-auto">
                    <div className="p-2"><h1 className="text-6xl">Header 1</h1></div>
                    <div className="p-2"><h2 className="text-5xl">Header 2</h2></div>
                    <div className="p-2"><h3 className="text-4xl">Header 3</h3></div>
                    <div className="p-2"><h4 className="text-3xl">Header 4</h4></div>
                    <div className="p-2"><h5 className="text-2xl">Header 5</h5></div>
                    <div className="p-2"><h6 className="text-xl">Header 6</h6></div>
                    <div className="p-2"><p className="text-l">{lorem}</p></div>
                </div>
                <div className="w-2/6 bg-gray-500 h-auto">
                    <div className="p-2"><h1 className="text-6xl">64 px</h1></div>
                    <div className="p-2"><h2 className="text-5xl">48 px</h2></div>
                    <div className="p-2"><h3 className="text-4xl">36 px</h3></div>
                    <div className="p-2"><h4 className="text-3xl">30 px</h4></div>
                    <div className="p-2"><h5 className="text-2xl">24 px</h5></div>
                    <div className="p-2"><h6 className="text-xl">20 px</h6></div>
                    <div className="p-2"><p className="text-l">16 px</p></div>
                </div>
            </div>
        </div>
    )
}