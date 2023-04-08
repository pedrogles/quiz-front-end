import "../../styles/Result/result.scss";
import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";

export default function Result({ result, className, func, func2 }) {
    return (
        <div id="result" className={className}>
            <ButtonTemplate className="result-button" func={func} name="Resultado" />
            <div className="result-final">
                <h3>{result}</h3>
                <div className="button">
                    <ButtonTemplate name="Reiniciar Quiz" func={func2} />
                </div>
            </div>
        </div>
    )
}