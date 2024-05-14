import { useEffect, useRef, useState } from 'react'

const GameOver = ({ finalScore, handleRestart }) => {
	const returnToStart = () => {
		handleRestart()
	}

	return (
		<>
			<div className='game-over-screen'>
				<h1 className='game-over-heading'>{finalScore < 5 ? 'Game Over' : 'Well done'}</h1>
				<h3 className='game-over-score'>
					You scored{finalScore < 5 ? ' only ' : null} {finalScore * 10}%.{' '}
				</h3>
				<button
					className='game-over-button'
					onClick={returnToStart}
				>
					Play Again
				</button>
			</div>
		</>
	)
}

const Quiz = ({ selectCategory, handleRestart }) => {
	const [quizData, setQuizData] = useState([])
	const [gameOver, setGameOver] = useState(false)
	const [questionNum, setQuestionNum] = useState(0)
	const [showError, setShowError] = useState(false)
	const [wrongOption, setWrongOption] = useState(null)
	const [correctOption, setCorrectOption] = useState(null)
	const [selectedOption, setSelectedOption] = useState(null)
	const score = useRef(0)
	let category = selectCategory

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
				console.error('Error fetching data: ', error)
			}
		}
		fetchQuestions()
	}, [])

	// to render if not fetched.
	if (!quizData.length) {
		return (
			<div className='loading'>
				<span className='loader' /> &nbsp; Loading &nbsp; <span className='loader' />
			</div>
		)
	}

	const changeQuestion = () => {
		if (selectedOption == null) {
			setShowError(true)
			return
		} else {
			currentQuestion.options.map((option, index) => {
				if (currentQuestion.options[index] === currentQuestion.correctOption) {
					setCorrectOption(index)
				}
			})
			if (currentQuestion.options[selectedOption] === currentQuestion.correctOption) {
				score.current = score.current + 1
				setCorrectOption(selectedOption)
			} else {
				setWrongOption(selectedOption)
			}

			setTimeout(() => {
				if (questionNum != 9) {
					setQuestionNum((prevQues) => prevQues + 1)
				} else {
					setGameOver(true)
				}
				setWrongOption(null)
				setCorrectOption(null)
				setShowError(false)
			}, 500) //ms before switching to next question
		}
		setSelectedOption(null)
	}

	const keyPressed = (event, index) => {
		if (event.keyCode === 13) {
			const source = event.target.tagName.toLowerCase()
			if (source === 'div') {
				setSelectedOption(index)
			} else if (source === 'button') {
				event.preventDefault() // Prevent default behavior of Enter key on the button
				if (selectedOption === null) {
					setShowError(true)
				} else {
					setShowError(false)
					changeQuestion()
				}
			}
		}
	}

	const currentQuestion = quizData[questionNum]

	return gameOver ? (
		<GameOver
			finalScore={score.current}
			handleRestart={handleRestart}
		/>
	) : (
		<div className='container'>
			<div className='description'>
				<h1 className='category-top'>{category}</h1>
				<p className='instruction'>
					Question {currentQuestion.id} of {quizData.length}
				</p>
				<p className='title'>{currentQuestion.question}</p>
				<progress
					className='progress-bar'
					value={currentQuestion.id}
					max={quizData.length}
				/>
			</div>
			<div className='option'>
				{currentQuestion.options.map((option, index) => (
					<div
						key={index}
						tabIndex='0'
						className={`
                            options 
                            ${selectedOption == index ? 'selected-option' : null} 
                            ${wrongOption == index ? 'selected-wrong' : null}
                            ${correctOption == index ? 'selected-correct' : null}
                    `}
						onClick={() => setSelectedOption(index)}
						onKeyDown={(e) => keyPressed(e, index)}
					>
						<div className='options-logo option-box'>
							{String.fromCharCode(65 + index)}
						</div>
						<div className='options-name'>{option}</div>
					</div>
				))}
				<button
					className='options submit-button'
					onClick={changeQuestion}
					onKeyDown={(e) => keyPressed(e, -1)}
				>
					Submit Answer
				</button>
				{showError && <div className='options error'>Please select an option</div>}
			</div>
		</div>
	)
}

export default Quiz
