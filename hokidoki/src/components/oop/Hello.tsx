import React, {useState} from "react";



function Hello() {
    const [name] = useState("홍길동");
    const [greeting, setGreeting] = useState("");

    return (
        <div>
            <h1>{greeting} {name}</h1>
            <button onClick={() => {
                (greeting === "안녕") ? setGreeting("") : setGreeting("안녕")
            }}>클릭
            </button>

        </div>
    );


}
export default Hello;