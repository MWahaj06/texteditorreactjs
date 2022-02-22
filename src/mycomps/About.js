import React from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#212527',
        backgroundColor: props.mode === 'dark' ? '#212527' : 'white'
    }

    return (
        <div className="container" style={myStyle}>
            <h1>About us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne" style={myStyle}>
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            Reasons for this application
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle}>
                        <div className="accordion-body" style={myStyle}>
                            While writing a story, I would often find it hard to edit my text. This is just a simple application which provides me with some minor utlilities to enhance my writing without much trouble!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
