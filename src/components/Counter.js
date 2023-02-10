import { useState, useEffect } from "react";

export function Counter() {
    const [list, setList] = useState([
        {id: 1, name: "leche"}, {id: 2, name: "pan"}, {id: 3, name: "huevos"}]);
    const [value, setValue] = useState(0);
    const [message, setMessage] = useState("");


    const handleIncrement = () => {
        setValue(value + 1)
        setMessage("");
    }

    const handleDecrement = () => {
        if(value === 0) {
            setMessage("No puedes restar a 0");
            return;
        }
        setValue(value - 1)
        setMessage("");
    }
    
    return (
        <>
            <button onClick={handleIncrement}>+</button>
            {value}
            <button onClick={handleDecrement}>-</button>
            {message ? <span> {message} </span> : ""}

            <ul>
                {list.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </>
    );
}
