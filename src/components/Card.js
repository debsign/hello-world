export function Card({title, image, description}) {
    return (
        <div>
            <h1>{title}</h1>
            <img src={image} alt="imagen" />
            <p>{description}</p>
        </div>
    )
}