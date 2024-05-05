import React from 'react'

const StartPage = ({ onClick }) => {

    const sendCategory = (category) => {
        onClick(category)
    }

    const handleKeyPress = (event, category) => {
        if (event.keyCode === 13) {
            sendCategory(category)
        }
    }

    return (
        <>
            <div className="container"> 
                <div className="description">
                    <p className="title start-title">Welcome to the <br /><b>Frontend Quiz!</b></p>
                    <p className="instruction">Pick a subject to get started.</p>
                </div>
                <div className="option">
                    <div 
                        id="htm"
                        className="options"
                        tabIndex="0"
                        onClick={() => sendCategory("html")}
                        onKeyDown={(e) => handleKeyPress(e, "html")}
                    >
                        <div className="options-logo logo-htm"><box-icon name='code-alt' size="36px"  color='#e0763b' /></div>
                        <div className="options-name">HTML</div>
                    </div>
                    <div
                        id="css"
                        className="options"
                        tabIndex="0"
                        onClick={() => sendCategory("css")}
                        onKeyDown={(e) => handleKeyPress(e, "css")}
                    > 
                        <div className="options-logo logo-css"><box-icon name='brush' size="36px" type='solid' color='#53c58b' /></div>
                        <div className="options-name">CSS</div>
                    </div>
                    <div
                        id="js"
                        className="options"
                        tabIndex="0"
                        onClick={() => sendCategory("javascript")}
                        onKeyDown={(e) => handleKeyPress(e, "javascript")}
                    > 
                        <div className="options-logo logo-js"><box-icon name='javascript' size="36px"  type='logo' color='#3464e1' /></div>
                        <div className="options-name">JavaScript</div>
                    </div>
                    <div 
                        id="acc"
                        className="options"
                        tabIndex="0"
                        onClick={() => sendCategory("accessibility")}
                        onKeyDown={(e) => handleKeyPress(e, "accessibility")}
                    > 
                        <div className="options-logo logo-acc"><box-icon name='universal-access' size="36px"  color='#8127c3' /></div>
                        <div className="options-name">Accessibility</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StartPage
