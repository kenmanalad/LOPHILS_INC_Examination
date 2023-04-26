import React from "react";
import '../static/Modal.css';
function Modal(props){
    const {item,close} = props;
    return(
        <div className="background">
            <div className="modal">
                <div className="title_xbutton">
                    <p className="titles">{item.title}</p>
                    <button onClick={() => close(false)} className="exit">X</button>
                </div>
                <div className="author-date">
                    <p className="authors">{item.author} |</p>
                    <p className="dates"> {item.date}</p>
                </div>
                <fieldset>
                    <p>{item.content}</p>
                </fieldset>
                <div className="buttons">
                    <button className="pub">Publish</button>
                    <button className="del">Delete</button>
                </div>

                
            </div>
        </div>
    )
}export default Modal;