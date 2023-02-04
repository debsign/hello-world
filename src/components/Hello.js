import "./Hello.css";

export function Hello({ name, age, children }) {
    // Renderizado condicional
    // if(name === 'Carlos') {
    //     return <h1>Hola Carlitos</h1>
    // }

    // Operador ternario
    // return name === "Carlos" ? ( 
    //     <h1>Hola Carlitos</h1> 
    // ) : (
    //     <div>
    //         <p>Hello {name}, tienes {age} años</p>
    //         <br />
    //         {children}
    //     </div>
    // );

    return (
        <div>
            <p>Hello {name}, tienes {age} años</p>
            <br />
            {children}
        </div>
    );
}