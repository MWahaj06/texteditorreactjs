import React, { useState } from 'react'

export default function TextForm(props) {


    const [text, setText] = useState("");

    const UpperHandler = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted to Upper Case!", "success");
    }

    const LowerHandler = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Converted to Lower Case!", "success");
    }

    const ClearHandler = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text has been cleared!", "success");
    }

    const TextChangeHandler = (e) => {
        setText(e.target.value);
    }

    const QuoteHandler = () => {
        let newText = "''" + text + "''";
        setText(newText);
        props.showAlert("Quotations added to text!", "success");
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? '#212527' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        value={text} className="form-control" onChange={TextChangeHandler} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212527', color: props.mode === 'light' ? '#212527' : 'white' }} id="TextBox" rows="12"></textarea>
                    <button disabled={text.length === 0} className="btn btn-primary my-3 mx-2" onClick={UpperHandler}> To Uppercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary my-4 mx-2" onClick={LowerHandler}> To Lowercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary my-4 mx-2" onClick={QuoteHandler}>Add Quotes</button>
                    <button disabled={text.length === 0} className="btn btn-danger my-4 mx-2" onClick={ClearHandler}>Clear Text</button>
                </div>
                <div className="container my-2">
                    <h2>Text Summary:</h2>
                    <p> {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words, {text.length} characters</p>
                    <p> Time to read written text: {0.008 * text.split(" ").length - 0.008} minutes</p>
                    <h2>Preview</h2>
                    <p>{text.length > 0 ? text : "Enter text in text box to preview"}</p>
                </div>
            </div>
        </>
    )
}
