/*  vanilla javascript

import Message from "./Message/message.js";
import './style.scss';
import './index.html';


const appElm = document.querySelector('#app');

const msg = new Message ('Donald Trump', 'Make America great again', '9:30');
msg.mount(appElm);  */



/* import React from "react";
import ReactDOM from "react-dom";
import Message from "./Message/message.jsx";
import './style.scss';
import './index.html';


class Inbox extends React.Component {
    render() {
        return (
            <>
                <h1>Inbox</h1>
                <div className="inbox">
                    <Message
                        sender="Donald Trump"
                        subject="Make America great again"
                        time= "9:30"
                    />
                    <Message sender = "Vladimir Putin" subject = "No!" time = "9:45" />    
                </div>
            </>    
        );
    }
}


const appElm = document.querySelector('#app');
ReactDOM.render(<Inbox />, appElm); */


import React from "react";
import ReactDOM from "react-dom";
import Term from "./Message/message.jsx";
import './style.scss';
import './index.html';

class App extends React.Component {
    render () {
        return (
            <>
                <h1>Hello World</h1>
                <div className="inbox">
                    <Term name="Antidisestablishmentarianism" 
                    definition = "A political position that developed in 19th-century Britain in opposition to Liberal proposals for the disestablishment of the Church of England—meaning the removal of the Anglican Church's status as the state church of England, Ireland, and Wales. The establishment was maintained in England, but in Ireland, the Church of Ireland (Anglican) was disestablished in 1871. In Wales, four Church of England dioceses were disestablished in 1920 and became the Church in Wales."/>
                </div>
            </>
        );
    }
}

const appElm = document.querySelector('#app');
ReactDOM.render(<App />, appElm);