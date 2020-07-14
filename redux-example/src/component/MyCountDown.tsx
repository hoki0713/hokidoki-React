import React, {useState, useEffect} from "react";


export default function MyCountDown() {
    const [count, setCount] = useState(10);

    useEffect(() => {
        if(count) {
            setTimeout(() =>  setCount(count - 1), 1000);
        }
    },[count])

    return (
        (count) ?
            <h1>{count}</h1> : <div onClick={() => setCount(10)}>
                <span>축하합니다!!</span>
                <span>(처음부터 다시 시작하려면 클릭하세요)</span>
            </div>
    );
}

