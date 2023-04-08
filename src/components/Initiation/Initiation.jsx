import "../../styles/Initiation/initiation.scss";
import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";

export default function Initiation({ className, func }) {
    return (
        <div id="initiation" className={className}>
            <div className="title">
                <h1 className="h1">Quiz</h1>
                <h2 className="h2">Front-end</h2>
            </div>
            <div className="welcome">
                <h3 className="h3">Olá, seja Bem-vindo(a)!!</h3>
                <p className="p">Para iniciar o Quiz clique no botão abaixo.</p>
            </div>
            <ButtonTemplate 
                id="initiationButton"
                func={func} 
                name="Iniciar Quiz" 
            />
        </div>
    )
}