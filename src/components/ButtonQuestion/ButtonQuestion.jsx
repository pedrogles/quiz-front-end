import "../../styles/ButtonQuestion/buttonQuestion.scss";

export default function ButtonQuestion({alternative, func}){
    return (
        <>
            <button onClick={func} id="button-question">
                <p className="p">{alternative}</p>
            </button>
        </>
    )
}