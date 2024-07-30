import React,{useState} from 'react'

/*
State is used to set a state of a component.
*/

export default function TextForm (props) {

    const handleUpClick = ()=>{
        console.log("Upper case was clicked "+ text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handledownClick = ()=>{
        console.log("Lower case was Clicket "+text);
        let newText1 = text.toLowerCase();
        setText(newText1);
    }

    const handleClear=()=>{
        console.log("Handle Clear button is clicked");
        let newText2 = " ";     
        setText(newText2);
    }
    const handleOnChange =(event)=>{
        console.log("On change");
        setText(event.target.value);
    }

    const[myStyle, setMyStyle]=useState(
        {
            color: 'black',
            backgroundColor: 'white',
            border:'2px solid white'
        }
    )

    const[btnText, setBtnText]=useState("Enable Dark Mode")

    const toggleMode=()=>{
        console.log("Dark Mode ON");
        if(myStyle.color==='black'){
            setMyStyle({
                color:'white',
                backgroundColor:'black'
            })
            setBtnText("Enable Light Mode")
        }

        else{
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setBtnText("Enable Dark Mode")
        }


    }
    /*
        State is used to set a state of a component.
    */
    const[text, setText] = useState("Enter Your text");
    // text = "new Text";// Wrong way to change text
    // setText("New Text");// Correct way to change text
    return (
        <>
      <div className="container" style={myStyle}>
        <h3>{props.heading}</h3>
        <div className="mb-3" style={myStyle}>
            <textarea style={myStyle} className="form-control" value={text} onChange={handleOnChange} id="myText" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handledownClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={toggleMode}>{btnText}</button>
        

    </div>
    <div className="container my-3" style={myStyle}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>
            Preview
        </h2>
        <p>{text}</p>
    </div>
    </>
    )
}
