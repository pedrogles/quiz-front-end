import "../../styles/QuestionsTemplate/questionsTemplate.scss";

import ButtonQuestion from "../ButtonQuestion/ButtonQuestion";

export default function QuestionsTemplate({ question, alternatives, className, func }) {
    return (
        <div id="question-template" className={className}>
            <div className="title">
                <h1 className="h1">Quiz</h1>
                <h2 className="h2">Front-end</h2>
            </div>
            <div className="question">
                <h3>{question}</h3>
            </div>
            <ul className="alternatives">
                {alternatives.map((alternative, key) => (
                    <li className="item" key={key}>
                        <ButtonQuestion 
                            alternative={alternative} 
                            func={func} 
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}