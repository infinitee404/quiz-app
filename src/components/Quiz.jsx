import { useEffect, useRef, useState } from "react"

const GameOver = ( props ) => {

    const returnToStart = () =>{
        props.handleRestart()
    }

    return(
        <>
            <div className="game-over-screen">
                <h1 className="game-over-heading">Game Over</h1>
                <h3 className="game-over-score">Score: {props.finalScore} </h3>
                <button 
                    className="game-over-button"
                    onClick={returnToStart}    
                >Play Again</button>
            </div>
        </>
    )
}

const Quiz = (props) => {
    const [quizData, setQuizData] = useState([])
    const [questionNum, setQuestionNum] = useState(0)
    const [selectedOption, setSelectedOption] = useState(null)
    const [gameOver, setGameOver] = useState(false)
    const [showError, setShowError] = useState(false)
    const [wrongOption, setWrongOption] = useState(null)
    const [correctOption, setCorrectOption] = useState(null)
    const score = useRef(0)
    let category = props.selectCategory
    let disableButton;

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch(
                    `https://my-json-server.typicode.com/infinitee404/quiz-app/${category}`
                ) 
                if (!response.ok) {
                    throw new Error('Network response was not okay')
                }
                const data = await response.json() 
                setQuizData(data) 
            } catch (error) {
                console.error("Error fetching data: ", error)
            }
        } 
        fetchQuestions() 
    }, []) 

    // to check if fetching is completed.
    if (!quizData.length) {
        return <div className="description">Loading...</div>
    }

    const changeQuestion = () => {
        if(selectedOption == null)
        {
            setShowError(true)
        }else{
            currentQuestion.options.map((option, index) => {
                if (currentQuestion.options[index] === currentQuestion.correctOption) {
                    setCorrectOption(index)
                }
            })                     
            if(currentQuestion.options[selectedOption] === currentQuestion.correctOption){
                score.current = score.current+1
                setCorrectOption(selectedOption)
                
            }else{
                setWrongOption(selectedOption)
            }
            
            setTimeout(() => {
                if(questionNum != 9){
                    setQuestionNum(prevQues => prevQues+1)
                }else{
                    setGameOver(true)
                }
                setWrongOption(null)
                setCorrectOption(null)
            }, 1500);  //ms before switching to next question
        }
        setShowError(false)
        setSelectedOption(null)
    }

    const currentQuestion = quizData[questionNum] 

    return (
        gameOver ? 
            <GameOver 
                finalScore = {score.current}
                handleRestart={props.handleRestart}
            />
        :
            <div className="container">
                <div className="description">
                    <h1 className="category-top">{category}</h1>
                    <p className="instruction">Question {currentQuestion.id} of {quizData.length}</p>
                    <p className="title">{currentQuestion.question}</p>
                    <progress className="progress-bar" value={currentQuestion.id} max={quizData.length} />
                </div>
                <div className="option">
                    {currentQuestion.options.map((option, index) => (
                        <div 
                            key={index} 
                            className={`
                                options 
                                ${selectedOption == index ? "selected-option" : null } 
                                ${wrongOption == index ? "selected-wrong" : null }
                                ${correctOption == index ? "selected-correct" : null}
                            `}
                            onClick={() => setSelectedOption(index)}
                        >
                            <div className="options-logo option-box">{String.fromCharCode(65 + index)}</div>
                            <div className="options-name">{option}</div>
                        </div>
                    ))}
                    <button className="options submit-button" onClick={changeQuestion}>Submit Answer</button>
                    {showError && <div className="options error">Please select an option</div>}
                </div>
            </div>
    ) 
} 

export default Quiz 