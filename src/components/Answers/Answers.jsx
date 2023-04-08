import "../../styles/Answers/answers.scss";

export default function Answers({answers, className }) {
    return (
        <div id="answers" className={className}>
            <h3>Questões Respondidas</h3>
            <ul>
                {answers.map((answer, key) => (
                    <li key={key}>{answer}</li>
                ))}
            </ul>
        </div>
    )
}