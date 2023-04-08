import "../../styles/ButtonTemplate/buttonTemplate.scss";

export default function ButtonTemplate({name, func, className}) {
    return (
        <>
            <button onClick={func} id="button" className={className}>{name}</button>
        </>
    )
}